import React from 'react';
import {
  View,
  FlatList,
  TouchableWithoutFeedback,
  Text,
  Image,
} from 'react-native';

import styles from './styles';

import items from './data/menuItems';

export default function MenuHome() {
  function Item({ data }) {
    const menu = data.item;
    return (
      <TouchableWithoutFeedback onPress={() => {}}>
        <View
          style={[styles.itemContainer, { backgroundColor: `${menu.color}` }]}>
          <View style={styles.imageContainer}>
            <Image source={menu.icon} style={styles.image} />
          </View>
          <View>
            <Text style={[styles.title, {color: `${menu.colorText}`}]}>{menu.title}</Text>
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
          showsHorizontalScrollIndicator={false}
          numColumns={3}
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
