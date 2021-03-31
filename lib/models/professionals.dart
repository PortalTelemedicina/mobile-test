import 'dart:convert';

class ProfessionalsModel {
  Actions actions;
  String name;
  String description;
  double distance;

  ProfessionalsModel({
    this.actions,
    this.name,
    this.description,
    this.distance,
  });

  factory ProfessionalsModel.fromJson(dynamic str) =>
      ProfessionalsModel.fromMap(jsonDecode(str));

  ProfessionalsModel.fromMap(Map<dynamic, dynamic> json) {
    Map<String, dynamic> actionsJson = json['actions'];
    actions = Actions.fromJson(actionsJson);
    name = json['name'];
    description = json['description'];
    distance = json['distance'] != null && json['distance'] > 0
        ? json['distance']
        : 0.0;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['actions'] = this.actions;
    data['name'] = this.name;
    data['description'] = this.description;
    data['distance'] = this.distance;
    return data;
  }

  Map<String, dynamic> toMap(ProfessionalsModel model) {
    var map = new Map<String, dynamic>();
    map["actions"] = model.actions;
    map["name"] = model.name;
    map["description"] = model.description;
    map["distance"] = model.distance;
    return map;
  }
}

class Actions {
  String chat;
  String call;

  Actions({this.chat, this.call});

  Actions.fromJson(Map<dynamic, dynamic> json) {
    chat = json['chat'];
    call = json['call'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['chat'] = this.chat;
    data['call'] = this.call;
    return data;
  }
}
