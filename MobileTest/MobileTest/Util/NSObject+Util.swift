//
//  NSObject+Util.swift
//  MobileTest
//
//  Created by Victor H. Rezende Takai on 02/05/21.
//

import Foundation

extension NSObject {
    
    class var nameOfClass: String {
        return NSStringFromClass(self).components(separatedBy: ".").last!
    }
    
    var nameOfClass: String {
        return NSStringFromClass(type(of: self)).components(separatedBy: ".").last!
    }
    
}
