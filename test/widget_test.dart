// This is a basic Flutter widget test.
//
// To perform an interaction with a widget in your test, use the WidgetTester
// utility that Flutter provides. For example, you can send tap and scroll
// gestures. You can also use WidgetTester to find child widgets in the widget
// tree, read text, and verify that the values of widget properties are correct.

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

import 'package:mobile_test/main.dart';
import 'package:mobile_test/models/professionals.dart';
import 'package:mobile_test/services/api.dart';
import 'package:mobile_test/ui/principal.dart';

class MockAPI extends ApiService {
  @override
  Future<List<ProfessionalsModel>> buscaProfessionalsRemote() {
    return Future.value([
      ProfessionalsModel(name: "Teste 1", distance: 7, description: "desc1"),
      ProfessionalsModel(name: "Teste 2", distance: 3, description: "desc2"),
    ]);
  }
}

void main() {
  Widget principal = new MediaQuery(
      data: MediaQueryData(), child: MaterialApp(home: Principal()));

  testWidgets('check list of professionals with the ProfessionalsModel ',
      (WidgetTester tester) async {
    await tester.pumpWidget(principal);

    // Verifica se há um texto específico na tela
    var listTest = await MockAPI().buscaProfessionalsRemote();
    expect(listTest.length, 2);
  });
}
