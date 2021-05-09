//
//  SpecialistViewModel.swift
//  MobileTest
//
//  Created by Victor H. Rezende Takai on 06/05/21.
//

import Foundation
import RxSwift
import RxCocoa

class SpecialistViewModel {
    
    private let repository: SpecialistRepository
    
    private(set) var doctorsCellViewModels = BehaviorRelay<[DoctorCellViewModel]>(value: [])
    private let _isFetching = BehaviorRelay<Bool>(value: false)
    private let _error = BehaviorRelay<Error?>(value: nil)
    private let _numberOfDoctors = BehaviorRelay<String>(value: "Searching...")
    private let disposeBag = DisposeBag()
    
    init(repository: SpecialistRepository) {
        self.repository = repository
    }
    
    var isFetching: Driver<Bool> {
        _isFetching.asDriver()
    }
    
    var error: Driver<Error?> {
        _error.asDriver()
    }
    
    var hasError: Bool {
        _error.value != nil
    }
    
    var numberOfDoctors: Driver<String> {
        _numberOfDoctors.asDriver()
    }
    
    func fetchSpecialists(type: Type?) {
        if !_isFetching.value {
            doctorsCellViewModels.accept([])
            _isFetching.accept(true)
            _error.accept(nil)
            _numberOfDoctors.accept("Searching...")
            
            var service: Single<[Specialist]>?
            switch type {
            case .heart:
                service = repository.getHeartSpecialists()
            case .dentalCare:
                service = repository.getDentalCareSpecialists()
            case .dermatology:
                service = repository.getDermatologySpecialists()
            default:
                service = nil
            }
            
            if let service = service {
                service
                    .retry(3)
                    .subscribe { [weak self] specialists in
                        self?._isFetching.accept(false)
                        self?._numberOfDoctors.accept("\(specialists.count) doctors were found")
                        let viewModels = specialists.map { DoctorCellViewModel($0) }
                        self?.doctorsCellViewModels.accept(viewModels)
                    } onError: { [weak self] error in
                        print(error)
                        self?._isFetching.accept(false)
                        self?._error.accept(error)
                        self?._numberOfDoctors.accept("No doctors were found")
                    }
                    .disposed(by: disposeBag)
            }
        }
    }
    
}
