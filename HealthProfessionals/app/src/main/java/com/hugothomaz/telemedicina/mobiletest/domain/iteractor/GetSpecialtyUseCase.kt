package com.hugothomaz.telemedicina.mobiletest.domain.iteractor

import com.hugothomaz.telemedicina.mobiletest.domain.model.SpecialtyModel
import com.hugothomaz.telemedicina.mobiletest.domain.repository.ISpecialtyRepository
import io.reactivex.Single

class GetSpecialtyUseCase(private val repo: ISpecialtyRepository) {
    fun get(): Single<List<SpecialtyModel>>{
        return repo.fetchAllSpecialty()
    }
}