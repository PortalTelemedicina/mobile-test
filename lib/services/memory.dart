import 'dart:convert';

import 'package:mobile_test/models/professionals.dart';
import 'package:shared_preferences/shared_preferences.dart';

class Memory {
  Future<void> salvaProfissionaisLocal(List<ProfessionalsModel> lista) async {
    SharedPreferences sp = await SharedPreferences.getInstance();
    try {
      final String entriesJson =
          json.encode(lista.map((entry) => entry.toJson()).toList());
      sp.setString("profissionais", entriesJson);
    } catch (exception_save_in_memory) {
      throw Exception("Erro ao salvar dados na memória. Detalhes: " +
          exception_save_in_memory.toString());
    }
  }

  Future<List<ProfessionalsModel>> buscaProfessionalsLocal() async {
    List<ProfessionalsModel> deserializedEntries = [];
    SharedPreferences sp = await SharedPreferences.getInstance();
    try {
      final String savedEntriesJson = sp.getString('profissionais');
      final List<dynamic> entriesDeserialized = json.decode(savedEntriesJson);
      deserializedEntries = entriesDeserialized
          .map((json) => ProfessionalsModel.fromMap(json))
          .toList();
    } catch (exception_get_in_memory) {
      throw Exception('Erro ao buscar dados da memória. Detalhes: ' +
          exception_get_in_memory);
    }
    return deserializedEntries;
  }
}
