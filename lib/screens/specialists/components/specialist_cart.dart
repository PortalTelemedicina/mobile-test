import 'package:flutter/material.dart';
import 'package:mobile_test_daniel_vofchuk/util/my_text.dart';

class SpecialistCard extends StatelessWidget {
  final bool isLoading;
  const SpecialistCard({Key? key, this.isLoading = true}) : super(key: key);

  @override
  Widget build(BuildContext context) {
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
              ),
              Expanded(
                  child: Padding(
                padding:
                    const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
                child: Column(
                  children: [
                    Container(
                      width: double.infinity,
                      height: 40,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(8),
                          color: isLoading ? Colors.amber : Colors.transparent),
                      child: MyText("text"),
                    ),
                    SizedBox(
                      height: 8,
                    ),
                    Container(
                      width: double.infinity,
                      height: 100,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(8),
                          color: isLoading ? Colors.amber : Colors.transparent),
                      child: MyText("text"),
                    ),
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
