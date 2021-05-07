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

    init(viewModel: SpecialistViewModel) {
        self.viewModel = viewModel
        super.init(nibName: nil, bundle: nil)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }

}
