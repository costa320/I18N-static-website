/* PERSONALIZED CONFIG */
import i18next, { initialConfig } from "./i18next";
import { manageElementDataAttribute } from "./attributeManager";
/* UTILS */
import { Logger } from "./utils/utils";
import {
  _setInterval,
  _PerformanceTests,
  _dynamicElements,
} from "./config/testing_scripts";

if (initialConfig.debug) {
  /* TESTING PURPOSE */
  _setInterval();
  _dynamicElements(30);
}

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
      }" --> loaded languages: "${initialConfig.whiteList.join(", ")}"`
    );

    startObserving();
  } catch (err) {
    throw new Error(err);
  }
  _PerformanceTests("stop");
}

export function changeLng(lng) {
  i18next.changeLanguage(lng);
}

/* I18N EVENTS */
i18next.on("initialized", function (options) {
  // init set content
  /* startObserving(); */
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
