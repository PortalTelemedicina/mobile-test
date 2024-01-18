import React, { useEffect, useLayoutEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Actions } from '~/store/reducers/specialist'
import Container from '~/components/Container'
import ListLabel from '~/components/ListLabel'
import FilterButton from '~/components/FilterButton'
import BackButton from '~/components/BackButton'
import SpecialistList from '~/components/SpecialistList'

function Specialists({ route, navigation }) {
  const { category } = route.params
  const dispatch = useDispatch()
  const specialists = useSelector(state => state.specialist.currentCategory)

  useEffect(() => {
    dispatch(Actions.getSpecialistsFromCategory(getCategory()))
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackButton onPress={navigation.goBack} />,
      headerRight: () => <FilterButton onPress={onFilter} />
    })
  }, [navigation])

  function onFilter() {}

  function getCategory() {
    const type = category.name
      .replace(' Specialist', '')
      .replace(' ', '_')
      .toLowerCase()
    return '/list_specialist_'.concat(type).concat('.json')
  }

  function onPressSpecialistCallButton() {}

  function onPressSpecialistChatButton() {}

  return (
    <Container>
      <ListLabel title='Specialists' />
      <SpecialistList
        data={specialists}
        onPressChatItem={onPressSpecialistChatButton}
        onPressCallItem={onPressSpecialistCallButton}
      />
    </Container>
  )
}

export default Specialists
