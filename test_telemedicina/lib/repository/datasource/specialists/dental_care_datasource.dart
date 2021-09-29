import 'dart:convert';

import 'package:get/get.dart';
import 'package:http/http.dart' as http;
import 'package:test_telemedicina/repository/datasource/constants.dart';
import 'package:test_telemedicina/repository/datasource/specialists/specialists_common_datasource.dart';
import 'package:test_telemedicina/repository/use_cases/dental_care.dart';

class DentalCareDatasource extends SpecialistsCommonDatasource {
  final RxList<DentalCare> _specialistsData = <DentalCare>[].obs;

  RxList<DentalCare> get specialists => _specialistsData;

  @override
  Future<void> updateData({bool delay = false}) async {
    try {
      _specialistsData.clear();

      if (delay) await Future.delayed(Duration(seconds: 3));

      final String _endpoint = '/list_specialist_dermatology.json';
      final Uri _url = Uri.parse(baseUrl + _endpoint);
      final http.Response _response = await http.get(_url);

      if (_response.statusCode > 204) {
        return setErrorStatus(_response.body, status: _response.statusCode);
      }

      final List _json = jsonDecode(_response.body);
      final List<DentalCare> _specialistsList = DentalCareModel.fromList(_json);

      _specialistsData.value = _specialistsList;
    } catch(e) {
      setErrorStatus(e.toString());
    }
  }

  void setErrorStatus(String error, {int status = 500}) {
    _specialistsData.clear();
    _specialistsData.add(DentalCareError(error, statusCode: status));
  }
}
