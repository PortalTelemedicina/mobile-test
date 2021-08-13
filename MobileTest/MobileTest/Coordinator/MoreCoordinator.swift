//
//  MoreCoordinator.swift
//  MobileTest
//
//  Created by Victor H. Rezende Takai on 02/05/21.
//

import Foundation
import UIKit
import Swinject

class MoreCoordinator: Coordinator {
    var childCoordinator: [Coordinator] = []
    var navigationController: UINavigationController
    
    init(_ navigationController: UINavigationController) {
        self.navigationController = navigationController
    }
    
    func start() {
        let viewController = Container.shared.resolve(MoreViewController.self)!
        viewController.tabBarItem = UITabBarItem(title: "More",
                                                 image: UIImage(named: "menu"),
                                                 tag: 3)
        viewController.coordinator = self
        navigationController.pushViewController(viewController, animated: true)
    }
}
