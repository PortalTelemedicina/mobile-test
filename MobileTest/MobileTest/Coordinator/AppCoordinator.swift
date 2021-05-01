//
//  AppCoordinator.swift
//  MobileTest
//
//  Created by Victor H. Rezende Takai on 01/05/21.
//

import Foundation
import UIKit
import Swinject

class AppCoordinator: Coordinator {
    var childCoordinator: [Coordinator] = []
    var navigationController: UINavigationController
    
    init(navigationController: UINavigationController) {
        self.navigationController = navigationController
    }
    
    func start() {
        let rootViewController = Container.shared.resolve(HomeViewController.self)!
        navigationController.pushViewController(rootViewController, animated: true)
    }
}
