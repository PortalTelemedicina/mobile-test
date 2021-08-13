//
//  SVGProcessor.swift
//  MobileTest
//
//  Created by Victor H. Rezende Takai on 09/05/21.
//

import UIKit
import Kingfisher
import SVGKit

struct SVGImgProcessor:ImageProcessor {
    var identifier: String = "com.appidentifier.webpprocessor"
    func process(item: ImageProcessItem, options: KingfisherParsedOptionsInfo) -> KFCrossPlatformImage? {
        switch item {
        case .image(let image):
            return image
        case .data(let data):
            let imsvg = SVGKImage(data: data)
            return imsvg?.uiImage
        }
    }
}
