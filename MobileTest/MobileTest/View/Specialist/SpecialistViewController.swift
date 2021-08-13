//
//  SpecialistViewController.swift
//  MobileTest
//
//  Created by Victor H. Rezende Takai on 06/05/21.
//

import UIKit
import RxSwift
import RxCocoa

class SpecialistViewController: UIViewController, UITableViewDelegate {
    
    weak var coordinator: HomeCoordinator?
    var type: Type?
    
    private let disposeBag = DisposeBag()
    
    private let viewModel: SpecialistViewModel
    
    @IBOutlet weak var specialistLabel: UILabel!
    @IBOutlet weak var doctorsLabel: UILabel!
    @IBOutlet weak var tableView: UITableView!
    @IBOutlet weak var refreshView: UIView!
    @IBOutlet weak var loadingView: UIView!
    
    init(viewModel: SpecialistViewModel) {
        self.viewModel = viewModel
        super.init(nibName: nil, bundle: nil)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        overrideUserInterfaceStyle = .light
        
        setupRefreshView()
        setupLabel()
        setupTableView()
        setupRx()
        loadData()
    }
    
    private func setupRefreshView() {
        let tapGesture = UITapGestureRecognizer(target: self, action: #selector(loadData))
        refreshView.addGestureRecognizer(tapGesture)
    }
    
    private func setupLabel() {
        specialistLabel.text = type?.rawValue
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
        viewModel.error.drive { [unowned self] error in
            self.refreshView.isHidden = !self.viewModel.hasError
            self.tableView.isHidden = self.viewModel.hasError
        }
        .disposed(by: disposeBag)
        
        viewModel.isFetching.drive { [unowned self] isFetching in
            self.loadingView.isHidden = !isFetching
        }
        .disposed(by: disposeBag)
        
        viewModel
            .doctorsCellViewModels
            .bind(to: tableView
                    .rx
                    .items(cellIdentifier: DoctorCell.nameOfClass,
                           cellType: DoctorCell.self)) { _, viewModel, cell in
                cell.configureCell(viewModel)
            }
            .disposed(by: disposeBag)
        
        viewModel
            .numberOfDoctors
            .drive { [weak self] text in
                self?.doctorsLabel.text = text
            }
            .disposed(by: disposeBag)
    }
    
    @objc
    private func loadData() {
        viewModel.fetchSpecialists(type: type)
    }

}
