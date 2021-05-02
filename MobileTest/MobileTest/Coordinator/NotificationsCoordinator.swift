//
//  NotificationsCoordinator.swift
//  MobileTest
//
//  Created by Victor H. Rezende Takai on 02/05/21.
//

import Foundation
import UIKit
import Swinject

class NotificationsCoordinator: Coordinator {
    var childCoordinator: [Coordinator] = []
    var navigationController: UINavigationController
    
    init(_ navigationController: UINavigationController) {
        self.navigationController = navigationController
    }
    
    func start() {
        let viewController = Container.shared.resolve(NotificationsViewController.self)!
        viewController.tabBarItem = UITabBarItem(tabBarSystemItem: .contacts, tag: 2)
        viewController.coordinator = self
        navigationController.pushViewController(viewController, animated: true)
    }
}
