abstract class SpecialistEntity {
  final String? name, description;
  final double? distance;
  final SpecialistActions? actions;

  const SpecialistEntity(
      this.name, this.description, this.distance, this.actions);
}

class SpecialistActions {
  final String? chat, call;

  const SpecialistActions(this.chat, this.call);

  factory SpecialistActions.fromMap(Map<String, dynamic> json) =>
      SpecialistActions(json['chat'], json['call']);
}
