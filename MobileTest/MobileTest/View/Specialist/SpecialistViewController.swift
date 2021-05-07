//
//  SpecialistViewController.swift
//  MobileTest
//
//  Created by Victor H. Rezende Takai on 06/05/21.
//

import UIKit

class SpecialistViewController: UIViewController {
    
    weak var coordinator: HomeCoordinator?
    var type: Type?
    
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
    }
    
    private func setupTableView() {
        tableView.registerCell(DoctorCell.self)
        tableView.allowsSelection = false
        tableView.allowsMultipleSelection = false
        tableView.rowHeight = UITableView.automaticDimension
        tableView.estimatedRowHeight = 249
    }

}
