'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-445bec00.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["progress-ring.cjs",[[1,"progress-ring",{"radius":[2],"strokeWidth":[2,"stroke-width"],"intSize":[2,"int-size"],"decimalSize":[2,"decimal-size"],"disableDigits":[4,"disable-digits"],"disableDecimals":[4,"disable-decimals"],"roundLinecap":[4,"round-linecap"],"colors":[1],"invertColors":[4,"invert-colors"],"percentage":[1538],"duration":[2],"easingType":[1,"easing-type"],"eventId":[1,"event-id"]},null,{"radius":["radiusUpdated"],"strokeWidth":["strokeWidthUpdated"],"colors":["colorsUpdated"],"invertColors":["invertColorsUpdated"],"percentage":["percentageUpdated"],"duration":["durationtUpdated"],"easingType":["easingTypeUpdated"]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map