import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:mobile_test/commons/singleton.dart';
import 'package:mobile_test/models/professionals.dart';
import 'package:mobile_test/services/api.dart';
import 'package:mobile_test/services/memory.dart';
import 'package:mobile_test/styles/colors.dart';
import 'package:mobile_test/ui/bottom_bar.dart';
import 'package:mobile_test/ui/card_departaments.dart';
import 'package:mobile_test/ui/card_especialists.dart';
import 'package:mobile_test/ui/lista_profissionais.dart';
import 'package:mobile_test/ui/loading.dart';

class Principal extends StatefulWidget {
  @override
  _PrincipalState createState() => _PrincipalState();
}

class _PrincipalState extends State<Principal> {
  bool _isBusy = true;
  List<ProfessionalsModel> listaRemotaLocal = [];

  @override
  void initState() {
    super.initState();
    buscaProfissionaisRemotoLocal().then((value) {
      if (value == null || value.isEmpty) {
        showDialog(
          barrierDismissible: true,
          context: context,
          builder: (BuildContext context) => Container(
            height: MediaQuery.of(context).size.height * 0.02,
            width: MediaQuery.of(context).size.width * 0.02,
            color: cBranca,
            child: Column(
              children: [
                Padding(
                  padding:
                      EdgeInsets.only(top: 50, left: 10, right: 10, bottom: 30),
                  child: Text(
                    "Que pena! Não há dados na memória. Por favor, tente novamente quando estiver conectado.",
                    style: TextStyle(
                        color: cCinza, fontFamily: 'SegoeUI', fontSize: 20),
                  ),
                ),
                GestureDetector(
                  onTap: () => Navigator.of(context).pop(),
                  child: Container(
                    alignment: Alignment.center,
                    width: 150,
                    height: 40,
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
                      'Entendi',
                      style: TextStyle(
                          color: cBranca,
                          fontSize: 20,
                          fontFamily: 'SegoeUIsb'),
                      textAlign: TextAlign.center,
                    ),
                  ),
                )
              ],
            ),
          ),
        );
      } else {
        listaRemotaLocal.addAll(value);
      }
    });
  }

  @override
  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    const int qtyHeart = 40;
    const int qtyDental = 35;
    const int qtyDerma = 12;
    return _isBusy
        ? CarregaPage()
        : Scaffold(
            bottomNavigationBar: bottomBar(context),
            body: SingleChildScrollView(
              child: Column(children: <Widget>[
                Padding(padding: EdgeInsets.only(top: 50)),
                Column(
                  children: <Widget>[
                    Container(
                      alignment: Alignment.centerLeft,
                      padding: EdgeInsets.only(left: 10),
                      child: Text(
                        "Hello,",
                        style: TextStyle(
                          color: cCinza,
                          fontSize: 20.0,
                          fontFamily: 'SegoeUI',
                        ),
                      ),
                    ),
                    Container(
                      alignment: Alignment.centerLeft,
                      padding: EdgeInsets.only(left: 10),
                      child: Text(
                        "Lorelle Luna",
                        style: TextStyle(
                          color: cPetroleo,
                          fontSize: 32.0,
                          fontFamily: 'SegoeUIb',
                        ),
                      ),
                    ),
                    Container(
                      alignment: Alignment.centerLeft,
                      padding: EdgeInsets.only(left: 10, top: 20),
                      child: Text(
                        "Specialists",
                        style: TextStyle(
                          color: cPetroleo,
                          fontSize: 20.0,
                          fontFamily: 'SegoeUIsb',
                        ),
                      ),
                    ),
                    Container(
                        margin: EdgeInsets.only(top: 16, bottom: 16),
                        height: 180.0,
                        width: size.width > size.height
                            ? size.width * 0.5
                            : size.width * 0.98,
                        child: ListView(
                          shrinkWrap: true,
                          scrollDirection: Axis.horizontal,
                          physics: BouncingScrollPhysics(),
                          children: <Widget>[
                            cardSpecialist(
                                'icons/heart-shape-outline-with-lifeline.svg',
                                'Heart\nSpecialist',
                                qtyHeart,
                                cVermelho,
                                ListaProfissionais(
                                    listaProfissionais: listaRemotaLocal)),
                            cardSpecialist(
                                'icons/tooth.svg',
                                'Dental\nCare',
                                qtyDental,
                                cDourada,
                                ListaProfissionais(
                                    listaProfissionais: listaRemotaLocal)),
                            cardSpecialist(
                                'icons/pimples.svg',
                                'Dermatology Specialist',
                                qtyDerma,
                                cRoxa,
                                ListaProfissionais(
                                    listaProfissionais: listaRemotaLocal)),
                          ],
                        ))
                  ],
                ),
                Container(
                  alignment: Alignment.centerLeft,
                  padding: EdgeInsets.only(left: 10, top: 20),
                  child: Text(
                    "What do you need?",
                    style: TextStyle(
                      color: cPetroleo,
                      fontSize: 20.0,
                      fontFamily: 'SegoeUIsb',
                    ),
                  ),
                ),
                Container(
                    margin: EdgeInsets.only(top: 14, bottom: 14),
                    alignment: Alignment.center,
                    height: 120.0,
                    width: size.width > size.height
                        ? size.width * 0.5
                        : size.width * 0.98,
                    child: ListView(
                      shrinkWrap: true,
                      scrollDirection: Axis.horizontal,
                      physics: BouncingScrollPhysics(),
                      children: <Widget>[
                        cardDepartments(
                            'icons/stethoscope.svg',
                            'Diagnostic',
                            cRosa,
                            cBranca,
                            ListaProfissionais(
                                listaProfissionais: listaRemotaLocal)),
                        cardDepartments(
                            'icons/patient.svg',
                            'Consultation',
                            cBranca,
                            cPetroleo,
                            ListaProfissionais(
                                listaProfissionais: listaRemotaLocal)),
                        cardDepartments(
                            'icons/nurse.svg',
                            'Nurse',
                            cBranca,
                            cPetroleo,
                            ListaProfissionais(
                                listaProfissionais: listaRemotaLocal)),
                      ],
                    )),
                Container(
                    margin: EdgeInsets.only(top: 14, bottom: 14),
                    alignment: Alignment.center,
                    height: 120.0,
                    width: size.width > size.height
                        ? size.width * 0.5
                        : size.width * 0.98,
                    child: ListView(
                      shrinkWrap: true,
                      scrollDirection: Axis.horizontal,
                      physics: BouncingScrollPhysics(),
                      children: <Widget>[
                        cardDepartments(
                            'icons/ambulance.svg',
                            'Ambulance',
                            cBranca,
                            cPetroleo,
                            ListaProfissionais(
                                listaProfissionais: listaRemotaLocal)),
                        cardDepartments(
                            'icons/flask.svg',
                            'Lab Work',
                            cBranca,
                            cPetroleo,
                            ListaProfissionais(
                                listaProfissionais: listaRemotaLocal)),
                        cardDepartments(
                            'icons/medicine.svg',
                            'Medicine',
                            cBranca,
                            cPetroleo,
                            ListaProfissionais(
                                listaProfissionais: listaRemotaLocal)),
                      ],
                    )),
              ]),
            ),
          );
  }

  Widget cardSpecialist(String iconPath, String specialty, int quantity,
      Color color, Widget tela) {
    return SizedBox(
      width: 150,
      height: 100,
      child: CardSpecialist(
        iconAsset: iconPath,
        specialty: specialty,
        quantity: quantity,
        colorBackground: color,
        onTap: () {
          Navigator.push(
            context,
            MaterialPageRoute(
                builder: (context) =>
                    ListaProfissionais(listaProfissionais: listaRemotaLocal)),
          );
        },
      ),
    );
  }

  Widget cardDepartments(String iconPath, String specialty,
      Color colorBackground, Color colorText, Widget tela) {
    return SizedBox(
      width: 115,
      height: 40,
      child: CardDepartments(
        iconAsset: iconPath,
        specialty: specialty,
        colorBackground: colorBackground,
        colorText: colorText,
        onTap: () {
          setState(
            () {
              Navigator.push(
                context,
                MaterialPageRoute(
                    builder: (context) => ListaProfissionais(
                        listaProfissionais: listaRemotaLocal)),
              );
            },
          );
        },
      ),
    );
  }

  Future<List<ProfessionalsModel>> buscaProfissionaisRemotoLocal() async {
    List<ProfessionalsModel> listTemp = [];
    bool isConnected = await Singleton.isConnected(context);
    if (isConnected == false) {
      listTemp = await Memory()
          .buscaProfessionalsLocal()
          .catchError((exceptionMemory) {
        showError("Ocorreu erro ao buscar dados da memória. Detalhes: " +
            exceptionMemory.toString());
      });
    } else {
      listTemp = await ApiService().buscaProfessionalsRemote();
      listTemp.sort((a, b) => a.distance != null && b.distance != null
          ? a.distance.compareTo(b.distance)
          : null);

      Memory().salvaProfissionaisLocal(listTemp).catchError((exceptionSave) {
        showError(exceptionSave.toString());
      });
    }
    _isBusy = false;
    setState(() {});
    return listTemp;
  }

  Future<Widget> showError(String exception) {
    return showDialog(
        context: context,
        builder: (BuildContext context) => Container(
              color: cBranca,
              child: Column(
                children: [
                  Padding(
                    padding: EdgeInsets.only(
                        top: 50, left: 10, right: 10, bottom: 30),
                    child: Text(
                      exception,
                      style: TextStyle(
                          color: cCinza, fontFamily: 'SegoeUI', fontSize: 20),
                    ),
                  ),
                  GestureDetector(
                    onTap: () => Navigator.of(context).pop(),
                    child: Container(
                      alignment: Alignment.center,
                      width: 150,
                      height: 40,
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
                        'Entendi',
                        style: TextStyle(
                            color: cBranca,
                            fontSize: 20,
                            fontFamily: 'SegoeUIsb'),
                        textAlign: TextAlign.center,
                      ),
                    ),
                  )
                ],
              ),
            ));
  }
}
