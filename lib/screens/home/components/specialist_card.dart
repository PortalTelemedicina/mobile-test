import 'package:flutter/material.dart';

class SpecialistCard extends StatelessWidget {
  final String title;
  final String? image;
  final Color color;
  const SpecialistCard({
    Key? key,
    this.title = 'title not found',
    this.image,
    this.color = Colors.black,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 150,
      height: double.infinity,
      margin: const EdgeInsets.symmetric(horizontal: 6),
      decoration:
          BoxDecoration(color: color, borderRadius: BorderRadius.circular(18)),
    );
  }
}
