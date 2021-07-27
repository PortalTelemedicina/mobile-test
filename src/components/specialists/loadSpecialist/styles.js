import EStyleSheet from 'react-native-extended-stylesheet';
import theme from '../../../theme';

const styles = EStyleSheet.create({
  container: {
    width: '100%',
    height: '9.4rem',
    paddingVertical: '0.8rem',
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
  },
  description: {
    marginVertical: '0.8rem',
    opacity: 0.1,
    width: '100%',
    height: '4rem',
    backgroundColor: theme.colors.lightslategray,
    borderRadius: 50,
    marginHorizontal: '0.7rem',
  },
  info: {
    width: '100%',
  },
  line: {
    borderBottomColor: theme.colors.darkslategray,
    borderBottomWidth: 0.5,
    marginVertical: '0.8rem',
    marginLeft: '-4rem',
    width: '200%',
  },
  name: {
    borderRadius: 50,
    width: '100%',
    height: '2rem',
    opacity: 0.1,
    backgroundColor: theme.colors.lightslategray,
    marginHorizontal: '0.7rem',
  },
  profile: {
    opacity: 0.1,
    backgroundColor: theme.colors.lightslategray,
    width: '3rem',
    height: '3rem',
    borderRadius: 50,
    marginHorizontal: '0.7rem',
  },
});

export default styles;
