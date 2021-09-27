import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:get/get.dart';
import 'package:test_telemedicina/repository/datasource/specialists.dart';
import 'package:test_telemedicina/repository/entities/specialist.dart';
import 'package:test_telemedicina/routes/specialist_ui.dart';
import 'package:test_telemedicina/widgets/rounded_button.dart';

class HomeUI extends StatefulWidget {
  @override
  _HomeUIState createState() => _HomeUIState();
}

class _HomeUIState extends State<HomeUI> with TickerProviderStateMixin {
  late final SpecialistsDatasource _dataSource =
      Get.find<SpecialistsDatasource>();

  covariant RxList<Specialist> _specialists = <Specialist>[].obs;

  final Rx<PageController> _controller = PageController().obs;

  final RxDouble _currentIndex = 0.0.obs;

  @override
  void initState() {
    _specialists.value = _dataSource.specialists;

    _controller.value.addListener(() {
      _currentIndex.value = _controller.value.page ?? 0;
    });

    _updateData();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
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

  Future _updateData({bool delay = false}) async {
    await _dataSource.updateData(delay: delay);
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
          onTap: () {
            Get.snackbar('Sorry', 'to be implemented ...');
          },
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

  Widget _specialistsList() => Obx(
        () {
          if (_specialists.isNotEmpty &&
              _specialists.every((element) => element is SpecialistError)) {
            return Padding(
              padding: const EdgeInsets.all(16),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  SvgPicture.asset(
                    'assets/images/connection_error.svg',
                    width: 100,
                    height: 80,
                  ),
                  Padding(
                    padding: const EdgeInsets.all(16),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('Ops!'),
                        Text(
                            'Parece que houve uma falha\nde conexão com a internet.'),
                        Padding(
                          padding: const EdgeInsets.only(left: 16, top: 8),
                          child: RoundedButton(
                            'Tentar novamente',
                            () async => await _updateData(delay: true),
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            );
          } else if (_specialists.length > 0 &&
              _specialists.every((element) => element is SpecialistModel)) {
            return SizedBox(
              height: 180,
              child: ListView.builder(
                scrollDirection: Axis.horizontal,
                itemCount: _specialists.length,
                itemBuilder: (c, i) {
                  final bool _last = _specialists.length - 1 == i;
                  final specialist = _specialists[i] as SpecialistModel;

                  String _colorValue = specialist.color.replaceAll('#', '0xff');

                  return _specialistCard(_last, i, _colorValue);
                },
              ),
            );
          } else
            return SizedBox(
              height: 180,
              child: ListView.builder(
                itemCount: 4,
                scrollDirection: Axis.horizontal,
                itemBuilder: (c, i) => _loadingCard(i),
              ),
            );
        },
      );

  Widget _loadingCard(int i) {
    final RxDouble _opacity = 1.0.obs;

    Future.delayed(
      Duration(milliseconds: 1),
    ).then((value) => _opacity.value = 0.5);

    return Obx(
      () => AnimatedOpacity(
        onEnd: () => _opacity.value = _opacity.value == 1.0 ? 0.5 : 1.0,
        duration: Duration(seconds: 1),
        opacity: _opacity.value,
        child: Padding(
          padding: EdgeInsets.only(
            right: i == 3 ? 5 : 2,
            left: i == 0 ? 5 : 2,
          ),
          child: Container(
            margin: const EdgeInsets.all(6),
            width: 130,
            decoration: BoxDecoration(
              color: Colors.grey[200],
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
          ),
        ),
      ),
    );
  }

  Widget _specialistCard(bool _last, int i, String _colorValue) {
    final specialist = _specialists[i] as SpecialistModel;

    return Padding(
      padding: EdgeInsets.only(right: _last ? 5 : 2, left: i == 0 ? 5 : 2),
      child: InkWell(
        onTap: () {
          String? _url;
          switch (specialist.name) {
            case 'Heart Specialist':
              _url = 'list_specialist_heart';
              break;
            case 'Dental Care':
              _url = 'list_specialist_dental_care';
              break;
            case 'Dermatology Specialist':
              _url = 'list_specialist_dermatology';
              break;
          }

          Get.to(() => SpecialistUI(specialist.name, _url));
        },
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
                    specialist.imageUrl,
                    color: Color(int.parse(_colorValue)),
                  ),
                ),
              ),
              Flexible(
                child: Text(
                  specialist.name,
                  style: const TextStyle(color: Colors.white, fontSize: 16),
                ),
              ),
              Text(
                '${specialist.total} Doctors',
                style: const TextStyle(color: Colors.white),
              ),
            ],
          ),
        ),
      ),
    );
  }

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
