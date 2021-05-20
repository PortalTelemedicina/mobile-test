import React from 'react'
import CategoryItem from '~/components/CategoryItem'
import { List, ItemSeparator } from './styles'

function CategoryList({ data, onPressItem, ...rest }) {
  function renderItem({ item }) {
    return <CategoryItem data={item} onPress={onPressItem} />
  }

  function keyExtractor(item) {
    return `${item.id}+${item.name}`
  }

  function renderSeparator() {
    return (
      <ItemSeparator />
    )
  }

  return (
    <List
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      horizontal
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={renderSeparator}
      {...rest}
    />
  )
}

export default CategoryList
