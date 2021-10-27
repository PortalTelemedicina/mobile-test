import {RouteProp, useRoute} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Text} from '@ui-kitten/components';
import React from 'react';
import {View} from 'react-native';
import {RouteList} from '../../shared/routes';

export type ListDoctorsProps = {
  navigation: NativeStackNavigationProp<RouteList, 'LIST-DOCTORS'>;
};

export type ListDoctorsScreenRouteProp = RouteProp<RouteList, 'LIST-DOCTORS'>;

const ListDoctors: React.FC<ListDoctorsProps> = ({}) => {
  const route = useRoute<ListDoctorsScreenRouteProp>();

  return (
    <View testID="view-list-doctors">
      <Text>ListDoctors</Text>
      <Text>{route.params.type}</Text>
    </View>
  );
};

export default ListDoctors;
