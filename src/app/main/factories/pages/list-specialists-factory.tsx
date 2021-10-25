import {ListSpecialists, ListSpecialistsProps} from '@/app/UI/pages/';
import React from 'react';
import {
  MakeLocalListQuickActions,
  MakeRemoteListMedicalSpecialties,
} from '../usecases';

export const MakeListSpecialists: React.FC<ListSpecialistsProps> = ({}) => {
  const listMedicalSpecialties = MakeRemoteListMedicalSpecialties();
  const listQuickActions = MakeLocalListQuickActions();

  return (
    <ListSpecialists
      listMedicalSpecialties={listMedicalSpecialties}
      listQuickActions={listQuickActions}
    />
  );
};
