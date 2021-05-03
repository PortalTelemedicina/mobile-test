//
//  ServiceDelegateFlowLayout.swift
//  MobileTest
//
//  Created by Victor H. Rezende Takai on 02/05/21.
//

import UIKit

class ServiceDelegateFlowLayout: NSObject, UICollectionViewDelegateFlowLayout {
    
    private var spacing: CGFloat
    
    init(_ spacing: CGFloat) {
        self.spacing = spacing
    }

    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        let maxWidth = UIScreen.main.bounds.width - 20
        let width: CGFloat = (maxWidth - (2 * spacing)) / 3
        
        return CGSize(width: width, height: width)
    }

}
