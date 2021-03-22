package com.hugothomaz.telemedicina.mobiletest.di

import com.hugothomaz.telemedicina.mobiletest.data.repository.SpecialistRepository
import com.hugothomaz.telemedicina.mobiletest.domain.iteractor.GetSpecialistUseCase
import com.hugothomaz.telemedicina.mobiletest.domain.repository.ISpecialistRepository
import com.hugothomaz.telemedicina.mobiletest.screen.home.HomeViewModel
import org.koin.androidx.viewmodel.dsl.viewModel
import org.koin.dsl.module

val homeModule = module {

    single<ISpecialistRepository> { SpecialistRepository() }

    factory { GetSpecialistUseCase(get()) }

    viewModel { HomeViewModel(get<GetSpecialistUseCase>()) }

}