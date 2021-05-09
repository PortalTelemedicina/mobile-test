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
        SpecialistType(name: "Heart Specialists",
                       imageURL: URL(string: "https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/icons/heart-shape-outline-with-lifeline.svg"),
                       total: 1, color:
                        UIColor.hexStringToUIColor(hex: "#E5495E")),
        SpecialistType(name: "Dental Care Specialists",
                       imageURL: URL(string: "https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/icons/tooth.svg"),
                       total: 3,
                       color: UIColor.hexStringToUIColor(hex: "#F6AF3D")),
        SpecialistType(name: "Dermatology Specialists",
                       imageURL: URL(string: "https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/icons/pimples.svg"),
                       total: 0,
                       color: UIColor.hexStringToUIColor(hex: "#7349E5"))
    ]
}

func heartSpecialistMock() -> [Specialist] {
    [
        Specialist(name: "Name 1",
                   description: "Heart Specialist 1",
                   distance: 100.0,
                   actions: Actions(chat: "https://chat.test.br",
                                    call: "(00) 99999-9999"))
    ]
}

func dentalCareSpecialistMock() -> [Specialist] {
    [
        Specialist(name: "Name 1",
                   description: "Dental Care Specialist 1",
                   distance: 10.0,
                   actions: Actions(chat: "https://chat.test.br",
                                    call: "(00) 99999-9999")),
        Specialist(name: "Name 2",
                   description: "Dental Care Specialist 2",
                   distance: 50.0,
                   actions: Actions(chat: "https://chat.test.br",
                                    call: nil)),
        Specialist(name: "Name 3",
                   description: "Dental Care Specialist 3",
                   distance: nil,
                   actions: Actions(chat: "https://chat.test.br",
                                    call: "(00) 99999-9999"))
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
            single(.success(heartSpecialistMock()))
            return Disposables.create()
        }
    }
    
    func getDentalCareSpecialists() -> Single<[Specialist]> {
        Single<[Specialist]>.create { single -> Disposable in
            single(.success(dentalCareSpecialistMock()))
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
