import 'package:test_telemedicina/repository/entities/export.dart';

class DentalCare extends SpecialistEntity {
  DentalCare(
    String? name,
    String? description,
    double? distance,
    SpecialistActions? actions,
  ) : super(name, description, distance, actions);
}

class DentalCareModel extends DentalCare {
  DentalCareModel(
    String? name,
    String? description,
    double? distance,
    SpecialistActions? actions,
  ) : super(name, description, distance, actions);

  factory DentalCareModel.fromMap(Map<String, dynamic> json) => DentalCareModel(
        json['name'] as String?,
        json['description'] as String?,
        json['distance'] as double?,
        SpecialistActions.fromMap(json['actions']),
      );

  static List<DentalCareModel> fromList(List<dynamic> list) =>
      list.map((e) => DentalCareModel.fromMap(e)).toList();
}

class DentalCareError extends DentalCare implements ErrorState {
  DentalCareError(
    this.message, {
    this.statusCode = 500,
  }) : super(null, null, null, null);

  @override
  String message;

  @override
  int statusCode;
}
