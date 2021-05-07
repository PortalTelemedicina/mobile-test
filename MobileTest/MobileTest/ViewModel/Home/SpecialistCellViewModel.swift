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
    
    init(_ specialist: SpecialistType) {
        self.name = specialist.name
        self.numberOfDoctors = "\(specialist.total) doctor\(specialist.total > 1 ? "" : "s")"
        self.color = specialist.color ?? UIColor.white
        self.type = Type(rawValue: self.name)
    }
}
