import '../util/icon.dart';
import '../util/servisses.dart';

//The model of the servisse for better object handeling
class Servisse {
  final String title;
  final MyIcon image;

  Servisse(LocalIcons icon, this.title) : image = new MyIcon(icon: icon);
}
