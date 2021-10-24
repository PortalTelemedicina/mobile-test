import {MedicalSpecialties} from '@/app/domain/entities';
import {HttpGetClient} from '@/app/domain/protocols/http';
import {ListMedicalSpecialties} from '@/app/domain/usecases';

export class RemoteListMedicalSpecialties implements ListMedicalSpecialties {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<MedicalSpecialties[]>,
  ) {}
  async run(): Promise<MedicalSpecialties[]> {
    const response = await this.httpGetClient.get({url: this.url});
    return [];
  }
}
