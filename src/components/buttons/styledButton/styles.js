import EStyleSheet from 'react-native-extended-stylesheet';
import theme from '../../../theme';

const styles = EStyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  title: {
    textAlign: 'center',
    fontFamily: theme.fonts.primaryBold,
    fontSize: '0.85rem',
  },
});

export default styles;
