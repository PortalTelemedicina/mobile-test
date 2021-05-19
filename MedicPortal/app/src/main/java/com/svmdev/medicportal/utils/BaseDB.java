package com.svmdev.medicportal.utils;

import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;

public class BaseDB {

    public String dbName;
    public SQLiteDatabase dataBase;
    public DatabaseHelper dbHelper;
    public Cursor cursor;
    public Context context;

}
