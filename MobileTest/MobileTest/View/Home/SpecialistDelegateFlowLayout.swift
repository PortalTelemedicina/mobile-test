//
//  SpecialistDelegateFlowLayout.swift
//  MobileTest
//
//  Created by Victor H. Rezende Takai on 02/05/21.
//

import UIKit

class SpecialistDelegateFlowLayout: NSObject, UICollectionViewDelegateFlowLayout {
    
    private var width: CGFloat
    private var height: CGFloat
    private weak var coordinator: HomeCoordinator?
    private weak var viewModel: HomeViewModel?
    
    init(width: CGFloat,
         height: CGFloat,
         coordinator: HomeCoordinator?,
         viewModel: HomeViewModel) {
        self.width = width
        self.height = height
        self.coordinator = coordinator
        self.viewModel = viewModel
    }
    
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        return CGSize(width: width, height: height)
    }
    
    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        if let type = viewModel?.specialistCellViewModels.value[indexPath.row].type {
            coordinator?.showSpecialists(type)
        }
    }
    
}
