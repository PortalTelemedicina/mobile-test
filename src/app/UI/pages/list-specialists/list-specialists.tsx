import {QuickAction} from '@/app/domain/entities';
import {ListMedicalSpecialties, ListQuickActions} from '@/app/domain/usecases';
import {ListSpecialistsI18n, SharedI18n, translate} from '@/config/locale';
import {Layout, Text} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';

export type ListSpecialistsProps = {
  listMedicalSpecialties: ListMedicalSpecialties;
  listQuickActions: ListQuickActions;
};

const ListSpecialists: React.FC<ListSpecialistsProps> = ({
  listQuickActions,
}) => {
  useEffect(() => {
    const getQuickActions = () => {
      const actions = listQuickActions.run();
      if (actions) {
        setActions(actions);
      }
    };
    getQuickActions();
    return () => {};
  }, [listQuickActions]);

  const [actions, setActions] = useState<QuickAction[]>(null);

  const renderItem = ({item}: {item: QuickAction}) => {
    const {title, icon, active} = item;
    return (
      <TouchableOpacity
        testID={`action-${item.title}`}
        disabled={!active}
        onPress={() => {}}
      >
        <Text>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Layout level="1" style={styles.container}>
      <Text category="h5">{translate(SharedI18n.specialists)}</Text>
      <Text category="h5">{translate(ListSpecialistsI18n.whatDoYouNeed)}</Text>
      <FlatList data={actions} renderItem={renderItem} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 20, paddingTop: 30},
});

export default ListSpecialists;
