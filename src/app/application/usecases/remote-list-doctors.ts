import {Doctor} from '@/app/domain/entities';
import {ConnectionError, ServerError} from '@/app/domain/errors';
import {HttpGetClient, HttpStatusCode} from '@/app/domain/protocols/http';
import {ListDoctorsRoute} from '@/app/domain/protocols/http/mappings';
import {ListDoctors, ListDoctorsParams} from '@/app/domain/usecases';

export class RemoteListDoctors implements ListDoctors {
  constructor(
    private readonly routeMapping: ListDoctorsRoute[],
    private readonly httpGetClient: HttpGetClient<Doctor[]>,
  ) {}

  async run(params: ListDoctorsParams): Promise<Doctor[]> {
    const route = this.routeMapping.find(route => route.type === params.type);
    const httpResponse = await this.httpGetClient.get({url: route.url});

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.data;
      case HttpStatusCode.connectionError:
        throw new ConnectionError();
      case HttpStatusCode.serverError:
        throw new ServerError();
      default:
        throw new ConnectionError();
    }
  }
}
