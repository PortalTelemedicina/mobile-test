import {HttpResponse} from '.';

export type HttpGetHeaders = {};

export type HttpGetParams = {
  url: string;
  headers?: HttpGetHeaders;
};

export interface HttpGetClient<R> {
  get(params: HttpGetParams): Promise<HttpResponse<R>>;
}
