package com.hugothomaz.telemedicina.mobiletest.domain.iteractor

import com.hugothomaz.telemedicina.mobiletest.domain.model.Specialist
import com.hugothomaz.telemedicina.mobiletest.domain.repository.ISpecialistRepository
import kotlinx.coroutines.flow.Flow

class GetSpecialistUseCase(private val repo: ISpecialistRepository) {
    fun get(): Flow<List<Specialist>>{
        return repo.fetchAllSpecialists()
    }
}