import React from 'react';
import { FlatList } from 'react-native';
import { ISpecialist } from '../store/specialist/specialistTypes';
import SpecialistCard from './SpecialistCard';

export default function SpecialistList({ specialists }: { specialists: ISpecialist[] }): JSX.Element {
  return (
    <FlatList<ISpecialist>
      renderItem={({ item, index }) => <SpecialistCard specialist={item} index={index} />}
      keyExtractor={(_item: ISpecialist, index: number) => `${index} - ${_item.name}`}
      data={specialists}
    />
  );
}
