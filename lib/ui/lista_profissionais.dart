import 'dart:async';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:mobile_test/models/professionals.dart';
import 'package:mobile_test/styles/colors.dart';
import 'package:mobile_test/ui/bottom_bar.dart';
import 'package:shimmer/shimmer.dart';

class ListaProfissionais extends StatefulWidget {
  final List<ProfessionalsModel> listaProfissionais;

  const ListaProfissionais({Key key, this.listaProfissionais})
      : super(key: key);

  @override
  _ListaProfissionaisState createState() => _ListaProfissionaisState();
}

class _ListaProfissionaisState extends State<ListaProfissionais> {
  List<ProfessionalsModel> listaProfissionais;
  static const segundos = Duration(seconds: 4);
  Timer tempo;
  bool enabled = true;

  @override
  void initState() {
    listaProfissionais = widget.listaProfissionais;
    super.initState();

    if (enabled) {
      tempo = Timer.periodic(segundos, (Timer t) {
        enabled = false;
        setState(() {});
      });
    }
  }

  @override
  void dispose() {
    tempo.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      extendBodyBehindAppBar: true,
      bottomNavigationBar: bottomBar(context),
      body: Column(
        children: <Widget>[
          Padding(padding: EdgeInsets.only(top: 50)),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: <Widget>[
              Container(
                  margin: EdgeInsets.only(left: 20),
                  alignment: Alignment.centerLeft,
                  child: GestureDetector(
                    child: Stack(children: <Widget>[
                      ClipPath(
                        child: Icon(Icons.arrow_back),
                      ),
                    ]),
                    onTap: () => Navigator.pop(context),
                  )),
              Container(
                  margin: EdgeInsets.only(right: 20),
                  alignment: Alignment.centerRight,
                  child: GestureDetector(
                    child: Stack(children: <Widget>[
                      ClipPath(
                        child: Icon(Icons.filter_list),
                      ),
                    ]),
                    onTap: () => Navigator.pop(context),
                  )),
            ],
          ),
          Column(children: <Widget>[
            Padding(padding: EdgeInsets.only(top: 10)),
            Container(
              color: Colors.white,
              alignment: Alignment.centerLeft,
              padding: EdgeInsets.only(left: 10),
              child: Text(
                "Heart Specialist,",
                style: TextStyle(
                  color: cCinza,
                  fontSize: 20.0,
                  fontFamily: 'SegoeUIb',
                ),
              ),
            ),
            Container(
              color: Colors.white,
              alignment: Alignment.centerLeft,
              padding: EdgeInsets.only(left: 10),
              child: Text(
                "40 doctors were found",
                style: TextStyle(
                  color: cPetroleo,
                  fontSize: 20.0,
                  fontFamily: 'SegoeUI',
                ),
              ),
            ),
            Divider(
              color: cCinza,
            )
          ]),
          enabled
              ? animacao()
              : Container(
                  height: MediaQuery.of(context).size.height * 0.65,
                  //color: Colors.white,
                  child: ListView.builder(
                      padding: const EdgeInsets.all(8),
                      shrinkWrap: true,
                      itemCount: listaProfissionais.length,
                      itemBuilder: (BuildContext context, int index) {
                        return mountList(listaProfissionais, index);
                      }),
                ),
        ],
      ),
    );
  }

  Widget mountList(List<ProfessionalsModel> listTemp, int index) {
    String iniciais = getInitials('${listTemp[index].name}');
    return Column(children: <Widget>[
      index > 0
          ? Divider(
              color: cCinza,
              height: 0.1,
            )
          : Container(),
      Container(
        child: ListTile(
            subtitle: Column(children: <Widget>[
              Container(
                  alignment: AlignmentDirectional.centerStart,
                  child: Text(
                    'Nearby ${listTemp[index].distance.toString()} miles',
                    style: TextStyle(fontFamily: 'SegoeUI', fontSize: 14),
                  )),
              Text('${listTemp[index].description}'),
              Container(
                  child: Row(children: [
                listTemp[index].actions.chat != null
                    ? Container(
                        alignment: Alignment.center,
                        width: 100,
                        height: 30,
                        padding: EdgeInsets.all(1),
                        decoration: BoxDecoration(
                          color: cRoxa,
                          borderRadius: BorderRadius.circular(16),
                        ),
                        constraints: BoxConstraints(
                          minWidth: 12,
                          minHeight: 12,
                        ),
                        child: Text(
                          'Chat',
                          style: TextStyle(
                              color: cBranca,
                              fontSize: 16,
                              fontFamily: 'SegoeUIsb'),
                          textAlign: TextAlign.center,
                        ),
                      )
                    : Container(),
                Padding(padding: EdgeInsets.only(right: 20)),
                listTemp[index].actions.call != null
                    ? Container(
                        alignment: Alignment.center,
                        width: 100,
                        height: 30,
                        padding: EdgeInsets.all(1),
                        decoration: BoxDecoration(
                          color: cBranca,
                          boxShadow: <BoxShadow>[
                            BoxShadow(
                              color: cCinza,
                              offset: Offset(1.0, 1.0),
                              blurRadius: 1,
                            ),
                          ],
                          borderRadius: BorderRadius.circular(16),
                        ),
                        constraints: BoxConstraints(
                          minWidth: 12,
                          minHeight: 12,
                        ),
                        child: Text(
                          'Call',
                          style: TextStyle(
                              color: cCinza,
                              fontSize: 16,
                              fontFamily: 'SegoeUIsb'),
                          textAlign: TextAlign.center,
                        ),
                      )
                    : Container(),
                Padding(padding: EdgeInsets.only(bottom: 50))
              ])),
            ]),
            title: Text(
              '${listTemp[index].name}',
              style: TextStyle(fontSize: 16, fontFamily: 'SegoeUIsb'),
            ),
            leading: CircleAvatar(
              child: Text(iniciais),
              backgroundColor: cCinza,
            )),
      )
    ]);
  }

  String getInitials(String nome) {
    return nome.isNotEmpty
        ? nome.trim().split(' ').map((l) => l[0]).take(2).join()
        : '';
  }

  Widget animacao() {
    return Expanded(
      child: Shimmer.fromColors(
        baseColor: Colors.grey[300],
        highlightColor: Colors.grey[100],
        enabled: enabled,
        child: ListView.builder(
          itemBuilder: (_, __) => Padding(
            padding: const EdgeInsets.only(bottom: 8.0),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(
                  width: 48.0,
                  height: 48.0,
                  color: Colors.white,
                ),
                Padding(
                  padding: EdgeInsets.symmetric(horizontal: 8.0),
                ),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      Container(
                        width: double.infinity,
                        height: 8.0,
                        color: Colors.white,
                      ),
                      Padding(
                        padding: EdgeInsets.symmetric(vertical: 2.0),
                      ),
                      Container(
                        width: double.infinity,
                        height: 8.0,
                        color: Colors.white,
                      ),
                      Padding(
                        padding: EdgeInsets.symmetric(vertical: 2.0),
                      ),
                      Container(
                        width: 40.0,
                        height: 8.0,
                        color: Colors.white,
                      ),
                    ],
                  ),
                )
              ],
            ),
          ),
          itemCount: 9,
        ),
      ),
    );
  }
}
