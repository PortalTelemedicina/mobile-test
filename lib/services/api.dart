import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:mobile_test/models/professionals.dart';

class ApiService {
  Future<List<ProfessionalsModel>> buscaProfessionalsRemote() async {
    List<ProfessionalsModel> myModels = [];
    final response = await http.get(Uri.parse(
        'https://raw.githubusercontent.com/PortalTelemedicina/mobile-test/main/api/list_specialist_heart.json'));
    if (response.statusCode >= 200 && response.statusCode <= 299) {
      //List<dynamic> parsedJson = jsonDecode(response.body);
      myModels = (json.decode(response.body) as List)
          .map((i) => ProfessionalsModel.fromMap(i))
          .toList();
    }
    return myModels;
  }
}
