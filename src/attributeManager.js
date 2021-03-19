import i18next, { initialConfig } from "./i18next";

export function manageElementDataAttribute(elem, datasetKey) {
  /* get clean dataset of the element */
  let dataset = sortElementDataAttribute(elem, datasetKey);

  Object.keys(dataset).forEach(function (key) {
    if (key === datasetKey) {
      /* default case es. data-lang */
      let opt = dataset[key].split(";");
      /* if there are some options passed like position */
      if (opt.length > 1) {
        /* clean the dataset(eg. T_saluto;1) and parseInt optional position */
        dataset[key] = dataset[key].split(";")[0];
        defaultCase(elem, dataset, key, parseInt(opt[1]));
      } else defaultCase(elem, dataset, key, 0);
    } else {
      /* advanced case es. data-lang-alt */
      advancedCase(elem, dataset, key);
    }
  });
}

function defaultCase(elem, dataset, key, position) {
  /* by using position, the translation will be positioned accordingly */
  let nodeList = [...elem.querySelectorAll("*")];

  if (position === 0) {
    /* translation will be positioned as first node inside elem herarchy */
    elem.textContent = i18next.t(`${dataset[key]}`);
    nodeList.forEach((node) => elem.appendChild(node));
  } else {
    /* translation will be positioned as position option is set */
    /* split the nodeList present now */
    let start = nodeList.slice(0, position);
    let end = nodeList.slice(position, nodeList.length);
    /* create a txt node with the translation */
    let txtNode = document.createTextNode(i18next.t(`${dataset[key]}`));
    start.push(txtNode);
    /* put all together */
    nodeList = start.concat(end);
    /* clean the element */
    elem.textContent = "";
    /* add all nodes to the dome in order */
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
