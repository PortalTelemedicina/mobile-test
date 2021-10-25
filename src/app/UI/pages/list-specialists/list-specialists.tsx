import {ListSpecialistsI18n, SharedI18n, translate} from '@/config/locale';
import {Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet} from 'react-native';

export type ListSpecialistsProps = {};

const ListSpecialists: React.FC<ListSpecialistsProps> = ({}) => {
  return (
    <Layout level="1" style={styles.container}>
      <Text category="h5">{translate(SharedI18n.specialists)}</Text>
      <Text category="h5">{translate(ListSpecialistsI18n.whatDoYouNeed)}</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 20, paddingTop: 30},
});

export default ListSpecialists;
