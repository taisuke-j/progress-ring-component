'use strict';

const index = require('./index-ab134263.js');

/*
 Stencil Client Patch Browser v2.17.1 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('progressring.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["progress-ring.cjs",[[1,"progress-ring",{"radius":[2],"strokeWidth":[2,"stroke-width"],"intSize":[2,"int-size"],"decimalSize":[2,"decimal-size"],"disableDigits":[4,"disable-digits"],"disableDecimals":[4,"disable-decimals"],"roundLinecap":[4,"round-linecap"],"colors":[1],"invertColors":[4,"invert-colors"],"percentage":[1538],"duration":[2],"easingType":[1,"easing-type"],"eventId":[1,"event-id"]}]]]], options);
});
