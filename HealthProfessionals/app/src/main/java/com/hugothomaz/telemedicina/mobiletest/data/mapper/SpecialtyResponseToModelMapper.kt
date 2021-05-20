package com.hugothomaz.telemedicina.mobiletest.data.mapper

import com.hugothomaz.telemedicina.mobiletest.data.source.cloud.response.SpecialtyResponse
import com.hugothomaz.telemedicina.mobiletest.domain.model.SpecialtyModel

class SpecialtyResponseToModelMapper : IMapper<SpecialtyResponse, SpecialtyModel> {

    override fun transform(entity: SpecialtyResponse): SpecialtyModel {
        return SpecialtyModel(
            entity.getColor(),
            entity.image_url,
            entity.name,
            entity.total
        )
    }
}