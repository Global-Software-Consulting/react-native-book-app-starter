import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next, { LanguageDetectorModule } from 'i18next';
import { initReactI18next } from 'react-i18next';
import de from './de.json';
import en from './en.json';
import es from './es.json';

const LOCALE_PERSISTENCE_KEY = 'language';

const languageDetector: LanguageDetectorModule = {
    type: 'languageDetector',
    async: true,
    detect: async (language) => {
        const persistedLocale = await AsyncStorage.getItem(LOCALE_PERSISTENCE_KEY);
        if (!persistedLocale) {
            // Find best available language from the resource ones

            // Return detected locale or default language
            return language('en');
        }
        language(persistedLocale);
    },
    init: () => {},
    cacheUserLanguage: (locale) => {
        AsyncStorage.setItem(LOCALE_PERSISTENCE_KEY, locale);
    },
};

i18next
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: en,
            },
            es: {
                translation: es,
            },
            de: {
                translation: de,
            },
        },
    });
export default i18next;
