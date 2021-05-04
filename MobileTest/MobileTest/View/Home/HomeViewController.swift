//
//  HomeViewController.swift
//  MobileTest
//
//  Created by Victor H. Rezende Takai on 01/05/21.
//

import UIKit
import RxSwift
import RxCocoa

class HomeViewController: UIViewController {

    weak var coordinator: HomeCoordinator?
    
    @IBOutlet weak var nameLabel: UILabel!
    
    @IBOutlet weak var specialistCollectionView: UICollectionView!
    @IBOutlet weak var specialistCollectionViewFlowLayout: UICollectionViewFlowLayout!
    
    @IBOutlet weak var serviceCollectionView: UICollectionView!
    @IBOutlet weak var serviceCollectionViewFlowLayout: UICollectionViewFlowLayout!
    
    private let collectionViewSpacing: CGFloat = 8
    
    private let disposeBag = DisposeBag()
    
    private let viewModel: HomeViewModel
    
    private lazy var serviceDelegateFlowLayout: ServiceDelegateFlowLayout = {
        ServiceDelegateFlowLayout(collectionViewSpacing)
    }()
    
    private lazy var specialistDelegateFlowLayout: SpecialistDelegateFlowLayout = {
        SpecialistDelegateFlowLayout(width: SpecialistCell.width,
                                     height: SpecialistCell.height)
    }()
    
    init(viewModel: HomeViewModel) {
        self.viewModel = viewModel
        super.init(nibName: nil, bundle: nil)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        setupCollectionViews()
        setupRx()
        loadData()
    }

    private func setupCollectionViews() {
        // Specialist
        specialistCollectionViewFlowLayout.scrollDirection = .horizontal
        specialistCollectionViewFlowLayout.sectionInset = UIEdgeInsets.zero
        specialistCollectionViewFlowLayout.minimumLineSpacing = collectionViewSpacing
        specialistCollectionViewFlowLayout.minimumInteritemSpacing = collectionViewSpacing
        specialistCollectionView.registerCell(SpecialistCell.self)
        specialistCollectionView
            .rx
            .setDelegate(specialistDelegateFlowLayout)
            .disposed(by: disposeBag)
        
        // Service
        serviceCollectionViewFlowLayout.sectionInset = UIEdgeInsets.zero
        serviceCollectionViewFlowLayout.minimumLineSpacing = 2 * collectionViewSpacing
        serviceCollectionViewFlowLayout.minimumInteritemSpacing = 0
        serviceCollectionView.registerCell(ServiceCell.self)
        serviceCollectionView.delegate = serviceDelegateFlowLayout
        serviceCollectionView.dataSource = self
    }
    
    private func setupRx() {
        viewModel
            .cellsViewModels
            .bind(to: specialistCollectionView
                    .rx
                    .items(cellIdentifier: SpecialistCell.nameOfClass,
                           cellType: SpecialistCell.self)) { _, viewModel, cell in
                cell.configureCell(viewModel)
            }
            .disposed(by: disposeBag)
    }
    
    private func loadData() {
        viewModel.fetchSpecialists()
    }
    
}

// Will be replaced with Rx
extension HomeViewController: UICollectionViewDataSource {
    
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return 6
    }
    
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        if collectionView == specialistCollectionView {
            let cell: SpecialistCell = collectionView.dequeueReusableCell(for: indexPath)
            return cell
        } else {
            let cell: ServiceCell = collectionView.dequeueReusableCell(for: indexPath)
            return cell
        }
    }
    
}
