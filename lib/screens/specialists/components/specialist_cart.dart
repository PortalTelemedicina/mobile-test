import 'package:flutter/material.dart';
import 'package:mobile_test_daniel_vofchuk/models/spesialist.dart';
import 'package:mobile_test_daniel_vofchuk/util/my_text.dart';
import 'dart:math';

import 'package:url_launcher/url_launcher.dart';

class SpecialistCard extends StatelessWidget {
  final bool isLoading;
  final Specialist specialist;
  const SpecialistCard(
      {Key? key, this.isLoading = false, required this.specialist})
      : super(key: key);

  String _getInitials(String name) => name.isNotEmpty
      ? name.trim().split(' ').map((l) => l[0]).take(2).join()
      : '';

  @override
  Widget build(BuildContext context) {
    Color color =
        Color((Random().nextDouble() * 0xFFFFFF).toInt()).withOpacity(1.0);
    return Container(
      color: isLoading ? Colors.transparent : Colors.white,
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
                        'Nearby 0.62 miles',
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
                          color: isLoading ? Colors.amber : Colors.transparent),
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
                              label: InkWell(
                                onTap: () async {
                                  String url = specialist.actions!.chat!;
                                  if (await canLaunch(url))
                                    await launch(url);
                                  else
                                    // can't launch url, there is some error
                                    throw "Could not launch $url";
                                },
                                child: MyText("Chat"),
                              ),
                            ),
                          if (specialist.actions!.call != null)
                            InkWell(
                              onTap: () async {
                                String url = specialist.actions!.call!;
                                if (await canLaunch(url))
                                  await launch(url);
                                else
                                  // can't launch url, there is some error
                                  throw "Could not launch $url";
                              },
                              child: Chip(
                                label: MyText(specialist.actions!.call!),
                              ),
                            )
                        ],
                      )
                  ],
                ),
              ))
            ],
          ),
          Divider(
            thickness: 2,
          )
        ],
      ),
    );
  }
}
