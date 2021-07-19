import EStyleSheet from 'react-native-extended-stylesheet';
import theme from '../../../theme';

const styles = EStyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: '0.8rem',
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
  },
  profile: {
    justifyContent: 'center',
    width: '3rem',
    height: '3rem',
    borderRadius: 50,
    marginHorizontal: '0.7rem',
  },
  textProfile: {
    textAlign: 'center',
    fontFamily: theme.fonts.primaryBold,
    fontSize: '1.2rem',
  },
  name: {
    fontFamily: theme.fonts.primaryBold,
    fontSize: '1.2rem',
  },
  distance: {
    fontFamily: theme.fonts.primaryRegular,
    fontSize: '0.7rem',
    marginVertical: '0.6rem',
  },
  description: {
    fontFamily: theme.fonts.primaryRegular,
    fontSize: '0.9rem',
    marginRight: '4rem',
  },
  buttonGroup: {
    flexDirection: 'row',
    marginTop: '0.8rem',
  },
  button: {
    width: '30%',
    height: '2.2rem',
    marginHorizontal: '0.5rem',
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
  line: {
    borderBottomColor: theme.colors.darkslategray,
    borderBottomWidth: 0.5,
    marginVertical: '0.8rem',
    marginLeft: '-4rem',
    width: '200%',
  },
});

export default styles;
