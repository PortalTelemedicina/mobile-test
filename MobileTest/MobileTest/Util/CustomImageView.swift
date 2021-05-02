//
//  CustomImageView.swift
//  MobileTest
//
//  Created by Victor H. Rezende Takai on 02/05/21.
//

import UIKit

class CustomImageView: UIImageView {
    
    @IBInspectable
    var templateImageEnabled: Bool = true {
        didSet {
            if let image = self.image {
                super.image = customImage(image)
            }
        }
    }
    
    override var image: UIImage? {
        didSet {
            if let image = self.image {
                super.image = customImage(image)
            }
        }
    }
    
    private func customImage(_ image: UIImage) -> UIImage {
        image.withRenderingMode(templateImageEnabled ? .alwaysTemplate : .alwaysOriginal)
    }
    
}

