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
    @IBOutlet weak var chatButton: UIButton!
    @IBOutlet weak var callButton: UIButton!
    
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }
    
}
