/* PERSONALIZED CONFIG */
import i18next from "./i18next";
import { AAttr } from "./config/mainI18N.config";
/* UTILS */
import { Logger } from "./utils/utils";
import { _setInterval } from "./config/testing_scripts";

/* TESTING PURPOSE */
_setInterval();

/* TESTING PURPOSE */

function updateContent() {
  stopObserving();
  try {
    /* get keys (id's) inside bundle already loaded */
    let keysToUpdate = Object.keys(
      i18next.getResourceBundle(i18next.language, i18next.ns)
    );
    /* for each key inside of translation file search for tag (data-lang="keyInsideFile") inside html  */
    keysToUpdate.forEach((langID) => {
      /* get all elements with this lang id and this kind scroll arr AAttr*/

      let elList;
      /* 1st search for default attribute so "none" */
      elList = document.querySelectorAll(`[data-lang^=${langID}]`);
      translateListElements(elList, langID);
      /* 2nd search for optional attributes, those declared on row on top of the file, called "AAttr" */
      AAttr.forEach((attr) => {
        elList = document.querySelectorAll(`[data-lang-${attr}^=${langID}]`);
        translateListElements(elList, langID, attr);
      });
    });

    Logger(
      `detected user language: "${
        i18next.language
      }" --> loaded languages: "${i18next.languages.join(", ")}"`
    );

    startObserving();
  } catch (err) {
    throw new Error(err);
  }
}

function translateListElements(elementList = [], langID, OptionalAttr) {
  elementList.forEach((el) => {
    /* 1st element is key, 2nd element is attribute to change id it is present */
    let tArr = el.dataset.lang;
    if (OptionalAttr) {
      /* there are options */
      el[OptionalAttr] = i18next.t(`${langID}`);
    } else {
      /* there are no optional parameters */
      el.innerHTML = i18next.t(`${langID}`);
    }
  });
}

export function changeLng(lng) {
  i18next.changeLanguage(lng);
}

/* I18N EVENTS */
i18next.on("initialized", function (options) {
  // init set content
  updateContent();
});

i18next.on("languageChanged", (lang) => {
  updateContent();
});

i18next.on("loaded", function (loaded) {
  Logger("new resource loaded: ");
  Logger(loaded);
});

/* END I18N EVENTS  */

/* PERSONALIZED API */

// Observe a specific DOM element:
/* PERSONALIZED DOM OBSERVER! */

var mutationObserver;
var observing = false;
function startObserving() {
  Logger("STARTED Observing...");
  mutationObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      Logger(mutation);
      updateContent();
    });
  });

  // Starts listening for changes in the root HTML element of the page.
  mutationObserver.observe(document.documentElement, {
    characterDataOldValue: false,
    characterData: false,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    attributes: true,
    attributeFilter: ["data-lang"],
  });
  observing = true;
}

function stopObserving() {
  Logger("STOPED Observing...");
  if (observing) mutationObserver.disconnect();
  observing = false;
}
