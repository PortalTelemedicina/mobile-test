package com.hugothomaz.telemedicina.mobiletest.screen

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.hugothomaz.telemedicina.mobiletest.R

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        supportFragmentManager.beginTransaction().run {
            replace(R.id.main_container_fragment, MainFragment(), MainFragment::class.simpleName)
            addToBackStack(null)
            commit()
        }
    }
}