package com.hugothomaz.telemedicina.mobiletest.screen

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.MenuItem
import androidx.appcompat.app.AppCompatDelegate
import androidx.fragment.app.Fragment
import com.hugothomaz.telemedicina.mobiletest.R
import com.hugothomaz.telemedicina.mobiletest.domain.model.SpecialtyModel

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        openFragment(MainFragment())
    }

    private fun openFragment(fragment: Fragment){
        supportFragmentManager.beginTransaction().run {
            replace(R.id.main_container_fragment, fragment, fragment.javaClass.simpleName)
            addToBackStack(null)
            commit()
        }
    }

}