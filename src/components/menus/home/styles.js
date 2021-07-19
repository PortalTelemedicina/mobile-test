import EStyleSheet from 'react-native-extended-stylesheet';
import theme from '../../../theme';

const styles = EStyleSheet.create({
  container: {
    marginVertical: '0.2rem',
    width: '100%',
    height: '25rem',
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '0.3rem',
    marginVertical: '0.5rem',
    width: '7.5rem',
    height: '7.5rem',
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
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: 10,
    backgroundColor: theme.colors.white,
  },
  image: {
    alignSelf: 'center',
    marginTop: '0.3rem',
    width: '75%',
    height: '75%',
    resizeMode: 'stretch',
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
    fontSize: '0.85rem',
  },
});

export default styles;
