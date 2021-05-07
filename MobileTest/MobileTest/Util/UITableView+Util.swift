//
//  UITableView+Utils.swift
//  MobileTest
//
//  Created by Victor H. Rezende Takai on 06/05/21.
//

import UIKit

extension UITableView {
    
    func dequeueReusableCell<T: UITableViewCell>(for indexPath: IndexPath) -> T {
        guard let cell = dequeueReusableCell(withIdentifier: T.nameOfClass, for: indexPath) as? T else {
            fatalError("Could not dequeue cell with identifier: \(T.nameOfClass)")
        }
        return cell
    }
    
    func dequeueReusableHeaderFooterView<T: UITableViewHeaderFooterView>() -> T {
        guard let header = dequeueReusableHeaderFooterView(withIdentifier: T.nameOfClass) as? T else {
            fatalError("Could not dequeue header with identifier: \(T.nameOfClass)")
        }
        return header
    }
    
    func registerCell<T: UITableViewCell>(_ type: T.Type) {
        let nib = UINib(nibName: T.nameOfClass, bundle: nil)
        register(nib, forCellReuseIdentifier: T.nameOfClass)
    }
    
    func registerHeaderFooter<T: UITableViewHeaderFooterView>(_ type: T.Type) {
        let nib = UINib(nibName: T.nameOfClass, bundle: nil)
        register(nib, forHeaderFooterViewReuseIdentifier: T.nameOfClass)
    }
    
    func addContentSizeObserver<T: UIViewController>(_ viewController: T) {
        addObserver(viewController, forKeyPath: "contentSize", options: .new, context: nil)
    }
    
    func scrollToFirstRow(animated: Bool = true) {
        if numberOfSections > 0 && numberOfRows(inSection: 0) > 0 {
            scrollToRow(at: IndexPath(row: 0, section: 0), at: .top, animated: animated)
        }
    }
        
}
