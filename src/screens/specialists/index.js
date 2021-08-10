import React, { useEffect, useState } from 'react';
import {
 View, Text, SafeAreaView, FlatList
} from 'react-native';

import styles from './styles';

import api from '../../services/api';
import ItemSpecialist from '../../components/specialists/itemSpecialist';
import IconButton from '../../components/buttons/iconButton';
import arrowBackIcon from '../../assets/icons/arrow-back.png';
import LoadSpecialist from '../../components/specialists/loadSpecialist';

export default function Specialists({ route, navigation }) {
  const [specialists, setSpecialists] = useState([]);
  const typeSpecialistsApi = route.params?.typeSpecialistsApi;
  const typeSpecialistsName = route.params?.type;

  useEffect(() => {
    api
      .get(typeSpecialistsApi)
      .then(res => {
        console.log(' get specialists success', res.data);
        setSpecialists(res.data);
      })
      .catch(err => {
        console.log('error get specialists', err);
      });
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View style={styles.icon}>
          <IconButton icon={arrowBackIcon} btnFn={() => navigation.goBack()} />
        </View>
        <Text style={styles.title}>{typeSpecialistsName}</Text>
        {specialists.length > 0 ?
          <Text style={styles.subTitle}>
            {`${specialists.length} `}
            {' '}
            doctors were found
          </Text>
          :
          <Text style={styles.subTitle}>Searching</Text>
        }
      </View>
      <View style={styles.container}>
        {specialists.length > 0 ? (
          <FlatList
            data={specialists}
            renderItem={items => (
              <View>
                <ItemSpecialist data={items} />
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        ) :
          <View>
            <LoadSpecialist />
            <LoadSpecialist />
            <LoadSpecialist />
          </View>
        }
      </View>
    </SafeAreaView>
  );
}
