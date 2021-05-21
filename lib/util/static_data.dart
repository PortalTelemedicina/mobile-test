import 'package:mobile_test_daniel_vofchuk/models/servisse_model.dart';
import 'package:mobile_test_daniel_vofchuk/util/servisses.dart';

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
