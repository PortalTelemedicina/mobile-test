package com.hugothomaz.telemedicina.mobiletest.screen

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.hugothomaz.telemedicina.mobiletest.R
import com.hugothomaz.telemedicina.mobiletest.domain.model.SpecialtyModel

class MainFragment : Fragment() {
    private lateinit var mainHelperViewPager: MainHelperViewPager

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        val view = inflater.inflate(R.layout.fragment_main, container, false)
        mainHelperViewPager = MainHelperViewPager(view, this)
        mainHelperViewPager

        return view
    }

}