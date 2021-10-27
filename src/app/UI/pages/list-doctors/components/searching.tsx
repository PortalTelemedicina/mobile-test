import {SharedI18n, translate} from '@/config/locale';
import {Spinner, Text} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const Searching = () => {
  return (
    <View style={styles.container}>
      <Spinner size="small" />
      <Text style={styles.searching} testID="loading-text" category="h6">
        {translate(SharedI18n.searching)}...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searching: {marginLeft: 10},
  container: {flexDirection: 'row', alignItems: 'center', marginTop: 20},
});

export default Searching;
