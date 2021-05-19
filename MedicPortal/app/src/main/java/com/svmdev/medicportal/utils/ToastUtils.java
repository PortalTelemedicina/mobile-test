package com.svmdev.medicportal.utils;

import android.content.Context;
import android.widget.Toast;

public class ToastUtils {

    public static void showToastError(Context context, String text) {
        Toast.makeText(context, text, Toast.LENGTH_SHORT).show();
    }

    public static void showToastClick(Context context, String text) {
        Toast.makeText(context, text, Toast.LENGTH_LONG).show();
    }

}
