package com.svmdev.medicportal.data.webservice;

import com.google.gson.JsonElement;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Headers;

public interface API {

    @Headers("Content-Type: application/json")
    @GET(URLs.homeSpecialists)
    Call<JsonElement> getHomeSpecialists();

    @Headers({"Content-Type: application/json", "Accept: application/json"})
    @GET(URLs.dentalSpecialists)
    Call<JsonElement> getDentalSpecialists();

    @Headers({"Content-Type: application/json", "Accept: application/json"})
    @GET(URLs.dermatologySpecialists)
    Call<JsonElement> getDermatologySpecialists();

    @Headers({"Content-Type: application/json", "Accept: application/json"})
    @GET(URLs.heartSpecialists)
    Call<JsonElement> getHeartSpecialists();

}
