import {HttpGetClientSpy} from '@/../tests/mocks/spies/http-get-client-spy';
import {RemoteListMedicalSpecialties} from '@/app/application/usecases';
import {MedicalSpecialties} from '@/app/domain/entities';
import {ConnectionError, ServerError} from '@/app/domain/errors';
import {HttpStatusCode} from '@/app/domain/protocols/http';
import faker from 'faker';

type InitialState = {
  sut: RemoteListMedicalSpecialties;
  httpGetClientSpy: HttpGetClientSpy<MedicalSpecialties[]>;
};

const getInitialState = (url: string = faker.internet.url()): InitialState => {
  const httpGetClientSpy = new HttpGetClientSpy<MedicalSpecialties[]>();
  const sut = new RemoteListMedicalSpecialties(url, httpGetClientSpy);
  return {sut, httpGetClientSpy};
};

describe('RemoteListMedicalSpecialties', () => {
  test('should call HttpGetClient with correct url', () => {
    const url = faker.internet.url();
    const {sut, httpGetClientSpy} = getInitialState(url);
    sut.run();
    expect(httpGetClientSpy.url).toBe(url);
  });

  test('should throw ConnectionError if status code is 0', async () => {
    const {sut, httpGetClientSpy} = getInitialState(faker.internet.url());
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.connectionError,
    };
    const promise = sut.run();
    await expect(promise).rejects.toThrow(new ConnectionError());
  });

  test('should throw ServerError if status code is 500', async () => {
    const {sut, httpGetClientSpy} = getInitialState(faker.internet.url());
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.serverError,
    };
    const promise = sut.run();
    await expect(promise).rejects.toThrow(new ServerError());
  });
});
