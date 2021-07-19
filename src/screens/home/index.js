import React, {useEffect, useState} from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import styles from './styles';

import api from '../../services/api';
import MenuSpecialists from '../../components/menus/specialists';
import MenuHome from "../../components/menus/home";
import StyledButton from "../../components/buttons/styledButton";
import theme from "../../theme";

export default function Home({navigation}) {
  const [specialists, setSpecialists] = useState(null);;

  useEffect(() => {
    api
      .get('home_specialists.json')
      .then((res) => {
        console.log(' get specialists success', res.data);
        setSpecialists(res.data);
      })
      .catch((err) => {
        console.log('error get specialists', err);
      });
  }, []);

  function selectTypeSpecialist(type) {
    switch (type) {
      case 'Heart Specialist': {
        return navigation.navigate('specialists',{typeSpecialistsApi:'list_specialist_heart.json', type});
      }
      case 'Dental Care': {
        return navigation.navigate('specialists',{typeSpecialistsApi:'list_specialist_dental_care.json', type});
      }
      case 'Dermatology Specialist': {
        return navigation.navigate('specialists',{typeSpecialistsApi:'list_specialist_dermatology.json', type});
      }
      default:
        return console.log('specialist not fount ');
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.wellComeText}>Hello,</Text>
        <Text style={styles.userName}>Lorelle Luna</Text>
      </View>

      <View style={styles.menu}>
        <Text style={styles.title}>Specialists</Text>
        <MenuSpecialists items={specialists} menuFn={(type) => selectTypeSpecialist(type)} />
      </View>

      <View style={styles.menu}>
        <Text style={styles.title}>What do you need?</Text>
        <MenuHome />
      </View>
    </SafeAreaView>
  );
}
