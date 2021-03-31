import 'package:flutter/material.dart';
import 'package:mobile_test/styles/colors.dart';

final ubycrmTheme1 = _theme1();

ThemeData _theme1() {
  final ThemeData base = ThemeData(fontFamily: 'SegoeUI');
  return base.copyWith(
      primaryColor: Color(0xFFCA49E5),
      primaryColorDark: Color(0xFF183756),
      primaryColorLight: cCinza,
      appBarTheme: AppBarTheme(color: cBranca),
      backgroundColor: Colors.white,
      accentColor: Colors.black);
}
