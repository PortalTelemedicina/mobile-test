import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:mobile_test/styles/colors.dart';

class CardSpecialist extends StatelessWidget {
  final String iconAsset;
  final String specialty;
  final int quantity;
  final Color colorBackground;
  final void Function() onTap;

  const CardSpecialist(
      {Key key,
      this.iconAsset,
      this.specialty,
      this.quantity,
      this.colorBackground,
      this.onTap})
      : super(key: key);
  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;

    return GestureDetector(
      onTap: onTap,
      child: Padding(
        padding: const EdgeInsets.all(6.0),
        child: Container(
          decoration: BoxDecoration(
              color: colorBackground, borderRadius: BorderRadius.circular(10)),
          child: Column(
            children: <Widget>[
              Expanded(
                  child: Column(
                mainAxisAlignment: MainAxisAlignment.start,
                //crossAxisAlignment: CrossAxisAlignment.stretch,
                children: <Widget>[
                  Container(
                      padding: EdgeInsets.only(top: 8, bottom: 6),
                      margin: EdgeInsets.only(left: 2, right: 80, top: 10),
                      height: 48,
                      width: 48,
                      decoration: BoxDecoration(
                          color: cBranca,
                          borderRadius: BorderRadius.circular(10)),
                      child: SvgPicture.asset(
                        iconAsset,
                        color: colorBackground,
                      )),
                  Container(
                    alignment: AlignmentDirectional.centerStart,
                    padding: EdgeInsets.only(top: 8),
                    margin: EdgeInsets.only(left: 13),
                    child: Text(
                      specialty,
                      textAlign: TextAlign.left,
                      style: TextStyle(
                        color: cBranca,
                        fontSize: 20.0,
                        fontFamily: 'SegoeUIsb',
                      ),
                    ),
                  ),
                  Container(
                    alignment: AlignmentDirectional.centerStart,
                    padding: EdgeInsets.only(top: 2),
                    margin: EdgeInsets.only(left: 13),
                    child: Text(
                      quantity.toString() + ' Doctors',
                      textAlign: TextAlign.left,
                      style: TextStyle(
                          color: cBranca,
                          fontSize: 16.0,
                          fontFamily: 'SegoeUI',
                          fontWeight: FontWeight.normal),
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
