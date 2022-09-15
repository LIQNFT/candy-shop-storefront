import i18next from "i18next";

import { initReactI18next } from "react-i18next";

import en from "./lng/en.json";
import fil from "./lng/fil.json";
import por from "./lng/por.json";
import ind from "./lng/ind.json";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    tg: {
      translation: fil,
    },

    por: {
      translation: por,
    },

    ind: {
      translation: ind,
    },
  },
  lng: localStorage.getItem("lng") || "en",
});

export default i18next;
