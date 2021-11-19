package com.svmdev.medicportal.data.db;

import android.content.ContentValues;
import android.content.Context;

import com.svmdev.medicportal.data.model.Actions;
import com.svmdev.medicportal.data.model.Specialist;
import com.svmdev.medicportal.utils.BaseDB;
import com.svmdev.medicportal.utils.DatabaseHelper;

import java.util.ArrayList;

public class SpecialistDB extends BaseDB {

    public SpecialistDB(String dbName, Context context) {
        this.dbName = dbName;
        this.context = context;
        this.dbHelper = new DatabaseHelper(context);
        this.dataBase = dbHelper.getDatabase();
    }

    public ArrayList<Specialist> getAll(int typeId) {
        ArrayList<Specialist> specialistsResult = new ArrayList<>();
        cursor = dataBase.query(dbName, new String[]{"id", "name", "description", "distance", "chat", "call", "type_id"},
                "type_id = " + typeId, null, null, null, null);

        cursor.moveToFirst();
        while (!cursor.isAfterLast()) {
            Actions actions = new Actions(
                    cursor.getString(4),
                    cursor.getString(5)
            );

            Specialist specialist = new Specialist(
                    cursor.getInt(0),
                    cursor.getString(1),
                    cursor.getString(2),
                    cursor.getDouble(3),
                    actions,
                    cursor.getInt(6)
            );

            specialistsResult.add(specialist);
            cursor.moveToNext();
        }
        cursor.close();
        return specialistsResult;
    }

    public void saveData(Specialist specialist) {
        ContentValues cv = new ContentValues();
        cv.put("name", specialist.getName());
        cv.put("description", specialist.getDescription());
        cv.put("distance", specialist.getDistance());
        cv.put("chat", specialist.getActions().getChat());
        cv.put("call", specialist.getActions().getCall());
        cv.put("type_id", specialist.getTypeId());
        dataBase.insert(dbName, null, cv);
    }

    public void deleteData(int typeId) {
        dataBase.execSQL("DELETE FROM " + this.dbName + " WHERE type_id =" + typeId);
    }

}
