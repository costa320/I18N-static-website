/* CONFIGURATION */
var exports = { __esModule: true };
var AAttr = ["value", "title", "src", "alt", "placeholder"];
var inizializationDefault = {
  fallbackLng: "it",
  ns: ["common"],
  debug: true,
  defaultNS: "common",
  backend: {
    // load from i18next-gitbook repo
    loadPath: "../I18N/{{lng}}/{{ns}}.json",
    crossDomain: true,
  },
};

exports.module = [AAttr, inizializationDefault];
