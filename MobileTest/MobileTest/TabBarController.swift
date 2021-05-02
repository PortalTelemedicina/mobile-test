//
//  TabBarController.swift
//  MobileTest
//
//  Created by Victor H. Rezende Takai on 02/05/21.
//

import UIKit

class TabBarController: UITabBarController {
    
    let homeCoordinator = HomeCoordinator(UINavigationController())
    let chatCoordinator = ChatCoordinator(UINavigationController())
    let notificationsCoordinator = NotificationsCoordinator(UINavigationController())
    let moreCoordinator = MoreCoordinator(UINavigationController())

    override func viewDidLoad() {
        super.viewDidLoad()

        homeCoordinator.start()
        chatCoordinator.start()
        notificationsCoordinator.start()
        moreCoordinator.start()
        
        viewControllers = [
            homeCoordinator.navigationController,
            chatCoordinator.navigationController,
            notificationsCoordinator.navigationController,
            moreCoordinator.navigationController
        ]
        
        tabBar.isTranslucent = false
    }
    
}
