package com.hugothomaz.telemedicina.mobiletest.data.repository

import com.hugothomaz.telemedicina.mobiletest.data.mapper.SpecialtyResponseToModelMapper
import com.hugothomaz.telemedicina.mobiletest.data.source.cloud.AppCloud
import com.hugothomaz.telemedicina.mobiletest.domain.model.SpecialtyModel
import com.hugothomaz.telemedicina.mobiletest.domain.repository.ISpecialtyRepository
import io.reactivex.Single

class SpecialtyRepository(
    private val appCloud: AppCloud
) : ISpecialtyRepository {

    private val specialtyResponseToModelMapper = SpecialtyResponseToModelMapper()

    override fun fetchAllSpecialty(): Single<List<SpecialtyModel>> {
        return appCloud.getSpecialtys().map {
            specialtyResponseToModelMapper.transform(it)
        }
    }

}