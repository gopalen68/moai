import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// import ICU from 'i18next-icu'; // optional

import enCommon from '@/locales/en/common.json';
import frCommon from '@/locales/fr/common.json';
import enHero from '@/locales/en/hero.json';
import frHero from '@/locales/fr/hero.json';
import enNavbar from '@/locales/en/navbar.json';
import frNavbar from '@/locales/fr/navbar.json';
import enAbout from '@/locales/en/about.json';
import frAbout from '@/locales/fr/about.json';
import enComingsoon from '@/locales/en/comingsoon.json';
import frComingsoon from '@/locales/fr/comingsoon.json';
import enContact from '@/locales/en/contact.json';
import frContact from '@/locales/fr/contact.json';
import enFooter from '@/locales/en/footer.json';
import frFooter from '@/locales/fr/footer.json';
import enLogocloud from '@/locales/en/logocloud.json';
import frLogocloud from '@/locales/fr/logocloud.json';
import enSolutions from '@/locales/en/solutions.json';
import frSolutions from '@/locales/fr/solutions.json';
import enTeam from '@/locales/en/team.json';
import frTeam from '@/locales/fr/team.json';

i18n
  // .use(ICU)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr'],
    detection: {
      order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupQuerystring: 'lang',
    },
    ns: ['common', 'hero', 'navbar', 'about', 'comingsoon', 'contact', 'footer', 'logocloud', 'solutions', 'team'],
    defaultNS: 'common',
    resources: {
      en: {
        common: enCommon,
        hero: enHero,
        navbar: enNavbar,
        about: enAbout,
        comingsoon: enComingsoon,
        contact: enContact,
        footer: enFooter,
        logocloud: enLogocloud,
        solutions: enSolutions,
        team: enTeam
      },
      fr: {
        common: frCommon,
        hero: frHero,
        navbar: frNavbar,
        about: frAbout,
        comingsoon: frComingsoon,
        contact: frContact,
        footer: frFooter,
        logocloud: frLogocloud,
        solutions: frSolutions,
        team: frTeam
      },
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
