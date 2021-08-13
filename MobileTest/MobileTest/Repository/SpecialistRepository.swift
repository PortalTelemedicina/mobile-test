//
//  SpecialistRepository.swift
//  MobileTest
//
//  Created by Victor H. Rezende Takai on 03/05/21.
//

import Foundation
import Moya
import RxSwift

protocol SpecialistRepository {
    
    func getHomeSpecialists() -> Single<[SpecialistType]>
    
    func getHeartSpecialists() -> Single<[Specialist]>
    
    func getDentalCareSpecialists() -> Single<[Specialist]>

    func getDermatologySpecialists() -> Single<[Specialist]>
    
}

class SpecialistRemoteRepository: SpecialistRepository {
    
    final let provider = MoyaProvider<SpecialistTarget>()
    
    func getHomeSpecialists() -> Single<[SpecialistType]> {
        provider
            .rx
            .request(.homeSpecialists)
            .map([SpecialistType].self)
    }
    
    func getHeartSpecialists() -> Single<[Specialist]> {
        provider
            .rx
            .request(.heartSpecialists)
            .map([Specialist].self)
    }
    
    func getDentalCareSpecialists() -> Single<[Specialist]> {
        provider
            .rx
            .request(.dentalCareSpecialists)
            .map([Specialist].self)
    }
    
    func getDermatologySpecialists() -> Single<[Specialist]> {
        provider
            .rx
            .request(.dermatologySpecialists)
            .map([Specialist].self)
    }
    
}
