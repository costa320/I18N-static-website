/*  server based version */
i18next
  .use(i18nextHttpBackend)
  .use(i18nextBrowserLanguageDetector)
  .init({
    fallbackLng: "it",
    ns: ["common"],
    debug: true,
    defaultNS: "common",
    backend: {
      // load from i18next-gitbook repo
      loadPath: initOptI18N.urlPath,
      crossDomain: true,
    },
  });

/* "../I18N/{{lng}}/{{ns}}.json" */
function updateContent() {
  stopObserving();
  try {
    /* get keys (id's) inside bundle already loaded */
    let keysToUpdate = Object.keys(
      i18next.getResourceBundle(i18next.language, i18next.ns)
    );
    /* for each key inside of translation file search for tag (data-lang="keyInsideFile") inside html  */
    keysToUpdate.forEach((langID) => {
      /* get all elements with this lang id */
      let elList = document.querySelectorAll(`[data-lang^=${langID}]`);
      elList.forEach((el) => {
        /* 1st element is key, 2nd element is attribute to change id it is present */
        let tArr = el.dataset.lang.split(";");
        if (tArr.length > 1 && tArr[1]) {
          /* there are options */
          el[tArr[1]] = i18next.t(`${langID}`);
        } else {
          /* there are no optional parameters */
          el.innerHTML = i18next.t(`${langID}`);
        }
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

function changeLng(lng) {
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
  console.log("new resource loaded:", loaded);
});

/* END I18N EVENTS  */

function Logger(text) {
  console.log(text);
}

/* PERSONALIZED API */

/* TESTING AUTOMATION */

setTimeout(() => {
  let el = document.getElementById("automationTranslation");
  let newEl = document.createElement("div");
  newEl.setAttribute("data-lang", "T_info");
  el.append(newEl);
  console.log("added Element");
}, 7000);

// Observe a specific DOM element:
/* PERSONALIZED DOM OBSERVER! */

var mutationObserver;
var observing = false;
function startObserving() {
  console.log("STARTED Observing...");
  mutationObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      console.log(mutation);
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
  console.log("STOPED Observing...");
  if (observing) mutationObserver.disconnect();
  observing = false;
}
