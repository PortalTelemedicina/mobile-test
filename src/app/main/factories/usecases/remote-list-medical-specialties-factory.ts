import {RemoteListMedicalSpecialties} from '@/app/application/usecases';
import {ApiSpec} from '@/app/domain/protocols/http';
import {MakeAxiosHttpGetClient} from '../adapters';
import {MakeApiUrl} from '../helpers';

export const MakeRemoteListMedicalSpecialties =
  (): RemoteListMedicalSpecialties => {
    const axiosHttpGetClient = MakeAxiosHttpGetClient();
    return new RemoteListMedicalSpecialties(
      MakeApiUrl(ApiSpec.GET_SPECIALISTS),
      axiosHttpGetClient,
    );
  };
