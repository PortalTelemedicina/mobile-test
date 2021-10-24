import {ErrorsI18n, translate} from '@/config/locale';

export class ConnectionError extends Error {
  constructor() {
    super(translate(ErrorsI18n.connectionError));
    this.name = 'ConnectionError';
  }
}
