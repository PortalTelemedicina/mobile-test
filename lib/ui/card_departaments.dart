import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:mobile_test/styles/colors.dart';

class CardDepartments extends StatelessWidget {
  final String iconAsset;
  final String specialty;
  final Color colorText;
  final Color colorBackground;
  final void Function() onTap;

  const CardDepartments(
      {Key key,
      this.iconAsset,
      this.specialty,
      this.colorText,
      this.colorBackground,
      this.onTap})
      : super(key: key);
  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;

    return GestureDetector(
      onTap: onTap,
      child: Padding(
        padding: const EdgeInsets.all(2.0),
        child: Container(
          alignment: Alignment.center,
          decoration: BoxDecoration(
              color: colorBackground, borderRadius: BorderRadius.circular(6)),
          child: Column(
            children: <Widget>[
              Expanded(
                  child: Column(
                mainAxisAlignment: MainAxisAlignment.start,
                children: <Widget>[
                  Container(
                      padding: EdgeInsets.only(top: 8, bottom: 6),
                      margin: EdgeInsets.only(top: 20),
                      height: 48,
                      width: 48,
                      child: SvgPicture.asset(
                        iconAsset,
                        color: colorText,
                      )),
                  Container(
                    alignment: AlignmentDirectional.center,
                    padding: EdgeInsets.only(top: 8),
                    child: Text(
                      specialty,
                      textAlign: TextAlign.left,
                      style: TextStyle(
                        color: colorText,
                        fontSize: 16.0,
                        fontFamily: 'SegoeUIsb',
                      ),
                    ),
                  ),
                ],
              ))
            ],
          ),
        ),
      ),
    );
  }
}
