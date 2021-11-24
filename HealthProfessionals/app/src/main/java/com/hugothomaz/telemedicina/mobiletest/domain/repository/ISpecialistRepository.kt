package com.hugothomaz.telemedicina.mobiletest.domain.repository

import com.hugothomaz.telemedicina.mobiletest.domain.model.SpecialistModel
import kotlinx.coroutines.flow.Flow

interface ISpecialistRepository {
    fun fetchAllSpecialists(): Flow<List<SpecialistModel>>
}