import styled from 'styled-components/native'
import { white } from '~/styles/colors'

export const Container = styled.TouchableOpacity`
  flex-direction: column;
  padding: 15px;
  background-color: ${({ color }) => color};
  width: 160px;
  border-radius: 16px;
  shadow-color: #000;
  shadow-offset: 1px 1px; 
  shadow-opacity: 0.18;
  shadow-radius: 1px;
  elevation: 1;
`

export const IconView = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${white};
  width: 55px;
  padding: 8px;
  border-radius: 16px;
`

export const TitleView = styled.View`
  align-items: flex-start;
  justify-content: flex-start;
`

export const Title = styled.Text`
  font-weight: bold;
  color: ${white};
  font-size: 20px;
  padding-top: 12px;
  line-height: 28px;
`

export const TotalView = styled.View`
  align-items: flex-start;
  justify-content: flex-start;
`

export const Total = styled.Text`
  color: ${white};
  padding-top: 8px;
`
