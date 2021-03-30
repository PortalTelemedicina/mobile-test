package com.hugothomaz.telemedicina.mobiletest.domain.model

data class SpecialistModel (
    val name: String,
    val description: String,
    val distance: Double? = null,
    val actions: ActionModel,
    var specialty: SpecialtyModel? = null
)