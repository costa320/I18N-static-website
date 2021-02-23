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
  setTimeout(() => {
    let el = document.getElementById("automationTranslation");

    let newEl = document.createElement("div");
    newEl.setAttribute("data-lang", "T_info");
    el.append(newEl);
    Logger("added Element");
  }, 7000);
}

var t0, t1;
export function _PerformanceTests(_event = "start") {
  switch (_event) {
    case "start":
      t0 = performance.now();
      break;
    case "stop":
      t1 = performance.now();
      Logger("Update CONTENT TOOK " + (t1 - t0) + " milliseconds.");
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
