import {HttpGetClientSpy} from '@/../tests/mocks/spies/http/http-get-client-spy';
import {RemoteListMedicalSpecialties} from '@/app/application/usecases';
import {ConnectionError, ServerError} from '@/app/domain/errors';
import {HttpStatusCode} from '@/app/domain/protocols/http';
import {MedicalSpecialtiesResponse} from '@/app/domain/protocols/http/responses';
import faker from 'faker';

type InitialState = {
  sut: RemoteListMedicalSpecialties;
  httpGetClientSpy: HttpGetClientSpy<MedicalSpecialtiesResponse[]>;
};

const getInitialState = (url: string = faker.internet.url()): InitialState => {
  const httpGetClientSpy = new HttpGetClientSpy<MedicalSpecialtiesResponse[]>();
  const sut = new RemoteListMedicalSpecialties(url, httpGetClientSpy);
  return {sut, httpGetClientSpy};
};

const mockMedicalSpecialties = (): MedicalSpecialtiesResponse[] => {
  const response: MedicalSpecialtiesResponse[] = [];
  const randomAmount = faker.datatype.number({min: 0, max: 20});
  for (let index = 0; index < randomAmount; index++) {
    response.push({
      name: faker.random.words(2),
      image_url: faker.internet.url(),
      total: faker.datatype.number(),
      color: faker.random.word(),
    });
  }
  return response;
};

const parseResponse = (response: MedicalSpecialtiesResponse[]) => {
  return response.map(specialty => {
    return {
      name: specialty.name,
      image: specialty.image_url,
      color: specialty.color,
      amountAvailable: specialty.total,
    };
  });
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

  test('should return MedicalSpecialties[] if status code is 200', async () => {
    const {sut, httpGetClientSpy} = getInitialState(faker.internet.url());
    const mockedResponse = mockMedicalSpecialties();
    httpGetClientSpy.response = {
      statusCode: 200,
      data: mockedResponse,
    };
    const promise = sut.run();
    await expect(promise).resolves.toEqual(parseResponse(mockedResponse));
  });
});
