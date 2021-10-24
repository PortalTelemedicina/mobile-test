import {MedicalSpecialties} from '@/app/domain/entities';
import {ConnectionError, ServerError} from '@/app/domain/errors';
import {HttpGetClient, HttpStatusCode} from '@/app/domain/protocols/http';
import {ListMedicalSpecialties} from '@/app/domain/usecases';

export class RemoteListMedicalSpecialties implements ListMedicalSpecialties {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<MedicalSpecialties[]>,
  ) {}
  async run(): Promise<MedicalSpecialties[]> {
    const httpResponse = await this.httpGetClient.get({url: this.url});

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        const medicalSpecialtiesArray = httpResponse.data;
        return medicalSpecialtiesArray;
      case HttpStatusCode.connectionError:
        throw new ConnectionError();
      case HttpStatusCode.serverError:
        throw new ServerError();
      default:
        throw new ConnectionError();
    }
  }
}
