import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "../translations/en/common.json";
import enErrorValidation from "../translations/en/errorValidation.json";
import enGlossary from "../translations/en/glossary.json";
import frCommon from "../translations/fr/common.json";
import frErrorValidation from "../translations/fr/errorValidation.json";
import frGlossary from "../translations/fr/glossary.json";

export const resources = {
  en: {
    common: enCommon,
    glossary: enGlossary,
    errorValidation: enErrorValidation,
  },
  fr: {
    common: frCommon,
    glossary: frGlossary,
    errorValidation: frErrorValidation,
  },
} as const;

const fallbackLng = "en"

export const namespaces = Object.keys(resources[fallbackLng])

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng,
    ns: namespaces,
    resources
  });

export default i18n;
