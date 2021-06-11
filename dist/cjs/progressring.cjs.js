'use strict';

const index = require('./index-8aad227c.js');

/*
 Stencil Client Patch Browser v2.6.0 | MIT Licensed | https://stenciljs.com
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
  return index.bootstrapLazy([["progress-ring.cjs",[[1,"progress-ring",{"radius":[2],"strokeWidth":[2,"stroke-width"],"intSize":[2,"int-size"],"decimalSize":[2,"decimal-size"],"disableDigits":[4,"disable-digits"],"invertColors":[4,"invert-colors"],"percent":[1538],"duration":[2],"easingType":[1,"easing-type"],"colors":[32]}]]]], options);
});
