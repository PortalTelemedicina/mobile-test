import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/FontAwesome5';

interface IconProps {
  isChecked: boolean;
}

export const TabArea = styled.View`
  flex-direction: row;

  height: 60px;

  border-top-left-radius: 17px;
  border-top-right-radius: 17px;

  background-color: #001d5b;
`;

export const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TabItemText = styled.Text`
  font-family: 'DMSans-Regular';
  font-size: 8px;

  text-align: center;

  color: #ffffff;

  margin-top: 5px;

  /* background: #ff9000; */
`;

export const TabItemLarge = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 70px;

  margin-top: -25px;

  border-width: 4px;
  border-radius: 35px;
  border-color: #ffffff;

  background-color: #001d5b;
`;

export const IconTab = styled(FeatherIcon)<IconProps>`
  color: ${props => (props.isChecked ? '#ffffff' : '#799CE7')};
`;
