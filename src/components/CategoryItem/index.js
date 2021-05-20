import React from 'react'
import { SvgCssUri } from 'react-native-svg'
import { white } from '~/styles/colors'
import {
  Container,
  IconView,
  TitleView,
  Title,
  TotalView,
  Total
} from './styles'

function CategoryItem({ data, onPress, ...rest }) {
  function handlePress() {
    onPress(data)
  }

  return (
    <Container color={data.color} onPress={handlePress} {...rest}>
      <IconView>
        <SvgCssUri
          width='30px'
          height='30px'
          fill={data.color}
          uri={data.image_url}
        />
      </IconView>
      <TitleView>
        <Title>{data.name.replace(' ', '\n')}</Title>
      </TitleView>
      <TotalView>
        <Total>{data.total} Doctors</Total>
      </TotalView>
    </Container>
  )
}

export default CategoryItem
