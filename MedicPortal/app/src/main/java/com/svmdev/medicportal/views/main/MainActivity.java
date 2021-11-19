package com.svmdev.medicportal.views.main;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ProgressBar;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;
import androidx.lifecycle.ViewModelProviders;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.svmdev.medicportal.R;
import com.svmdev.medicportal.data.model.Home;
import com.svmdev.medicportal.utils.ToastUtils;
import com.svmdev.medicportal.views.data.OptionSelectionEnum;
import com.svmdev.medicportal.views.main.data.MainAdapterClickInterface;
import com.svmdev.medicportal.views.main.data.MainOptionCard;
import com.svmdev.medicportal.views.medics.MedicsActivity;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity implements View.OnClickListener, MainAdapterClickInterface {

    private MainViewModel viewModel;

    private RecyclerView rvSpecialists;
    private SpecialistAdapter adapter;

    private TextView tvName;

    private ProgressBar pbLoad;
    private View bgLoad;

    private MainOptionCard optDiagnostic;
    private MainOptionCard optConsultation;
    private MainOptionCard optNurse;
    private MainOptionCard optAmbulance;
    private MainOptionCard optLab;
    private MainOptionCard optMedicine;

    public static String SPECIALIST_HOME = "CATEGORY";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        viewModel = ViewModelProviders.of(this).get(MainViewModel.class);

        setupLayoutRefs();
        setupNavigation();
        setupOptions();
        setupSpecialists();
    }

    private void setupLayoutRefs() {
        pbLoad = findViewById(R.id.pb_load);
        bgLoad = findViewById(R.id.bg_load);
        rvSpecialists = findViewById(R.id.main_options);
        optDiagnostic = findViewById(R.id.main_option_diagnostic);
        optConsultation = findViewById(R.id.main_option_consultation);
        optNurse = findViewById(R.id.main_option_nurse);
        optAmbulance = findViewById(R.id.main_option_ambulance);
        optLab = findViewById(R.id.main_option_lab);
        optMedicine = findViewById(R.id.main_option_medicine);
        tvName = findViewById(R.id.tv_main_name);

        tvName.setOnClickListener(this);
    }

    private void setupOptions() {
        optDiagnostic.text.setText(getString(R.string.main_option_diagnostic));
        optDiagnostic.image.setImageDrawable(getDrawable(R.drawable.img_stethoscope));
        optDiagnostic.defImage = R.drawable.img_stethoscope;
        optDiagnostic.selImage = R.drawable.img_stethoscope_s;

        optConsultation.text.setText(getString(R.string.main_option_consultation));
        optConsultation.image.setImageDrawable(getDrawable(R.drawable.img_consultation));
        optConsultation.defImage = R.drawable.img_consultation;
        optConsultation.selImage = R.drawable.img_consultation_s;

        optNurse.text.setText(getString(R.string.main_option_nurse));
        optNurse.image.setImageDrawable(getDrawable(R.drawable.img_nurse));
        optNurse.defImage = R.drawable.img_nurse;
        optNurse.selImage = R.drawable.img_nurse_s;


        optAmbulance.text.setText(getString(R.string.main_option_ambulance));
        optAmbulance.image.setImageDrawable(getDrawable(R.drawable.img_ambulance));
        optAmbulance.defImage = R.drawable.img_ambulance;
        optAmbulance.selImage = R.drawable.img_ambulance_s;

        optLab.text.setText(getString(R.string.main_option_lab));
        optLab.image.setImageDrawable(getDrawable(R.drawable.img_lab));
        optLab.defImage = R.drawable.img_lab;
        optLab.selImage = R.drawable.img_lab_s;

        optMedicine.text.setText(getString(R.string.main_option_medicine));
        optMedicine.image.setImageDrawable(getDrawable(R.drawable.img_medicine));
        optMedicine.defImage = R.drawable.img_medicine;
        optMedicine.selImage = R.drawable.img_medicine_s;

        optDiagnostic.setOnClickListener(this);
        optConsultation.setOnClickListener(this);
        optNurse.setOnClickListener(this);
        optAmbulance.setOnClickListener(this);
        optLab.setOnClickListener(this);
        optMedicine.setOnClickListener(this);

        viewModel.optionSelected.observe(this, this::selectOption);

        optDiagnostic.callOnClick();
    }

    private void setupSpecialists() {
        viewModel.specialists.observe(this, this::loadHomeSpecialists);

        viewModel.performGetSpecialists();
    }

    private void setupNavigation() {
        viewModel.onError.observe(this, throwable -> {
            ToastUtils.showToastError(this, getString(R.string.error_main));
        });
        viewModel.isLoading.observe(this, this::isLoading);
    }

    private void isLoading(boolean loading) {
        if (loading) {
            pbLoad.setVisibility(View.VISIBLE);
            bgLoad.setVisibility(View.VISIBLE);
        } else {
            pbLoad.setVisibility(View.GONE);
            bgLoad.setVisibility(View.GONE);
        }
    }


    private void loadHomeSpecialists(ArrayList<Home> homeSpecialists) {
        if (homeSpecialists.size() > 0) {
            adapter = new SpecialistAdapter(homeSpecialists, this, this);
            LinearLayoutManager horizontalLayoutManager = new LinearLayoutManager(this, LinearLayoutManager.HORIZONTAL, false);
            rvSpecialists.setLayoutManager(horizontalLayoutManager);
            rvSpecialists.setAdapter(adapter);
            adapter.notifyDataSetChanged();
        }
    }

    private void selectOption(OptionSelectionEnum selected) {
        if (!selected.equals(OptionSelectionEnum.DIAGNOSTIC)) optDiagnostic.setSelected(false);

        if (!selected.equals(OptionSelectionEnum.CONSULTATION)) optConsultation.setSelected(false);

        if (!selected.equals(OptionSelectionEnum.NURSE)) optNurse.setSelected(false);

        if (!selected.equals(OptionSelectionEnum.AMBULANCE)) optAmbulance.setSelected(false);

        if (!selected.equals(OptionSelectionEnum.LABWORK)) optLab.setSelected(false);

        if (!selected.equals(OptionSelectionEnum.MEDICINE)) optMedicine.setSelected(false);
    }

    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.main_option_diagnostic:
                optDiagnostic.setSelected(true);
                viewModel.optionSelected.postValue(OptionSelectionEnum.DIAGNOSTIC);
                break;
            case R.id.main_option_consultation:
                optConsultation.setSelected(true);
                viewModel.optionSelected.postValue(OptionSelectionEnum.CONSULTATION);
                break;
            case R.id.main_option_nurse:
                optNurse.setSelected(true);
                viewModel.optionSelected.postValue(OptionSelectionEnum.NURSE);
                break;
            case R.id.main_option_ambulance:
                optAmbulance.setSelected(true);
                viewModel.optionSelected.postValue(OptionSelectionEnum.AMBULANCE);
                break;
            case R.id.main_option_lab:
                optLab.setSelected(true);
                viewModel.optionSelected.postValue(OptionSelectionEnum.LABWORK);
                break;
            case R.id.main_option_medicine:
                optMedicine.setSelected(true);
                viewModel.optionSelected.postValue(OptionSelectionEnum.MEDICINE);
                break;
            case R.id.tv_main_name:
                viewModel.performGetSpecialists();
                break;
        }
    }

    @Override
    public void onLoadSpecialists(Home selection) {
        Intent specialistsIntent = new Intent(this, MedicsActivity.class);
        specialistsIntent.putExtra(SPECIALIST_HOME, selection);
        startActivity(specialistsIntent);
    }
}