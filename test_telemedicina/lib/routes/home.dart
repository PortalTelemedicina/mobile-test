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

  final Rx<PageController> _controller = PageController().obs;

  final RxDouble _currentIndex = 0.0.obs;

  @override
  void initState() {
    _controller.value.addListener(() {
      _currentIndex.value = _controller.value.page ?? 0;
    });

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
                child: Container(
                  color: Colors.white,
                  child: Padding(
                    padding:
                        const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Column(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            _navButtonIndicator(index: 0),
                            _bottomNavButton(
                              'assets/icons/browser.svg',
                              index: 0,
                            ),
                          ],
                        ),
                        Column(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            _navButtonIndicator(index: 1),
                            _bottomNavButton(
                              'assets/icons/chat.svg',
                              index: 1,
                            ),
                          ],
                        ),
                        Column(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            _navButtonIndicator(index: 2),
                            _bottomNavButton(
                              'assets/icons/lightning.svg',
                              index: 2,
                            ),
                          ],
                        ),
                        Column(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            _navButtonIndicator(index: 3),
                            _bottomNavButton(
                              'assets/icons/menu.svg',
                              index: 3,
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _navButtonIndicator({int index = 0}) => Obx(
        () => Container(
          height: 3,
          width: 36,
          color: index == _currentIndex.value
              ? Colors.black54
              : Colors.transparent,
        ),
      );

  Widget _bottomNavButton(
    String assetPath, {
    int index = 0,
  }) =>
      Obx(
        () => InkWell(
          child: Container(
            height: 30,
            width: 50,
            alignment: Alignment.center,
            child: _navIcon(
              assetPath,
              activated: _currentIndex.value == index,
            ),
          ),
          onTap: () => _controller.value.jumpToPage(index),
        ),
      );

  Widget _navIcon(
    String svgName, {
    bool activated = false,
  }) =>
      SvgPicture.asset(
        svgName,
        color: activated ? Colors.black87 : Colors.black45,
        height: 20,
        width: 20,
      );

  Widget _homeTab() => Container(
        color: Colors.white,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisSize: MainAxisSize.min,
          children: [
            Padding(
              padding: const EdgeInsets.only(top: 16, left: 12),
              child: const Text(
                'Hello,',
                style: const TextStyle(
                  fontWeight: FontWeight.w600,
                  fontSize: 18,
                ),
              ),
            ),
            const Padding(
              padding: const EdgeInsets.only(top: 8, left: 12),
              child: const Text(
                'Lorelle Luna',
                style: const TextStyle(
                  fontSize: 30,
                  fontWeight: FontWeight.w800,
                ),
              ),
            ),
            _label('Specialists'),
            _specialistsList(),
            _label('What do you need?'),
            _quickAccess(),
          ],
        ),
      );

  Column _quickAccess() => Column(
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
            height: 110,
            width: 110,
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

  SizedBox _specialistsList() => SizedBox(
        height: 180,
        child: Obx(
          () => ListView.builder(
            scrollDirection: Axis.horizontal,
            itemCount: _specialists.length,
            itemBuilder: (c, i) {
              final bool _last = _specialists.length - 1 == i;
              String _colorValue =
                  _specialists[i].color.replaceAll('#', '0xff');
              return Padding(
                padding:
                    EdgeInsets.only(right: _last ? 5 : 2, left: i == 0 ? 5 : 2),
                child: Container(
                  margin: const EdgeInsets.all(6),
                  width: 130,
                  decoration: BoxDecoration(
                    color: Color(int.parse(_colorValue)),
                    borderRadius: BorderRadius.circular(12),
                    boxShadow: [
                      const BoxShadow(
                        offset: const Offset(3, 3),
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
                          style: const TextStyle(
                              color: Colors.white, fontSize: 16),
                        ),
                      ),
                      Text(
                        '${_specialists[i].total} Doctors',
                        style: const TextStyle(color: Colors.white),
                      ),
                    ],
                  ),
                ),
              );
            },
          ),
        ),
      );

  Padding _label(String _label) => Padding(
        padding: const EdgeInsets.only(top: 48, left: 12, bottom: 8),
        child: Text(
          _label,
          style: const TextStyle(
            fontSize: 18,
            fontWeight: FontWeight.w600,
          ),
        ),
      );

  Widget _toBeImplementedTab() => Container(
        color: Colors.grey[100],
        child: Center(
          child: Text(
            'To be\nimplemented...',
            textAlign: TextAlign.center,
            style: const TextStyle(
              fontSize: 38,
            ),
          ),
        ),
      );
}
