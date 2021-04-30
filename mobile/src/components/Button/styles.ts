import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/FontAwesome5';
import { RectButton } from 'react-native-gesture-handler';

interface IconProps {
  HaveIcon: boolean;
}

export const Container = styled(RectButton)`
  /* position: absolute;
  bottom: 0;
  margin-bottom: 40px; */

  width: 100%;
  height: 50px;
  padding: 0 10px;
  background: #001d5b;
  border-radius: 30px;

  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
`;

export const ButtonText = styled.Text<IconProps>`
  /* background: #ff9000; */

  flex: 1;
  color: #ffffff;

  font-family: 'DMSans-Medium';
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;

  ${props =>
    props.HaveIcon &&
    css`
      margin-left: 30px; /** RACK CSS PARA ALINHAR TEXTO AO CENTRO DEVIDO AO ÍCONE */
    `}
`;

export const Icon = styled(FeatherIcon)`
  margin: 0px 10px 0px 0px;
`;
