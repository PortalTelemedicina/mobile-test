import 'dart:convert';

import 'package:get/get.dart';
import 'package:http/http.dart' as http;
import 'package:test_telemedicina/repository/datasource/constants.dart';
import 'package:test_telemedicina/repository/entities/specialist.dart';

class SpecialistsDatasource {
  RxList<Specialist> _specialistsData = <Specialist>[].obs;

  RxList<Specialist> get specialists => _specialistsData;

  Future updateData({bool delay = false}) async {
    try {
      _specialistsData.clear();

      if (delay) await Future.delayed(Duration(seconds: 3));

      final String endpoint = '/home_specialists.json';
      final Uri url = Uri.parse(baseUrl + endpoint);
      final http.Response response = await http.get(url);

      if (response.statusCode > 204) {
        _specialistsData.add(
          SpecialistError(
            response.statusCode,
            response.body,
          ),
        );
        return;
      }

      final List _json = jsonDecode(response.body);
      final List<SpecialistModel> _specialists =
          SpecialistModel.fromList(_json);

      _specialistsData.value = _specialists;
    } catch (e) {
      _specialistsData.add(SpecialistError(500, e.toString()));
    }
  }
}
