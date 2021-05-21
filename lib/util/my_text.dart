import 'package:flutter/material.dart';

///CUstom text callass for a beter usage of the text widget with built in features
class MyText extends StatelessWidget {
  final String text;
  final Color? color;
  final double? size;
  final FontWeight? fontWeight;
  final TextDirection? textDirection;
  final TextAlign? textAlign;
  final TextOverflow? overflow;
  final int? maxLines;
  final EdgeInsets? margin;
  const MyText(
    this.text, {
    Key? key,
    this.color,
    this.size = 15,
    this.fontWeight,
    this.textDirection,
    this.textAlign,
    this.margin,
    this.maxLines,
    this.overflow,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: margin,
      child: Text(
        text,
        textScaleFactor: globalTextScaleFactor,
        // textScaleFactor: 0.5,
        style: TextStyle(
          color: color,
          fontSize: size,
          fontWeight: fontWeight,
        ),
        textAlign: textAlign,
        textDirection: textDirection,
        overflow: overflow,
        maxLines: maxLines,
      ),
    );
  }

  static double globalTextScaleFactor = .85;
  void getScreenSizeAndFixTextFactor(BuildContext context) {
    // ignore: non_constant_identifier_names
    final MINFACTOR = .8;
    // ignore: non_constant_identifier_names
    final MAXFACTOR = 1.0;
    double factor = MediaQuery.of(context).size.width / 411.42;
    if (factor > MAXFACTOR) factor = MAXFACTOR;
    if (factor < MINFACTOR) factor = MINFACTOR;
    globalTextScaleFactor = factor;
  }
}
