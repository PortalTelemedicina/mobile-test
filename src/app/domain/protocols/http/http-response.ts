export enum HttpStatusCode {
  unauthorized = 401,
  ok = 200,
  noContent = 204,
  badRequest = 400,
  notFound = 404,
  serverError = 500,
  forbidden = 403,
}

export type HttpResponse<T> = {
  statusCode: HttpStatusCode;
  data?: T;
  code?: AvailableErrorCodes;
};

export type AvailableErrorCodes =
  | 'USR_ERR1'
  | 'USR_ERR2'
  | 'USR_ERR3'
  | 'USR_ERR4'
  | 'USR_ERR5'
  | 'USR_ERR6'
  | 'USR_ERR7'
  | 'USR_ERR8'
  | 'USR_ERR9'
  | 'USR_ERR10'
  | 'USR_ERR11'
  | 'USR_ERR12'
  | 'USR_ERR13'
  | 'USR_ERR14';
