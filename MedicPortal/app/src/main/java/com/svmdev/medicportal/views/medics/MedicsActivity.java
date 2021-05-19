package com.svmdev.medicportal.views.medics;

import android.content.Intent;
import android.graphics.PorterDuff;
import android.net.Uri;
import android.os.Bundle;
import android.view.MenuItem;
import android.view.View;
import android.widget.ProgressBar;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.core.content.ContextCompat;
import androidx.lifecycle.ViewModelProviders;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.svmdev.medicportal.R;
import com.svmdev.medicportal.data.model.Home;
import com.svmdev.medicportal.data.model.Specialist;
import com.svmdev.medicportal.utils.ToastUtils;
import com.svmdev.medicportal.views.main.MainActivity;
import com.svmdev.medicportal.views.medics.data.MedicAdapterClickInterface;

import java.util.ArrayList;

public class MedicsActivity extends AppCompatActivity implements MedicAdapterClickInterface {

    private MedicViewModel viewModel;
    private Home specialistSelected;

    private ProgressBar pbLoad;
    private View bgLoad;

    private Toolbar toolbar;
    private TextView tvSpecialist;
    private TextView tvSearching;
    private RecyclerView rvMedics;
    private MedicAdapter adapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_medics);

        specialistSelected = (Home) getIntent().getSerializableExtra(MainActivity.SPECIALIST_HOME);
        viewModel = ViewModelProviders.of(this).get(MedicViewModel.class);
        viewModel.optionSelected = specialistSelected;

        setupLayoutRefs();
        setupToolbar();
        setupMedics();
    }

    private void setupMedics() {
        viewModel.isLoading.observe(this, this::isLoading);
        viewModel.medics.observe(this, this::loadMedics);
        viewModel.onError.observe(this, this::error);

        viewModel.performGetMedics();
    }

    private void setupLayoutRefs() {
        toolbar = findViewById(R.id.tb_medics);
        tvSpecialist = findViewById(R.id.tv_medics_category);
        tvSearching = findViewById(R.id.tv_medics_search);
        pbLoad = findViewById(R.id.pb_load);
        bgLoad = findViewById(R.id.bg_load);
        rvMedics = findViewById(R.id.rv_medics);

        tvSpecialist.setText(specialistSelected.getName());
        tvSpecialist.setOnClickListener(v -> viewModel.performGetMedics());
    }

    private void setupToolbar() {
        this.setSupportActionBar(toolbar);
        this.getSupportActionBar().setDisplayShowTitleEnabled(false);
        this.getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        toolbar.getNavigationIcon().setColorFilter(ContextCompat.getColor(this, R.color.default_text), PorterDuff.Mode.SRC_ATOP);
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
        finish();
    }

    //sobrescreve o botão de voltar da barra
    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        if (item.getItemId() == android.R.id.home) {
            onBackPressed();
            return true;
        }
        return super.onOptionsItemSelected(item);
    }

    private void loadMedics(ArrayList<Specialist> medics) {
        if (medics.size() == 0) {
            tvSearching.setText(getString(R.string.medics_searching_not_found));

        } else {
            int size = medics.size();

            if (size == 1)
                tvSearching.setText(getString(R.string.medics_searching_found));
            else
                tvSearching.setText(getString(R.string.medics_searching_found_mult, String.valueOf(size)));

            adapter = new MedicAdapter(medics, this, this);
            LinearLayoutManager horizontalLayoutManager = new LinearLayoutManager(this, LinearLayoutManager.VERTICAL, false);
            rvMedics.setLayoutManager(horizontalLayoutManager);
            rvMedics.setAdapter(adapter);
            adapter.notifyDataSetChanged();
        }
    }

    private void error(Throwable throwable) {
        tvSearching.setText(getString(R.string.medics_searching_not_found));
        ToastUtils.showToastError(this, getString(R.string.error_medics));
    }

    private void isLoading(boolean loading) {
        if (loading) {
            tvSearching.setText(getString(R.string.medics_searching));
            pbLoad.setVisibility(View.VISIBLE);
            bgLoad.setVisibility(View.VISIBLE);
        } else {
            pbLoad.setVisibility(View.GONE);
            bgLoad.setVisibility(View.GONE);
        }
    }

    @Override
    public void onCallMedic(String name, String number) {
        String text = getString(R.string.medic_call_message, name, number);
        ToastUtils.showToastClick(this, text);
    }

    @Override
    public void onChatMedic(String name, String url) {
        String text = getString(R.string.medic_chat_message, name, url);
        ToastUtils.showToastClick(this, text);

        Uri uri = Uri.parse(url);
        Intent openBrowser = new Intent(Intent.ACTION_VIEW, uri);
        startActivity(openBrowser);
    }
}