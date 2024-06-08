import { b as bootstrapLazy } from './index-c1dd267a.js';
export { s as setNonce } from './index-c1dd267a.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["progress-ring",[[1,"progress-ring",{"radius":[2],"strokeWidth":[2,"stroke-width"],"intSize":[2,"int-size"],"decimalSize":[2,"decimal-size"],"disableDigits":[4,"disable-digits"],"disableDecimals":[4,"disable-decimals"],"roundLinecap":[4,"round-linecap"],"colors":[1],"invertColors":[4,"invert-colors"],"percentage":[1538],"duration":[2],"easingType":[1,"easing-type"],"eventId":[1,"event-id"]},null,{"radius":["radiusUpdated"],"strokeWidth":["strokeWidthUpdated"],"colors":["colorsUpdated"],"invertColors":["invertColorsUpdated"],"percentage":["percentageUpdated"],"duration":["durationtUpdated"],"easingType":["easingTypeUpdated"]}]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map