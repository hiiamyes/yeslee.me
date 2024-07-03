"use client";

import { createInstance } from "i18next";
import { I18nextProvider } from "react-i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import { LanguageStrings } from "@crowdin/ota-client/out/model";

type Props = {
  locale: string;
  crowdinStrings: LanguageStrings;
  children: React.ReactNode;
};

const I18nProvider = ({ locale, crowdinStrings, children }: Props) => {
  const i18n = createInstance();
  const resources = {
    en: {
      translation: crowdinStrings["en"],
    },
    "zh-TW": {
      translation: crowdinStrings["zh-TW"],
    },
  };
  i18n.use(initReactI18next).init({
    lng: locale,
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default I18nProvider;
