import 'package:flutter/material.dart';

///Custom bottom bar created to be able to select diferent pages althought on this demo there is just one page
///The items for this app bar werem't provided, so I used the iconst that comes with flutter
class BottomBar extends StatefulWidget {
  final VoidCallback? onHomePressed;
  const BottomBar({
    Key? key,
    this.onHomePressed,
  }) : super(key: key);

  @override
  _BottomBarState createState() => _BottomBarState();
}

class _BottomBarState extends State<BottomBar> {
  //saves the internal state of the bottom bar so the animation can whork (even that there is no page for now)
  int index = 0;
  @override
  Widget build(BuildContext context) {
    return BottomNavigationBar(
      currentIndex: index,
      onTap: (value) {
        setState(() {
          if (index == 0) if (widget.onHomePressed != null)
            widget.onHomePressed!();
          index = value;
        });
      },
      showUnselectedLabels: true,
      unselectedItemColor: Colors.grey[700],
      selectedItemColor: Colors.purple,
      items: [
        BottomNavigationBarItem(
            icon: Icon(Icons.open_in_browser_outlined), label: "Home"),
        BottomNavigationBarItem(
            icon: Icon(Icons.chat_bubble_outline), label: "Chats"),
        BottomNavigationBarItem(
            icon: Icon(Icons.flash_on_sharp), label: "Notifications"),
        BottomNavigationBarItem(icon: Icon(Icons.menu), label: "More"),
      ],
    );
  }
}
