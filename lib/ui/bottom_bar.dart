import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:mobile_test/styles/colors.dart';

Widget bottomBar(BuildContext context) {
  return BottomNavigationBar(
    selectedItemColor: Theme.of(context).accentColor,
    type: BottomNavigationBarType.shifting,
    showUnselectedLabels: true,
    unselectedItemColor: Colors.grey,
    items: [
      BottomNavigationBarItem(
          icon: Icon(
            Icons.home_outlined,
          ),
          label: 'Home'),
      BottomNavigationBarItem(
          icon: Container(
            width: 35,
            child: Stack(
              children: <Widget>[
                Icon(Icons.chat_bubble_outline),
                Positioned(
                  right: 0,
                  child: Container(
                    padding: EdgeInsets.all(1),
                    decoration: BoxDecoration(
                      color: Colors.red,
                      borderRadius: BorderRadius.circular(6),
                    ),
                    constraints: BoxConstraints(
                      minWidth: 12,
                      minHeight: 12,
                    ),
                    child: Text(
                      '1',
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 9,
                      ),
                      textAlign: TextAlign.center,
                    ),
                  ),
                )
              ],
            ),
          ),
          label: 'Chats'),
      BottomNavigationBarItem(
          icon: Icon(
            Icons.notifications_none_sharp,
          ),
          label: 'Notifications'),
      BottomNavigationBarItem(
          icon: SvgPicture.asset(
            'icons/menu.svg',
            color: cCinza,
            height: 22,
            width: 22,
          ),
          label: 'More'),
    ],
  );
}
