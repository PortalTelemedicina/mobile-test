package com.svmdev.medicportal.utils;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteException;
import android.database.sqlite.SQLiteOpenHelper;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

public class DatabaseHelper extends SQLiteOpenHelper {

    private static String DBPATH = "/data/data/com.svmdev.medicportal/databases/";
    private static String DBNAME = "DataBase.db";
    private Context context;

    public DatabaseHelper(Context context) {
        super(context, DBNAME, null, 1);
        this.context = context;
    }


    @Override
    public void onCreate(SQLiteDatabase db) {

    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {

    }

    private boolean checkDataBase() {
        SQLiteDatabase db = null;
        try {
            String path = DBPATH + DBNAME;
            db =
                    SQLiteDatabase.openDatabase(path, null, SQLiteDatabase.OPEN_READONLY);
            db.close();
        } catch (SQLiteException ignored) {
        }

        return db != null;
    }

    private void createDataBase() throws Exception {

        boolean exists = checkDataBase();

        if (!exists) {
            this.getReadableDatabase();
            try {
                copyDatabase();
            } catch (IOException e) {
                throw new Error("Não foi possível copiar o arquivo");
            }
        }
    }

    private void copyDatabase() throws IOException {

        String dbPath = DBPATH + DBNAME;

        OutputStream dbStream = new FileOutputStream(dbPath);

        InputStream dbInputStream = context.getAssets().open(DBNAME);

        byte[] buffer = new byte[1024];
        int length;
        while ((length = dbInputStream.read(buffer)) > 0) {
            dbStream.write(buffer, 0, length);
        }
        dbInputStream.close();
        dbStream.flush();
        dbStream.close();
    }

    public SQLiteDatabase getDatabase() {
        try {
            createDataBase();
            String path = DBPATH + DBNAME;
            return SQLiteDatabase.openDatabase(path, null, SQLiteDatabase.OPEN_READWRITE);
        } catch (Exception e) {
            return getWritableDatabase();
        }

    }

}