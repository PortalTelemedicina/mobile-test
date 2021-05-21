import 'package:flutter/material.dart';
import 'package:mobile_test_daniel_vofchuk/screens/home/home.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        fontFamily: 'Segoe UI',
      ),
      home: HomePage(),
    );
  }
}
