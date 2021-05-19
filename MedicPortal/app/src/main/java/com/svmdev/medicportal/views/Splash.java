package com.svmdev.medicportal.views;

import android.content.Intent;
import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;

import com.svmdev.medicportal.R;
import com.svmdev.medicportal.utils.DbAccess;
import com.svmdev.medicportal.views.main.MainActivity;

public class Splash extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);
        DbAccess.initDB(this);
        startActivity(new Intent(this, MainActivity.class));
        finish();
    }
}