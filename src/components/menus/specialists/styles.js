import EStyleSheet from 'react-native-extended-stylesheet';
import theme from '../../../theme';

const styles = EStyleSheet.create({
  container: {
    marginVertical: '0.7rem',
    width: '100%',
    height: '13.2rem',
  },
  itemContainer: {
    marginHorizontal: '0.7rem',
    width: '10rem',
    height: '98%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 20,
  },
  imageContainer: {
    width: '4.5rem',
    height: '4.5rem',
    marginTop: '1rem',
    marginLeft: '0.8rem',
    borderRadius: 20,
    backgroundColor: theme.colors.white,
  },
  doctorsNumber: {
    marginTop: '0.8rem',
    fontFamily: theme.fonts.primaryBold,
    fontSize: '0.8rem',
    marginHorizontal: '0.8rem',
    color: theme.colors.white,
  },
  title: {
    marginTop: '0.5rem',
    marginHorizontal: '0.8rem',
    fontFamily: theme.fonts.primaryBold,
    fontSize: '1.2rem',
    color: theme.colors.white,
  },
});

export default styles;
