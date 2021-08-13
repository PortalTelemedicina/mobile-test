//
//  UICollectionView+Util.swift
//  MobileTest
//
//  Created by Victor H. Rezende Takai on 02/05/21.
//

import UIKit

extension UICollectionView {
    
    enum Kind: String {
        case header = "UICollectionElementKindSectionHeader"
        case footer = "UICollectionElementKindSectionFooter"
    }
    
    func dequeueReusableCell<T: UICollectionViewCell>(for indexPath: IndexPath) -> T {
        guard let cell = dequeueReusableCell(withReuseIdentifier: T.nameOfClass, for: indexPath) as? T else {
            fatalError("Could not dequeue cell with identifier: \(T.nameOfClass)")
        }
        return cell
    }
    
    func dequeuReusableSupplementaryView<T: UICollectionReusableView>(ofKind kind: String, for indexPath: IndexPath) -> T {
        guard let header = dequeueReusableSupplementaryView(ofKind: kind, withReuseIdentifier: T.nameOfClass, for: indexPath) as? T else {
            fatalError("Could not dequeue supplementary view with identifier: \(T.nameOfClass)")
        }
        return header
    }
    
    func registerHeaderFooter<T: UICollectionReusableView>(kind: Kind, _ type: T.Type) {
        let nib = UINib(nibName: type.nameOfClass, bundle: nil)
        
        register(nib, forSupplementaryViewOfKind: kind.rawValue, withReuseIdentifier: type.nameOfClass)
    }
    
    func registerCell<T: UICollectionViewCell>(_ type: T.Type) {
        let nib = UINib(nibName: type.nameOfClass, bundle: nil)
        register(nib, forCellWithReuseIdentifier: type.nameOfClass)
    }
    
    func addContentSizeObserver<T: UIViewController>(_ viewController: T) {
        addObserver(viewController, forKeyPath: "contentSize", options: .new, context: nil)
    }
    
    func scrollToFirstRow(animated: Bool = true) {
        if numberOfSections > 0 && numberOfItems(inSection: 0) > 0 {
            scrollToItem(at: IndexPath(row: 0, section: 0), at: .top, animated: animated)
        }
    }
    
}
