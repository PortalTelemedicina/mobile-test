import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

import 'servisses.dart';

///Custom class that holds the svg file and create the icon to be used all over the app
class MyIcon extends StatelessWidget {
  final LocalIcons icon;
  final double? size;
  final Color? color;

  MyIcon({
    Key? key,
    required this.icon,
    this.size,
    this.color,
  }) : super(key: key);
  @override
  Widget build(BuildContext context) {
    String fileName = describeEnum(icon).toLowerCase().replaceAll("_", "-");
    String path = 'icons/$fileName' + '.svg';
    return SvgPicture.asset(
      path,
      height: size,
      color: color,
    );
  }
}
