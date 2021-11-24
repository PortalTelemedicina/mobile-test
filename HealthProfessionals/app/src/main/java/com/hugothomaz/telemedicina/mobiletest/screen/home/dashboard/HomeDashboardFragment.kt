package com.hugothomaz.telemedicina.mobiletest.screen.home.dashboard

import android.os.Bundle
import android.view.*
import androidx.cardview.widget.CardView
import androidx.constraintlayout.widget.ConstraintLayout
import androidx.core.view.forEach
import androidx.fragment.app.Fragment
import androidx.databinding.DataBindingUtil
import androidx.lifecycle.lifecycleScope
import androidx.navigation.fragment.findNavController
import androidx.recyclerview.widget.LinearLayoutManager
import com.hugothomaz.telemedicina.mobiletest.R
import com.hugothomaz.telemedicina.mobiletest.databinding.FragmentHomeBinding
import com.hugothomaz.telemedicina.mobiletest.domain.model.SpecialtyModel
import com.hugothomaz.telemedicina.mobiletest.screen.home.HomeViewModel
import com.hugothomaz.telemedicina.mobiletest.screen.home.UiState
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.launch
import org.koin.androidx.viewmodel.ext.android.viewModel


class HomeDashboardFragment : Fragment() {

    private lateinit var bind: FragmentHomeBinding

    private val viewModel: HomeViewModel by viewModel<HomeViewModel>()
    private lateinit var specialtyAadapter: SpecialtyRecyclerAdapter

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        bind = DataBindingUtil.inflate(inflater, R.layout.fragment_home, container, false)
        return bind.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        recyclerConfigure()
        settingRadioButton()
        viewModel.getSpecialty()

        lifecycleScope.launch {
            viewModel.uiSpecialtyStateFlow.collect {
                when (it) {
                    is UiState.Loading -> {
                        bind.shimmerViewContainer.startShimmer()
                    }
                    is UiState.Success<*> -> {
                        val list = it.data as List<SpecialtyModel>
                        specialtyAadapter.setData(list)
                        bind.shimmerViewContainer.stopShimmer()
                        bind.shimmerViewContainer.visibility = View.GONE
                    }
                    is UiState.Error -> {
                        bind.shimmerViewContainer.stopShimmer()
                    }
                    UiState.Initial -> {
                    }
                }
            }
        }
    }

    private fun recyclerConfigure() {
        specialtyAadapter = SpecialtyRecyclerAdapter {
            val action =
                HomeDashboardFragmentDirections.actionFragmentHomeDashboardToFragmentHomeListSpecialist(
                    it
                )
            findNavController().navigate(action)
        }

        bind.includeFragmentHome.rvSpecialty.adapter = specialtyAadapter
        bind.includeFragmentHome.rvSpecialty.apply {
            layoutManager =
                LinearLayoutManager(
                    activity,
                    LinearLayoutManager.HORIZONTAL,
                    false
                )
        }
    }

    private fun settingRadioButton() {
        var lastIdSelected : Int? = null
        var isSelected = false
        bind.includeFragmentHome.includeServiceHome.rootIncludeServiceHome.forEach { view ->
            if (view is CardView) {
                val childCard: ConstraintLayout = view.getChildAt(0) as ConstraintLayout

                childCard.setOnClickListener { child ->
                    val currentSelectedId = child.id
                    val lastCardViewSelected = lastIdSelected?.let {
                        bind.root.findViewById<ConstraintLayout>(it)
                    }

                    if (isSelected && (lastIdSelected == currentSelectedId)) {
                        child.isSelected = false
                        isSelected = false
                        lastIdSelected = null
                    } else if (isSelected.not()) {
                        child.isSelected = true
                        isSelected = true
                        lastIdSelected = currentSelectedId
                    } else if (isSelected && (lastIdSelected != currentSelectedId)){
                        child.isSelected = true
                        lastCardViewSelected?.isSelected = false
                        lastIdSelected = currentSelectedId
                    }
                }
            }
        }
    }

}