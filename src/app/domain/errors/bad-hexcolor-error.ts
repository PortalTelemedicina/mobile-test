import {ErrorsI18n, translate} from '@/config/locale';

export class BadHexColorError extends Error {
  constructor() {
    super(translate(ErrorsI18n.badHexColorError));
    this.name = 'BadHexColorError';
  }
}
