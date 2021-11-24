package com.hugothomaz.telemedicina.mobiletest.di

import com.google.gson.Gson
import com.google.gson.GsonBuilder
import com.hugothomaz.telemedicina.mobiletest.BuildConfig
import com.hugothomaz.telemedicina.mobiletest.data.repository.SpecialistRepository
import com.hugothomaz.telemedicina.mobiletest.data.repository.SpecialtyRepository
import com.hugothomaz.telemedicina.mobiletest.data.source.cloud.AppCloud
import com.hugothomaz.telemedicina.mobiletest.data.source.cloud.SpecialistAPI
import com.hugothomaz.telemedicina.mobiletest.data.source.cloud.SpecialtyAPI
import com.hugothomaz.telemedicina.mobiletest.domain.iteractor.GetSpecialistUseCase
import com.hugothomaz.telemedicina.mobiletest.domain.iteractor.GetSpecialtyUseCase
import com.hugothomaz.telemedicina.mobiletest.screen.home.HomeViewModel
import okhttp3.OkHttpClient
import okhttp3.logging.HttpLoggingInterceptor
import org.koin.androidx.viewmodel.dsl.viewModel
import org.koin.dsl.module
import retrofit2.Retrofit
import retrofit2.adapter.rxjava2.RxJava2CallAdapterFactory
import retrofit2.converter.gson.GsonConverterFactory
import java.util.concurrent.TimeUnit

val homeModule = module {

    single<SpecialistRepository> { SpecialistRepository() }

    single<SpecialtyRepository> { SpecialtyRepository(get()) }

    factory { GetSpecialistUseCase(get<SpecialistRepository>()) }

    factory { GetSpecialtyUseCase(get<SpecialtyRepository>()) }

    viewModel { HomeViewModel(get<GetSpecialtyUseCase>(), get<GetSpecialistUseCase>()) }


    single { provideGson() }

    single { provideOkHttpCliente() }

    single { provideConverterFactory(get<Gson>()) }

    single { provideRxJavaCallAdapterFactory() }

    single { AppCloud(get<SpecialtyAPI>(), get<SpecialistAPI>()) }

    factory { provideRetrofit(BuildConfig.BASE_URL, get<OkHttpClient>(), get<GsonConverterFactory>(), get<RxJava2CallAdapterFactory>()) }

    single { providerSpecialistAPI(get()) }

    single { providerSpecialtyAPI(get()) }

}


fun provideGson(): Gson {
    return GsonBuilder()
        .create()
}


fun provideOkHttpCliente(): OkHttpClient {
    return OkHttpClient.Builder()
        .connectTimeout(30, TimeUnit.SECONDS)
        .readTimeout(30, TimeUnit.SECONDS)
        .addInterceptor(HttpLoggingInterceptor().setLevel(HttpLoggingInterceptor.Level.BODY))
        .build()
}

fun provideRxJavaCallAdapterFactory(): RxJava2CallAdapterFactory {
    return RxJava2CallAdapterFactory.create()
}

fun provideConverterFactory(gson: Gson): GsonConverterFactory {
    return GsonConverterFactory.create(gson)
}

fun provideRetrofit(
    url: String,
    client: OkHttpClient,
    converterFactory: GsonConverterFactory,
    rxJava2CallAdapterFactory: RxJava2CallAdapterFactory
): Retrofit {
    return Retrofit.Builder()
        .baseUrl(url)
        .addConverterFactory(converterFactory)
        .client(client)
        .addCallAdapterFactory(rxJava2CallAdapterFactory)
        .build()
}

fun providerSpecialistAPI(retrofit: Retrofit): SpecialistAPI {
    return retrofit.create(SpecialistAPI::class.java)
}

fun providerSpecialtyAPI(retrofit: Retrofit): SpecialtyAPI {
    return retrofit.create(SpecialtyAPI::class.java)
}