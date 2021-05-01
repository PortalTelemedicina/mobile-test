//
//  Coordinator.swift
//  MobileTest
//
//  Created by Victor H. Rezende Takai on 01/05/21.
//

import Foundation
import UIKit

protocol Coordinator {
    var childCoordinator: [Coordinator] { get set }
    var navigationController: UINavigationController { get set }
    
    func start()
}
