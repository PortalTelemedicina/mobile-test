//
//  HomeSpecialist.swift
//  MobileTest
//
//  Created by Victor H. Rezende Takai on 03/05/21.
//

import UIKit

struct SpecialistType {
    var name: String
    var imageURL: URL?
    var total: Int
    var color: UIColor?
}

extension SpecialistType: Decodable {

    enum CodingKeys: String, CodingKey {
        case name
        case imageURL = "image_url"
        case total
        case color
    }
    
    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        self.name = try container.decode(String.self, forKey: .name)
        self.imageURL = URL(string: try container.decode(String.self, forKey: .imageURL))
        self.total = try container.decode(Int.self, forKey: .total)
        self.color = UIColor.init(hex: try container.decode(String.self, forKey: .color))
    }
    
}
