import 'package:flutter/material.dart';
import 'components/seen_card.dart';
import 'components/specialist_card.dart';
import 'package:mobile_test_daniel_vofchuk/util/my_text.dart';

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[100],
      body: SafeArea(
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              ..._buildTopPortion(),
              _buildSpecialistsArea(),
              _buildWhatDOYouNeedArea()
            ],
          ),
        ),
      ),
    );
  }

  Column _buildWhatDOYouNeedArea() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        MyText(
          'What do you need?',
          margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
          fontWeight: FontWeight.bold,
          size: 26,
        ),
        Container(
          height: 300,
          padding: const EdgeInsets.all(12),
          child: GridView.count(
            crossAxisCount: 3,
            mainAxisSpacing: 22,
            crossAxisSpacing: 12,
            children: [
              NeedCard(),
              NeedCard(),
              NeedCard(),
              NeedCard(),
              NeedCard(),
              NeedCard(),
            ],
          ),
        )
      ],
    );
  }

  Widget _buildSpecialistsArea() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        MyText(
          'Specialists',
          margin: const EdgeInsets.symmetric(horizontal: 16),
          fontWeight: FontWeight.bold,
          size: 26,
        ),
        Container(
          height: 230,
          child: SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(
              children: [
                SpecialistCard(
                  color: Color(0xffe5495e),
                  title: 'Heart Specialist',
                  image:
                      'icons/heart-shape-outline-with-lifeline.svg', //TODO: add as const
                ),
                SpecialistCard(
                  color: Color(0xfff6af3d),
                  title: 'Dental Care',
                  image: 'icons/tooth.svg',
                ),
                SpecialistCard(
                  color: Color(0xff7349e5),
                  title: 'Dermatology Specialist',
                  image: 'icons/pimples.svg',
                ),
              ],
            ),
          ),
        ),
      ],
    );
  }

  List<Widget> _buildTopPortion() {
    return [
      SizedBox(
        height: 26,
      ),
      MyText(
        'Hello,',
        margin: const EdgeInsets.symmetric(horizontal: 16),
        size: 20,
      ),
      MyText(
        'Lorelle Luna',
        margin: const EdgeInsets.symmetric(horizontal: 16),
        size: 38,
        fontWeight: FontWeight.bold,
      ),
      SizedBox(
        height: 32,
      ),
    ];
  }
}
