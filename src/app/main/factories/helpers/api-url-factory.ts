import {ApiSpec} from '@/app/domain/protocols/http';
import {ApiConfig} from '@/config';

export const MakeApiUrl = (scope: ApiSpec): string => {
  return `${ApiConfig.baseUrl}/${scope}.json`;
};
