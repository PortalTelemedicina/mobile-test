package com.hugothomaz.telemedicina.mobiletest.screen

import android.view.MenuItem
import android.view.View
import androidx.core.view.get
import androidx.fragment.app.Fragment
import androidx.viewpager2.widget.ViewPager2
import androidx.viewpager2.widget.ViewPager2.OnPageChangeCallback
import com.google.android.material.bottomnavigation.BottomNavigationView
import com.google.android.material.bottomnavigation.BottomNavigationView.*
import com.hugothomaz.telemedicina.mobiletest.R
import com.hugothomaz.telemedicina.mobiletest.screen.adapter.MainPagerAdapter

data class MainHelperViewPager(private val view: View, val fragment: Fragment) :
    OnNavigationItemSelectedListener,
    OnNavigationItemReselectedListener {

    private var viewPagerAdapter: MainPagerAdapter
    private var viewPager: ViewPager2 = view.findViewById(R.id.viewPagerMain)
    private var bottomNav: BottomNavigationView =
        view.findViewById(R.id.bottomNavigationviewPagerMain)

    init {
        bottomNav.setOnNavigationItemSelectedListener(this)
        bottomNav.setOnNavigationItemReselectedListener(this)

        viewPagerAdapter = MainPagerAdapter(fragment)
        viewPager.adapter = viewPagerAdapter

        viewPager.registerOnPageChangeCallback(object : OnPageChangeCallback() {
            override fun onPageScrollStateChanged(state: Int) {
                super.onPageScrollStateChanged(state)
            }

            override fun onPageScrolled(
                position: Int,
                positionOffset: Float,
                positionOffsetPixels: Int
            ) {
                super.onPageScrolled(position, positionOffset, positionOffsetPixels)
            }

            override fun onPageSelected(position: Int) {
                super.onPageSelected(position)
                bottomNav.menu.get(position).isChecked = true
            }
        })
    }

    override fun onNavigationItemSelected(item: MenuItem): Boolean {
        return when (item.itemId) {
            R.id.action_home_botton_navigation -> {
                viewPager.currentItem = 0
                true
            }
            R.id.action_chat_botton_navigation -> {
                viewPager.currentItem = 1
                true
            }
            R.id.action_notification_botton_navigation -> {
                viewPager.currentItem = 2
                true
            }
            R.id.action_more_botton_navigation -> {
                viewPager.currentItem = 3
                true
            }

            else -> false
        }
    }

    override fun onNavigationItemReselected(item: MenuItem) {}
}