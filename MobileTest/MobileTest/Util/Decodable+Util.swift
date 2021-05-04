//
//  Decodable+Util.swift
//  MobileTest
//
//  Created by Victor H. Rezende Takai on 03/05/21.
//

import Foundation

extension Decodable {
    
    static func fromJSON<T: Decodable>(_ fileName: String, fileExtension: String = "json") -> T? {
        guard let url = Bundle.main.url(forResource: fileName, withExtension: fileExtension) else {
            return nil
        }
        do {
            let data = try Data(contentsOf: url)
            return try JSONDecoder().decode(T.self, from: data)
        } catch {
            print(error)
            return nil
        }
    }
    
    static func fromJSON(_ fileName: String, fileExtension: String = "json") -> Data {
        guard let url = Bundle.main.url(forResource: fileName, withExtension: fileExtension) else {
            fatalError("Error to create URL")
        }
        do {
            return try Data(contentsOf: url)
        } catch {
            print(error)
            fatalError("Error to load json")
        }
    }

}
