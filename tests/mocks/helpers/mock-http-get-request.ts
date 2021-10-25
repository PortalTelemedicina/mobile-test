import {HttpGetParams} from '@/app/domain/protocols/http';
import faker from 'faker';

type mockParams = {
  authenticated: boolean;
};

export const mockGetRequest = (params: mockParams): HttpGetParams => ({
  url: faker.internet.url(),
  headers: params.authenticated ? {xtoken: faker.datatype.uuid()} : null,
});
