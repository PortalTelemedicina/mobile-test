import 'package:mobile_test_daniel_vofchuk/util/icon.dart';
import 'package:mobile_test_daniel_vofchuk/util/servisses.dart';

class Servisse {
  final String title;
  final MyIcon image;

  Servisse(LocalIcons icon, this.title) : image = new MyIcon(icon: icon);
}
