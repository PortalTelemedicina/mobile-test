import {ListDoctors, ListDoctorsProps} from '@/app/UI/pages/';
import React from 'react';
import {MakeRemoteListDoctors} from '../usecases';

export const MakeListDoctors: React.FC<ListDoctorsProps> = ({navigation}) => {
  const remoteListDoctors = MakeRemoteListDoctors();
  return (
    <ListDoctors listDoctors={remoteListDoctors} navigation={navigation} />
  );
};
