import {MedicalSpecialties, QuickAction} from '@/app/domain/entities';
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
  listMedicalSpecialties,
}) => {
  useEffect(() => {
    const getQuickActions = () => {
      const actions = listQuickActions.run();
      if (actions) {
        setActions(actions);
      }
    };

    const getMedicalSpecialties = async () => {
      const specialties = await listMedicalSpecialties.run();
      if (specialties) {
        setMedicalSpecialties(specialties);
      }
    };

    getQuickActions();
    getMedicalSpecialties();
    return () => {};
  }, [listQuickActions, listMedicalSpecialties]);

  const [actions, setActions] = useState<QuickAction[]>(null);
  const [medicalSpecialties, setMedicalSpecialties] =
    useState<MedicalSpecialties[]>(null);

  const renderActions = ({item}: {item: QuickAction}) => {
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

  const renderMedicalSpecialty = ({item}: {item: MedicalSpecialties}) => {
    const {name} = item;
    return (
      <TouchableOpacity testID={`medicalspecialty-${name}`} onPress={() => {}}>
        <Text>{name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Layout level="1" style={styles.container}>
      <Text category="h5">{translate(SharedI18n.specialists)}</Text>
      <FlatList data={medicalSpecialties} renderItem={renderMedicalSpecialty} />
      <Text category="h5">{translate(ListSpecialistsI18n.whatDoYouNeed)}</Text>
      <FlatList data={actions} renderItem={renderActions} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 20, paddingTop: 30},
});

export default ListSpecialists;
