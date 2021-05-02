//
//  Container.swift
//  MobileTest
//
//  Created by Victor H. Rezende Takai on 01/05/21.
//

import Foundation
import Swinject

extension Container {
    static let shared: Container = {
        let container = Container()
        container.register(HomeViewController.self) { _ in
            HomeViewController()
        }
        container.register(ChatViewController.self) { _ in
            ChatViewController()
        }
        container.register(NotificationsViewController.self) { _ in
            NotificationsViewController()
        }
        container.register(MoreViewController.self) { _ in
            MoreViewController()
        }
        return container
    }()
}
