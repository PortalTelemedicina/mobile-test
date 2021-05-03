import 'package:flutter/material.dart';
import 'package:mobile_test/ui/lista_profissionais.dart';
import 'package:mobile_test/ui/principal.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Portal Telemedicina',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        initialRoute: '/',
        routes: {
          '/': (context) => Principal(),
          '/lista': (context) => ListaProfissionais()
        });
  }
}
