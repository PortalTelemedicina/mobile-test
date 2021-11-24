package com.hugothomaz.telemedicina.mobiletest.domain.model

import java.io.Serializable

data class SpecialtyModel(
    val color: String,
    val image_url: String,
    val name: String,
    val total: Int
): Serializable