import 'dart:convert';

import 'package:mobile_test_daniel_vofchuk/api/api.dart';
import 'package:mobile_test_daniel_vofchuk/models/spesialist.dart';

import 'package:http/http.dart';

class SpecialistApi {
  static Future<List<Specialist>> getSpecialists() async {
    Response res = await Api.call('list_specialist_heart');
    return List.from(jsonDecode(res.body))
        .map((e) => Specialist.fromMap(e))
        .toList();
  }
}
