//
//  SpecialistTarget.swift
//  MobileTest
//
//  Created by Victor H. Rezende Takai on 03/05/21.
//

import Foundation
import Moya

enum SpecialistTarget {
    case homeSpecialists
    case heartSpecialists
    case dermatologySpecialists
    case dentalCareSpecialists
}

extension SpecialistTarget: TargetType {
    
    var baseURL: URL {
        return URL(string: "https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/api")!
    }
    
    var path: String {
        switch self {
        case .homeSpecialists:
            return "/home_specialists.json"
        case .heartSpecialists:
            return "/list_specialist_heart.json"
        case .dentalCareSpecialists:
            return "/list_specialist_dental_care.json"
        case .dermatologySpecialists:
            return "/list_specialist_dermatology.json"
        }
    }
    
    var method: Moya.Method {
        return .get
    }
    
    var sampleData: Data {
        switch self {
        case .homeSpecialists:
            return [SpecialistType].fromJSON("home_specialists.json")
        case .heartSpecialists:
            return [SpecialistType].fromJSON("list_specialist_heart.json")
        case .dentalCareSpecialists:
            return [SpecialistType].fromJSON("list_specialist_denta_care.json")
        case .dermatologySpecialists:
            return [SpecialistType].fromJSON("list_specialist_dermatology.json")
        }
    }
    
    var task: Task {
        return .requestPlain
    }
    
    var headers: [String : String]? {
        return ["Content-type": "application/json"]
    }
    
    var validationType: ValidationType {
        return ValidationType.successCodes
    }
    
}
