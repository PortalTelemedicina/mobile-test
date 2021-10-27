import {Doctor} from '@/app/domain/entities';
import {ListDoctors as ListDoctorsInterface} from '@/app/domain/usecases';
import {ListDoctorsI18n, translate} from '@/config/locale';
import {RouteProp, useRoute} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Layout, Text} from '@ui-kitten/components';
import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {RouteList} from '../../shared/routes';
import DoctorCard from './components/doctor-card';
import ListDoctorsError from './components/list-doctors-error';
import Searching from './components/searching';

export type ListDoctorsProps = {
  navigation: NativeStackNavigationProp<RouteList, 'LIST-DOCTORS'>;
  listDoctors: ListDoctorsInterface;
};

export type ListDoctorsScreenRouteProp = RouteProp<RouteList, 'LIST-DOCTORS'>;

const ListDoctors: React.FC<ListDoctorsProps> = ({listDoctors}) => {
  const {
    params: {type, title, amount},
  } = useRoute<ListDoctorsScreenRouteProp>();

  const [doctors, setDoctors] = useState<Doctor[]>(null);
  const [loadingDoctors, setLoadingDoctors] = useState<boolean>(false);
  const [errorDoctors, setErrorDoctors] = useState<string>(null);

  const getDoctors = useCallback(async () => {
    try {
      setLoadingDoctors(true);
      if (type) {
        const doctors = await listDoctors.run({type});
        setLoadingDoctors(false);
        if (doctors) {
          setDoctors(doctors);
        }
      }
    } catch (error) {
      setLoadingDoctors(false);
      setErrorDoctors(error.message);
    }
  }, [listDoctors, type]);

  useEffect(() => {
    getDoctors();
    return () => {};
  }, [getDoctors]);

  const renderItem = ({item}: {item: Doctor}) => (
    <DoctorCard doctor={item} loading={loadingDoctors} />
  );

  if (errorDoctors) {
    return (
      <Layout style={styles.container} testID="view-list-doctors">
        <Text testID="page-title" category="h5">
          {title}
        </Text>
        <ListDoctorsError
          loading={loadingDoctors}
          message={errorDoctors}
          refreshFn={getDoctors}
        />
      </Layout>
    );
  }

  return (
    <Layout style={styles.container} testID="view-list-doctors">
      <Text testID="page-title" category="h5">
        {title}
      </Text>
      <Text
        testID="amount"
        appearance="hint"
        category="s1"
        style={styles.amountAvailableText}
      >
        {amount} {translate(ListDoctorsI18n.amountFound)}
      </Text>

      {loadingDoctors && <Searching />}
      {loadingDoctors ? (
        <View style={[styles.loadingFlatlist]}>
          <DoctorCard loading />
          <DoctorCard loading />
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.flatlist}
          data={doctors}
          renderItem={renderItem}
        />
      )}
    </Layout>
  );
};

export const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 20, paddingTop: 0},
  amountAvailableText: {marginTop: 10, fontSize: 16},
  flatlist: {marginTop: 10},
  loadingFlatlist: {
    flex: 1,
    marginTop: 10,
  },
  errorContainer: {
    flex: 1,
    marginTop: 60,
    alignItems: 'center',
  },
  errorText: {width: '90%', marginTop: 20},
  refreshButton: {width: '60%', marginTop: 20},
});

export default ListDoctors;
