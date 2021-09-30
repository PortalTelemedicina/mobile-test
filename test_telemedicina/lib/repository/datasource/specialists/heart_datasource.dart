import 'dart:convert';
import '../constants.dart';

import 'package:http/http.dart' as http;
import 'package:test_telemedicina/repository/datasource/specialists/interface/specialists_interface.dart';
import 'package:test_telemedicina/repository/use_cases/cardiologist.dart';


class HeartDatasource extends SpecialistsCommonDatasource {
  @override
  Future<void> updateData({bool delay = false}) async {
    try {
      super.specialistData.clear();

      ///Delay to show loadng status
      await Future.delayed(Duration(seconds: 3));

      final String _endpoint = '/list_specialist_heart.json';
      final Uri _url = Uri.parse(baseUrl + _endpoint);
      final http.Response _response = await http.get(_url);

      if (_response.statusCode > 204) {
        return setErrorStatus(_response.body, status: _response.statusCode);
      }

      final List _json = jsonDecode(_response.body);
      final List<Cardiologist> _specialistsList =
          CardiologistModel.fromList(_json);

      super.specialistData.value = _specialistsList;
    } catch (e) {
      setErrorStatus(e.toString());
    }
  }

  @override
  void setErrorStatus(String error, {int status = 500}) {
    super.specialistData.clear();
    super.specialistData.add(CardiologistError(error, statusCode: status));
  }
}
