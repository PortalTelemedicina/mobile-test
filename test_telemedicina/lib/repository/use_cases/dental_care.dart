import 'package:test_telemedicina/repository/entities/specialist_entity.dart';

class DentalCare extends SpecialistEntity {
  DentalCare(
    String name,
    String description,
    double distance,
    SpecialistActions actions,
  ) : super(name, description, distance, actions);
}

class DentalCareModel extends DentalCare {
  DentalCareModel(
    String name,
    String description,
    double distance,
    SpecialistActions actions,
  ) : super(name, description, distance, actions);

  factory DentalCareModel.fromMap(Map<String, dynamic> json) => DentalCareModel(
        json['name'] as String,
        json['description'] as String,
        json['distance'] as double,
        SpecialistActions.fromMap(json['actions']),
      );

  static fromList(List<dynamic> list) =>
      list.map((e) => DentalCareModel.fromMap(e)).toList();
}

class DentalCareError extends DentalCare {
  final int statusCode;
  final String message;

  DentalCareError(
    this.message, {
    this.statusCode = 500,
  }) : super('', '', 0.0, SpecialistActions('', ''));
}
