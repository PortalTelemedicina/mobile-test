import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:get/get.dart';
import 'package:test_telemedicina/repository/datasource/specialists.dart';
import 'package:test_telemedicina/repository/entities/specialist.dart';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> with TickerProviderStateMixin {
  final RxList<Specialist> _specialists =
      Get.find<SpecialistsDatasource>().specialists;

  late final Rx<PageController> _controller;

  @override
  void initState() {
    _controller = PageController().obs;
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    Get.find<SpecialistsDatasource>().updateData();

    return MaterialApp(
      theme: ThemeData(
        fontFamily: 'Ubuntu',
      ),
      home: SafeArea(
        child: Scaffold(
          backgroundColor: Colors.white,
          persistentFooterButtons: [
            Padding(
              padding: const EdgeInsets.only(left: 18, right: 18),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  _bottomNavButton(
                    'assets/icons/diagnostic.svg',
                    index: 0,
                  ),
                  _bottomNavButton(
                    'assets/icons/diagnostic.svg',
                    index: 1,
                  ),
                  _bottomNavButton(
                    'assets/icons/diagnostic.svg',
                    index: 2,
                  ),
                  _bottomNavButton(
                    'assets/icons/diagnostic.svg',
                    index: 3,
                  ),
                ],
              ),
            ),
          ],
          body: Stack(
            children: [
              PageView(
                pageSnapping: true,
                controller: _controller.value,
                children: [
                  _homeTab(),
                  _toBeImplementedTab(),
                  _toBeImplementedTab(),
                  _toBeImplementedTab(),
                ],
              ),
              Align(
                alignment: Alignment.bottomCenter,
                child: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 20),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      _navButtonIndicator(
                        activated: _controller.value.page == 0,
                      ),
                      _navButtonIndicator(
                        activated: _controller.value.page == 1,
                      ),
                      _navButtonIndicator(
                        activated: _controller.value.page == 2,
                      ),
                      _navButtonIndicator(
                        activated: _controller.value.page == 3,
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Container _navButtonIndicator({bool activated = false}) {
    return Container(
      height: 3,
      width: 30,
      color: activated ? Colors.black : Colors.black54,
    );
  }

  InkWell _bottomNavButton(
    String assetPath, {
    int index = 0,
  }) {
    return InkWell(
      child: Container(
        height: 30,
        child: _navIcon(assetPath),
      ),
      onTap: () => _controller.value.jumpToPage(index),
    );
  }

  Widget _navIcon(
    String svgName, {
    Color color = Colors.black38,
    bool activated = false,
  }) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        SvgPicture.asset(
          svgName,
          color: activated ? Colors.black54 : color,
          height: 20,
          width: 20,
        ),
      ],
    );
  }

  Widget _homeTab() {
    return Container(
      color: Colors.white,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisSize: MainAxisSize.min,
        children: [
          Text(
            'Hello,',
            style: TextStyle(
              fontWeight: FontWeight.w600,
              fontSize: 18,
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(top: 8),
            child: Text(
              'Lorelle Luna',
              style: TextStyle(
                fontSize: 30,
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
    );
  }

  Column _quickAccess() {
    return Column(
      children: [
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            _quickButton(
              SvgPicture.asset(
                'assets/icons/diagnostic.svg',
                height: 30,
                width: 30,
                color: Colors.white,
              ),
              'Diagnostic',
              activated: true,
            ),
            _quickButton(
              SvgPicture.asset(
                'assets/icons/consultation.svg',
                height: 30,
                width: 30,
              ),
              'Consultation',
            ),
            _quickButton(
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
            _quickButton(
              SvgPicture.asset(
                'assets/icons/ambulance.svg',
                height: 40,
                width: 40,
              ),
              'Ambulance',
            ),
            _quickButton(
              SvgPicture.asset(
                'assets/icons/labwork.svg',
                height: 30,
                width: 30,
              ),
              'Lab Work',
            ),
            _quickButton(
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

  Widget _quickButton(
    Widget svg,
    String title, {
    bool activated = false,
  }) {
    Color black = Colors.black;
    black = black.withAlpha(960);

    Color grey = Colors.black12;
    grey = grey.withAlpha(20);

    return Flexible(
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: InkWell(
          onTap: () {},
          splashColor: Colors.grey,
          child: Container(
            height: 105,
            width: 105,
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
          fontSize: 18,
          fontWeight: FontWeight.w600,
        ),
      ),
    );
  }

  Widget _toBeImplementedTab() {
    return Container(
      color: Colors.grey,
      child: Center(
        child: Text(
          'To be\nimplemented...',
          textAlign: TextAlign.center,
          style: TextStyle(
            fontSize: 38,
          ),
        ),
      ),
    );
  }
}
