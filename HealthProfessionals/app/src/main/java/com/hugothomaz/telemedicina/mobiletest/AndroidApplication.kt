package com.hugothomaz.telemedicina.mobiletest

import android.app.Application
import com.hugothomaz.telemedicina.mobiletest.di.homeModule
import org.koin.android.ext.koin.androidContext
import org.koin.android.ext.koin.androidLogger
import org.koin.core.context.startKoin
import org.koin.core.logger.Level

class AndroidApplication : Application() {

    override fun onCreate() {
        super.onCreate()

        startKoin {
            androidLogger(Level.INFO)
            androidContext(this@AndroidApplication)
            modules(homeModule)
        }
    }

}