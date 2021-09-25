import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNetInfo } from '@react-native-community/netinfo';

/* System */
import { systemI18n, systemColors } from '../system';
import { RootStackScreenProps } from '../types';

/* Actions/Selectors */
import { getAllSpecialistByCategoryRequest } from '../store/specialist/specialistActions';
import { getAllSpecialistByCategorySelector, getErrorSelector } from '../store/specialist/specialistSelectors';
import { isLoadingSelector } from '../store/system/systemSelectors';

/* Components */
import { TextContainer as Text } from '../components/TextContainer';
import SpecialistList from '../components/SpecialistList';
import SpecialistListShimmer from '../components/SpecialistListShimmer';
import ErrorContainer from '../components/ErrorContainer';

export default function SpecialistListScreen({ route }: RootStackScreenProps<'SpecialistListScreen'>): JSX.Element {
  const dispatch = useDispatch();
  const netInfo = useNetInfo();
  const isLoading = useSelector(isLoadingSelector);
  const specialists = useSelector(getAllSpecialistByCategorySelector);
  const isError = useSelector(getErrorSelector);
  const { params } = route;

  const getAllSpecialistByCategory = () => {
    dispatch(getAllSpecialistByCategoryRequest({ category: params?.category }));
  };

  useEffect(() => {
    if (params?.category) {
      getAllSpecialistByCategory();
    }
  }, [params?.category]);

  const isConnected = () => {
    return netInfo.isConnected;
  };

  const getTotalSpecialists = () => {
    return specialists?.length;
  };

  const isFetched = () => {
    return specialists.length > 0;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle} bold>
        {route?.params?.category}
      </Text>
      {isLoading && (
        <>
          <Text style={styles.subtitleInfo}>{systemI18n.t('msg.searching')}</Text>
          <SpecialistListShimmer />
        </>
      )}
      {!isLoading && isFetched() && (
        <>
          <Text style={styles.subtitleInfo}>{systemI18n.t('msg.totalDoctors', { total: getTotalSpecialists() })}</Text>
          <SpecialistList specialists={specialists} />
        </>
      )}
      {!isLoading && !isFetched() && isError && (
        <View style={styles.errorContainer}>
          <ErrorContainer
            iconName={isConnected() ? 'close-circle-outline' : 'earth'}
            message={isConnected() ? 'msg.genericError' : 'msg.networkError'}
            onPressTryAgain={() => getAllSpecialistByCategory()}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: systemColors.white,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
  },
  subtitleInfo: {
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 25,
  },
  errorContainer: {
    height: '100%',
    borderWidth: 0,
    marginTop: '40%',
  },
});
