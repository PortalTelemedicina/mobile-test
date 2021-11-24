package com.hugothomaz.telemedicina.mobiletest.screen.home

import android.annotation.SuppressLint
import android.util.Log
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.hugothomaz.telemedicina.mobiletest.domain.iteractor.GetSpecialistUseCase
import com.hugothomaz.telemedicina.mobiletest.domain.iteractor.GetSpecialtyUseCase
import com.hugothomaz.telemedicina.mobiletest.domain.model.SpecialistModel
import com.hugothomaz.telemedicina.mobiletest.domain.model.SpecialtyModel
import io.reactivex.android.schedulers.AndroidSchedulers
import io.reactivex.schedulers.Schedulers
import kotlinx.coroutines.async
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.collect

sealed class UiState {
    class Success<T>(val data: T?) : UiState()
    object Error : UiState()
    object Loading : UiState()
    object Initial : UiState()
}

interface CarViewModelContract {
    val uiSpecialtyStateFlow: StateFlow<UiState>
    val uiSpecialistsStateFlow: StateFlow<UiState>

    fun getSpecialty()
    fun getSpecialists()
}

class HomeViewModel(
    private val getSpecialtyUseCase: GetSpecialtyUseCase,
    private val getSpecialistUseCase: GetSpecialistUseCase
) : ViewModel(),
    CarViewModelContract {

    private val mutableSpecialtyStateFlow = MutableStateFlow<UiState>(UiState.Initial)
    override val uiSpecialtyStateFlow: StateFlow<UiState>
        get() = mutableSpecialtyStateFlow

    private val mutableSpecialistStateFlow = MutableStateFlow<UiState>(UiState.Initial)
    override val uiSpecialistsStateFlow: StateFlow<UiState>
        get() = mutableSpecialistStateFlow

    @SuppressLint("CheckResult")
    override fun getSpecialty() {
        getSpecialtyUseCase.get()
            .doOnSubscribe {

            }
            .subscribeOn(Schedulers.io())
            .observeOn(AndroidSchedulers.mainThread())
            .subscribe(
                { it ->
                    handlerSpecialtyResource(it)
                },
                {
                    Log.e("app_subscribe", "Deu erro: ${it.message}")
                    mutableSpecialistStateFlow.value = UiState.Error
                }
            )
    }

    override fun getSpecialists() {
        viewModelScope.async {
            mutableSpecialistStateFlow.value = UiState.Initial
            getSpecialistUseCase.get()
                .catch {
                    mutableSpecialistStateFlow.value = UiState.Error
                }
                .collect {
                    handlerSpecialistResource(it)
                }
        }
    }


    private fun handlerSpecialtyResource(list: List<SpecialtyModel>) {
        if (list.isNotEmpty()) {
            mutableSpecialtyStateFlow.value = UiState.Success(list)
        } else {
            mutableSpecialtyStateFlow.value = UiState.Error
        }
    }

    private fun handlerSpecialistResource(list: List<SpecialistModel>) {
        if (list.isNotEmpty()) {
            mutableSpecialistStateFlow.value = UiState.Success(list)
        } else {
            mutableSpecialistStateFlow.value = UiState.Error
        }
    }

}