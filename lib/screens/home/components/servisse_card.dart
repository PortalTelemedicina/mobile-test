import 'package:flutter/material.dart';
import 'package:mobile_test_daniel_vofchuk/util/icon.dart';

import '../../../models/servisse_model.dart';
import '../../../util/my_text.dart';

class ServisseCard extends StatelessWidget {
  final Servisse servisse;
  final bool isSelected;
  final VoidCallback? onTap;
  const ServisseCard({
    Key? key,
    this.isSelected = false,
    required this.servisse,
    this.onTap,
  }) : super(key: key);

  // ServisseCard setHeight(double height) {
  //   this.
  //   return this;
  // }

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 140,
      height: 140,
      decoration: BoxDecoration(
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
      ),
      child: Material(
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

  Column _buildContent() {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        SizedBox(
          child: MyIcon(
            icon: servisse.image.icon,
            color: isSelected ? Colors.white : Colors.black,
          ),
          height: 40,
        ),
        SizedBox(
          height: 12,
        ),
        Hero(
          tag: servisse.title,
          child: MyText(
            servisse.title,
            color: isSelected ? Colors.white : Colors.black,
            fontWeight: FontWeight.bold,
            size: 20,
          ),
        )
      ],
    );
  }
}
