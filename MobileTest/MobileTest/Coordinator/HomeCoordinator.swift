//
//  AppCoordinator.swift
//  MobileTest
//
//  Created by Victor H. Rezende Takai on 01/05/21.
//

import Foundation
import UIKit
import Swinject

class HomeCoordinator: Coordinator {
    var childCoordinator: [Coordinator] = []
    var navigationController: UINavigationController
    
    init(_ navigationController: UINavigationController) {
        self.navigationController = navigationController
    }
    
    func start() {
        let viewController = Container.shared.resolve(HomeViewController.self)!
        viewController.tabBarItem = UITabBarItem(tabBarSystemItem: .favorites, tag: 0)
        viewController.coordinator = self
        navigationController.pushViewController(viewController, animated: true)
    }
}
