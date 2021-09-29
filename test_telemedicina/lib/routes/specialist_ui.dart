import 'package:flutter/material.dart';
import 'package:test_telemedicina/repository/datasource/specialists/dental_care_datasource.dart';
import 'package:test_telemedicina/repository/datasource/specialists/dermatology_datasource.dart';
import 'package:test_telemedicina/repository/datasource/specialists/heart_datasource.dart';
import 'package:test_telemedicina/repository/datasource/specialists/specialists_common_datasource.dart';
import 'package:test_telemedicina/widgets/rounded_button.dart';

class SpecialistUI extends StatelessWidget {
  final String _label;

  late final SpecialistsCommonDatasource _datasource;

  SpecialistUI(
    this._label, {
    Key? key,
  }) : super(key: key) {
    switch(_label) {
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
          backgroundColor: Colors.white,
          elevation: 0,
          iconTheme: IconThemeData(
            color: Colors.black54,
          ),
        ),
        backgroundColor: Colors.white,
        body: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Padding(
                padding: const EdgeInsets.only(top: 12, left: 12),
                child: Text(
                  _label,
                  style: TextStyle(
                    fontSize: 22,
                    fontWeight: FontWeight.w600,
                    color: Colors.black87,
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(left: 14, top: 6),
                child: Text(
                  'x doctors were found',
                  style: TextStyle(
                    fontSize: 14,
                    fontWeight: FontWeight.w400,
                    color: Colors.black54,
                  ),
                ),
              ),
              ListView.builder(
                itemCount: 5,
                shrinkWrap: true,
                physics: ClampingScrollPhysics(),
                scrollDirection: Axis.vertical,
                itemBuilder: (c, i) => _doctorItem(),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _doctorItem() {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: Row(
        children: [
          Container(
            height: 50,
            width: 50,
            decoration: BoxDecoration(
                color: Colors.red, borderRadius: BorderRadius.circular(50)),
          ),
          Column(
            children: [
              Text(
                'Pedro Silvester',
                style: TextStyle(
                  fontSize: 14,
                  fontWeight: FontWeight.w600,
                  color: Colors.black54,
                ),
              ),
              Text(
                'Nearby 0.62 mins',
                style: TextStyle(
                  fontSize: 8,
                  fontWeight: FontWeight.w400,
                  color: Colors.black54,
                ),
              ),
              Text(
                'Lorem ipsum doctor sit amet',
                style: TextStyle(
                  fontSize: 10,
                  fontWeight: FontWeight.w400,
                  color: Colors.black54,
                ),
              ),
              Row(
                children: [
                  RoundedButton('Chat', () {}),
                  RoundedButton(
                    'Call',
                    () {},
                    backgroundColor: Colors.white,
                    textColor: Colors.black54,
                  ),
                ],
              ),
            ],
          ),
        ],
      ),
    );
  }
}
