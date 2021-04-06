package com.svmdev.medicportal.views.medics;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.svmdev.medicportal.R;
import com.svmdev.medicportal.data.model.Specialist;
import com.svmdev.medicportal.views.medics.data.MedicAdapterClickInterface;

import java.util.ArrayList;

public class MedicAdapter extends RecyclerView.Adapter<MedicAdapter.ViewHolder> {

    private ArrayList<Specialist> medics;
    private Context context;
    private MedicAdapterClickInterface listener;

    public MedicAdapter(ArrayList<Specialist> medics, Context context, MedicAdapterClickInterface listener) {
        this.medics = medics;
        this.context = context;
        this.listener = listener;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View itemView = LayoutInflater.from(parent.getContext()).inflate(R.layout.medic_cell, parent, false);
        return new MedicAdapter.ViewHolder(itemView);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        Specialist medic = medics.get(position);
        String distance = String.format("%.2f", medic.getDistance());
        holder.name.setText(medic.getName());
        holder.distance.setText(context.getString(R.string.medic_nearby, distance));
        holder.description.setText(medic.getDescription());
        if (medic.getActions() != null) {
            if (medic.getActions().getCall() == null) {
                holder.call.setVisibility(View.GONE);
            } else {
                holder.call.setOnClickListener(v -> {
                    listener.onCallMedic(medic.getName(), medic.getActions().getCall());
                });
            }

            if (medic.getActions().getChat() == null) {
                holder.chat.setVisibility(View.GONE);
            } else {
                holder.chat.setOnClickListener(v -> {
                    listener.onChatMedic(medic.getName(), medic.getActions().getChat());
                });
            }
        }

        String[] nameSplit = medic.getName().split(" ");
        String nameLetters = "";

        for (int i = 0; i < nameSplit.length; i++) {
            nameLetters = nameLetters.concat(nameSplit[i].substring(0, 1));
        }

        holder.icon.setText(nameLetters);
    }

    @Override
    public int getItemCount() {
        return medics.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {

        TextView icon;
        TextView name;
        TextView distance;
        TextView description;
        Button chat;
        Button call;

        public ViewHolder(View view) {
            super(view);
            icon = view.findViewById(R.id.tv_picture);
            name = view.findViewById(R.id.tv_name);
            distance = view.findViewById(R.id.tv_distance);
            description = view.findViewById(R.id.tv_description);
            chat = view.findViewById(R.id.btn_chat);
            call = view.findViewById(R.id.btn_call);
        }
    }

}
