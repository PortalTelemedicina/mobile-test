//
//  HomeViewModelSpec.swift
//  MobileTestTests
//
//  Created by Victor H. Rezende Takai on 03/05/21.
//

import Foundation
import Quick
import Nimble
import Swinject
import RxSwift
import RxCocoa
import RxTest

@testable import MobileTest

class HomeViewModelSpec: QuickSpec {
    
    override func spec() {
        var sut: HomeViewModel!
        
        let container = Container()
        container.register(HomeViewModel.self) { r in
            HomeViewModel(repository: r.resolve(SpecialistRepository.self)!)
        }
        
        let testScheduler = TestScheduler(initialClock: 0)
        let disposeBag = DisposeBag()
        
        describe("HomeViewModel's fetch method is called") {
            
            context("Fetching succeeds") {
                
                beforeEach {
                    container.register(SpecialistRepository.self) { _ -> SpecialistRepository in
                        return SucceedServiceMock()
                    }
                    sut = container.resolve(HomeViewModel.self)
                }
                
                let viewModelsObserver = testScheduler.createObserver([SpecialistCellViewModel].self)
                
                sut.specialistCellViewModels
                    .subscribe(viewModelsObserver)
                    .disposed(by: disposeBag)
                
                sut.fetchSpecialists()
                
                testScheduler.start()
                
                let viewModels = viewModelsObserver.events.last.map { $0.value.element! }
                
                it("It should emit 3 objects") {
                    expect(viewModels?.count).to(equal(3))
                }
            }
            
            context("Fetching fails") {
                
                beforeEach {
                    container.register(SpecialistRepository.self) { _ -> SpecialistRepository in
                        return FailedServiceMock()
                    }
                    sut = container.resolve(HomeViewModel.self)
                }
                
                let errorObserver = testScheduler.createObserver(Error?.self)
                
                sut.error
                    .asObservable()
                    .subscribe(errorObserver)
                    .disposed(by: disposeBag)
                
                sut.fetchSpecialists()
                
                testScheduler.start()
                
                let error = errorObserver.events.last.map { $0.value.element! }!
                
                it("It should emit an error") {
                    expect(error).toNot(beNil())
                    expect(sut.hasError).to(equal(true))
                }
            }
            
        }
        
    }
    
}
