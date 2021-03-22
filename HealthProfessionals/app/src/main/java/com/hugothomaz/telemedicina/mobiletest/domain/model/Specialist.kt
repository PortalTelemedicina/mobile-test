package com.hugothomaz.telemedicina.mobiletest.domain.model

data class Specialist (
    val name: String,
    val description: String,
    val distance: Double? = null,
    val actions: Actions
)