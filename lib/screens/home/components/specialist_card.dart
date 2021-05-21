import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

import '../../../util/my_text.dart';
import '../../specialists/specialists_page.dart';

///UI obj for displaing the top cards, it receives the information and create the needed UI
class SpecialistCard extends StatelessWidget {
  //All items are null-safe
  final String title;
  final String image;
  final Color color;
  final int docNum;

  const SpecialistCard({
    Key? key,
    required this.title,
    required this.image,
    this.color = Colors.black,
    this.docNum = 0,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 150,
      height: double.infinity,
      margin: const EdgeInsets.symmetric(horizontal: 12, vertical: 12),
      decoration: _buildBoxDecoration(),
      child: _buildContent(context),
    );
  }

  Material _buildContent(BuildContext context) {
    return Material(
      color: Colors.transparent,
      //creates the material effect when pressing the button
      child: InkWell(
        onTap: () => Navigator.of(context).push(
          MaterialPageRoute(
            builder: (context) => SpecialistsPage(
              title: title,
            ),
          ),
        ),
        borderRadius: BorderRadius.circular(18),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            _buildIconBox(),
            Hero(
              //Hero animation for a smouth transition between pages
              tag: title,
              child: MyText(
                title.replaceAll(' ', '\n'),
                margin: const EdgeInsets.symmetric(horizontal: 12),
                maxLines: 2,
                size: 23,
                color: Colors.white,
                fontWeight: FontWeight.bold,
              ),
            ),
            MyText(
              '$docNum Doctors',
              size: 18,
              color: Colors.white,
              margin: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
            )
          ],
        ),
      ),
    );
  }

  BoxDecoration _buildBoxDecoration() {
    return BoxDecoration(
      color: color,
      borderRadius: BorderRadius.circular(18),
      boxShadow: [
        BoxShadow(
          spreadRadius: 1,
          blurRadius: 8,
          color: Colors.grey.withOpacity(.6),
          offset: Offset(2, 2),
        ),
      ],
    );
  }

  Container _buildIconBox() {
    return Container(
      width: 50,
      height: 60,
      padding: const EdgeInsets.all(8),
      margin: const EdgeInsets.all(18),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(10),
      ),
      child: Center(
        child: SvgPicture.asset(
          image,
          color: color,
        ),
      ),
    );
  }
}
