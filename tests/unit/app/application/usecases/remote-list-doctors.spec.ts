import {HttpGetClientSpy} from '@/../tests/mocks/spies/http/http-get-client-spy';
import {
  RemoteListDoctors,
  RemoteListDoctorsRoute,
} from '@/app/application/usecases/remote-list-doctors';
import {AvailableMedicalSpecialties, Doctor} from '@/app/domain/entities';
import {ConnectionError, ServerError} from '@/app/domain/errors';
import {HttpStatusCode} from '@/app/domain/protocols/http';
import faker from 'faker';

type InitialState = {
  sut: RemoteListDoctors;
  httpGetClientSpy: HttpGetClientSpy<Doctor[]>;
  routeMapping: RemoteListDoctorsRoute[];
};

const makeFakeRouteMapping = (
  routeMapping?: RemoteListDoctorsRoute[],
): RemoteListDoctorsRoute[] => {
  return (
    routeMapping || [
      {type: 'cardiologist', url: faker.internet.url()},
      {type: 'dentist', url: faker.internet.url()},
      {type: 'dermatologist', url: faker.internet.url()},
    ]
  );
};

const getInitialState = (): InitialState => {
  const httpGetClientSpy = new HttpGetClientSpy<Doctor[]>();
  const routeMapping = makeFakeRouteMapping();
  const sut = new RemoteListDoctors(routeMapping, httpGetClientSpy);
  return {sut, httpGetClientSpy, routeMapping};
};

describe('RemoteListDoctors', () => {
  test('should call HttpGetClient with correct url', () => {
    const type: AvailableMedicalSpecialties = faker.random.arrayElement([
      'cardiologist',
      'dentist',
      'dermatologist',
    ]) as AvailableMedicalSpecialties;
    const {sut, httpGetClientSpy, routeMapping} = getInitialState();
    sut.run({type});
    const route = routeMapping.find(route => route.type === type).url;
    expect(httpGetClientSpy.url).toBe(route);
  });

  //   test('should throw ConnectionError if status code is 0', async () => {
  //     const {sut, httpGetClientSpy} = getInitialState(faker.internet.url());
  //     httpGetClientSpy.response = {
  //       statusCode: HttpStatusCode.connectionError,
  //     };
  //     const promise = sut.run();
  //     await expect(promise).rejects.toThrow(new ConnectionError());
  //   });

  //   test('should throw ServerError if status code is 500', async () => {
  //     const {sut, httpGetClientSpy} = getInitialState(faker.internet.url());
  //     httpGetClientSpy.response = {
  //       statusCode: HttpStatusCode.serverError,
  //     };
  //     const promise = sut.run();
  //     await expect(promise).rejects.toThrow(new ServerError());
  //   });

  //   test('should return MedicalSpecialties[] if status code is 200', async () => {
  //     const {sut, httpGetClientSpy} = getInitialState(faker.internet.url());
  //     const mockedResponse = mockMedicalSpecialties();
  //     httpGetClientSpy.response = {
  //       statusCode: 200,
  //       data: mockedResponse,
  //     };
  //     const promise = sut.run();
  //     await expect(promise).resolves.toEqual(parseResponse(mockedResponse));
  //   });
});