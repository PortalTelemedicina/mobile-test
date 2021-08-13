//
//  HeartSpecialist.swift
//  MobileTest
//
//  Created by Victor H. Rezende Takai on 03/05/21.
//

import Foundation

struct Specialist: Decodable {
    var name: String
    var description: String
    var distance: Float?
    var actions: Actions?
}
