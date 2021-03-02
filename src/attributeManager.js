import i18next, { initialConfig } from "./i18next";

export function manageElementDataAttribute(elem, datasetKey) {
  /* get clean dataset of the element */
  let dataset = sortElementDataAttribute(elem, datasetKey);

  Object.keys(dataset).forEach((key) => {
    if (key === datasetKey) {
      /* default case es. data-lang */
      defaultCase(elem, dataset, key);
    } else {
      /* advanced case es. data-lang-alt */
      advancedCase(elem, dataset, key);
    }
  });
}

function defaultCase(elem, dataset, key) {
  /* save all the children and paste them after */

  /* get outerHtml of this elem, then try to split it by optional posChar, to understand where to position text properly */

  if (arrElements.length > 1) {
    /* there is a default case with optional posChar */
    /* get all html from this element, then  replace optional posChar with translation, then inject it inside this elem */
    let newInnerHtml = elem.innerHTML.replace(
      initialConfig.posChar,
      i18next.t(`${dataset[key]}`)
    );
    elem.innerHTML = newInnerHtml;
  } else {
    /* optional posChar ({{{}}}) was not found inside this element so put the translation as first element */
    /* get all underlying nodes from this elem */
    let nodeList = elem.querySelectorAll("*");
    elem.textContent = i18next.t(`${dataset[key]}`);
    nodeList.forEach((node) => elem.appendChild(node));
  }
}

function advancedCase(elem, dataset, key) {
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

/* this function will decide how the element will be translated and managed */
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
