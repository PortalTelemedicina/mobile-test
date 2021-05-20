package com.hugothomaz.telemedicina.mobiletest.data.mapper

import com.hugothomaz.telemedicina.mobiletest.data.mapper.ActionResponseToModelMapper
import com.hugothomaz.telemedicina.mobiletest.data.source.cloud.response.SpecialistResponse
import com.hugothomaz.telemedicina.mobiletest.domain.model.SpecialistModel

class SpecialistResponseToModelMapper(
    val actionMapper: ActionResponseToModelMapper
) : IMapper<SpecialistResponse, SpecialistModel> {

    override fun transform(entity: SpecialistResponse): SpecialistModel {
        return SpecialistModel(
            entity.name,
            entity.description,
            entity.distance,
            actionMapper.transform(entity.actions)
        )
    }

}