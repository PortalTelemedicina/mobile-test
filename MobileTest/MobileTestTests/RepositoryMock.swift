//
//  RepositoryMock.swift
//  MobileTestTests
//
//  Created by Victor H. Rezende Takai on 03/05/21.
//

import Foundation
import RxSwift
import RxCocoa

@testable import MobileTest

enum TestError: Error {
    case random
}

func specialistTypeMock() -> [SpecialistType] {
    [
        SpecialistType(name: "Heart Speialist",
                       imageURL: nil,
                       total: 10, color:
                        UIColor.red),
        SpecialistType(name: "Dental Care",
                       imageURL: nil,
                       total: 5,
                       color: UIColor.blue)
    ]
}

class SucceedServiceMock: SpecialistRepository {
    
    func getHomeSpecialists() -> Single<[SpecialistType]> {
        Single<[SpecialistType]>.create { single -> Disposable in
            single(.success(specialistTypeMock()))
            return Disposables.create()
        }
    }
    
    func getHeartSpecialists() -> Single<[Specialist]> {
        Single<[Specialist]>.create { single -> Disposable in
            single(.success([]))
            return Disposables.create()
        }
    }
    
    func getDentalCareSpecialists() -> Single<[Specialist]> {
        Single<[Specialist]>.create { single -> Disposable in
            single(.success([]))
            return Disposables.create()
        }
    }
    
    func getDermatologySpecialists() -> Single<[Specialist]> {
        Single<[Specialist]>.create { single -> Disposable in
            single(.success([]))
            return Disposables.create()
        }
    }
    
}

class FailedServiceMock: SpecialistRepository {
    
    func getHomeSpecialists() -> Single<[SpecialistType]> {
        Single<[SpecialistType]>.create { single -> Disposable in
            single(.error(TestError.random))
            return Disposables.create()
        }
    }
    
    func getHeartSpecialists() -> Single<[Specialist]> {
        Single<[Specialist]>.create { single -> Disposable in
            single(.error(TestError.random))
            return Disposables.create()
        }
    }
    
    func getDentalCareSpecialists() -> Single<[Specialist]> {
        Single<[Specialist]>.create { single -> Disposable in
            single(.error(TestError.random))
            return Disposables.create()
        }
    }
    
    func getDermatologySpecialists() -> Single<[Specialist]> {
        Single<[Specialist]>.create { single -> Disposable in
            single(.error(TestError.random))
            return Disposables.create()
        }
    }
    
}
