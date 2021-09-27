class Specialist {
  const Specialist();
}

class SpecialistModel extends Specialist {
  final String name, imageUrl, color;
  final int total;

  const SpecialistModel(this.name, this.imageUrl, this.color, this.total);

  factory SpecialistModel.fromMap(Map<String, dynamic> _map) => SpecialistModel(
        _map['name'].toString(),
        _map['image_url'].toString(),
        _map['color'].toString(),
        _map['total'] as int,
      );

  static List<SpecialistModel> fromList(List<dynamic> _list) =>
      _list.map((e) => SpecialistModel.fromMap(e)).toList();
}

class SpecialistError extends Specialist {
  final int statusCode;
  final String message;

  const SpecialistError(this.statusCode, this.message);
}
