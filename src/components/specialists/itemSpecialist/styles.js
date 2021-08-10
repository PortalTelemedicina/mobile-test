import EStyleSheet from 'react-native-extended-stylesheet';
import theme from '../../../theme';

const styles = EStyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flexDirection: 'row',
    paddingVertical: '0.8rem',
    width: '100%',
  },
  profile: {
    borderRadius: 50,
    height: '3rem',
    justifyContent: 'center',
    marginHorizontal: '0.7rem',
    width: '3rem',
  },
  textProfile: {
    fontFamily: theme.fonts.primaryBold,
    fontSize: '1.2rem',
    textAlign: 'center',
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
    borderRadius: 20,
    height: '2.2rem',
    marginHorizontal: '0.5rem',
    width: '30%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
