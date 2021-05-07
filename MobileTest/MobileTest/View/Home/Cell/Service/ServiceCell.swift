//
//  ServiceCell.swift
//  MobileTest
//
//  Created by Victor H. Rezende Takai on 02/05/21.
//

import UIKit

class ServiceCell: UICollectionViewCell {

    @IBOutlet weak var view: CustomView!
    @IBOutlet weak var imageView: CustomImageView!
    @IBOutlet weak var label: UILabel!
    
    private let selectedBackgroundColor = UIColor(named: "appPurple")!
    private let selectedColor = UIColor.white
    
    private let deselectedBackgroundColor = UIColor.white
    private let deselectedColor = UIColor(named: "appBlack")!
    
    func configureCell(_ viewModel: ServiceCellViewModel) {
        if let image = UIImage(named: viewModel.imageName) {
            imageView.image = image
        }
        label.text = viewModel.name
    }
    
    func showSelected() {
        imageView.tintColor = selectedColor
        label.textColor = selectedColor
        view.backgroundColor = selectedBackgroundColor
    }
    
    func showDeselected() {
        imageView.tintColor = deselectedColor
        label.textColor = deselectedColor
        view.backgroundColor = deselectedBackgroundColor
    }
    
}
