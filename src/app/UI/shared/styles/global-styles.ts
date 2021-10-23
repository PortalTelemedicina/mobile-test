import {Platform, StyleSheet} from 'react-native';

export const GlobalStyles = StyleSheet.create({
  bottomSafeArea: {flex: 1},
  topSafeArea: {flex: 0},
  container: {flex: 1},
  content: {padding: 30},
  boxShadow: {
    margin: Platform.OS === 'android' ? 8 : 0,
    borderRadius: 10,
    shadowColor: '#000',
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 7,
  },
});
