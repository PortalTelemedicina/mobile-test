package com.svmdev.medicportal.views.main;

import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.ViewModel;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.reflect.TypeToken;
import com.svmdev.medicportal.data.model.Home;
import com.svmdev.medicportal.data.webservice.RetrofitConfig;
import com.svmdev.medicportal.utils.Constants;
import com.svmdev.medicportal.utils.DbAccess;
import com.svmdev.medicportal.views.data.OptionSelectionEnum;

import java.lang.reflect.Type;
import java.util.ArrayList;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MainViewModel extends ViewModel {

    public MutableLiveData<ArrayList<Home>> specialists = new MutableLiveData<>();
    public MutableLiveData<OptionSelectionEnum> optionSelected = new MutableLiveData<>();
    public MutableLiveData<Boolean> isLoading = new MutableLiveData<>();
    public MutableLiveData<Throwable> onError = new MutableLiveData<>();

    public void performGetSpecialists() {
        isLoading.postValue(true);

        Call<JsonElement> call = new RetrofitConfig().getAPI().getHomeSpecialists();

        call.enqueue(new Callback<JsonElement>() {
            @Override
            public void onResponse(Call<JsonElement> call, Response<JsonElement> response) {

                Gson gson = new Gson();
                if (response.isSuccessful()) {

                    Type listOfMyClassObject = new TypeToken<ArrayList<Home>>() {
                    }.getType();
                    ArrayList<Home> list = gson.fromJson(response.body(), listOfMyClassObject);

                    for (int index = 0; index < list.size(); index++) {
                        switch (list.get(index).getName()) {
                            case Constants.HEART_SPECIALIST:
                                list.get(index).setTypeId(Constants.HEART_SPECIALIST_ID);
                                break;
                            case Constants.DENTAL_SPECIALIST:
                                list.get(index).setTypeId(Constants.DENTAL_SPECIALIST_ID);
                                break;
                            default:
                            case Constants.DERMA_SPECIALIST:
                                list.get(index).setTypeId(Constants.DERMA_SPECIALIST_ID);
                        }
                    }

                    saveSpecialistsOnDatBase(list);
                    specialists.postValue(list);
                    isLoading.postValue(false);
                } else {
                    try {
                        loadSpecialistsByDataBase();
                        isLoading.postValue(false);
                    } catch (Exception e) {
                        onError.postValue(e.getCause());
                        isLoading.postValue(false);
                    }
                }
            }

            @Override
            public void onFailure(Call<JsonElement> call, Throwable t) {
                loadSpecialistsByDataBase();
                isLoading.postValue(false);
            }
        });
    }

    private void loadSpecialistsByDataBase() {
        ArrayList<Home> homeDb = DbAccess.homeDB.getAll();
        if (homeDb.isEmpty()) {
            onError.postValue(new Throwable());
        } else {
            specialists.postValue(homeDb);
        }
    }

    private void saveSpecialistsOnDatBase(ArrayList<Home> specialistsHome) {
        DbAccess.homeDB.deleteData();
        for (Home homeMenu : specialistsHome) {
            DbAccess.homeDB.saveData(homeMenu);
        }
    }

}
