package com.hugothomaz.telemedicina.mobiletest.screen.home.listspecialist

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.view.*
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ActivityCompat
import androidx.databinding.DataBindingUtil
import androidx.fragment.app.Fragment
import androidx.lifecycle.lifecycleScope
import androidx.navigation.fragment.findNavController
import androidx.recyclerview.widget.LinearLayoutManager
import com.hugothomaz.telemedicina.mobiletest.R
import com.hugothomaz.telemedicina.mobiletest.databinding.FragmentHomeListSpecialistBinding
import com.hugothomaz.telemedicina.mobiletest.domain.model.SpecialistModel
import com.hugothomaz.telemedicina.mobiletest.domain.model.SpecialtyModel
import com.hugothomaz.telemedicina.mobiletest.screen.home.HomeViewModel
import com.hugothomaz.telemedicina.mobiletest.screen.home.UiState
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.launch
import org.koin.androidx.viewmodel.ext.android.viewModel

class HomeListSpecialistFragment : Fragment(), ActivityCompat.OnRequestPermissionsResultCallback {

    private lateinit var bind: FragmentHomeListSpecialistBinding
    private var specialtyModel: SpecialtyModel? = null
    private val viewModel: HomeViewModel by viewModel<HomeViewModel>()
    private lateinit var specialistAadapter: SpecialistRecyclerAdapter

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setHasOptionsMenu(true)
        arguments?.let {
            specialtyModel = HomeListSpecialistFragmentArgs.fromBundle(it).specialtyModel
        }
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        bind = DataBindingUtil.inflate(
            inflater,
            R.layout.fragment_home_list_specialist,
            container,
            false
        )
        settingToolbar()
        return bind.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        recyclerConfigure()
        viewModel.getSpecialists()
        colletSpecialistsStatu()
    }


    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        if (item.itemId == android.R.id.home) {
            findNavController().popBackStack()
            true
        } else {
            false
        }
        return super.onOptionsItemSelected(item)
    }

    private fun settingToolbar(){
        bind.apply {
            (activity as AppCompatActivity).apply {
                setSupportActionBar(toolbarHome)
                supportActionBar?.apply {
                    setDisplayHomeAsUpEnabled(true)
                }
            }
        }
    }

    private fun colletSpecialistsStatu(){
        lifecycleScope.launch {
            viewModel.uiSpecialistsStateFlow
                .collect {
                    when (it) {
                        is UiState.Loading -> {

                        }
                        is UiState.Success<*> -> {
                            val list = it.data as List<SpecialistModel>
                            specialistAadapter.setData(list)
                        }
                        is UiState.Error -> {

                        }
                        UiState.Initial -> {
                        }
                    }
                }
        }
    }

    private fun recyclerConfigure() {
        specialistAadapter = SpecialistRecyclerAdapter(
            clickCall = { call ->
                Toast.makeText(activity?.baseContext, "Tell: $call", Toast.LENGTH_LONG).show()
            }, clickChat = { chat ->
                Toast.makeText(activity?.baseContext, "Chat: $chat", Toast.LENGTH_LONG).show()
            })

        bind.rvSpecialist.adapter = specialistAadapter
        bind.rvSpecialist.apply {
            layoutManager =
                LinearLayoutManager(
                    activity,
                    LinearLayoutManager.VERTICAL,
                    false
                )
        }
    }

}