package com.hugothomaz.telemedicina.mobiletest.domain.repository

import com.hugothomaz.telemedicina.mobiletest.domain.model.SpecialtyModel
import io.reactivex.Single
import kotlinx.coroutines.flow.Flow

interface ISpecialtyRepository {
    fun fetchAllSpecialty(): Single<List<SpecialtyModel>>
}