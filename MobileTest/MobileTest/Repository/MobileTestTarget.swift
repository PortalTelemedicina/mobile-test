//
//  MobileTestTarget.swift
//  MobileTest
//
//  Created by Victor H. Rezende Takai on 03/05/21.
//

import Foundation
import Moya

enum MobileTestTarget {
    case homeSpecialists
    case heartSpecialists
    case dermatologySpecialists
    case dentalCareSpecialists
}

extension MobileTestTarget: TargetType {
    
    var baseURL: URL {
        return URL(string: "https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/api")!
    }
    
    var path: String {
        switch self {
        case .homeSpecialists:
            return "/home_specialists"
        case .heartSpecialists:
            return "/list_specialist_heart"
        case .dentalCareSpecialists:
            return "/list_specialist_dental_care"
        case .dermatologySpecialists:
            return "/list_specialist_dermatology"
        }
    }
    
    var method: Moya.Method {
        return .get
    }
    
    var sampleData: Data {
        return Data()
    }
    
    var task: Task {
        return .requestPlain
    }
    
    var headers: [String : String]? {
        return ["Content-type": "application/json"]
    }
    
}
