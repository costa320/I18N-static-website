/* PERSONALIZED CONFIG */
import i18next from "./i18next";
/* UTILS */
import { Logger } from "./utils/utils";
import {
  _setInterval,
  _PerformanceTests,
  _dynamicElements,
} from "./config/testing_scripts";

/* TESTING PURPOSE */
_setInterval();
_dynamicElements(300);

/* TESTING PURPOSE */

function updateContent() {
  _PerformanceTests("start");
  stopObserving();
  try {

    /* gets all elements that needs some kind of translation */
    let elList = document.querySelectorAll(`[data-lang]`);

    elList.forEach((elem, i) => {
      manageElementDataAttribute(elem, "lang");
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
  _PerformanceTests("stop");
}

/* this function will decide how the element will be translated and managed */
function manageElementDataAttribute(elem, datasetKey) {
  /* get clean dataset of the element */
  let dataset = sortElementDataAttribute(elem, datasetKey);
  Object.keys(dataset).forEach((key) => {
    if (key === datasetKey) {
      /* default case es. data-lang */
      elem.innerHTML = i18next.t(`${dataset[key]}`);
    } else {
      /* advanced case es. data-lang-alt */

      /* try to split name so it could be managed es. langAlt => [lang ,Alt]*/
      /* if there are more then 2 attributes es. [lang,Alt,titol]  create all attributes*/

      let attributes = key.split(/(?=[A-Z])/);

      /* try to create all attributes one by one */
      attributes.forEach((OptionalAttr, i) => {
        if (i !== 0) {
          elem[OptionalAttr.toLowerCase()] = i18next.t(`${dataset[key]}`);
        }
      });
    }
  });
}

function sortElementDataAttribute(elem, datasetKey) {
  let dataset = Object.keys(elem.dataset).filter((dSet) => {
    return dSet.substring(0, datasetKey.length) === datasetKey;
  });
  let purifiedDataset = {};
  dataset.forEach((langKey) => {
    purifiedDataset[langKey] = elem.dataset[langKey];
  });
  return purifiedDataset;
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
