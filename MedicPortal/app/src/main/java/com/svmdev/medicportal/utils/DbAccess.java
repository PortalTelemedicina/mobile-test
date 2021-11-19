package com.svmdev.medicportal.utils;

import android.content.Context;

import com.svmdev.medicportal.data.db.HomeDB;
import com.svmdev.medicportal.data.db.SpecialistDB;

import io.reactivex.Observable;

public class DbAccess {

    public static HomeDB homeDB;
    public static SpecialistDB specialistDB;

    public static Observable<Boolean> initDB(Context context) {
        homeDB = new HomeDB("Home", context);
        specialistDB = new SpecialistDB("Specialist", context);

        return Observable.just(true);
    }

}
