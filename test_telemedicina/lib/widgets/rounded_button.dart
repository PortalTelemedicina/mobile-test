import 'package:flutter/material.dart';

class RoundedButton extends StatelessWidget {
  final String _label;
  final Function() _onPress;
  final Color textColor, backgroundColor;

  const RoundedButton(
    this._label,
    this._onPress, {
    this.textColor = Colors.white,
    this.backgroundColor = Colors.black54,
  });

  @override
  Widget build(BuildContext context) {
    return MaterialButton(
      onPressed: _onPress,
      child: Text(
        _label,
        style: TextStyle(
          color: textColor,
        ),
      ),
      color: backgroundColor,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(64),
      ),
    );
  }
}
