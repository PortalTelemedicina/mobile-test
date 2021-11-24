package com.hugothomaz.telemedicina.mobiletest.screen.home.listspecialist

import android.annotation.SuppressLint
import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.databinding.DataBindingUtil
import androidx.recyclerview.widget.RecyclerView
import com.hugothomaz.telemedicina.mobiletest.R
import com.hugothomaz.telemedicina.mobiletest.databinding.ItemListSpecialistBinding
import com.hugothomaz.telemedicina.mobiletest.domain.model.SpecialistModel


class SpecialistRecyclerAdapter(private val clickChat: (String?) -> Unit, private val clickCall: (String?) -> Unit) :
    RecyclerView.Adapter<SpecialistRecyclerAdapter.SpecialtyViewHolder>() {

    private var list: List<SpecialistModel> = listOf()

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): SpecialtyViewHolder {


        return SpecialtyViewHolder(
            DataBindingUtil.inflate(
                LayoutInflater.from(parent.context),
                R.layout.item_list_specialist,
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

    fun setData(list: List<SpecialistModel>) {
        this.list = list
        notifyDataSetChanged()
    }


    inner class SpecialtyViewHolder(private val viewBind: ItemListSpecialistBinding) :
        RecyclerView.ViewHolder(viewBind.root) {

        @SuppressLint("ResourceType", "UseCompatLoadingForColorStateLists", "NewApi")
        fun bind(specialist: SpecialistModel) {
            viewBind.apply {
                tvInitialsName.text = "JS"
                tvSpecialistName.text = specialist.name
                tvSpecialistDescription.text = specialist.description
                tvSpecialistProcimity.text = specialist.distance.toString()
                btnCall.setOnClickListener {
                    specialist.actions.call.let { telNumber ->
                        clickCall(telNumber)
                    }
                }
                btnChat.setOnClickListener {
                    specialist.actions.chat.let { chat ->
                        clickChat(chat)
                    }
                }
            }
        }
    }
}