import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:get/get.dart';
import 'package:test_telemedicina/repository/datasource/specialists.dart';
import 'package:test_telemedicina/repository/entities/specialist.dart';

class Home extends StatelessWidget {
  final RxInt _currentIndex = 0.obs;

  final RxList<Specialist> _specialists =
      Get.find<SpecialistsDatasource>().specialists;

  @override
  Widget build(BuildContext context) {
    Get.find<SpecialistsDatasource>().updateData();

    return MaterialApp(
      theme: ThemeData(
        fontFamily: 'Ubuntu',
      ),
      home: SafeArea(
        child: Scaffold(
          bottomNavigationBar: Obx(
            () => BottomNavigationBar(
              currentIndex: _currentIndex.value,
              fixedColor: Colors.black54,
              onTap: (int i) => _currentIndex.value = i,
              items: [
                BottomNavigationBarItem(
                  icon: Icon(
                    Icons.file_copy,
                    color: Colors.black45,
                  ),
                  label: 'Home',
                ),
                BottomNavigationBarItem(
                    icon: Icon(
                      Icons.message,
                      color: Colors.black45,
                    ),
                    label: 'Messages'),
                BottomNavigationBarItem(
                  icon: Icon(
                    Icons.autorenew_rounded,
                    color: Colors.black45,
                  ),
                  label: 'Quick',
                ),
                BottomNavigationBarItem(
                  icon: Icon(
                    Icons.menu,
                    color: Colors.black45,
                  ),
                  label: 'Menu',
                ),
              ],
            ),
          ),
          body: Padding(
            padding: const EdgeInsets.all(12),
            child: Container(
              color: Colors.white,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(
                    'Hello,',
                    style: TextStyle(
                      fontWeight: FontWeight.w600,
                      fontSize: 16,
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.only(top: 8),
                    child: Text(
                      'Lorelle Luna',
                      style: TextStyle(
                        fontSize: 32,
                        fontWeight: FontWeight.w800,
                      ),
                    ),
                  ),
                  _label('Specialists'),
                  _doctorsList(),
                  _label('What do you need?'),
                  _quickAccess(),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  Column _quickAccess() {
    return Column(
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            _button(
              SvgPicture.asset(
                'assets/icons/diagnostic.svg',
                height: 30,
                width: 30,
                color: Colors.white,
              ),
              'Diagnostic',
              activated: true,
            ),
            _button(
              SvgPicture.asset(
                'assets/icons/consultation.svg',
                height: 30,
                width: 30,
              ),
              'Consultation',
            ),
            _button(
              SvgPicture.asset(
                'assets/icons/nurse.svg',
                height: 30,
                width: 30,
              ),
              'Nurse',
            ),
          ],
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            _button(
              SvgPicture.asset(
                'assets/icons/ambulance.svg',
                height: 40,
                width: 40,
              ),
              'Ambulance',
            ),
            _button(
              SvgPicture.asset(
                'assets/icons/labwork.svg',
                height: 30,
                width: 30,
              ),
              'Lab Work',
            ),
            _button(
              SvgPicture.asset(
                'assets/icons/medicine.svg',
                height: 30,
                width: 30,
              ),
              'Medicine',
            ),
          ],
        ),
      ],
    );
  }

  Padding _button(
    Widget svg,
    String title, {
    bool activated = false,
  }) {
    Color black = Colors.black;
    black = black.withAlpha(960);

    Color grey = Colors.black12;
    grey = grey.withAlpha(20);

    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Container(
        height: 100,
        width: 100,
        decoration: BoxDecoration(
          color: activated ? black : grey,
          borderRadius: BorderRadius.circular(12),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Flexible(child: svg),
            Padding(
              padding: const EdgeInsets.only(top: 8),
              child: Text(
                title,
                style: TextStyle(
                  color: activated ? Colors.white : Colors.black54,
                  fontWeight: FontWeight.w600,
                  fontSize: 12,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  SizedBox _doctorsList() {
    return SizedBox(
      height: 180,
      child: Obx(
        () => ListView.builder(
          scrollDirection: Axis.horizontal,
          itemCount: _specialists.length,
          itemBuilder: (c, i) => Padding(
            padding: const EdgeInsets.only(right: 4),
            child: Container(
              margin: const EdgeInsets.all(6),
              width: 130,
              decoration: BoxDecoration(
                color: Colors.red,
                borderRadius: BorderRadius.circular(12),
                boxShadow: [
                  BoxShadow(
                    offset: Offset(3, 3),
                    blurRadius: 4,
                    color: Colors.black54,
                  )
                ],
              ),
              padding: const EdgeInsets.all(12),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Flexible(
                    child: Container(
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(14),
                      ),
                      width: 50,
                      height: 58,
                      padding: const EdgeInsets.all(8),
                      child: SvgPicture.network(
                        _specialists[i].imageUrl,
                        color: Colors.red,
                      ),
                    ),
                  ),
                  Flexible(
                    child: Text(
                      _specialists[i].name,
                      style: TextStyle(color: Colors.white, fontSize: 16),
                    ),
                  ),
                  Text(
                    '${_specialists[i].total} Doctors',
                    style: TextStyle(color: Colors.white),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  Padding _label(String _label) {
    return Padding(
      padding: const EdgeInsets.only(top: 48, left: 8, bottom: 8),
      child: Text(
        _label,
        style: TextStyle(
          fontSize: 16,
          fontWeight: FontWeight.w600,
        ),
      ),
    );
  }
}
