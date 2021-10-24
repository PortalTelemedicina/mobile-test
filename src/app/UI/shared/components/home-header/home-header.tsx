import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  Icon,
  Text,
  TopNavigation,
  TopNavigationAction,
  useTheme,
} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RouteList} from '../../routes';

export type HomeHeaderProps = {
  onLogoutPress?: () => void;
  name?: string;
  navigation?: NativeStackNavigationProp<RouteList, 'HOME'>;
};

export const HomeHeader: React.FC<HomeHeaderProps> = ({
  onLogoutPress = () => {},
  name = 'John Doe',
}) => {
  const theme = useTheme();
  return (
    <SafeAreaView
      edges={['top']}
      style={{backgroundColor: theme['background-basic-color-1']}}
    >
      <TopNavigation
        style={styles.headerContainer}
        title={() => (
          <View>
            <Text category="s1" style={styles.hello}>
              Hello,
            </Text>
            <Text testID="txt-name" style={styles.name} category="h5">
              {name}
            </Text>
          </View>
        )}
        accessoryRight={() => (
          <TopNavigationAction
            testID="btn-logout"
            onPress={onLogoutPress}
            icon={props => <Icon {...props} name="log-out-outline" />}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {paddingHorizontal: 20},
  hello: {fontSize: 18},
  name: {marginTop: 5},
});
