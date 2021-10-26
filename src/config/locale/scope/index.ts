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
  badHexColorError = 'errors.badHexColorError',
}

export enum SharedI18n {
  specialists = 'shared.specialists',
  diagnostic = 'shared.quickActions.diagnostic',
  consultation = 'shared.quickActions.consultation',
  nurse = 'shared.quickActions.nurse',
  ambulance = 'shared.quickActions.ambulance',
  laboratory = 'shared.quickActions.laboratory',
  medicine = 'shared.quickActions.medicine',
  doctors = 'shared.doctors',
  tryAgain = 'shared.tryAgain',
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
