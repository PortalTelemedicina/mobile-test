import {AxiosHttpGetClient} from '@/app/adapters';

export const MakeAxiosHttpGetClient = (): AxiosHttpGetClient => {
  const axiosHttpGetClient = new AxiosHttpGetClient();
  return axiosHttpGetClient;
};
