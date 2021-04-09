import styled from 'styled-components/native'
import { dark_gray, gray, light_gray, purple, white } from '~/styles/colors'

export const Container = styled.View`
  flex-direction: row;
  padding: 15px;
  background-color: ${white};
`

export const AvatarView = styled.View`
  align-items: flex-start;
  justify-content: flex-start;
  padding-right: 20px;
`

export const Avatar = styled.View`
  background-color: ${({ color }) => color};
  height: 50px;
  width: 50px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`

export const AvatarText = styled.Text`
  color: ${({ color }) => color};
  font-size: 20px;
  font-weight: bold;
`

export const ContentView = styled.View`
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1;
`

export const Name = styled.Text`
  font-weight: bold;
  color: ${dark_gray};
  font-size: 20px;
`

export const Distance = styled.Text`
  color: ${light_gray};
  font-size: 14px;
  padding-vertical: 5px;
`

export const Description = styled.Text`
  color: ${light_gray};
  font-size: 16px;
`

export const ButtonContainer = styled.View`
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  flex: 1;
`

export const Button = styled.TouchableOpacity`
  background-color: ${({ color }) => color};
  height: 20px;
  border-radius: 10px;
  padding-horizontal: 20px;
  padding-vertical: 10px;
`

export const ButtonLabel = styled.Text`
  color: ${({ color }) => color};
  font-weight: bold;
  font-size: 16px;
`
