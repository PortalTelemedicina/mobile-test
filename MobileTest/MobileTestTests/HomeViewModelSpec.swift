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
        var container: Container!
        var scheduler: TestScheduler!
        var disposeBag: DisposeBag!
        
        beforeEach {
            container = Container()
            container.register(SpecialistRepository.self) { _ -> SpecialistRepository in
                return SucceedServiceMock()
            }
            container.register(HomeViewModel.self) { r in
                return HomeViewModel(repository: r.resolve(SpecialistRepository.self)!)
            }
            sut = container.resolve(HomeViewModel.self)
            
            scheduler = TestScheduler(initialClock: 0)
            disposeBag = DisposeBag()
        }
        
        afterEach {
            container = nil
            scheduler = nil
            disposeBag = nil
        }
        
        it("Fetch specialist") {
            let viewModelsObserver = scheduler.createObserver([SpecialistCellViewModel].self)

            sut.specialistCellsViewModels
                .subscribe(viewModelsObserver)
                .disposed(by: disposeBag)
        
            sut.fetchSpecialists()
            
            scheduler.start()
            
            let viewModels = viewModelsObserver.events.last.map { $0.value.element! }
            
            expect(viewModels?.count).to(equal(2))
        }
    }
    
}
