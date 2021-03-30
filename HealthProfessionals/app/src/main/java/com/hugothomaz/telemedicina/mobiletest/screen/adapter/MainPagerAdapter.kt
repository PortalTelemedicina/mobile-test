package com.hugothomaz.telemedicina.mobiletest.screen.adapter

import androidx.fragment.app.Fragment
import androidx.viewpager2.adapter.FragmentStateAdapter
import com.hugothomaz.telemedicina.mobiletest.screen.chat.ChatFragment
import com.hugothomaz.telemedicina.mobiletest.screen.home.HomeRostFragment
import com.hugothomaz.telemedicina.mobiletest.screen.more.MoreFragment
import com.hugothomaz.telemedicina.mobiletest.screen.notification.NotificationFragment

class MainPagerAdapter(val fragment: Fragment): FragmentStateAdapter(fragment) {

    private val listFragment = listOf<Fragment>(
        HomeRostFragment(),
        ChatFragment(),
        NotificationFragment(),
        MoreFragment()
    )

    override fun getItemCount(): Int = listFragment.size

    override fun createFragment(position: Int): Fragment {
        return listFragment[position] as Fragment
    }
}