import i18next from "i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
/* PERSONALIZED CONFIG */
import { inizializationDefault } from "./config/mainI18N.config";
/* UTILS */
import { Logger } from "./utils/utils";

export var initialConfig;
/* END CONFIGURATION */

/* INITIALIZATION */
try {
  /* if it cant retriev enough configuration then will retry with "inizializationDefault" */
  initialConfig = initOptI18N;
  i18next
    .use(HttpApi)
    /*     .use(LanguageDetector) */
    .init(initialConfig)
    .then((t) => {});
} catch (err) {
  initialConfig = inizializationDefault;
  i18next
    .use(HttpApi)
    /*     .use(LanguageDetector) */
    .init(initialConfig)
    .then((t) => {});
}

Logger(`CONFIGURATION IN USE:`);
Logger(initialConfig);

export default i18next;
