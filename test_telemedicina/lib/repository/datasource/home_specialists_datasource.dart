import 'dart:convert';

import 'package:get/get.dart';
import 'package:http/http.dart' as http;
import 'package:test_telemedicina/repository/datasource/constants.dart';
import 'package:test_telemedicina/repository/use_cases/home_specialist.dart';

class HomeSpecialistsDatasource {
  RxList<HomeSpecialist> _specialistsData = <HomeSpecialist>[].obs;

  RxList<HomeSpecialist> get specialists => _specialistsData;

  Future updateData({bool delay = false}) async {
    try {
      _specialistsData.clear();

      if (delay) await Future.delayed(Duration(seconds: 3));

      final String endpoint = '/home_specialists.json';
      final Uri url = Uri.parse(baseUrl + endpoint);
      final http.Response response = await http.get(url);

      if (response.statusCode > 204) {
        return setErrorStatus(response.body, status: response.statusCode);
      }

      final List _json = jsonDecode(response.body);
      final List<HomeSpecialistModel> _specialists =
          HomeSpecialistModel.fromList(_json);

      _specialistsData.value = _specialists;
    } catch (e) {
      setErrorStatus(e.toString());
    }
  }

  void setErrorStatus(String error, {int status = 500}) {
    _specialistsData.clear();
    _specialistsData.add(HomeSpecialistError(error, statusCode: status));
  }
}
