//
//  SpecialistRepositorySpec.swift
//  MobileTestTests
//
//  Created by Victor H. Rezende Takai on 09/05/21.
//

import Foundation
import Quick
import Nimble
import Swinject
import RxSwift
import RxCocoa
import RxTest

@testable import MobileTest

class SpecialistRepositorySpec: QuickSpec {
    
    override func spec() {
        let container = Container()
        container.register(SpecialistRepository.self) { _ -> SpecialistRepository in
            SucceedServiceMock()
        }
        
        let sut = container.resolve(SpecialistRepository.self)!
        let disposeBag = DisposeBag()
        
        describe("SpecialistRepository methods are called") {
            
            context("getHeartSpecialists is subscribed") {
                sut.getHeartSpecialists()
                    .subscribe(onSuccess: { specialists in
                        it("Should emit only one specialist") {
                            expect(specialists.count).to(equal(1))
                            expect(specialists.first).toNot(beNil())
                        }
                        it("The first specialist's properties are not null") {
                            expect(specialists.first?.name).to(equal("Name 1"))
                            expect(specialists.first?.description).toNot(beNil())
                            expect(specialists.first?.distance).to(equal(100.0))
                            expect(specialists.first?.actions).toNot(beNil())
                        }
                    }, onError: { error in
                        fail(error.localizedDescription)
                    })
                    .disposed(by: disposeBag)
            }
            
            context("getDentalCareSpecialists is subscribed") {
                sut.getDentalCareSpecialists()
                    .subscribe(onSuccess: { specialists in
                        it("Should emit three specialists") {
                            expect(specialists.count).to(equal(3))
                            expect(specialists[0]).toNot(beNil())
                            expect(specialists[1]).toNot(beNil())
                            expect(specialists[2]).toNot(beNil())
                        }
                        it("The second specialist's call property is null") {
                            expect(specialists[1].actions?.call).to(beNil())
                        }
                        it("The third specialist's distance property is null") {
                            expect(specialists[2].distance).to(beNil())
                        }
                    }, onError: { error in
                        fail(error.localizedDescription)
                    })
                    .disposed(by: disposeBag)
            }
            
            context("getDermatologySpecialists is subscribed") {
                sut.getDermatologySpecialists()
                    .subscribe(onSuccess: { specialists in
                        it("Should emit empty array") {
                            expect(specialists.isEmpty).to(beTrue())
                        }
                    }, onError: { error in
                        fail(error.localizedDescription)
                    })
                    .disposed(by: disposeBag)
            }
            
        }
        
    }
    
}

