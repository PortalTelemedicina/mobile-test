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
        
        // Home
        container.register(SpecialistRemoteRepository.self) { _ -> SpecialistRemoteRepository in
            SpecialistRemoteRepository()
        }
        container.register(HomeViewModel.self) { r in
            HomeViewModel(repository: r.resolve(SpecialistRemoteRepository.self)!)
        }
        container.register(HomeViewController.self) { r in
            HomeViewController(viewModel: r.resolve(HomeViewModel.self)!)
        }
        
        // Chat
        container.register(ChatViewController.self) { _ in
            ChatViewController()
        }
        
        // Notifications
        container.register(NotificationsViewController.self) { _ in
            NotificationsViewController()
        }
        
        // More
        container.register(MoreViewController.self) { _ in
            MoreViewController()
        }
        return container
    }()
}
