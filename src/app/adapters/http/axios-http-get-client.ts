import {
  HttpGetClient,
  HttpGetParams,
  HttpResponse,
} from '@/app/domain/protocols/http';
import axios, {AxiosResponse} from 'axios';

export class AxiosHttpGetClient implements HttpGetClient<any> {
  async get(params: HttpGetParams): Promise<HttpResponse<any>> {
    let httpResponse: AxiosResponse<any>;
    try {
      httpResponse = await axios.get(params.url, {
        headers: params.headers,
      });
    } catch (error) {
      httpResponse = error.response;
    }

    return {
      statusCode: httpResponse.status,
      data: httpResponse.data,
      code: httpResponse?.data?.code || null,
    };
  }
}
