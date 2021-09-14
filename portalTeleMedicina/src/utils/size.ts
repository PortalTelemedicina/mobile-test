import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const size = (size) => {
  const proportion = height < 768 ? 680 : 760;

  return RFValue(size, proportion);
};

export default size;
