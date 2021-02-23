import { Logger } from "../utils/utils";

export function _dynamicElements(numElements = 0) {
  if (numElements) {
    var msgContainer = document.createDocumentFragment();

    for (var i = 0; i < 30; i++) {
      msgContainer.appendChild(
        create("option", {
          "data-lang": "T_info",
          id: i,
        })
      );
    }
    document.getElementById("automationTranslation").appendChild(msgContainer);
  }
}

export function _setInterval() {
  setInterval(() => {
    let el = document.getElementById("automationTranslation");

    let newEl = document.createElement("div");
    newEl.setAttribute("data-lang", "T_info");
    el.append(newEl);
    Logger("added Element");
  }, 7000);
}

export function _PerformanceTests(_event = "start", logText) {
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

function create(name, props) {
  var el = document.createElement(name);
  for (var p in props) {
    el.setAttribute([p], props[p]);
  }
  return el;
}
