/* CONFIG */
import { initialConfig } from "../i18next";

export function Logger(message) {
  /* if debug is set to be true then logg  */
  if (initialConfig.debug) {
    console.log(message);
  }
}
