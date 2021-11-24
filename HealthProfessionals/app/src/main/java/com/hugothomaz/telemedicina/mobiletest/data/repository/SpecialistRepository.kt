package com.hugothomaz.telemedicina.mobiletest.data.repository

import com.hugothomaz.telemedicina.mobiletest.domain.model.ActionModel
import com.hugothomaz.telemedicina.mobiletest.domain.model.SpecialistModel
import com.hugothomaz.telemedicina.mobiletest.domain.repository.ISpecialistRepository
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flow

class SpecialistRepository : ISpecialistRepository {

    override fun fetchAllSpecialists(): Flow<List<SpecialistModel>> {
        return flow {
            emit(
                listOf(
                    SpecialistModel(
                        "Nome1",
                        "Description1",
                        15654.0, ActionModel("1", "5")
                    ),
                    SpecialistModel(
                        "Nome2",
                        "Description2",
                        15654.0, ActionModel("2")
                    ),
                    SpecialistModel(
                        "Nome3",
                        "Description3",
                        15654.0, ActionModel("3")
                    ),
                    SpecialistModel(
                        "Nome4",
                        "Description4",
                        15654.0, ActionModel("4")
                    ),
                    SpecialistModel(
                        "Nome5",
                        "Description5",
                        15654.0, ActionModel("5")
                    )
                )
            )
        }
    }
}