package com.hugothomaz.telemedicina.mobiletest.screen.home

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.hugothomaz.telemedicina.mobiletest.domain.iteractor.GetSpecialistUseCase
import com.hugothomaz.telemedicina.mobiletest.domain.model.Specialist
import kotlinx.coroutines.async
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.catch
import kotlinx.coroutines.flow.collect

sealed class UiState {
    class Success<T>(val data: T) : UiState()
    object Error : UiState()
    object Loading : UiState()
    object Initial : UiState()
}

interface CarViewModelContract {
    val uiSpecialistStateFlow: StateFlow<UiState>

    fun getSpecialists()
}

class HomeViewModel(private val getSpecialistsUseCase: GetSpecialistUseCase) : ViewModel(),
    CarViewModelContract {

    private val mutableSpecialistStateFlow = MutableStateFlow<UiState>(UiState.Initial)
    override val uiSpecialistStateFlow: StateFlow<UiState>
        get() = mutableSpecialistStateFlow


    override fun getSpecialists() {
        viewModelScope.async {
            mutableSpecialistStateFlow.value = UiState.Loading
            getSpecialistsUseCase.get()
                .catch {

                }
                .collect {
                    handlerResource(it)
                }
        }
    }

    private fun handlerResource(list: List<Specialist>) {
        if (list.isNotEmpty()) {
            mutableSpecialistStateFlow.value = UiState.Success(list)
        } else {
            mutableSpecialistStateFlow.value = UiState.Error
        }
    }

}