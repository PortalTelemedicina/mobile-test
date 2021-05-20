package com.hugothomaz.telemedicina.mobiletest.extensions

import android.net.Uri
import android.util.Log
import android.widget.ImageView
import com.github.twocoffeesoneteam.glidetovectoryou.GlideToVectorYou

object ImageKtx {

    fun ImageView.loadImageSVG(url: String) {
        Log.d("ImageView.loadImageSVG", "Load image SVG error URL: $url")
        GlideToVectorYou
            .init()
            .with(this.context)
            .load(Uri.parse(url), this);
    }

}