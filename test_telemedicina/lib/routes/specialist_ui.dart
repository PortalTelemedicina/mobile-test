import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:get/get.dart';
import 'package:test_telemedicina/repository/datasource/specialists/export.dart';
import 'package:test_telemedicina/repository/entities/export.dart';
import 'package:test_telemedicina/widgets/rounded_button.dart';

class SpecialistUI extends StatelessWidget {
  final String _label;

  final List<Color> _colors = [
    Color(0xffca49e5),
    Color(0xff7349e5),
    Color(0xfff6af3d),
    Color(0xffe5485e),
    Color(0xff504c4c),
    Color(0xff4b5568),
    Color(0xff7c8494),
    Color(0xff4d484e),
  ];

  late final SpecialistsCommonDatasource _datasource;

  SpecialistUI(
    this._label, {
    Key? key,
  }) : super(key: key) {
    ///Ideally this would be a type or an ID.
    switch (_label) {
      case 'Heart Specialist':
        _datasource = HeartDatasource();
        break;
      case 'Dental Care':
        _datasource = DentalCareDatasource();
        break;
      case 'Dermatology Specialist':
        _datasource = Dermatology();
        break;
    }
  }

  @override
  Widget build(BuildContext context) {
    _datasource.updateData();

    return SafeArea(
      child: Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.transparent,
          elevation: 0,
          iconTheme: IconThemeData(
            color: Colors.black54,
          ),
        ),
        backgroundColor: Colors.white,
        body: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisSize: MainAxisSize.min,
            children: [
              Padding(
                padding: const EdgeInsets.only(top: 12, left: 12),
                child: Text(
                  _label,
                  style: TextStyle(
                    fontSize: 22,
                    fontWeight: FontWeight.w800,
                    color: Colors.black87,
                  ),
                ),
              ),
              _validateError(_datasource.specialistData)
                  ? Padding(
                      padding: const EdgeInsets.only(left: 14, top: 6),
                      child: Obx(
                        () {
                          final int _length = _datasource.specialistData.length;
                          final String _doctorsFound =
                              '$_length doctors were found';

                          return Text(
                            _length > 0 ? _doctorsFound : 'Searching...',
                            style: TextStyle(
                              fontSize: 14,
                              fontWeight: FontWeight.w400,
                              color: Colors.black54,
                            ),
                          );
                        },
                      ),
                    )
                  : Container(),
              _specialistList(),
            ],
          ),
        ),
      ),
    );
  }

  Widget _specialistList() {
    return Obx(() {
      final List<SpecialistEntity> data = _datasource.specialistData;
      if (_validateError(data)) {
        return Column(
          children: [
            Padding(
              padding: const EdgeInsets.all(64),
              child: SvgPicture.asset(
                'assets/images/connection_error.svg',
                height: 200,
              ),
            ),
            Text(
              'Ops!',
              style: TextStyle(
                fontSize: 20,
                color: Colors.black87,
                fontWeight: FontWeight.w800,
              ),
            ),
            Text(
              'Parece que houve uma falha\nde conexão com a internet.',
              style: TextStyle(
                fontSize: 18,
                color: Colors.black87,
                fontWeight: FontWeight.w400,
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(top: 64),
              child: RoundedButton(
                'Tentar novamente',
                () async => await _datasource.updateData(),
              ),
            ),
          ],
        );
      } else {
        final bool dataLoaded = data.length > 0;

        return ListView.builder(
          itemCount: dataLoaded ? data.length : 5,
          shrinkWrap: true,
          physics: ClampingScrollPhysics(),
          scrollDirection: Axis.vertical,
          itemBuilder: (c, i) => dataLoaded
              ? _doctorItem(_datasource.specialistData[i], i)
              : _loadingItem(i),
        );
      }
    });
  }

  Widget _doctorItem(SpecialistEntity specialist, int index) {
    final String name = specialist.name ?? '';
    final String initials = name
        .split(' ')
        .map((e) => e[0])
        .toString()
        .replaceAll(RegExp(r'[(,)]'), '');

    return Padding(
      padding: const EdgeInsets.all(16),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisSize: MainAxisSize.min,
        children: [
          Container(
            height: 60,
            width: 60,
            decoration: BoxDecoration(
              color: _colors[_getColorIndex(index)].withAlpha(50),
              borderRadius: BorderRadius.circular(50),
            ),
            alignment: Alignment.bottomCenter,
            child: Padding(
              padding: const EdgeInsets.only(bottom: 12),
              child: Text(
                initials,
                style: TextStyle(
                  fontSize: 24,
                  letterSpacing: -2,
                  fontWeight: FontWeight.w800,
                  color: _colors[_getColorIndex(index)],
                ),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(left: 16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(
                  name,
                  style: TextStyle(
                    fontSize: 14,
                    fontWeight: FontWeight.w600,
                    color: Colors.black54,
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(top: 4),
                  child: Text(
                    '${specialist.distance} Km',
                    style: TextStyle(
                      fontSize: 8,
                      fontWeight: FontWeight.w400,
                      color: Colors.black54,
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(top: 4),
                  child: Text(
                    specialist.description?.substring(0, 50) ?? '',
                    overflow: TextOverflow.ellipsis,
                    style: TextStyle(
                      fontSize: 10,
                      fontWeight: FontWeight.w400,
                      color: Colors.black54,
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(top: 6),
                  child: Row(
                    children: [
                      Padding(
                        padding: const EdgeInsets.only(right: 24),
                        child: RoundedButton(
                          'Chat',
                          () {},
                        ),
                      ),
                      RoundedButton(
                        'Call',
                        () {},
                        backgroundColor: Colors.white,
                        textColor: Colors.black54,
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _loadingItem(int index) {
    final RxDouble _opacity = 1.0.obs;

    Future.delayed(Duration(milliseconds: 400 * index))
        .then((_) => _opacity.value = 0.1);

    return Obx(
      () => AnimatedOpacity(
        duration: Duration(seconds: 1),
        onEnd: () => _opacity.value = _opacity.value == 1 ? 0.5 : 1.0,
        opacity: _opacity.value,
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(
                height: 60,
                width: 60,
                decoration: BoxDecoration(
                  color: Colors.grey[200],
                  borderRadius: BorderRadius.circular(50),
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(left: 16),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Container(
                      height: 40,
                      width: 250,
                      decoration: BoxDecoration(
                        color: Colors.grey[200],
                        borderRadius: BorderRadius.circular(12),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(top: 4),
                      child: Container(
                        height: 70,
                        width: 250,
                        decoration: BoxDecoration(
                          color: Colors.grey[200],
                          borderRadius: BorderRadius.circular(12),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  int _getColorIndex(int index) {
    if (index < _colors.length) {
      return index;
    } else {
      final int newIndex = index - _colors.length;
      return _getColorIndex(newIndex);
    }
  }

  bool _validateError(List<SpecialistEntity> data) =>
      data.any((element) => element is ErrorState);
}
