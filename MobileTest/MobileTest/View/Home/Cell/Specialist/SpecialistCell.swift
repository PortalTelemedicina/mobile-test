//
//  SpecialistCell.swift
//  MobileTest
//
//  Created by Victor H. Rezende Takai on 02/05/21.
//

import UIKit
import Kingfisher

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
        imageView.kf.indicatorType = .activity
        (imageView.kf.indicator?.view as? UIActivityIndicatorView)?.color = UIColor(named: "appBlack")!
        (imageView.kf.indicator?.view as? UIActivityIndicatorView)?.style = .large
        if let imageURL = viewModel.imageURL {
            imageView.kf.setImage(with: imageURL,
                                  options: [.transition(.fade(0.2)),
                                            .processor(SVGImgProcessor())])
        }
    }

}
