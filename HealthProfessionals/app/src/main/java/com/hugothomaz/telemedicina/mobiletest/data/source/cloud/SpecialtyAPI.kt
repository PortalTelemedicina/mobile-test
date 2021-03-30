package com.hugothomaz.telemedicina.mobiletest.data.source.cloud

import com.hugothomaz.telemedicina.mobiletest.data.source.cloud.response.SpecialtyResponse
import io.reactivex.Single
import retrofit2.Response
import retrofit2.http.GET
import retrofit2.http.POST

interface SpecialtyAPI {

    @GET("/PortalTelemedicina/mobile-test/main/api/home_specialists.json")
    fun getSpecialtys() : Single<List<SpecialtyResponse>>

}