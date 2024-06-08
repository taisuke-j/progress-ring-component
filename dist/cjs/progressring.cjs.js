'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-445bec00.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

/*
 Stencil Client Patch Browser v4.18.3 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  if (index.BUILD.isDev && !index.BUILD.isTesting) {
    index.consoleDevInfo("Running in development mode.");
  }
  if (index.BUILD.cloneNodeFix) {
    patchCloneNodeFix(index.H.prototype);
  }
  const scriptElm = index.BUILD.scriptDataOpts ? Array.from(index.doc.querySelectorAll("script")).find(
    (s) => new RegExp(`/${index.NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute("data-stencil-namespace") === index.NAMESPACE
  ) : null;
  const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('progressring.cjs.js', document.baseURI).href));
  const opts = index.BUILD.scriptDataOpts ? (scriptElm || {})["data-opts"] || {} : {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};
var patchCloneNodeFix = (HTMLElementPrototype) => {
  const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
  HTMLElementPrototype.cloneNode = function(deep) {
    if (this.nodeName === "TEMPLATE") {
      return nativeCloneNodeFn.call(this, deep);
    }
    const clonedNode = nativeCloneNodeFn.call(this, false);
    const srcChildNodes = this.childNodes;
    if (deep) {
      for (let i = 0; i < srcChildNodes.length; i++) {
        if (srcChildNodes[i].nodeType !== 2) {
          clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
        }
      }
    }
    return clonedNode;
  };
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["progress-ring.cjs",[[1,"progress-ring",{"radius":[2],"strokeWidth":[2,"stroke-width"],"intSize":[2,"int-size"],"decimalSize":[2,"decimal-size"],"disableDigits":[4,"disable-digits"],"disableDecimals":[4,"disable-decimals"],"roundLinecap":[4,"round-linecap"],"colors":[1],"invertColors":[4,"invert-colors"],"percentage":[1538],"duration":[2],"easingType":[1,"easing-type"],"eventId":[1,"event-id"]},null,{"radius":["radiusUpdated"],"strokeWidth":["strokeWidthUpdated"],"colors":["colorsUpdated"],"invertColors":["invertColorsUpdated"],"percentage":["percentageUpdated"],"duration":["durationtUpdated"],"easingType":["easingTypeUpdated"]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=progressring.cjs.js.map