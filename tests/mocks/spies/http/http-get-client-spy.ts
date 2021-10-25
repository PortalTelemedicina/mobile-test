import {
  HttpGetClient,
  HttpGetHeaders,
  HttpGetParams,
  HttpResponse,
  HttpStatusCode,
} from '@/app/domain/protocols/http';

export class HttpGetClientSpy<R> implements HttpGetClient<R> {
  url?: string;
  headers?: HttpGetHeaders;
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok,
  };

  async get(params: HttpGetParams): Promise<HttpResponse<R>> {
    this.url = params.url;
    this.headers = params.headers;
    return Promise.resolve(this.response);
  }
}
