import EStyleSheet from 'react-native-extended-stylesheet';
import theme from '../../theme';

const styles = EStyleSheet.create({
  header: {
    marginVertical: '3rem',
    marginHorizontal: '0.7rem',
  },
  menu: {
    marginVertical: '3rem',
    marginHorizontal: '0.7rem',
    height: '12rem',
  },
  title: {
    marginTop: '1rem',
    fontFamily: theme.fonts.primaryBold,
    fontSize: '1.2rem',
    color: theme.colors.darkslategray,
  },
  userName: {
    fontFamily: theme.fonts.primaryBold,
    fontSize: '2.2rem',
    color: theme.colors.darkslategray,
  },
  wellComeText: {
    fontFamily: theme.fonts.primaryRegular,
    fontSize: '1.5rem',
    color: theme.colors.darkslategray,
  },
});

export default styles;
