/* CONFIGURATION */
export var AAttr = ["value", "title", "src", "alt", "placeholder"];
export var inizializationDefault = {
  lng: "it",
  fallbackLng: "it",
  debug: true,
  whiteList: ["it", "en"],
  backend: {
    // load from i18next-gitbook repo
    loadPath: "./locales/{{lng}}/{{ns}}.json",
    crossDomain: true,
  },
};
