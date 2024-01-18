import styled from 'styled-components/native'
import { gray, white } from '~/styles/colors'

export const Container = styled.TouchableOpacity`
  flex-direction: column;
  padding: 15px;
  background-color: ${({color}) => color};
  flex: 1;
  border-radius: 16px;
  margin-top: 8px;
  margin-bottom: 8px;
  margin-left: 4px;
  margin-right: 4px;
  align-items: center;
  justify-content: center;
  shadow-color: #000;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.18;
  shadow-radius: 1px;
  elevation: 1;
`

export const IconView = styled.View`
  align-items: center;
  justify-content: center;
  width: 55px;
  padding: 8px;
  border-radius: 16px;
`

export const TitleView = styled.View`
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  font-weight: bold;
  color: ${({active}) => {
    return active ? white : gray}};
  font-size: 14px;
  padding-top: 4px;
  line-height: 28px;
`