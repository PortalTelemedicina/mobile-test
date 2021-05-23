import 'package:flutter/material.dart';
import 'package:shimmer/shimmer.dart';

import '../../api/specialists_api.dart';
import '../../models/spesialist.dart';
import '../../util/icon.dart';
import '../../util/my_text.dart';
import '../../util/servisses.dart';
import '../bottom_navigation_bar.dart';
import 'components/specialist_card.dart';

class SpecialistsPage extends StatefulWidget {
  final String title;
  SpecialistsPage({Key? key, required this.title}) : super(key: key);

  @override
  _SpecialistsPageState createState() => _SpecialistsPageState();
}

class _SpecialistsPageState extends State<SpecialistsPage> {
  ///Starts with the empty list of specialist that will be fetched form the API on the initState
  late List<Specialist> specialists;

  //Saves the load state for this page
  bool specialistLoaded = false;

  @override
  void initState() {
    getSpecialists();
    super.initState();
  }

  ///Gets the speiclists from the given API
  void getSpecialists() async {
    specialists = await SpecialistApi.getSpecialists();
    if (specialists != null && specialists.isNotEmpty)
      setState(() {
        specialistLoaded = true;
      });
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Scaffold(
        bottomNavigationBar: BottomBar(
          onHomePressed: () => Navigator.of(context)
              .pop(), //When pressing home on this page the app should go back to home page
        ),
        backgroundColor: Colors.grey[100],
        body: _buildBody(),
      ),
    );
  }

  SafeArea _buildBody() {
    return SafeArea(
      child: Container(
        child: CustomScrollView(
          slivers: [
            _buildAppBar(),
            _buildList(),
          ],
        ),
      ),
    );
  }

  ///Builds the content for this page
  ///It can build the specialist list or the loading animations
  SliverList _buildList() {
    return SliverList(
      delegate: SliverChildListDelegate(
        [
          SizedBox(
            height: 8,
          ),
          if (specialistLoaded)
            ...specialists.map(
              (e) => SpecialistCard(
                specialist: e,
              ),
            ),
          if (!specialistLoaded) //Builds 6 shime animations
            for (var i = 0; i < 6; i++) _buildLoaingAnimation(),
        ],
      ),
    );
  }

  ///Builds the shimmer animation when fetching from API
  Shimmer _buildLoaingAnimation() {
    return Shimmer.fromColors(
      baseColor: Colors.grey[400]!,
      highlightColor: Colors.white,
      child: SpecialistCard(
        isLoading: true,
        specialist: Specialist(description: '', name: ''),
      ),
    );
  }

  ///Builds a sliver app bar with aniamation
  SliverAppBar _buildAppBar() {
    return SliverAppBar(
      expandedHeight: 150,
      collapsedHeight: 75,
      floating: true,
      pinned: true,
      iconTheme: IconThemeData(color: Colors.black),
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
        title: LayoutBuilder(
          builder: (BuildContext context, BoxConstraints constraints) {
            return Row(
              children: [
                SizedBox(
                  width: 2500 / constraints.maxHeight,
                ),
                Container(
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Hero(
                        //Hero animation for a good transition
                        tag: widget.title,
                        child: MyText(
                          widget.title,
                          size: 26,
                          fontWeight: FontWeight.bold,
                          color: Colors.black,
                          margin: const EdgeInsets.only(bottom: 2),
                        ),
                      ),
                      MyText(
                        specialistLoaded
                            ? '${specialists.length} doctors found'
                            : 'Searching',
                        color: Colors.black,
                        size: 12,
                      )
                    ],
                  ),
                ),
              ],
            );
          },
        ),
      ),
      // foregroundColor: Colors.black,
    );
  }
}
