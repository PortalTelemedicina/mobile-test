import 'dart:convert';

import 'package:get/get.dart';
import 'package:http/http.dart' as http;
import 'package:test_telemedicina/repository/datasource/constants.dart';
import 'package:test_telemedicina/repository/entities/specialist.dart';

class SpecialistsDatasource {
  final RxList<Specialist> _specialistsData = <Specialist>[].obs;

  RxList<Specialist> get specialists => _specialistsData;

  void updateData() async {
    final String endpoint = '/home_specialists.json';
    final Uri url = Uri.parse(baseUrl + endpoint);
    final http.Response response = await http.get(url);
    final List _json = jsonDecode(response.body);
    final List<Specialist> _specialists = Specialist.fromList(_json);
    _specialistsData.value = _specialists;
  }
}
