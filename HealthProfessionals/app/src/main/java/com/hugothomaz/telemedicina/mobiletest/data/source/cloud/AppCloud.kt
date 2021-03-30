package com.hugothomaz.telemedicina.mobiletest.data.source.cloud

import com.hugothomaz.telemedicina.mobiletest.data.source.cloud.response.SpecialistResponse
import com.hugothomaz.telemedicina.mobiletest.data.source.cloud.response.SpecialtyResponse
import io.reactivex.Single

class AppCloud(
    private val specialtyAPI: SpecialtyAPI,
    private val specialistAPI: SpecialistAPI
) {

    fun getSpecialtys(): Single<List<SpecialtyResponse>> {
        return specialtyAPI.getSpecialtys()
    }

    fun getSpecialistsDental(): Single<List<SpecialistResponse>> {
        return specialistAPI.getSpecialistsdentalCare()
    }

    fun getSpecialistsDetarmologic(): Single<List<SpecialistResponse>> {
        return specialistAPI.getSpecialistsDermatology()
    }

    fun getSpecialistsHeat(): Single<List<SpecialistResponse>> {
        return specialistAPI.getSpecialistsHeart()
    }

    /*private suspend fun <T> getResponse(request: suspend () -> Response<T>, defaultErrorMessage: String): Result<T> {
        return try {
            val result = request.invoke()
            if (result.isSuccessful) {
                return Result.success(result.body())
            } else {
                val errorResponse = result.errorBody().toString()
                Result.error(errorResponse, Error(result.code(), result.message()))
            }
        } catch (e: Throwable) {
            Result.error("Unknown Error", null)
        }
    }*/

}