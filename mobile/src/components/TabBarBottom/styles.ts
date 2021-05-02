import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/FontAwesome5';

interface IconProps {
  isChecked: boolean;
}

export const TabArea = styled.View`
  flex-direction: row;

  height: 60px;

  border-top-left-radius: 17px;
  border-top-right-radius: 17px;

  background-color: #ffffff;
`;

export const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TabItemText = styled.Text`
  font-family: 'Segoe UI';
  font-size: 8px;

  text-align: center;

  color: #7C8494;

  margin-top: 5px;
`;

export const IconTab = styled(FeatherIcon)<IconProps>`
  color: ${props => (props.isChecked ? '#7349E5' : '#7C8494')};
`;
