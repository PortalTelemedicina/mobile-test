import {MedicalSpecialties} from '@/app/domain/entities';
import {ConnectionError, ServerError} from '@/app/domain/errors';
import {HttpGetClient, HttpStatusCode} from '@/app/domain/protocols/http';
import {MedicalSpecialtiesResponse} from '@/app/domain/protocols/http/responses';
import {ListMedicalSpecialties} from '@/app/domain/usecases';

export class RemoteListMedicalSpecialties implements ListMedicalSpecialties {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<MedicalSpecialtiesResponse[]>,
  ) {}
  async run(): Promise<MedicalSpecialties[]> {
    const httpResponse = await this.httpGetClient.get({url: this.url});

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        const medicalSpecialtiesArray: MedicalSpecialties[] =
          httpResponse.data.map(specialty => {
            return {
              name: specialty.name,
              image: specialty.image_url,
              color: specialty.color,
              amountAvailable: specialty.total,
            };
          });
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
