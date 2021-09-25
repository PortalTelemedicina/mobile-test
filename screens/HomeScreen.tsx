import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import { useDispatch, useSelector } from 'react-redux';

/* System */
import { systemI18n, systemLayout, systemColors, systemConfig } from '../system';
import { RootTabScreenProps } from '../types';

/* Actions/Selectors */
import { getAllSpecialistCategoryRequest } from '../store/specialistCategory/specialistCategoryActions';
import {
  getAllSpecialistCategorySelector,
  getErrorSelector,
} from '../store/specialistCategory/specialistCategorySelectors';
import { isLoadingSelector } from '../store/system/systemSelectors';

/* Components */
import HomeMenuContainer from '../components/HomeMenuContainer';
import SpecialistCategoryList from '../components/SpecialistCategoryList';
import { TextContainer as Text } from '../components/TextContainer';
import ErrorContainer from '../components/ErrorContainer';
import SpecialistCategoryListShimmer from '../components/SpecialistCategoryListShimmer';

export default function HomeScreen({ navigation }: RootTabScreenProps<'HomeStackScreen'>): JSX.Element {
  const dispatch = useDispatch();
  const netInfo = useNetInfo();
  const isLoading = useSelector(isLoadingSelector);
  const specialistsCategories = useSelector(getAllSpecialistCategorySelector);
  const isError = useSelector(getErrorSelector);

  const getAllSpecialistCategory = () => {
    dispatch(getAllSpecialistCategoryRequest());
  };

  useEffect(() => {
    getAllSpecialistCategory();
  }, []);

  const isConnected = () => {
    console.log('IsConnect', netInfo.isConnected);
    return netInfo.isConnected;
  };

  const goToSpecialistListScreen = (category: string) => {
    navigation.push('SpecialistListScreen', { category });
  };

  const isFetched = () => {
    return specialistsCategories.length > 0;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{systemI18n.t('label.hello')}</Text>
      <Text style={styles.username} bold>
        {systemConfig.getUserDefault()}
      </Text>
      <Text style={styles.subtitle} bold>
        {systemI18n.t('title.specialists')}
      </Text>
      <View style={styles.containerList}>
        <>
          {isLoading && <SpecialistCategoryListShimmer />}
          {!isLoading && isFetched() && (
            <SpecialistCategoryList
              specialistsCategories={specialistsCategories}
              onSelectCategory={goToSpecialistListScreen}
            />
          )}
          {!isLoading && !isFetched() && isError && (
            <ErrorContainer
              iconName={isConnected() ? 'close-circle-outline' : 'earth'}
              message={isConnected() ? 'msg.genericError' : 'msg.networkError'}
              onPressTryAgain={() => getAllSpecialistCategory()}
            />
          )}
        </>
      </View>
      <Text style={styles.subtitle} bold>
        {systemI18n.t('title.whatDoYouNeed')}
      </Text>
      <HomeMenuContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 15,
    paddingTop: 50,
    borderWidth: 0,
    backgroundColor: systemColors.white,
  },
  containerList: {
    paddingTop: 20,
    borderWidth: 0,
    height: systemLayout.window.height / 4,
  },
  welcome: {
    marginTop: 5,
    fontSize: 18,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 25,
  },
  errorContainer: {
    width: '100%',
    height: systemLayout.window.height / 8,
  },
  errorMsg: {
    borderWidth: 1,
  },
});
