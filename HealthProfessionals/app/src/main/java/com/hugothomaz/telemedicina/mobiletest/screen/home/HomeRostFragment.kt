package com.hugothomaz.telemedicina.mobiletest.screen.home

import android.os.Bundle
import android.view.*
import androidx.databinding.DataBindingUtil
import androidx.fragment.app.Fragment
import com.hugothomaz.telemedicina.mobiletest.R
import com.hugothomaz.telemedicina.mobiletest.databinding.FragmentHomeBinding
import com.hugothomaz.telemedicina.mobiletest.databinding.FragmentHomeHostBinding

class HomeRostFragment : Fragment() {

    private lateinit var bind: FragmentHomeHostBinding

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        bind = DataBindingUtil.inflate(inflater, R.layout.fragment_home_host, container, false)
        return bind.root
    }


}