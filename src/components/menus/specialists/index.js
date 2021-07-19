import React from 'react';
import { View, FlatList, TouchableWithoutFeedback, Text } from 'react-native';

import {SvgUri} from 'react-native-svg';
import styles from './styles';

export default function MenuSpecialists({items, menuFn}) {
  function Item({ data }) {
    const especialist = data.item;
    return (
      <TouchableWithoutFeedback onPress={() => menuFn(especialist.name)}>
        <View
          style={[
            styles.itemContainer,
            {backgroundColor: `${especialist.color}`},
          ]}>
          <View style={styles.imageContainer}>
            <SvgUri
              width="142.657px"
              height="142.657px"
              uri={especialist.image_url}
            />
          </View>
          <View>
            <Text style={styles.title}>{especialist.name}</Text>
          </View>

          <View>
            <Text style={styles.doctorsNumber}>
              {especialist.total}
              {' '}
              Doctors
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  return (
    <View style={styles.container}>
      {items ? (
        <FlatList
          data={items}
          horizontal
          renderItem={(items) => (
            <View>
              <Item data={items} />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : null}
    </View>
  );
}
