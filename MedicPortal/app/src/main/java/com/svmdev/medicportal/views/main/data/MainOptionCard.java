package com.svmdev.medicportal.views.main.data;

import android.annotation.TargetApi;
import android.content.Context;
import android.os.Build;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.Nullable;

import com.svmdev.medicportal.R;

public class MainOptionCard extends LinearLayout {

    Context context;
    public LinearLayout backgroud;
    public ImageView image;
    public TextView text;

    public int defImage;
    public int selImage;
    public boolean isSelected = false;

    public MainOptionCard(Context context) {
        super(context);
        this.context = context;
        inflateLayout(context);
    }

    public MainOptionCard(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
        inflateLayout(context);
    }

    public MainOptionCard(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        inflateLayout(context);
    }

    @TargetApi(Build.VERSION_CODES.LOLLIPOP)
    public MainOptionCard(Context context, @Nullable AttributeSet attrs, int defStyleAttr, int defStyleRes) {
        super(context, attrs, defStyleAttr, defStyleRes);
        inflateLayout(context);
    }

    private void inflateLayout(Context context) {
        LayoutInflater inflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);

        inflater.inflate(R.layout.main_option_card, this);
    }

    @Override
    protected void onFinishInflate() {
        super.onFinishInflate();
        this.text = findViewById(R.id.mo_text);
        this.backgroud = findViewById(R.id.mo_background);
        this.image = findViewById(R.id.mo_image);
    }

    public void setSelected(boolean isSelected) {
        if (isSelected) {
            this.backgroud.setBackground(this.getContext().getDrawable(R.drawable.main_option_card_bacground_s));
            this.image.setImageDrawable(this.getContext().getDrawable(selImage));
            this.text.setTextColor(getContext().getResources().getColor(R.color.white));
        } else {
            this.backgroud.setBackground(this.getContext().getDrawable(R.drawable.main_option_card_bacground));
            this.image.setImageDrawable(this.getContext().getDrawable(defImage));
            this.text.setTextColor(getContext().getResources().getColor(R.color.default_text));
        }
    }


}
