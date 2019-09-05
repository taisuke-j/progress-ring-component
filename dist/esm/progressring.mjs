import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-118978d6.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["progress-ring",[[1,"progress-ring",{"radius":[2],"strokeWidth":[2,"stroke-width"],"intSize":[2,"int-size"],"decimalSize":[2,"decimal-size"],"disableDigits":[4,"disable-digits"],"invertColors":[4,"invert-colors"],"percent":[1538],"duration":[2],"easingType":[1,"easing-type"],"colors":[32]}]]]], options);
});
