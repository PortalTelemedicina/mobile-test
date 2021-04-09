import styled from 'styled-components/native'
import {dark_gray} from '~/styles/colors'

export const Container = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
  margin-bottom: 20px;
`

export const Hello = styled.Text`
  font-size: 20px;
  color: ${dark_gray};
`

export const Name = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${dark_gray};
`
