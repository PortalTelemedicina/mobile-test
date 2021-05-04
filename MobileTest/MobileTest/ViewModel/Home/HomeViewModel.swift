//
//  HomeViewModel.swift
//  MobileTest
//
//  Created by Victor H. Rezende Takai on 03/05/21.
//

import Foundation
import RxSwift
import RxCocoa

class HomeViewModel {
    
    private let repository: SpecialistRemoteRepository
    
    private(set) var cellsViewModels = BehaviorRelay<[SpecialistCellViewModel]>(value: [])
    private let _isFetching = BehaviorRelay<Bool>(value: false)
    private let _error = BehaviorRelay<Error?>(value: nil)
    private let disposeBag = DisposeBag()
    
    init(repository: SpecialistRemoteRepository) {
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
    
    func fetchSpecialists() {
        if !_isFetching.value {
            cellsViewModels.accept([])
            _isFetching.accept(true)
            _error.accept(nil)
            
            repository.getHomeSpecialists()
                .retry(3)
                .subscribe { [weak self] specialists in
                    self?._isFetching.accept(false)
                    let viewModels = specialists.map { SpecialistCellViewModel($0) }
                    self?.cellsViewModels.accept(viewModels)
                } onError: { [weak self] error in
                    self?._isFetching.accept(false)
                    self?._error.accept(error)
                }
                .disposed(by: disposeBag)

        }
    }
    
}
