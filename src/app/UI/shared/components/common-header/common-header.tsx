import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  Icon,
  TopNavigation,
  TopNavigationAction,
  useTheme,
} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RouteList} from '../../routes';

export type CommonHeaderProps = {
  navigation?: NativeStackNavigationProp<RouteList, 'LIST-DOCTORS'>;
};

export const CommonHeader: React.FC<CommonHeaderProps> = ({navigation}) => {
  const theme = useTheme();
  return (
    <SafeAreaView
      edges={['top']}
      style={{backgroundColor: theme['background-basic-color-1']}}
    >
      <TopNavigation
        style={styles.headerContainer}
        title=""
        accessoryLeft={() => (
          <TopNavigationAction
            testID="btn-back"
            onPress={navigation.goBack}
            icon={props => <Icon {...props} name="arrow-back-outline" />}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {paddingHorizontal: 10},
});
