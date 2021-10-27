import {RemoteListDoctors} from '@/app/application/usecases';
import {ApiConfig} from '@/config';
import {MakeAxiosHttpGetClient} from '../adapters';

export const MakeRemoteListDoctors = (): RemoteListDoctors => {
  const axiosHttpGetClient = MakeAxiosHttpGetClient();
  return new RemoteListDoctors(
    ApiConfig.listDoctorsMapping,
    axiosHttpGetClient,
  );
};
