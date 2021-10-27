import {AvailableMedicalSpecialties, Doctor} from '@/app/domain/entities';
import {HttpGetClient} from '@/app/domain/protocols/http';
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
    return [];
  }
}
