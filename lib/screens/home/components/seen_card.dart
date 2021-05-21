import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:mobile_test_daniel_vofchuk/util/my_text.dart';

class NeedCard extends StatelessWidget {
  final bool isSelected;
  final String image, title;
  const NeedCard({
    Key? key,
    this.isSelected = false,
    this.image = 'icons/stethoscope.svg', //TODO: change to required
    this.title = 'Diagnostic', //TODO: change  to required
  }) : super(key: key);

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
      child: Center(
        child: _buildContent(),
      ),
    );
  }

  Column _buildContent() {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        SvgPicture.asset(
          image,
          height: 40,
        ),
        SizedBox(
          height: 12,
        ),
        MyText(
          title,
          color: isSelected ? Colors.white : Colors.black,
        )
      ],
    );
  }
}
