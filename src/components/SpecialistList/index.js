import React from 'react'
import SpecialistItem from '~/components/SpecialistItem'
import { List, ItemSeparator } from './styles'

function SpecialistList({ data, onPressChatItem, onPressCallItem, ...rest }) {
  function renderItem({ item }) {
    return (
      <SpecialistItem
        data={item}
        onPressChatButton={onPressChatItem}
        onPressCallButton={onPressCallItem}
      />
    )
  }

  function keyExtractor(item) {
    return `${item.id}+${item.name}`
  }

  function renderSeparator() {
    return <ItemSeparator />
  }

  return (
    <List
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={renderSeparator}
      {...rest}
    />
  )
}

export default SpecialistList
