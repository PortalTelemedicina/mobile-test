import 'package:flutter/material.dart';
import 'package:mobile_test/styles/colors.dart';

class CarregaPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.white,
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Hero(
              tag: 'Logo',
              child: Image.asset("icons/telemedica-logomarca.png", scale: 1),
            ),
            Padding(
              padding: EdgeInsets.only(
                  top: MediaQuery.of(context).size.height * 0.05),
              child: CircularProgressIndicator(
                  valueColor: AlwaysStoppedAnimation<Color>(cPetroleo)),
            )
          ],
        ),
      ),
    );
  }
}
