import 'package:connectivity/connectivity.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:mobile_test/models/professionals.dart';

class Singleton {
  static Singleton _instance;
  ProfessionalsModel profissionais = ProfessionalsModel();
  bool conectado;
  int nroAvisos;

  static Singleton getInstance() {
    if (_instance == null) _instance = Singleton();
    return _instance;
  }

  static Future<bool> isConnected(BuildContext context) async {
    ConnectivityResult status = ConnectivityResult.none;
    try {
      status = await new Connectivity().checkConnectivity();
      if (status == ConnectivityResult.mobile ||
          status == ConnectivityResult.wifi) {
        return true;
      }
    } on PlatformException catch (exception_isConnected) {
      showDialog(
          context: context,
          builder: (context) => Text("Aconteceu algo errado. Detalhes: " +
              exception_isConnected.toString()));
    }
    return false;
  }
}
