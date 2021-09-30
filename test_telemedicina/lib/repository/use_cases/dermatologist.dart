import 'package:test_telemedicina/repository/entities/export.dart';

class Dermatologist extends SpecialistEntity {
  Dermatologist(
    String? name,
    String? description,
    double? distance,
    SpecialistActions? actions,
  ) : super(name, description, distance, actions);
}

class DermatologistModel extends Dermatologist {
  DermatologistModel(
    String? name,
    String? description,
    double? distance,
    SpecialistActions? actions,
  ) : super(name, description, distance, actions);

  factory DermatologistModel.fromMap(Map<String, dynamic> json) =>
      DermatologistModel(
        json['name'] as String?,
        json['description'] as String?,
        json['distance'] as double?,
        SpecialistActions.fromMap(json['actions']),
      );

  static List<DermatologistModel> fromList(List<dynamic> list) =>
      list.map((e) => DermatologistModel.fromMap(e)).toList();
}

class DermatologistError extends Dermatologist implements ErrorState {
  DermatologistError(
    this.message, {
    this.statusCode = 500,
  }) : super(null, null, null, null);

  @override
  String message;

  @override
  int statusCode;
}
