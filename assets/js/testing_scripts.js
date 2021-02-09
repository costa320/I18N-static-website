/* TESTING AUTOMATION */

setInterval(() => {
  let el = document.getElementById("automationTranslation");

  let newEl = document.createElement("div");
  newEl.setAttribute("data-lang", "T_info");
  el.append(newEl);
  console.log("added Element");
}, 7000);



