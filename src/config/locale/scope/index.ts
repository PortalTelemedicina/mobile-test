export enum LoginI18n {
  title = 'login.title',
}

export enum TestsI18n {
  helloWorld = 'tests.helloWorld',
  wrong = 'tests.wrong',
}

export enum ErrorsI18n {
  connectionError = 'errors.connectionError',
  serverError = 'errors.serverError',
}

export enum SharedI18n {
  specialists = 'shared.specialists',
}

export enum ListSpecialistsI18n {
  whatDoYouNeed = 'listSpecialists.whatDoYouNeed',
}

export type I18nKeys =
  | LoginI18n
  | ErrorsI18n
  | SharedI18n
  | ListSpecialistsI18n
  | TestsI18n;
