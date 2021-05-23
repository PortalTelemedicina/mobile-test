import 'dart:math';

import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../../models/spesialist.dart';
import '../../../util/my_text.dart';

class SpecialistCard extends StatelessWidget {
  final bool isLoading;
  final Specialist specialist;
  const SpecialistCard(
      {Key? key, this.isLoading = false, required this.specialist})
      : super(key: key);

  ///Logic to get the inicials of the name
  String _getInitials(String name) => name.isNotEmpty
      ? name.trim().split(' ').map((l) => l[0]).take(2).join()
      : '';

  @override
  Widget build(BuildContext context) {
    //Generates a random color to display on the avatar side
    Color color =
        Color((Random().nextDouble() * 0xFFFFFF).toInt()).withOpacity(1.0);
    return _buildContent(color);
  }

  Container _buildContent(Color color) {
    return Container(
      color: isLoading
          ? Colors.transparent
          : Colors.white, //Sows the shime animation
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: Column(
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              SizedBox(
                width: 8,
              ),
              CircleAvatar(
                minRadius: 30,
                backgroundColor: color.withOpacity(.3),
                child: MyText(
                  _getInitials(specialist.name!),
                  color: color,
                  fontWeight: FontWeight.bold,
                  size: 28,
                ),
              ),
              Expanded(
                child: Padding(
                  padding:
                      const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      if (isLoading)
                        Container(
                          width: double.infinity,
                          height: 40,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(8),
                            color: isLoading ? Colors.amber : null,
                          ),
                        ),
                      if (!isLoading) ...[
                        MyText(
                          specialist.name!,
                          size: 24,
                          fontWeight: FontWeight.bold,
                        ),
                        MyText(
                          'Nearby 0.62 miles', //For now the API is not returning the distance so i'm adding a static number
                          size: 14,
                          color: Colors.grey,
                          // fontWeight: FontWeight.bold,
                        ),
                      ],
                      SizedBox(
                        height: 8,
                      ),
                      Container(
                        width: double.infinity,
                        height: 100,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(8),
                          color: isLoading ? Colors.amber : Colors.transparent,
                        ),
                        child: MyText(
                          specialist.description!,
                          size: 20,
                          maxLines: 3,
                          overflow: TextOverflow.ellipsis,
                        ),
                      ),
                      if (!isLoading)
                        Row(
                          children: [
                            if (specialist.actions!.chat != null)
                              Chip(
                                elevation: 2,
                                backgroundColor: Color(0xff7349e5),
                                padding: const EdgeInsets.symmetric(
                                    vertical: 8, horizontal: 22),
                                label: InkWell(
                                  onTap: _opnesExternalLink,
                                  child: MyText(
                                    "Chat",
                                    color: Colors.white,
                                    fontWeight: FontWeight.bold,
                                    size: 20,
                                  ),
                                ),
                              ),
                            SizedBox(
                              width: 22,
                            ),
                            if (specialist.actions!.call != null)
                              InkWell(
                                onTap: _callsPhoneNumber,
                                child: Chip(
                                  backgroundColor: Colors.white,
                                  elevation: 2,
                                  padding: const EdgeInsets.symmetric(
                                    vertical: 8,
                                    horizontal: 22,
                                  ),
                                  label: MyText(
                                    'Call',
                                    fontWeight: FontWeight.bold,
                                    size: 20,
                                  ),
                                ),
                              )
                          ],
                        )
                    ],
                  ),
                ),
              )
            ],
          ),
          Divider(
            thickness: 2,
          )
        ],
      ),
    );
  }

  void _callsPhoneNumber() async {
    String url = 'tel://' + specialist.actions!.call!;

    if (await canLaunch(url))
      await launch(url);
    else
      // can't launch url, there is some error
      throw "Could not launch $url";
  }

  void _opnesExternalLink() async {
    String url = specialist.actions!.chat!;
    if (await canLaunch(url))
      await launch(url);
    else
      // can't launch url, there is some error
      throw "Could not launch $url";
  }
}
