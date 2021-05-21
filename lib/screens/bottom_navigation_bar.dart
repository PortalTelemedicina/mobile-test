import 'package:flutter/material.dart';

///Custom bottom bar created to be able to select diferent pages althought on this demo there is just one page
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
