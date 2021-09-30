import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:test_telemedicina/repository/datasource/home_specialists_datasource.dart';
import 'package:test_telemedicina/routes/home_ui.dart';

void main() {
  Get.put(HomeSpecialistsDatasource());

  runApp(HomeUI());
}
