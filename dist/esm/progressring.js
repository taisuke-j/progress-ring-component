import { p as promiseResolve, b as bootstrapLazy } from './index-e115b03a.js';

/*
 Stencil Client Patch Browser v2.17.1 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["progress-ring",[[1,"progress-ring",{"radius":[2],"strokeWidth":[2,"stroke-width"],"intSize":[2,"int-size"],"decimalSize":[2,"decimal-size"],"disableDigits":[4,"disable-digits"],"disableDecimals":[4,"disable-decimals"],"roundLinecap":[4,"round-linecap"],"colors":[1],"invertColors":[4,"invert-colors"],"percentage":[1538],"duration":[2],"easingType":[1,"easing-type"],"eventId":[1,"event-id"]}]]]], options);
});
