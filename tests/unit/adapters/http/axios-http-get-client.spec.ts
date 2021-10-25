import {
  mockGetAxios,
  mockHttpResponse,
} from '@/../tests/mocks/helpers/mock-axios';
import {mockGetRequest} from '@/../tests/mocks/helpers/mock-http-get-request';
import {AxiosHttpGetClient} from '@/app/adapters';
import axios from 'axios';
import faker from 'faker';

jest.mock('axios');

type InitialState = {
  sut: AxiosHttpGetClient;
  mockedAxios: jest.Mocked<typeof axios>;
};

const getInitialState = (): InitialState => {
  const sut = new AxiosHttpGetClient();
  const mockedAxios = mockGetAxios();
  return {
    sut,
    mockedAxios,
  };
};

describe('AxiosHttpGetClient', () => {
  test('should call Axios with correct values(URL, verb and headers)', () => {
    const {sut, mockedAxios} = getInitialState();
    const request = mockGetRequest({authenticated: true});
    sut.get(request);
    expect(mockedAxios.get).toHaveBeenCalledWith(request.url, {
      headers: request.headers,
    });
  });

  test('should return correct status code and data', async () => {
    const {sut, mockedAxios} = getInitialState();
    const response = mockHttpResponse();
    mockedAxios.get.mockResolvedValueOnce(response);
    const promiseValue = await sut.get(mockGetRequest({authenticated: true}));
    const expectedValue = await mockedAxios.get.mock.results[1].value;
    expect(promiseValue.data).toEqual(expectedValue.data);
    expect(promiseValue.statusCode).toEqual(expectedValue.status);
  });

  test('Should return correct status code and data on success', async () => {
    const {sut, mockedAxios} = getInitialState();
    const httpResponse = mockHttpResponse(200, [
      {
        name: faker.random.word(),
        image_url: faker.random.word(),
        total: faker.datatype.number({min: 1, max: 50}),
        color: faker.random.word(),
      },
    ]);
    mockedAxios.get.mockResolvedValueOnce(httpResponse);
    const promiseValue = await sut.get(mockGetRequest({authenticated: false}));
    expect(promiseValue.data).toEqual(httpResponse.data);
    expect(promiseValue.statusCode).toEqual(httpResponse.status);
  });
});
