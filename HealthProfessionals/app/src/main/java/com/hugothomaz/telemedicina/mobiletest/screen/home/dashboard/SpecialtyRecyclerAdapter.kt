package com.hugothomaz.telemedicina.mobiletest.screen.home.dashboard

import android.annotation.SuppressLint
import android.content.res.ColorStateList
import android.graphics.Color
import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.core.widget.ImageViewCompat
import androidx.databinding.DataBindingUtil
import androidx.recyclerview.widget.RecyclerView
import com.hugothomaz.telemedicina.mobiletest.R
import com.hugothomaz.telemedicina.mobiletest.databinding.ItemListSpecialtyBinding
import com.hugothomaz.telemedicina.mobiletest.domain.model.SpecialtyModel
import com.hugothomaz.telemedicina.mobiletest.extensions.ImageKtx.loadImageSVG

class SpecialtyRecyclerAdapter(private val onClick: (specialtyModel: SpecialtyModel) -> Unit) :
    RecyclerView.Adapter<SpecialtyRecyclerAdapter.SpecialtyViewHolder>() {

    private var list: List<SpecialtyModel> = listOf()


    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): SpecialtyViewHolder {
        return SpecialtyViewHolder(
            DataBindingUtil.inflate(
                LayoutInflater.from(parent.context),
                R.layout.item_list_specialty,
                parent,
                false
            )
        )
    }

    override fun onBindViewHolder(holder: SpecialtyViewHolder, position: Int) {
        holder.bind(list.get(position))
    }

    override fun getItemCount(): Int {
        return list.size
    }

    fun setData(list: List<SpecialtyModel>) {
        this.list = list
        notifyDataSetChanged()
    }

    inner class SpecialtyViewHolder(private val viewBind: ItemListSpecialtyBinding) :
        RecyclerView.ViewHolder(viewBind.root) {

        @SuppressLint("ResourceType", "UseCompatLoadingForColorStateLists", "NewApi")
        fun bind(specialty: SpecialtyModel) {
            viewBind.apply {
                tvSpecialtyName.text = specialty.name
                tvSpecialtyCount.text = specialty.total.toString()
                ivLogo.loadImageSVG(specialty.image_url)
                ivLogo.background
                ImageViewCompat.setImageTintList(
                    ivLogo,
                    ColorStateList.valueOf(Color.parseColor(specialty.color))
                )
                cardSpecialty.setCardBackgroundColor(Color.parseColor(specialty.color))

                root.setOnClickListener {
                    onClick(specialty)
                }
            }
        }
    }
}