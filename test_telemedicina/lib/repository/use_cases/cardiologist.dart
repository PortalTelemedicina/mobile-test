import 'package:test_telemedicina/repository/entities/export.dart';

class Cardiologist extends SpecialistEntity {
  Cardiologist(
    String? name,
    String? description,
    double? distance,
    SpecialistActions? actions,
  ) : super(name, description, distance, actions);
}

class CardiologistModel extends Cardiologist {
  CardiologistModel(
    String? name,
    String? description,
    double? distance,
    SpecialistActions? actions,
  ) : super(name, description, distance, actions);

  factory CardiologistModel.fromMap(Map<String, dynamic> json) => CardiologistModel(
        json['name'] as String?,
        json['description'] as String?,
        json['distance'] as double?,
        SpecialistActions.fromMap(json['actions']),
      );

  static List<CardiologistModel> fromList(List<dynamic> list) =>
      list.map((e) => CardiologistModel.fromMap(e)).toList();
}

class CardiologistError extends Cardiologist implements ErrorState {
  CardiologistError(
    this.message, {
    this.statusCode = 500,
  }) : super(null, null, null, null);

  @override
  String message;

  @override
  int statusCode;
}
