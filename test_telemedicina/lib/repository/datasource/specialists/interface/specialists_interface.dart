import 'package:get/get.dart';
import 'package:test_telemedicina/repository/entities/specialist_entity.dart';

abstract class SpecialistsCommonDatasource {
  final RxList<SpecialistEntity> _specialistData = <SpecialistEntity>[].obs;

  RxList<SpecialistEntity> get specialistData => _specialistData;

  Future<void> updateData();

  void setErrorStatus(String error);
}