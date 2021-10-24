export enum LoginI18n {
  title = 'login.title',
}

export enum TestsI18n {
  helloWorld = 'tests.helloWorld',
  wrong = 'tests.wrong',
}

export enum ErrorsI18n {
  connectionError = 'errors.connectionError',
}

export type I18nKeys = LoginI18n | ErrorsI18n | TestsI18n;
