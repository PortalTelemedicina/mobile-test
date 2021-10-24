import {
  getLanguage,
  initialize,
  setLanguage,
  translate,
  translateAndReplaceWithArray,
  translateAndReplaceWithString,
} from '@/config/locale';
import {TestsI18n} from '@/config/locale/scope';

describe('Locale', () => {
  let Platform;

  test('Should translate to correct text based on device language', () => {
    const translatedText = translate(TestsI18n.helloWorld);
    expect(translatedText).toBe('Hello World $ $');
  });

  test('Should translate to correct text based on device language on Android platform', () => {
    Platform = require('react-native').Platform;
    Platform.OS = 'android';
    initialize();
    const translatedText = translate(TestsI18n.helloWorld);
    expect(translatedText).toBe('Hello World $ $');
  });

  test('Should translate to en if user does not have a supported language', () => {
    const RN = jest.requireMock('react-native');
    RN.NativeModules.SettingsManager = {
      settings: {AppleLocale: 'zh_CN'},
    };
    RN.NativeModules.I18nManager = {localeIdentifier: 'zh_CN'};
    initialize();

    const translatedText = translate(TestsI18n.helloWorld);
    expect(translatedText).toBe('Hello World $ $');
  });

  test('Should return missing translation if passed wrong key', () => {
    const translatedText = translate(TestsI18n.wrong);
    expect(translatedText).toContain('missing');
  });

  test('Should replace the first $ character with given string', () => {
    const translatedText = translateAndReplaceWithString(
      TestsI18n.helloWorld,
      'user',
    );
    expect(translatedText).toBe('Hello World user $');
  });

  test('Should replace all occurrences of $ character with given string', () => {
    const translatedText = translateAndReplaceWithArray(TestsI18n.helloWorld, [
      'user',
      'name',
    ]);
    expect(translatedText).toBe('Hello World user name');
  });

  test('Should return set language and return pt', () => {
    setLanguage('pt');
    expect(getLanguage()).toBe('pt');
  });

  test('Should return set language and return en', () => {
    setLanguage('en');
    expect(getLanguage()).toBe('en');
  });
});
