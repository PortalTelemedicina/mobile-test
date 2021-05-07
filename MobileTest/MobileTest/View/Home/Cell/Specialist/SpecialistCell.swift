//
//  SpecialistCell.swift
//  MobileTest
//
//  Created by Victor H. Rezende Takai on 02/05/21.
//

import UIKit

class SpecialistCell: UICollectionViewCell {

    @IBOutlet weak var view: CustomView!
    @IBOutlet weak var imageView: CustomImageView!
    @IBOutlet weak var titleLabel: UILabel!
    @IBOutlet weak var subLabel: UILabel!
    
    static let width: CGFloat = 150
    static let height: CGFloat = 200
    
    func configureCell(_ viewModel: SpecialistCellViewModel) {
        titleLabel.text = viewModel.name
        subLabel.text = viewModel.numberOfDoctors
        view.backgroundColor = viewModel.color
        imageView.tintColor = viewModel.color
    }

}
