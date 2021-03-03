var initialConfig;
/* END CONFIGURATION */

/* INITIALIZATION */
try {
  /* if it cant retriev enough configuration then will retry with "inizializationDefault" */
  initialConfig = CookieLngDetection(initOptI18N);
  i18next.use(i18nextHttpBackend).init(initialConfig);
} catch (err) {
  initialConfig = CookieLngDetection(inizializationDefault);
  i18next.use(i18nextHttpBackend).init(initialConfig);
}
/* END INITIALIZATION */

Logger(`CONFIGURATION IN USE: ${initialConfig}`);

function updateContent() {
  if (initialConfig.testScripts) _PerformanceTests("start");
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
  if (initialConfig.testScripts) _PerformanceTests("stop");
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
  Logger("new resource loaded:" + loaded);
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

function Logger(message) {
  /* if debug is set to be true then logg  */
  if (initialConfig && initialConfig.debug) {
    console.log(message);
  }
}

/* MIDDLEWARES */
function CookieLngDetection(configuration) {
  let lng = getCookie("sLang");
  /*  1) search for language in passed configuration 
      2) search for language in cookies
      3) search for language using browser language detector of i18next
  */
  if (configuration && configuration.lng) {
    return configuration;
  } else if (lng) {
    let newConfiguration = configuration;
    newConfiguration.lng = lng;
    return newConfiguration;
  } else {
    return configuration;
  }
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cName, cValue) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cName + "=" + cValue + ";" + expires + ";path=/";
}

function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}
