import React from 'react';
import { FlatList } from 'react-native';
import { ISpecialistCategory } from '../store/specialistCategory/specialistCategoryTypes';
import SpecialistCategoryCard from './SpecialistCategoryCard';

export default function SpecialistCategoryList({
  specialistsCategories,
  onSelectCategory,
}: {
  specialistsCategories: ISpecialistCategory[];
  onSelectCategory: any;
}): JSX.Element {
  return (
    <FlatList<ISpecialistCategory>
      renderItem={({ item, index }) => (
        <SpecialistCategoryCard specialistCategory={item} onSelectCategory={onSelectCategory} index={index} />
      )}
      keyExtractor={(item: ISpecialistCategory, index: number) => `${index} - ${item.name}`}
      data={specialistsCategories}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}
