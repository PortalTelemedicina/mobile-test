import i18n from 'i18n-js';
// eslint-disable-next-line import/extensions
import en from '../constants/locales/en.json';

i18n.defaultLocale = 'en';
i18n.locale = 'en';
i18n.fallbacks = true;
i18n.translations = { en };

export default i18n;
