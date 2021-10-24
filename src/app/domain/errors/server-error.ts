import {ErrorsI18n, translate} from '@/config/locale';

export class ServerError extends Error {
  constructor() {
    super(translate(ErrorsI18n.serverError));
    this.name = 'ServerError';
  }
}
