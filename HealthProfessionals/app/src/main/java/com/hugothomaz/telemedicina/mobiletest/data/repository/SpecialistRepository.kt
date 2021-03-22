package com.hugothomaz.telemedicina.mobiletest.data.repository

import com.hugothomaz.telemedicina.mobiletest.domain.model.Actions
import com.hugothomaz.telemedicina.mobiletest.domain.model.Specialist
import com.hugothomaz.telemedicina.mobiletest.domain.repository.ISpecialistRepository
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flow

class SpecialistRepository : ISpecialistRepository {

    override fun fetchAllSpecialists(): Flow<List<Specialist>> {
        return flow {
            emit(
                listOf(
                    Specialist(
                        "Nome",
                        "Description",
                        15654.0, Actions("")
                    )
                )
            )
        }
    }
}