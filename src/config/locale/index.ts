import I18n from 'i18n-js';
import {NativeModules, Platform} from 'react-native';
import en from './lang/en-US';
import pt from './lang/pt-BR';
import {I18nKeys} from './scope';

// Function that will help us to normalize the translations that will be received by the function getLanguageByDevice
// This is necessary because in android and iOS the return of the same language can be different
// Example: on iOS we can receive pt_US and on android pt_BR for the Brazilian Portuguese language.
const normalizeTranslate = {
  en_US: 'en',
  pt_BR: 'pt',
  en: 'en',
  pt_US: 'pt',
  zh_CN: 'cn',
};

// Function responsible for acquiring the language used on the device
const getLanguageByDevice = () => {
  const lang =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale
      : NativeModules.I18nManager.localeIdentifier;
  return normalizeTranslate[lang];
};

// Here we set the languages that I18N will support
I18n.translations = {
  en,
  pt,
};

export type AvalilableLanguages = 'pt' | 'en';

// Function responsible for setting the language
export const setLanguage = (language: AvalilableLanguages) => {
  const iHaveThisLanguage = I18n.translations.hasOwnProperty(language);

  if (iHaveThisLanguage) {
    I18n.locale = language;
  } else {
    I18n.defaultLocale = 'en_US';
  }
};

export function translate(key: I18nKeys): string {
  return I18n.t(key);
}

export function translateAndReplaceWithString(
  key: I18nKeys,
  replaceText: string,
): string {
  const rawText = I18n.t(key);
  return rawText.replace('$', replaceText);
}

export function translateAndReplaceWithArray(
  key: I18nKeys,
  replaceArray: string[],
): string {
  const rawText = I18n.t(key);
  return replaceTextWithArray(rawText, replaceArray);
}

export function replaceTextWithArray(
  text: string,
  stringsToInsert: string[],
): string {
  if (text.includes('$')) {
    const stringsToInsertCopy = [...stringsToInsert.reverse()];
    const element = stringsToInsertCopy.pop();
    const newText = text.replace('$', element);
    return replaceTextWithArray(newText, stringsToInsertCopy.reverse());
  }
  return text;
}

export function getLanguage(): AvalilableLanguages {
  const currentLocale = I18n.locale as AvalilableLanguages;
  return currentLocale;
}

export function initialize() {
  I18n.locale = getLanguageByDevice();
  I18n.fallbacks = true;
}

initialize();

export * from './scope';
