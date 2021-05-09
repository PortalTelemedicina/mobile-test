//
//  DoctorCell.swift
//  MobileTest
//
//  Created by Victor H. Rezende Takai on 06/05/21.
//

import UIKit

class DoctorCell: UITableViewCell {

    @IBOutlet weak var initialsView: CustomView!
    @IBOutlet weak var initialsLabel: UILabel!
    @IBOutlet weak var nameLabel: UILabel!
    @IBOutlet weak var distanceLabel: UILabel!
    @IBOutlet weak var descriptionLabel: UILabel!
    @IBOutlet weak var chatButton: UIButton! {
        didSet {
            setupButton(chatButton)
        }
    }
    @IBOutlet weak var callButton: UIButton! {
        didSet {
            setupButton(callButton)
        }
    }
    
    func configureCell(_ viewModel: DoctorCellViewModel) {
        initialsLabel.text = viewModel.initials
        nameLabel.text = viewModel.name
        distanceLabel.text = viewModel.distance
        descriptionLabel.text = viewModel.description
        chatButton.isEnabled = viewModel.isChatEnabled
        callButton.isEnabled = viewModel.isCallEnabled
    }
    
    private func setupButton(_ button: UIButton) {
        button.clipsToBounds = true
        button.layer.cornerRadius = 16
        button.layer.borderWidth = 0.5
        button.layer.borderColor = UIColor(named: "appGray")!.cgColor
    }

}
