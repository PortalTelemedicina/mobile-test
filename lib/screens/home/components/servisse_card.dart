import 'package:flutter/material.dart';

import '../../../models/servisse_model.dart';
import '../../../util/icon.dart';
import '../../../util/my_text.dart';

///UI obj for displaing the servisse, it receives an servisse obj and create the needed UI
class ServisseCard extends StatelessWidget {
  final Servisse servisse;

  ///this flag is used to set the colors of the selected card
  final bool isSelected;

  /// to handle the logic of with card is selected
  final VoidCallback? onTap;

  const ServisseCard({
    Key? key,
    this.isSelected = false,
    required this.servisse,
    this.onTap,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 140,
      height: 140,
      decoration: _decoration(),
      child: Material(
        ///display the "material" animation when pressed
        color: Colors.transparent,
        child: InkWell(
          onTap: onTap,
          borderRadius: BorderRadius.circular(12),
          child: Center(
            child: _buildContent(),
          ),
        ),
      ),
    );
  }

  BoxDecoration _decoration() {
    return BoxDecoration(
      color: isSelected ? Color(0xffca49e5) : Colors.white,
      borderRadius: BorderRadius.circular(12),
      boxShadow: [
        BoxShadow(
          spreadRadius: 1,
          blurRadius: 4,
          color: Colors.grey.withOpacity(.4),
          offset: Offset(2, 2),
        ),
      ],
    );
  }

  Column _buildContent() {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        SizedBox(
          child: MyIcon(
            icon: servisse.image.icon,
            color: isSelected
                ? Colors.white
                : Colors
                    .black, //Display the collor depending on the selected status
          ),
          height: 40,
        ),
        SizedBox(
          height: 12,
        ),
        Hero(
          //A hero animation when opening the page
          tag: servisse.title,
          child: MyText(
            servisse.title,
            color: isSelected
                ? Colors.white
                : Colors
                    .black, //Display the collor depending on the selected status
            fontWeight: FontWeight.bold,
            size: 20,
          ),
        )
      ],
    );
  }
}
