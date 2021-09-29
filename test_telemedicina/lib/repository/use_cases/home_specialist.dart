class HomeSpecialist {
  const HomeSpecialist();
}

class HomeSpecialistModel extends HomeSpecialist {
  final String name, imageUrl, color;
  final int total;
  late final HomeSpecialistType type;

  HomeSpecialistModel(this.name, this.imageUrl, this.color, this.total) {
    switch(this.name) {
      case 'Heart Specialist':
        type = HomeSpecialistType.heart;
        break;
      case 'Dental Care':
        type = HomeSpecialistType.dentalCare;
        break;
      case 'Dermatology Specialist':
        type = HomeSpecialistType.dermatology;
        break;
    }
  }

  factory HomeSpecialistModel.fromMap(Map<String, dynamic> _map) =>
      HomeSpecialistModel(
        _map['name'] as String,
        _map['image_url'] as String,
        _map['color'] as String,
        _map['total'] as int,
      );

  static List<HomeSpecialistModel> fromList(List<dynamic> _list) =>
      _list.map((e) => HomeSpecialistModel.fromMap(e)).toList();
}

class HomeSpecialistError extends HomeSpecialist {
  final int statusCode;
  final String message;

  const HomeSpecialistError(this.message, {this.statusCode = 500});
}

enum HomeSpecialistType {
  dentalCare,
  dermatology,
  heart,
}