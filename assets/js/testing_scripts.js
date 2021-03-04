/* TESTING AUTOMATION */
/* 
setInterval(() => {
  let el = document.getElementById("automationTranslation");

  let newEl = document.createElement("div");
  newEl.setAttribute("data-lang", "T_info");
  el.append(newEl);
  Logger("added Element");
}, 7000); */

function _dynamicElements(numElements) {
  if (numElements) {
    var msgContainer = document.createDocumentFragment();

    if (autTran) {
      for (var i = 0; i < 10; i++) {
        msgContainer.appendChild(
          create("option", {
            "data-lang": "T_info",
            id: i,
          })
        );
      }
      autTran.appendChild(msgContainer);
    }
  }
}

function _setInterval() {
  if (autTran) {
    setInterval(function () {
      let newEl = document.createElement("div");
      newEl.setAttribute("data-lang", "T_info");
      autTran.append(newEl);
      Logger(["added Element"]);
    }, 7000);
  }
}

function _PerformanceTests(_event, logText) {
  if (initialConfig.debug) {
    switch (_event) {
      case "start":
        console.time("PerformanceTest", "Performance Test Started...");
        break;
      case "log":
        console.timeLog("PerformanceTest", logText);
        break;
      case "stop":
        console.timeEnd("PerformanceTest", "Performance Test Ended...");
        break;
    }
  }
}

function create(name, props) {
  var el = document.createElement(name);
  for (var p in props) {
    el.setAttribute([p], props[p]);
  }
  return el;
}
