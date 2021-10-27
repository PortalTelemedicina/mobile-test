import {makeFakeDoctors} from '@/../tests/mocks/models/mock-doctors';
import {HttpGetClientSpy} from '@/../tests/mocks/spies/http/http-get-client-spy';
import {RemoteListDoctors} from '@/app/application/usecases';
import {AvailableMedicalSpecialties, Doctor} from '@/app/domain/entities';
import {ConnectionError, ServerError} from '@/app/domain/errors';
import {HttpStatusCode} from '@/app/domain/protocols/http';
import {ListDoctorsRoute} from '@/app/domain/protocols/http/mappings';
import faker from 'faker';

type InitialState = {
  sut: RemoteListDoctors;
  httpGetClientSpy: HttpGetClientSpy<Doctor[]>;
  routeMapping: ListDoctorsRoute[];
};

const makeFakeRouteMapping = (
  routeMapping?: ListDoctorsRoute[],
): ListDoctorsRoute[] => {
  return (
    routeMapping || [
      {type: 'cardiologist', url: faker.internet.url()},
      {type: 'dentist', url: faker.internet.url()},
      {type: 'dermatologist', url: faker.internet.url()},
    ]
  );
};

const makeFakeType = (): AvailableMedicalSpecialties => {
  const type: AvailableMedicalSpecialties = faker.random.arrayElement([
    'cardiologist',
    'dentist',
    'dermatologist',
  ]) as AvailableMedicalSpecialties;
  return type;
};

const getInitialState = (): InitialState => {
  const httpGetClientSpy = new HttpGetClientSpy<Doctor[]>();
  const routeMapping = makeFakeRouteMapping();
  const sut = new RemoteListDoctors(routeMapping, httpGetClientSpy);
  return {sut, httpGetClientSpy, routeMapping};
};

describe('RemoteListDoctors', () => {
  test('should call HttpGetClient with correct url', () => {
    const type = makeFakeType();
    const {sut, httpGetClientSpy, routeMapping} = getInitialState();
    sut.run({type});
    const route = routeMapping.find(route => route.type === type).url;
    expect(httpGetClientSpy.url).toBe(route);
  });

  test('should throw ConnectionError if status code is 0', async () => {
    const type = makeFakeType();
    const {sut, httpGetClientSpy} = getInitialState();
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.connectionError,
    };
    const promise = sut.run({type});
    await expect(promise).rejects.toThrow(new ConnectionError());
  });

  test('should throw ServerError if status code is 500', async () => {
    const type = makeFakeType();
    const {sut, httpGetClientSpy} = getInitialState();
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.serverError,
    };
    const promise = sut.run({type});
    await expect(promise).rejects.toThrow(new ServerError());
  });

  test('should return Doctor[] if status code is 200', async () => {
    const {sut, httpGetClientSpy} = getInitialState();
    const mockedResponse = makeFakeDoctors({});
    const type = makeFakeType();
    httpGetClientSpy.response = {
      statusCode: 200,
      data: mockedResponse,
    };
    const promise = sut.run({type});
    await expect(promise).resolves.toEqual(mockedResponse);
  });
});
