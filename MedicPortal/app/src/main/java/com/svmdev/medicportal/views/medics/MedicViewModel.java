package com.svmdev.medicportal.views.medics;

import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.ViewModel;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.reflect.TypeToken;
import com.svmdev.medicportal.data.model.Home;
import com.svmdev.medicportal.data.model.Specialist;
import com.svmdev.medicportal.data.webservice.RetrofitConfig;
import com.svmdev.medicportal.utils.Constants;
import com.svmdev.medicportal.utils.DbAccess;

import java.lang.reflect.Type;
import java.util.ArrayList;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MedicViewModel extends ViewModel {


    public MutableLiveData<ArrayList<Specialist>> medics = new MutableLiveData<>();
    public MutableLiveData<Boolean> isLoading = new MutableLiveData<>();
    public MutableLiveData<Throwable> onError = new MutableLiveData<>();

    public Home optionSelected;

    public void performGetMedics() {
        isLoading.postValue(true);

        Call<JsonElement> call;
        int typeId;

        switch (optionSelected.getTypeId()) {
            case Constants.HEART_SPECIALIST_ID:
                typeId = Constants.HEART_SPECIALIST_ID;
                call = new RetrofitConfig().getAPI().getHeartSpecialists();
                break;
            case Constants.DENTAL_SPECIALIST_ID:
                typeId = Constants.DENTAL_SPECIALIST_ID;
                call = new RetrofitConfig().getAPI().getDentalSpecialists();
                break;
            default:
            case Constants.DERMA_SPECIALIST_ID:
                typeId = Constants.DERMA_SPECIALIST_ID;
                call = new RetrofitConfig().getAPI().getDermatologySpecialists();
        }

        call.enqueue(new Callback<JsonElement>() {
            @Override
            public void onResponse(Call<JsonElement> call, Response<JsonElement> response) {

                Gson gson = new Gson();
                if (response.isSuccessful()) {

                    Type listOfMyClassObject = new TypeToken<ArrayList<Specialist>>() {
                    }.getType();
                    ArrayList<Specialist> list = gson.fromJson(response.body(), listOfMyClassObject);

                    saveMedicsDataBase(list, typeId);

                    medics.postValue(list);
                    isLoading.postValue(false);
                } else {
                    try {
                        loadMedicByDataBase(typeId);
                        isLoading.postValue(false);
                    } catch (Exception e) {
                        onError.postValue(e.getCause());
                        isLoading.postValue(false);
                    }
                }
            }

            @Override
            public void onFailure(Call<JsonElement> call, Throwable t) {
                loadMedicByDataBase(typeId);
                isLoading.postValue(false);
            }
        });
    }

    private void loadMedicByDataBase(int typeId) {
        ArrayList<Specialist> medicsDb = DbAccess.specialistDB.getAll(typeId);
        if (medicsDb.isEmpty()) {
            onError.postValue(new Throwable());
        } else {
            medics.postValue(medicsDb);
        }

    }

    private void saveMedicsDataBase(ArrayList<Specialist> medicList, int typeId) {
        DbAccess.specialistDB.deleteData(typeId);
        for (Specialist medic : medicList) {
            medic.setTypeId(typeId);
            DbAccess.specialistDB.saveData(medic);
        }
    }


}
