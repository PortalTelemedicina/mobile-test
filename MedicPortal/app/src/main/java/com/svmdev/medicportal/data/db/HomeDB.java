package com.svmdev.medicportal.data.db;

import android.content.ContentValues;
import android.content.Context;

import com.svmdev.medicportal.data.model.Home;
import com.svmdev.medicportal.utils.BaseDB;
import com.svmdev.medicportal.utils.DatabaseHelper;

import java.util.ArrayList;

public class HomeDB extends BaseDB {

    public HomeDB(String dbName, Context context) {
        this.dbName = dbName;
        this.context = context;
        this.dbHelper = new DatabaseHelper(context);
        this.dataBase = dbHelper.getDatabase();
    }

    public ArrayList<Home> getAll() {
        ArrayList<Home> homeResult = new ArrayList<>();
        cursor = dataBase.query(dbName, new String[]{"id", "name", "image_url", "total", "color", "type_id"},
                null, null, null, null, null);

        cursor.moveToFirst();
        while (!cursor.isAfterLast()) {
            Home homeOption = new Home(
                    cursor.getInt(0),
                    cursor.getString(1),
                    cursor.getString(2),
                    cursor.getInt(3),
                    cursor.getString(4),
                    cursor.getInt(5)
            );

            homeResult.add(homeOption);
            cursor.moveToNext();
        }
        cursor.close();
        return homeResult;
    }

    public void saveData(Home home) {
        ContentValues cv = new ContentValues();
        cv.put("name", home.getName());
        cv.put("image_url", home.getImageUrl());
        cv.put("total", home.getTotal());
        cv.put("color", home.getColor());
        cv.put("type_id", home.getTypeId());
        dataBase.insert(dbName, null, cv);
    }

    public void deleteData() {
        dataBase.execSQL("DELETE FROM " + this.dbName);
    }


}
