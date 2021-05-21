import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:mobile_test_daniel_vofchuk/screens/specialists/specialists_page.dart';
import 'package:mobile_test_daniel_vofchuk/util/my_text.dart';

class SpecialistCard extends StatelessWidget {
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
      decoration: BoxDecoration(
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
      ),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: () => Navigator.of(context).push(MaterialPageRoute(
            builder: (context) => SpecialistsPage(
              title: title,
            ),
          )),
          borderRadius: BorderRadius.circular(18),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              _buildIconBox(),
              MyText(
                title.replaceAll(' ', '\n'),
                margin: const EdgeInsets.symmetric(horizontal: 12),
                maxLines: 2,
                size: 23,
                color: Colors.white,
                fontWeight: FontWeight.bold,
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
      ),
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
