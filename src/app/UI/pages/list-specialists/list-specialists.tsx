import {MedicalSpecialties, QuickAction} from '@/app/domain/entities';
import {ListMedicalSpecialties, ListQuickActions} from '@/app/domain/usecases';
import {ListSpecialistsI18n, SharedI18n, translate} from '@/config/locale';
import {Layout, Text} from '@ui-kitten/components';
import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {
  MedicalSpecialtiesErrorMessage,
  MedicalSpecialtyCard,
  QuickActionCard,
} from './components';

export type ListSpecialistsProps = {
  listMedicalSpecialties: ListMedicalSpecialties;
  listQuickActions: ListQuickActions;
};

const ListSpecialists: React.FC<ListSpecialistsProps> = ({
  listQuickActions,
  listMedicalSpecialties,
}) => {
  const [actions, setActions] = useState<QuickAction[]>(null);
  const [medicalSpecialties, setMedicalSpecialties] =
    useState<MedicalSpecialties[]>(null);
  const [loadingMedicalSpecialties, setLoadingMedicalSpecialties] =
    useState<boolean>(false);
  const [loadingQuickActions, setLoadingQuickActions] =
    useState<boolean>(false);
  const [errorMedicalSpecialties, setErrorMedicalSpecialties] =
    useState<string>(null);

  const getMedicalSpecialties = useCallback(async () => {
    try {
      setLoadingMedicalSpecialties(true);
      const specialties = await listMedicalSpecialties.run();
      setLoadingMedicalSpecialties(false);
      if (specialties) {
        setMedicalSpecialties(specialties);
      }
    } catch (error) {
      setLoadingMedicalSpecialties(false);
      setErrorMedicalSpecialties(error.message);
    }
  }, [listMedicalSpecialties]);

  useEffect(() => {
    const getQuickActions = () => {
      setLoadingQuickActions(true);
      const actions = listQuickActions.run();
      setLoadingQuickActions(false);
      if (actions) {
        setActions(actions);
      }
    };

    getQuickActions();
    getMedicalSpecialties();
    return () => {};
  }, [listQuickActions, getMedicalSpecialties]);

  const renderActions = ({item}: {item: QuickAction}) => {
    return (
      <View style={styles.quickActionWrapper}>
        <QuickActionCard
          onPress={() => {}}
          loading={loadingQuickActions}
          action={item}
        />
      </View>
    );
  };

  const renderMedicalSpecialty = ({item}: {item: MedicalSpecialties}) => {
    return (
      <View style={styles.medicalSpecialtyWrapper}>
        <MedicalSpecialtyCard
          medicalSpecialty={item}
          onPress={() => {}}
          loading={loadingMedicalSpecialties}
        />
      </View>
    );
  };

  return (
    <Layout level="1" style={styles.container}>
      <View style={styles.specialtiesContainer}>
        <Text category="h5">{translate(SharedI18n.specialists)}</Text>
        {!errorMedicalSpecialties ? (
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={medicalSpecialties}
            renderItem={renderMedicalSpecialty}
            horizontal
          />
        ) : (
          <MedicalSpecialtiesErrorMessage
            loading={loadingMedicalSpecialties}
            message={errorMedicalSpecialties}
            refreshFn={getMedicalSpecialties}
          />
        )}
      </View>

      <View style={styles.whatDoYouNeedContainer}>
        <Text category="h5" style={styles.whatDoYouNeedText}>
          {translate(ListSpecialistsI18n.whatDoYouNeed)}
        </Text>
        <FlatList
          style={styles.quickActionFlatlist}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          data={actions}
          renderItem={renderActions}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 20, paddingTop: 30},
  specialtiesContainer: {flex: 0.8},
  whatDoYouNeedContainer: {flex: 1.75, marginTop: 10},
  whatDoYouNeedText: {marginTop: 20},
  medicalSpecialtyWrapper: {flex: 1, marginTop: 10, marginRight: 15},
  quickActionWrapper: {flex: 1, margin: 5},
  quickActionFlatlist: {marginTop: 10},
});

export default ListSpecialists;
