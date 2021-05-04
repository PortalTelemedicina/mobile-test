//
//  SpecialistCellViewModel.swift
//  MobileTest
//
//  Created by Victor H. Rezende Takai on 03/05/21.
//

import UIKit

struct SpecialistCellViewModel {
    let type: String
    let numberOfDoctors: String
    let color: UIColor
    
    init(_ specialist: SpecialistType) {
        self.type = specialist.name
        self.numberOfDoctors = "\(specialist.total) doctor\(specialist.total > 1 ? "" : "s")"
        self.color = specialist.color ?? UIColor.white
    }
}
