package com.hugothomaz.telemedicina.mobiletest.data.mapper

import com.hugothomaz.telemedicina.mobiletest.data.source.cloud.response.ActionResponse
import com.hugothomaz.telemedicina.mobiletest.domain.model.ActionModel

class ActionResponseToModelMapper: IMapper<ActionResponse, ActionModel> {

    override fun transform(entity: ActionResponse): ActionModel {
        return ActionModel(
            entity.chat,
            entity.call
        )
    }

}