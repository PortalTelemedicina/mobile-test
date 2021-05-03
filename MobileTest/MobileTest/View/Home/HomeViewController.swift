//
//  HomeViewController.swift
//  MobileTest
//
//  Created by Victor H. Rezende Takai on 01/05/21.
//

import UIKit

class HomeViewController: UIViewController {

    weak var coordinator: HomeCoordinator?
    
    @IBOutlet weak var nameLabel: UILabel!
    
    @IBOutlet weak var specialistCollectionView: UICollectionView!
    @IBOutlet weak var specialistCollectionViewFlowLayout: UICollectionViewFlowLayout!
    
    @IBOutlet weak var serviceCollectionView: UICollectionView!
    @IBOutlet weak var serviceCollectionViewFlowLayout: UICollectionViewFlowLayout!
    
    private let collectionViewSpacing: CGFloat = 8
    
    private lazy var serviceDelegateFlowLayout: ServiceDelegateFlowLayout = {
        ServiceDelegateFlowLayout(collectionViewSpacing)
    }()
    
    private lazy var specialistDelegateFlowLayout: SpecialistDelegateFlowLayout = {
        SpecialistDelegateFlowLayout(width: SpecialistCell.width,
                                     height: SpecialistCell.height)
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupCollectionViews()
    }

    private func setupCollectionViews() {
        // Specialist
        specialistCollectionViewFlowLayout.scrollDirection = .horizontal
        specialistCollectionViewFlowLayout.sectionInset = UIEdgeInsets.zero
        specialistCollectionViewFlowLayout.minimumLineSpacing = collectionViewSpacing
        specialistCollectionViewFlowLayout.minimumInteritemSpacing = collectionViewSpacing
        specialistCollectionView.registerCell(SpecialistCell.self)
        specialistCollectionView.delegate = specialistDelegateFlowLayout
        specialistCollectionView.dataSource = self
        
        // Service
        serviceCollectionViewFlowLayout.sectionInset = UIEdgeInsets.zero
        serviceCollectionViewFlowLayout.minimumLineSpacing = 2 * collectionViewSpacing
        serviceCollectionViewFlowLayout.minimumInteritemSpacing = 0
        serviceCollectionView.registerCell(ServiceCell.self)
        serviceCollectionView.delegate = serviceDelegateFlowLayout
        serviceCollectionView.dataSource = self
    }
    
}

// Will be replaced with Rx
extension HomeViewController: UICollectionViewDelegate {
    
    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        // TODO
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
