import {HttpGetClientSpy} from '@/../tests/mocks/spies/http-get-client-spy';
import {RemoteListMedicalSpecialties} from '@/app/application/usecases';
import {MedicalSpecialties} from '@/app/domain/entities';
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
  test('Should call HttpGetClient with correct url', () => {
    const url = faker.internet.url();
    const {sut, httpGetClientSpy} = getInitialState(url);
    sut.run();
    expect(httpGetClientSpy.url).toBe(url);
  });
});
