//
//  DoctorCellViewModel.swift
//  MobileTest
//
//  Created by Victor H. Rezende Takai on 08/05/21.
//

import Foundation

class DoctorCellViewModel {
    let initials: String
    let name: String
    let distance: String
    let description: String
    let isChatEnabled: Bool
    let isCallEnabled: Bool
    
    init(_ model: Specialist) {
        self.initials = model.name
            .components(separatedBy: " ")
            .map { $0.prefix(1) }
            .joined()
            .uppercased()
        self.name = model.name
        self.description = model.description
        self.distance = "Nearby \(model.distance ?? 0) miles"
        self.isChatEnabled = model.actions?.chat != nil
        self.isCallEnabled = model.actions?.call != nil
    }
    
}
