// This is a basic Flutter widget test.
//
// To perform an interaction with a widget in your test, use the WidgetTester
// utility that Flutter provides. For example, you can send tap and scroll
// gestures. You can also use WidgetTester to find child widgets in the widget
// tree, read text, and verify that the values of widget properties are correct.

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  final int index0 = 0;
  final int index1 = 3;
  final int index2 = 13;
  final int index3 = 31;

  test(
    "Should get the color value looping inside it's length",
    () {
      expect(_colors[_getColorIndex(index0)], _colors[0]);
      expect(_colors[_getColorIndex(index1)], _colors[3]);
      expect(_colors[_getColorIndex(index2)], _colors[5]);
      expect(_colors[_getColorIndex(index3)], _colors[7]);
    },
  );
}

final List<Color> _colors = [
  Color(0xffca49e5),
  Color(0xff7349e5),
  Color(0xfff6af3d),
  Color(0xffe5485e),
  Color(0xff504c4c),
  Color(0xff4b5568),
  Color(0xff7c8494),
  Color(0xff4d484e),
];

int _getColorIndex(int index) {
  if (index < _colors.length) {
    return index;
  } else {
    final int newIndex = index - _colors.length;
    return _getColorIndex(newIndex);
  }
}
