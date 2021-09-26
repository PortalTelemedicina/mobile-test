class Specialist {
  final String name, imageUrl, color;
  final int total;

  const Specialist(this.name, this.imageUrl, this.color, this.total);

  factory Specialist.fromMap(Map<String, dynamic> _map) => Specialist(
        _map['name'].toString(),
        _map['image_url'].toString(),
        _map['color'].toString(),
        _map['total'] as int,
      );

  static List<Specialist> fromList(List<dynamic> _list) =>
      _list.map((e) => Specialist.fromMap(e)).toList();
}
