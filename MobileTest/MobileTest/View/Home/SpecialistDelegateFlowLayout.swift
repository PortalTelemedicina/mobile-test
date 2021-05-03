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
    
    init(width: CGFloat, height: CGFloat) {
        self.width = width
        self.height = height
    }
    
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        return CGSize(width: width, height: height)
    }
    
}
