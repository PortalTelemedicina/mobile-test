package com.hugothomaz.telemedicina.mobiletest.data.source.cloud

import com.hugothomaz.telemedicina.mobiletest.data.source.cloud.response.SpecialistResponse
import io.reactivex.Single
import retrofit2.http.POST

interface SpecialistAPI {

    @POST("/api/list_specialist_dermatology.json")
    fun getSpecialistsDermatology() : Single<List<SpecialistResponse>>

    @POST("/api/list_specialist_dental_care.json")
    fun getSpecialistsdentalCare() : Single<List<SpecialistResponse>>

    @POST("/api/list_specialist_heart.json")
    fun getSpecialistsHeart() : Single<List<SpecialistResponse>>

}