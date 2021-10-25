import axios from 'axios';
import faker from 'faker';

export const mockHttpResponse = (
  status: number = faker.datatype.number(),
  data: any = faker.random.objectElement(),
): {status: number; data: any} => ({
  status,
  data,
});

export const mockGetAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  mockedAxios.get.mockResolvedValue(mockHttpResponse());
  return mockedAxios;
};
