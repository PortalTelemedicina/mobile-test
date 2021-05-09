//
//  SpecialistViewController.swift
//  MobileTest
//
//  Created by Victor H. Rezende Takai on 06/05/21.
//

import UIKit
import RxSwift
import RxCocoa

class SpecialistViewController: UIViewController {
    
    weak var coordinator: HomeCoordinator?
    var type: Type?
    
    private let disposeBag = DisposeBag()
    
    private let viewModel: SpecialistViewModel
    
    @IBOutlet weak var specialistLabel: UILabel!
    @IBOutlet weak var doctorsLabel: UILabel!
    @IBOutlet weak var tableView: UITableView!

    init(viewModel: SpecialistViewModel) {
        self.viewModel = viewModel
        super.init(nibName: nil, bundle: nil)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        setupTableView()
        setupRx()
        loadData()
    }
    
    private func setupTableView() {
        tableView.registerCell(DoctorCell.self)
        tableView.allowsSelection = false
        tableView.allowsMultipleSelection = false
        tableView.rowHeight = UITableView.automaticDimension
        tableView.estimatedRowHeight = 249
        tableView
            .rx
            .setDelegate(self)
            .disposed(by: disposeBag)
    }
    
    private func setupRx() {
        viewModel
            .doctorsCellViewModels
            .bind(to: tableView
                    .rx
                    .items(cellIdentifier: DoctorCell.nameOfClass,
                           cellType: DoctorCell.self)) { _, viewModel, cell in
                cell.configureCell(viewModel)
            }
            .disposed(by: disposeBag)
    }
    
    private func loadData() {
        viewModel.fetchSpecialists(type: type)
    }

}

extension SpecialistViewController: UITableViewDelegate {
    
}
