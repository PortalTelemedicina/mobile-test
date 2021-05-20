import styled from 'styled-components/native'
import {dark_gray} from '~/styles/colors'

export const Container = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
`

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${dark_gray};
`
