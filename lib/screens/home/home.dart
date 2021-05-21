import 'package:flutter/material.dart';
import 'components/specialist_card.dart';
import 'package:mobile_test_daniel_vofchuk/util/my_text.dart';

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              ..._buildTopPortion(),
              MyText(
                'Specialists',
                margin: const EdgeInsets.symmetric(horizontal: 16),
                fontWeight: FontWeight.bold,
                size: 26,
              ),
              _buildSpecialistsArea(),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildSpecialistsArea() {
    return Container(
      height: 180,
      child: Expanded(
        child: SingleChildScrollView(
          scrollDirection: Axis.horizontal,
          child: Row(
            children: [
              SpecialistCard(
                color: Color(0xffe5495e),
                title: 'Heart Specialist',
              ),
              SpecialistCard(
                color: Color(0xfff6af3d),
                title: 'Dental Care',
              ),
              SpecialistCard(
                color: Color(0xff7349e5),
                title: 'Dermatology Specialist',
              ),
            ],
          ),
        ),
      ),
    );
  }

  List<Widget> _buildTopPortion() {
    return [
      SizedBox(
        height: 26,
      ),
      MyText(
        'Hello,',
        size: 20,
      ),
      MyText(
        'Lorelle Luna',
        size: 38,
        fontWeight: FontWeight.bold,
      ),
      SizedBox(
        height: 32,
      ),
    ];
  }
}
