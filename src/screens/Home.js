import React from 'react'
import CategoryList from '~/components/CategoryList'
import Container from '~/components/Container'
import Greetings from '~/components/Greetings'
import ListLabel from '~/components/ListLabel'
import OptionRow from '~/components/OptionRow'
import OptionItem from '~/components/OptionItem'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

function Home() {
  const navigation = useNavigation()
  const categories = useSelector(state => state.specialist.categories)
  function onPressCategoryItem(category) {
    navigation.navigate('Specialists', {
      category
    })
  }

  return (
    <Container>
      <Greetings name={'Lorelle Luna'} />
      <ListLabel title='Specialists' />
      <CategoryList data={categories} onPressItem={onPressCategoryItem} />
      <ListLabel title='What do you need?' />
      <OptionRow>
        <OptionItem active title='Diagnostic' icon='stethoscope' />
        <OptionItem title='Consultation' icon='patient' />
        <OptionItem title='Nurse' icon='nurse' />
      </OptionRow>
      <OptionRow>
        <OptionItem title='Ambulance' icon='ambulance' />
        <OptionItem title='Lab Work' icon='flask' />
        <OptionItem title='Medicine' icon='medicine' />
      </OptionRow>
    </Container>
  )
}

export default Home
