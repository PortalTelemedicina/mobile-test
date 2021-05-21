import 'package:flutter/material.dart';
import 'package:mobile_test_daniel_vofchuk/util/icon.dart';
import 'package:mobile_test_daniel_vofchuk/util/my_text.dart';
import 'package:mobile_test_daniel_vofchuk/util/servisses.dart';
import 'package:shimmer/shimmer.dart';

import 'components/specialist_cart.dart';

class SpecialistsPage extends StatefulWidget {
  final String title;
  SpecialistsPage({Key? key, required this.title}) : super(key: key);

  @override
  _SpecialistsPageState createState() => _SpecialistsPageState();
}

class _SpecialistsPageState extends State<SpecialistsPage> {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Scaffold(
        // appBar: AppBar(
        //   backgroundColor: Colors.white,
        //   elevation: 0,
        // ),
        backgroundColor: Colors.grey[100],
        body: SafeArea(
          child: Container(
            child: CustomScrollView(
              slivers: [
                SliverAppBar(
                  expandedHeight: 150,
                  collapsedHeight: 75,
                  floating: true,
                  pinned: true,
                  actions: [
                    TextButton(
                      onPressed: () {},
                      child: MyIcon(
                        icon: LocalIcons.filter_results_button,
                        size: 33,
                      ),
                    )
                  ],
                  backgroundColor: Colors.white,
                  flexibleSpace: FlexibleSpaceBar(
                    // centerTitle: true,
                    titlePadding: EdgeInsets.only(bottom: 25),
                    title: Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 12),
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          MyText(
                            widget.title,
                            size: 26,
                            fontWeight: FontWeight.bold,
                            color: Colors.black,
                          ),
                          MyText(
                            '40 doctors found',
                            color: Colors.black,
                          )
                        ],
                      ),
                    ),
                  ),
                  // foregroundColor: Colors.black,
                ),
                SliverList(
                  delegate: SliverChildListDelegate(
                    [
                      for (var i = 0; i < 25; i++)
                        Shimmer.fromColors(
                          baseColor: Colors.grey[400]!,
                          highlightColor: Colors.white,
                          child: SpecialistCard(),
                        ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
