
// ProgressRing: Custom Elements Define Library, ES Module/es2017 Target

import { defineCustomElement } from './progressring.core.js';
import { COMPONENTS } from './progressring.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
