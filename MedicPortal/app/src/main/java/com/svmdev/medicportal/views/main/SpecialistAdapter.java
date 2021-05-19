package com.svmdev.medicportal.views.main;

import android.content.Context;
import android.graphics.Color;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.RelativeLayout;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.svmdev.medicportal.R;
import com.svmdev.medicportal.data.model.Home;
import com.svmdev.medicportal.utils.Constants;
import com.svmdev.medicportal.views.main.data.MainAdapterClickInterface;

import java.util.ArrayList;

public class SpecialistAdapter extends RecyclerView.Adapter<SpecialistAdapter.ViewHolder> {

    private ArrayList<Home> homeList;
    private Context context;
    private MainAdapterClickInterface listener;

    public SpecialistAdapter(ArrayList<Home> homeList, Context context, MainAdapterClickInterface listener) {
        this.homeList = homeList;
        this.context = context;
        this.listener = listener;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View itemView = LayoutInflater.from(parent.getContext()).inflate(R.layout.menu_list, parent, false);

        return new ViewHolder(itemView);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        Home option = homeList.get(position);
        int imageRes;
        String optionName = option.getName().replace(" ", System.getProperty("line.separator"));
        holder.name.setText(optionName);

        switch (option.getTypeId()) {
            case Constants.HEART_SPECIALIST_ID:
                imageRes = R.drawable.ic_heart;
                break;
            case Constants.DENTAL_SPECIALIST_ID:
                imageRes = R.drawable.ic_tooth;
                break;
            default:
            case Constants.DERMA_SPECIALIST_ID:
                imageRes = R.drawable.ic_pimples;
        }
        int bgColor = Color.parseColor(homeList.get(position).getColor());

        holder.image.setImageResource(imageRes);
        holder.background.setBackgroundColor(bgColor);
        holder.total.setText(context.getString(R.string.main_doctors, String.valueOf(homeList.get(position).getTotal())));

        holder.itemView.setOnClickListener(v -> {
            listener.onLoadSpecialists(homeList.get(position));
        });
    }

    @Override
    public int getItemCount() {
        return homeList.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {

        RelativeLayout background;
        ImageView image;
        TextView name;
        TextView total;

        public ViewHolder(View view) {
            super(view);
            background = view.findViewById(R.id.rl_background);
            image = view.findViewById(R.id.iv_specialist_icon);
            name = view.findViewById(R.id.tv_specialist_name);
            total = view.findViewById(R.id.tv_specialist_total);
        }
    }
}
