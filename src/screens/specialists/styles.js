import EStyleSheet from 'react-native-extended-stylesheet';
import theme from '../../theme';

const styles = EStyleSheet.create({
  header: {
    width: '100%',
    height: '9rem',
    marginBottom: '0.8rem',
    backgroundColor: theme.colors.white,
  },
  icon:{
    width: '2rem',
    height: '2rem',
    marginVertical: '1rem',
  },
  title: {
    marginTop: '0.5rem',
    marginHorizontal: '0.8rem',
    fontFamily: theme.fonts.primaryBold,
    fontSize: '1.2rem',
  },
  subTitle: {
    marginTop: '0.5rem',
    marginHorizontal: '0.8rem',
    fontFamily: theme.fonts.primaryRegular,
    fontSize: '1.2rem',
  },
});

export default styles;
