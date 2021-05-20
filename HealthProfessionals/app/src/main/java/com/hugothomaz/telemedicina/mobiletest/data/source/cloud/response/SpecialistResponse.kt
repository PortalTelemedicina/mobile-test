package com.hugothomaz.telemedicina.mobiletest.data.source.cloud.response

data class SpecialistResponse(
    val name: String,
    val description: String,
    val distance: Double? = null,
    val actions: ActionResponse,
    var specialty: SpecialtyResponse? = null
)
