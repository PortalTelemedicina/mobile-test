import 'dart:convert';

import 'package:http/http.dart';

import '../models/spesialist.dart';
import 'api.dart';

///Class for handle the specislist repository wiht all calls needed for this specific API
class SpecialistApi {
  static Future<List<Specialist>> getSpecialists() async {
    Response res = await Api.call('list_specialist_heart');
    return List.from(jsonDecode(res.body))
        .map((e) => Specialist.fromMap(
            e)) //Creates the local obj with the data fetched form the API
        .toList(); //Returs the list
  }
}
