import {AvailableMedicalSpecialties, Doctor} from '@/app/domain/entities';
import {ConnectionError} from '@/app/domain/errors';
import {HttpGetClient, HttpStatusCode} from '@/app/domain/protocols/http';
import {ListDoctors, ListDoctorsParams} from '@/app/domain/usecases';

export type RemoteListDoctorsRoute = {
  type: AvailableMedicalSpecialties;
  url: string;
};

export class RemoteListDoctors implements ListDoctors {
  constructor(
    private readonly routeMapping: RemoteListDoctorsRoute[],
    private readonly httpGetClient: HttpGetClient<Doctor[]>,
  ) {}

  async run(params: ListDoctorsParams): Promise<Doctor[]> {
    const route = this.routeMapping.find(route => route.type === params.type);
    const httpResponse = await this.httpGetClient.get({url: route.url});

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        break;
      case HttpStatusCode.connectionError:
        throw new ConnectionError();
      case HttpStatusCode.serverError:
        break;
      default:
        throw new ConnectionError();
    }
  }
}
