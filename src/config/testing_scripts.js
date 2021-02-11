import { Logger } from "../utils/utils";

export function _setInterval() {
  setInterval(() => {
    let el = document.getElementById("automationTranslation");

    let newEl = document.createElement("div");
    newEl.setAttribute("data-lang", "T_info");
    el.append(newEl);
    Logger("added Element");
  }, 7000);
}
