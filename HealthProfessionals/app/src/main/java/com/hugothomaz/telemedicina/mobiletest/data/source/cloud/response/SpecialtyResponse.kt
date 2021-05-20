package com.hugothomaz.telemedicina.mobiletest.data.source.cloud.response

data class SpecialtyResponse(
    private val color: String,
    val image_url: String,
    val name: String,
    val total: Int
) {
    fun getColor() : String {
        return if (color.length >= 7) color else "#ffffff"
    }
}
