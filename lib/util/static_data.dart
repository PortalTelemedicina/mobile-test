import '../models/servisse_model.dart';
import 'servisses.dart';

///Static data to be used on the app - can be added more here and the app knows how to handle
class StaticData {
  static List<Servisse> servisses = [
    Servisse(LocalIcons.stethoscope, 'Diagnostic'),
    Servisse(LocalIcons.patient, 'Consultation'),
    Servisse(LocalIcons.nurse, 'Nurse'),
    Servisse(LocalIcons.ambulance, 'Ambulance'),
    Servisse(LocalIcons.flask, 'Lab Work'),
    Servisse(LocalIcons.medicine, 'Medicine'),
  ];
}
