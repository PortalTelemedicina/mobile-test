//
//  SpecialistCellViewModel.swift
//  MobileTest
//
//  Created by Victor H. Rezende Takai on 03/05/21.
//

import UIKit

enum Type: String {
    case heart = "Heart Specialist"
    case dentalCare = "Dental Care"
    case dermatology = "Dermatology Specialist"
}

struct SpecialistCellViewModel {
    let name: String
    let numberOfDoctors: String
    let color: UIColor
    let type: Type?
    
    init(_ model: SpecialistType) {
        self.name = model.name
        self.numberOfDoctors = "\(model.total) doctor\(model.total > 1 ? "" : "s")"
        self.color = model.color ?? UIColor.white
        self.type = Type(rawValue: self.name)
    }
}
