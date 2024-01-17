// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bHUPl":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "3ce105a817bcb0e1";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"dnXN7":[function(require,module,exports) {
var _index = require("../src/index");
console.log((0, _index.time)().format("hh:ii:ss A", {
    zone: "Asia/Riyadh"
}));

},{"../src/index":"h7u1C"}],"h7u1C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "time", ()=>time);
var _tnConsoler = require("tn-consoler");
var _timeAgo = require("./timeAgo/timeAgo");
var _timeFormat = require("./timeFormat/timeFormat");
var _timeIsFuture = require("./timeutils/timeIsFuture");
var _timeIsPast = require("./timeutils/timeIsPast");
var _timeIsToday = require("./timeutils/timeIsToday");
var _timeRound = require("./timeutils/timeRound");
var _timeShift = require("./timeutils/timeShift");
const time = (d)=>{
    let date = d ? new Date(d) : new Date();
    const invalid = isNaN(date.getTime());
    if (invalid) date = new Date();
    if (invalid) (0, _tnConsoler.consoler).log("{bgred+white:ERROR} {yellow+b:time}{white+b:()} Date is invalid");
    return {
        getDate: ()=>date,
        format: (format, opts)=>(0, _timeFormat.timeFormat)(date, format, opts),
        ago: (opts)=>(0, _timeAgo.timeAgo)(date, opts),
        shift: (shiftby, amount)=>(0, _timeShift.timeShift)(date, shiftby, amount),
        round: ()=>(0, _timeRound.timeRound)(date),
        isToday: ()=>(0, _timeIsToday.timeIsToday)(date),
        isPast: ()=>(0, _timeIsPast.timeIsPast)(date),
        isFuture: ()=>(0, _timeIsFuture.timeIsFuture)(date)
    };
};

},{"tn-consoler":"3ABKS","./timeAgo/timeAgo":"6kBjT","./timeFormat/timeFormat":"1jf6g","./timeutils/timeIsFuture":"7IhEZ","./timeutils/timeIsPast":"bHV4R","./timeutils/timeIsToday":"5BuAY","./timeutils/timeRound":"lMnVY","./timeutils/timeShift":"iijzX","@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"3ABKS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "consoler", ()=>consoler);
var _toConsumableArray = require("@babel/runtime/helpers/esm/toConsumableArray");
var _toConsumableArrayDefault = parcelHelpers.interopDefault(_toConsumableArray);
var _slicedToArray = require("@babel/runtime/helpers/esm/slicedToArray");
var _slicedToArrayDefault = parcelHelpers.interopDefault(_slicedToArray);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
var _tnCase = require("tn-case");
function getPresetStyles() {
    var colors = {
        dark: "#454545",
        light: "#ddd",
        red: "#f27983",
        cyan: "#5ccfe6",
        green: "#bae67e",
        greenbg: "#99bf4d",
        white: "#ffffff",
        orange: "#ffa759",
        purple: "#d4bfff",
        yellow: "#ffd580",
        grey: "#5c6773"
    };
    var bgStyles = {
        padding: "1px 7px 2px 7px",
        margin: "1px 0 3px 0",
        borderRadius: "3px"
    };
    return {
        $global: {},
        b: {
            fontWeight: "bold"
        },
        nb: {
            fontWeight: "normal"
        },
        i: {
            fontStyle: "italic"
        },
        ni: {
            fontStyle: "normal"
        },
        u: {
            textDecoration: "underline"
        },
        nu: {
            textDecoration: "none"
        },
        dark: {
            color: colors.dark
        },
        light: {
            color: colors.light
        },
        red: {
            color: colors.red
        },
        cyan: {
            color: colors.cyan
        },
        green: {
            color: colors.green
        },
        white: {
            color: colors.white
        },
        orange: {
            color: colors.orange
        },
        purple: {
            color: colors.purple
        },
        grey: {
            color: colors.grey
        },
        yellow: {
            color: colors.yellow
        },
        bgdark: (0, _objectSpread2Default.default)({
            background: colors.dark,
            color: colors.light
        }, bgStyles),
        bglight: (0, _objectSpread2Default.default)({
            background: colors.light,
            color: colors.dark
        }, bgStyles),
        bgred: (0, _objectSpread2Default.default)({
            background: colors.red,
            color: colors.white
        }, bgStyles),
        bgcyan: (0, _objectSpread2Default.default)({
            background: colors.cyan,
            color: colors.white
        }, bgStyles),
        bggreen: (0, _objectSpread2Default.default)({
            background: colors.greenbg,
            color: colors.white
        }, bgStyles),
        bgwhite: (0, _objectSpread2Default.default)({
            background: colors.white,
            color: colors.dark
        }, bgStyles),
        bgorange: (0, _objectSpread2Default.default)({
            background: colors.orange,
            color: colors.white
        }, bgStyles),
        bgpurple: (0, _objectSpread2Default.default)({
            background: colors.purple,
            color: colors.dark
        }, bgStyles),
        bggrey: (0, _objectSpread2Default.default)({
            background: colors.grey,
            color: colors.white
        }, bgStyles),
        bgyellow: (0, _objectSpread2Default.default)({
            background: colors.yellow,
            color: colors.dark
        }, bgStyles)
    };
}
function getUserStyles(userDesign) {
    var userStyles = {};
    Object.entries(userDesign).forEach(function(_ref) {
        var _ref2 = (0, _slicedToArrayDefault.default)(_ref, 2), name = _ref2[0], styles = _ref2[1];
        var eachStyle = {};
        if (Array.isArray(styles)) styles.forEach(function(each) {
            if (typeof each === "string") Object.assign(eachStyle, getPresetStyles()[each]);
            else Object.assign(eachStyle, each);
        });
        else Object.assign(eachStyle, styles);
        userStyles[name] = eachStyle;
    });
    return userStyles;
}
function getStyles(userDesign) {
    var userStyles = getUserStyles(userDesign);
    var presetStyles = getPresetStyles();
    var styles = (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, presetStyles), userStyles);
    var stringStyles = {};
    Object.entries(styles).forEach(function(_ref3) {
        var _ref4 = (0, _slicedToArrayDefault.default)(_ref3, 2), name = _ref4[0], style = _ref4[1];
        style = (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, styles.$global), style);
        var str = "";
        Object.entries(style).forEach(function(_ref5) {
            var _ref6 = (0, _slicedToArrayDefault.default)(_ref5, 2), prop = _ref6[0], value = _ref6[1];
            str = "".concat(str + (0, _tnCase.kebabCase)(prop), ":").concat(value, ";");
        });
        stringStyles[name] = str;
    });
    return stringStyles;
}
function escapeTags(text) {
    var reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (!reverse) {
        text = text.replace(/\\\{/g, "\uFFFC");
        text = text.replace(/\\:/g, "\uFFFD");
        text = text.replace(/\\\}/g, "\uFFFE");
    } else {
        text = text.replace(/\ufffc/g, "{");
        text = text.replace(/\ufffd/g, ":");
        text = text.replace(/\ufffe/g, "}");
    }
    return text;
}
function textFormater(text) {
    text = text.replace(/[ \s\t]*\n[ \s\t]*/g, "\uFFFF"); // replacing newline and spaces to a unicode char
    text = text.replace(/[ \s\t]*\\\uffff/g, "\n"); // replacing newline separator (backslash) to newline
    text = text.replace(/\uffff/g, " "); // remove all unicode char
    text = text.replace(/(^[ \s\t]+|[ \s\t]+$)/g, ""); // removing first and last space
    text = text.replace(/\\([ \s\t]+)/g, "$1"); // keep first new line space if backslash if given
    text = "%c".concat(text); // adding the first css lookup
    text = escapeTags(text);
    return text;
}
function _consoler(text) {
    var design = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var styles = getStyles(design);
    var consoleText = textFormater(text);
    var consoleStyles = [
        styles.$global
    ];
    consoleText = consoleText.replace(/{([\w+]+):([\d\D]*?)}/g, function(raw, keyString, text) {
        var keys = keyString.split("+");
        var style = "";
        var pass = true;
        keys.forEach(function(key) {
            if (!styles[key]) {
                pass = false;
                return;
            }
            style += styles[key];
        });
        if (!pass) return raw;
        consoleStyles.push(style, styles.$global);
        return "%c".concat(text, "%c");
    });
    consoleText = escapeTags(consoleText, true);
    return [
        consoleText
    ].concat(consoleStyles);
}
var consoler = {
    log: function log() {
        var _console;
        var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var design = arguments.length > 1 ? arguments[1] : undefined;
        for(var _len = arguments.length, others = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++)others[_key - 2] = arguments[_key];
        (_console = console).log.apply(_console, (0, _toConsumableArrayDefault.default)(_consoler(text, design)).concat(others));
    },
    warn: function warn() {
        var _console2;
        var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var design = arguments.length > 1 ? arguments[1] : undefined;
        var prefix = "{bgyellow:warning} ";
        for(var _len2 = arguments.length, others = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++)others[_key2 - 2] = arguments[_key2];
        (_console2 = console).log.apply(_console2, (0, _toConsumableArrayDefault.default)(_consoler(prefix + text, design)).concat(others));
    },
    error: function error() {
        var _console3;
        var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var design = arguments.length > 1 ? arguments[1] : undefined;
        var prefix = "{bgred:error} ";
        for(var _len3 = arguments.length, others = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++)others[_key3 - 2] = arguments[_key3];
        (_console3 = console).log.apply(_console3, (0, _toConsumableArrayDefault.default)(_consoler(prefix + text, design)).concat(others));
    },
    trace: function trace() {
        var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var desc = title ? "{nb: : ".concat(title, "}") : "";
        this.groupCollapsed("{cyan:console}.{red:trace}()".concat(desc), {
            $global: [
                "b"
            ]
        });
        console.trace();
        this.groupEnd(false);
    },
    group: function group() {
        var _console4;
        var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var design = arguments.length > 1 ? arguments[1] : undefined;
        for(var _len4 = arguments.length, others = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++)others[_key4 - 2] = arguments[_key4];
        (_console4 = console).group.apply(_console4, (0, _toConsumableArrayDefault.default)(_consoler(text, (0, _objectSpread2Default.default)({
            $global: [
                "nb"
            ]
        }, design))).concat(others));
    },
    groupCollapsed: function groupCollapsed() {
        var _console5;
        var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var design = arguments.length > 1 ? arguments[1] : undefined;
        for(var _len5 = arguments.length, others = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++)others[_key5 - 2] = arguments[_key5];
        (_console5 = console).groupCollapsed.apply(_console5, (0, _toConsumableArrayDefault.default)(_consoler(text, (0, _objectSpread2Default.default)({
            $global: [
                "nb"
            ]
        }, design))).concat(others));
    },
    groupEnd: function groupEnd() {
        var trace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var title = arguments.length > 1 ? arguments[1] : undefined;
        if (trace) this.trace(title);
        console.groupEnd();
    }
};

},{"@babel/runtime/helpers/esm/toConsumableArray":"gs7LM","@babel/runtime/helpers/esm/slicedToArray":"gv6Nw","@babel/runtime/helpers/esm/objectSpread2":"efklt","tn-case":"67Qt2","@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"gs7LM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_toConsumableArray);
var _arrayWithoutHolesJs = require("./arrayWithoutHoles.js");
var _arrayWithoutHolesJsDefault = parcelHelpers.interopDefault(_arrayWithoutHolesJs);
var _iterableToArrayJs = require("./iterableToArray.js");
var _iterableToArrayJsDefault = parcelHelpers.interopDefault(_iterableToArrayJs);
var _unsupportedIterableToArrayJs = require("./unsupportedIterableToArray.js");
var _unsupportedIterableToArrayJsDefault = parcelHelpers.interopDefault(_unsupportedIterableToArrayJs);
var _nonIterableSpreadJs = require("./nonIterableSpread.js");
var _nonIterableSpreadJsDefault = parcelHelpers.interopDefault(_nonIterableSpreadJs);
function _toConsumableArray(arr) {
    return (0, _arrayWithoutHolesJsDefault.default)(arr) || (0, _iterableToArrayJsDefault.default)(arr) || (0, _unsupportedIterableToArrayJsDefault.default)(arr) || (0, _nonIterableSpreadJsDefault.default)();
}

},{"./arrayWithoutHoles.js":"18Dev","./iterableToArray.js":"dfpys","./unsupportedIterableToArray.js":"8lj0q","./nonIterableSpread.js":"7Zts6","@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"18Dev":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_arrayWithoutHoles);
var _arrayLikeToArrayJs = require("./arrayLikeToArray.js");
var _arrayLikeToArrayJsDefault = parcelHelpers.interopDefault(_arrayLikeToArrayJs);
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return (0, _arrayLikeToArrayJsDefault.default)(arr);
}

},{"./arrayLikeToArray.js":"8vNnf","@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"8vNnf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_arrayLikeToArray);
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"aRELh":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"dfpys":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_iterableToArray);
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"8lj0q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_unsupportedIterableToArray);
var _arrayLikeToArrayJs = require("./arrayLikeToArray.js");
var _arrayLikeToArrayJsDefault = parcelHelpers.interopDefault(_arrayLikeToArrayJs);
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return (0, _arrayLikeToArrayJsDefault.default)(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0, _arrayLikeToArrayJsDefault.default)(o, minLen);
}

},{"./arrayLikeToArray.js":"8vNnf","@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"7Zts6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_nonIterableSpread);
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"gv6Nw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_slicedToArray);
var _arrayWithHolesJs = require("./arrayWithHoles.js");
var _arrayWithHolesJsDefault = parcelHelpers.interopDefault(_arrayWithHolesJs);
var _iterableToArrayLimitJs = require("./iterableToArrayLimit.js");
var _iterableToArrayLimitJsDefault = parcelHelpers.interopDefault(_iterableToArrayLimitJs);
var _unsupportedIterableToArrayJs = require("./unsupportedIterableToArray.js");
var _unsupportedIterableToArrayJsDefault = parcelHelpers.interopDefault(_unsupportedIterableToArrayJs);
var _nonIterableRestJs = require("./nonIterableRest.js");
var _nonIterableRestJsDefault = parcelHelpers.interopDefault(_nonIterableRestJs);
function _slicedToArray(arr, i) {
    return (0, _arrayWithHolesJsDefault.default)(arr) || (0, _iterableToArrayLimitJsDefault.default)(arr, i) || (0, _unsupportedIterableToArrayJsDefault.default)(arr, i) || (0, _nonIterableRestJsDefault.default)();
}

},{"./arrayWithHoles.js":"d1R2i","./iterableToArrayLimit.js":"dncCe","./unsupportedIterableToArray.js":"8lj0q","./nonIterableRest.js":"1L01N","@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"d1R2i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_arrayWithHoles);
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"dncCe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_iterableToArrayLimit);
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"1L01N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_nonIterableRest);
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"efklt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_objectSpread2);
var _definePropertyJs = require("./defineProperty.js");
var _definePropertyJsDefault = parcelHelpers.interopDefault(_definePropertyJs);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            (0, _definePropertyJsDefault.default)(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}

},{"./defineProperty.js":"dVTUa","@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"dVTUa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_defineProperty);
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"67Qt2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "camelCase", ()=>camelCase);
parcelHelpers.export(exports, "customCase", ()=>customCase);
parcelHelpers.export(exports, "dotCase", ()=>dotCase);
parcelHelpers.export(exports, "kebabCase", ()=>kebabCase);
parcelHelpers.export(exports, "pascalCase", ()=>pascalCase);
parcelHelpers.export(exports, "snakeCase", ()=>snakeCase);
parcelHelpers.export(exports, "spaceCase", ()=>spaceCase);
var _tnCapitalize = require("tn-capitalize");
function wordSeparator(string) {
    var separator = /[A-Z-_. \\/]/;
    var seprem = /[-_. \\/]/;
    var chars = string.split("");
    var words = [
        ""
    ];
    chars.forEach(function(char) {
        if (char.match(separator)) {
            words.push("");
            if (char.match(seprem)) return;
        }
        var lastkey = words.length - 1;
        words[lastkey] += char.toLowerCase();
    });
    return words.filter(function(word) {
        return word.length;
    });
}
function customCase_(string) {
    var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/";
    var words = wordSeparator(string);
    return words.join(separator);
}
function kebabCase_(string) {
    return customCase_(string, "-");
}
function camelCase_(string) {
    var words = wordSeparator(string);
    var remainWords = words.splice(1);
    var firstWord = words[0] || "";
    return firstWord + remainWords.map(function(w) {
        return (0, _tnCapitalize.capitalize)(w);
    }).join("");
}
function dotCase_(string) {
    return customCase_(string, ".");
}
function pascalCase_(string) {
    var words = wordSeparator(string);
    return words.map(function(w) {
        return (0, _tnCapitalize.capitalize)(w);
    }).join("");
}
function snakeCase_(string) {
    return customCase_(string, "_");
}
function spaceCase_(string) {
    return customCase_(string, " ");
}
var customCase = customCase_;
var kebabCase = kebabCase_;
var snakeCase = snakeCase_;
var dotCase = dotCase_;
var camelCase = camelCase_;
var pascalCase = pascalCase_;
var spaceCase = spaceCase_;

},{"tn-capitalize":"aHeVK","@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"aHeVK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "capitalize", ()=>capitalize);
var capitalize = function capitalize(string) {
    var capall = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var reg = new RegExp("\\w+", capall ? "g" : "");
    return string.replace(reg, function(word) {
        return word[0].toUpperCase() + word.slice(1);
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"6kBjT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeAgo", ()=>timeAgo);
var _formatsFunction = require("./utils/formatsFunction");
var _getAgo = require("./utils/getAgo");
var _parameters = require("./utils/parameters");
function timeAgo(date, useropts) {
    const { agoms, opts } = (0, _parameters.parameters)(date, useropts);
    const formatted = (0, _formatsFunction.formatFunction)(opts);
    const { key, number } = (0, _getAgo.getAgo)(agoms, opts);
    return formatted(number, opts.decimal, key);
}

},{"./utils/formatsFunction":"3O1T1","./utils/getAgo":"dPR7d","./utils/parameters":"iA4mP","@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"3O1T1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatFunction", ()=>formatFunction);
var _tnValidate = require("tn-validate");
const formatFunction = (opts)=>{
    const formats = defaultFormats[opts.variant];
    Object.entries(opts.formats).forEach(([key, value])=>{
        const input = value;
        formats[key] = (0, _tnValidate.isArray)(input) ? input : [
            input,
            input
        ];
    });
    return (number, decimal, key)=>{
        const num = parseFloat(number.toFixed(decimal));
        return `${opts.prefix}${num}${formats[key][num <= 1 ? 0 : 1]}${opts.postfix}`;
    };
};
const defaultFormats = {
    minimal: {
        yr: [
            "y",
            "y"
        ],
        mo: [
            "mo",
            "mo"
        ],
        day: [
            "d",
            "d"
        ],
        hr: [
            "h",
            "h"
        ],
        min: [
            "m",
            "m"
        ],
        sec: [
            "s",
            "s"
        ],
        msec: [
            "ms",
            "ms"
        ]
    },
    short: {
        yr: [
            " yr",
            " yrs"
        ],
        mo: [
            " mo",
            " mos"
        ],
        day: [
            " day",
            " days"
        ],
        hr: [
            " hr",
            " hrs"
        ],
        min: [
            " min",
            " mins"
        ],
        sec: [
            " sec",
            " secs"
        ],
        msec: [
            " msec",
            " msecs"
        ]
    },
    verbose: {
        yr: [
            " year",
            " years"
        ],
        mo: [
            " month",
            " months"
        ],
        day: [
            " day",
            " days"
        ],
        hr: [
            " hour",
            " hours"
        ],
        min: [
            " minute",
            " minutes"
        ],
        sec: [
            " second",
            " seconds"
        ],
        msec: [
            " millisecond",
            " milliseconds"
        ]
    }
};

},{"tn-validate":"dLEFF","@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"dLEFF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isArrObject", ()=>isArrObject);
parcelHelpers.export(exports, "isArray", ()=>isArray);
parcelHelpers.export(exports, "isBoolArr", ()=>isBoolArr);
parcelHelpers.export(exports, "isBoolean", ()=>isBoolean);
parcelHelpers.export(exports, "isDate", ()=>isDate);
parcelHelpers.export(exports, "isFunction", ()=>isFunction);
parcelHelpers.export(exports, "isJson", ()=>isJson);
parcelHelpers.export(exports, "isNull", ()=>isNull);
parcelHelpers.export(exports, "isNullUndefined", ()=>isNullUndefined);
parcelHelpers.export(exports, "isNumArr", ()=>isNumArr);
parcelHelpers.export(exports, "isNumStrArr", ()=>isNumStrArr);
parcelHelpers.export(exports, "isNumString", ()=>isNumString);
parcelHelpers.export(exports, "isNumber", ()=>isNumber);
parcelHelpers.export(exports, "isObject", ()=>isObject);
parcelHelpers.export(exports, "isRegExp", ()=>isRegExp);
parcelHelpers.export(exports, "isStrArr", ()=>isStrArr);
parcelHelpers.export(exports, "isString", ()=>isString);
parcelHelpers.export(exports, "isUndefined", ()=>isUndefined);
parcelHelpers.export(exports, "isValidDate", ()=>isValidDate);
parcelHelpers.export(exports, "validate", ()=>validate);
var _typeof = require("@babel/runtime/helpers/esm/typeof");
var _typeofDefault = parcelHelpers.interopDefault(_typeof);
var _tnConsoler = require("tn-consoler");
var cons = {
    index: {
        noValidator: function noValidator(value, criteria) {
            (0, _tnConsoler.consoler).groupCollapsed("{bgred:error} {yellow+b:validate}{b:()}\n      {grey+b:>} {red+b:No supported validator}");
            (0, _tnConsoler.consoler).log("{b:Value} :", {}, value);
            (0, _tnConsoler.consoler).log("{b:Validators} :", {}, criteria);
            (0, _tnConsoler.consoler).groupEnd(true);
        }
    },
    validate: {
        getValidators: {
            unsupported: function unsupported(type) {
                (0, _tnConsoler.consoler).groupCollapsed("{bgred:error} {yellow+b:validate}{b:()}\n        {grey+b:>} {red+b:Unsupported validator}");
                (0, _tnConsoler.consoler).log("{b:Validator} :", {}, type);
                (0, _tnConsoler.consoler).groupEnd(true);
            }
        }
    }
};
var possibleTypes = [
    "string",
    "number",
    "boolean",
    "function",
    "array",
    "object",
    "json",
    "null",
    "undefined",
    "regexp",
    "date",
    "valid-date"
];
var isString = function isString(val) {
    return typeof val === "string";
};
var isNumber = function isNumber(val) {
    return typeof val === "number";
};
var isBoolean = function isBoolean(val) {
    return typeof val === "boolean";
};
var isFunction = function isFunction(val) {
    return typeof val === "function";
};
var isUndefined = function isUndefined(val) {
    return typeof val === "undefined";
};
var isNull = function isNull(val) {
    return val === null;
};
var isArray = function isArray(val) {
    return Array.isArray(val);
};
var isObject = function isObject(val) {
    return Object.prototype.toString.call(val) === "[object Object]";
};
var isRegExp = function isRegExp(val) {
    return Object.prototype.toString.call(val) === "[object RegExp]";
};
var isDate = function isDate(val) {
    return Object.prototype.toString.call(val) === "[object Date]";
};
var isValidDate = function isValidDate(val) {
    return isDate(val) && !isNaN(val.getTime());
};
var isJson = function isJson(val) {
    try {
        var obj = JSON.parse(val);
        if ((0, _typeofDefault.default)(obj) === "object" && obj !== null) return true;
    } catch (_unused) {}
    return false;
};
var isNumString = function isNumString(val) {
    return isNumber(val) || isString(val);
};
var isArrObject = function isArrObject(val) {
    return isArray(val) || isObject(val);
};
var isNullUndefined = function isNullUndefined(val) {
    return isNull(val) || isUndefined(val);
};
var isStrArr = function isStrArr(val) {
    return isArray(val) && val.map(function(str) {
        return isString(str);
    }).every(function(i) {
        return i;
    });
};
var isNumArr = function isNumArr(val) {
    return isArray(val) && val.map(function(num) {
        return isNumber(num);
    }).every(function(i) {
        return i;
    });
};
var isBoolArr = function isBoolArr(val) {
    return isArray(val) && val.map(function(bool) {
        return isBoolean(bool);
    }).every(function(i) {
        return i;
    });
};
var isNumStrArr = function isNumStrArr(val) {
    return isArray(val) && val.map(function(numstr) {
        return isNumString(numstr);
    }).every(function(i) {
        return i;
    });
};
var getValidators = function getValidators(criteria) {
    var types = [];
    var funcs = [];
    var regexp = [];
    criteria.forEach(function(type) {
        if (typeof type === "string" && possibleTypes.includes(type)) return types.push(type);
        var match = type && type.toString().match(/^\s*function (\w+)/);
        var mtype = match ? match[1].toLowerCase() : false;
        if (mtype && possibleTypes.includes(mtype)) return types.push(mtype);
        if (typeof type === "function") return funcs.push(type);
        if (isRegExp(type)) return regexp.push(type);
        cons.validate.getValidators.unsupported(type);
    });
    return {
        types: types,
        funcs: funcs,
        regexp: regexp
    };
};
var typeValidation = function typeValidation(type, value) {
    if (type === "json") return isJson(value);
    if (type === "null") return isNull(value);
    if (type === "object") return isObject(value);
    if (type === "array") return isArray(value);
    if (type === "regexp") return isRegExp(value);
    if (type === "date") return isDate(value);
    if (type === "valid-date") return isValidDate(value);
    else return (0, _typeofDefault.default)(value) === type;
};
var validate = function validate(value) {
    for(var _len = arguments.length, criteria = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)criteria[_key - 1] = arguments[_key];
    if (!criteria.length) return true;
    var _getValidators = getValidators(criteria), types = _getValidators.types, funcs = _getValidators.funcs, regexp = _getValidators.regexp;
    if (!types.length && !funcs.length && !regexp.length) {
        cons.index.noValidator(value, criteria);
        return false;
    }
    var valid = !types.length;
    types.forEach(function(type) {
        return valid = valid || typeValidation(type, value);
    });
    if (!valid) return false;
    funcs.forEach(function(func) {
        return valid = !!(valid && func(value));
    });
    if (regexp.length) {
        if (typeof value !== "string") return false;
        regexp.forEach(function(reg) {
            return valid = !!(valid && value.match(reg));
        });
    }
    return valid;
};

},{"@babel/runtime/helpers/esm/typeof":"i7HWY","tn-consoler":"3ABKS","@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"i7HWY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_typeof);
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"dPR7d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAgo", ()=>getAgo);
var _conv = require("../../utils/conv");
const getAgo = (agoms, opts)=>{
    const { yr, mo, day, hr, min, sec, msec } = opts;
    let lastkey = "yr";
    if (mo) lastkey = "mo";
    if (day) lastkey = "day";
    if (hr) lastkey = "hr";
    if (min) lastkey = "min";
    if (sec) lastkey = "sec";
    if (msec) lastkey = "msec";
    if (agoms >= (0, _conv.conv).yr && yr || lastkey === "yr") return {
        number: agoms / (0, _conv.conv).yr,
        key: "yr"
    };
    else if (agoms >= (0, _conv.conv).mo && mo || lastkey === "mo") return {
        number: agoms / (0, _conv.conv).mo,
        key: "mo"
    };
    else if (agoms >= (0, _conv.conv).day && day || lastkey === "day") return {
        number: agoms / (0, _conv.conv).day,
        key: "day"
    };
    else if (agoms >= (0, _conv.conv).hr && hr || lastkey === "hr") return {
        number: agoms / (0, _conv.conv).hr,
        key: "hr"
    };
    else if (agoms >= (0, _conv.conv).min && min || lastkey === "min") return {
        number: agoms / (0, _conv.conv).min,
        key: "min"
    };
    else if (agoms >= (0, _conv.conv).sec && sec || lastkey === "sec") return {
        number: agoms / (0, _conv.conv).sec,
        key: "sec"
    };
    else return {
        number: agoms,
        key: "msec"
    };
};

},{"../../utils/conv":"1xSif","@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"1xSif":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "conv", ()=>conv);
const sec = 1000;
const min = sec * 60;
const hr = min * 60;
const day = hr * 24;
const mo = day * 30;
const yr = day * 365;
const conv = {
    msec: 1,
    yr,
    sec,
    min,
    hr,
    day,
    mo
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"iA4mP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parameters", ()=>parameters);
const defaultOpts = {
    decimal: 0,
    variant: "verbose",
    formats: {},
    prefix: "",
    postfix: "",
    yr: true,
    mo: false,
    day: true,
    hr: true,
    min: true,
    sec: true,
    msec: false
};
const parameters = (date, useropts)=>{
    const agoms = new Date().getTime() - date.getTime();
    return {
        agoms: agoms < 0 ? 0 : agoms,
        opts: {
            ...defaultOpts,
            ...useropts || {}
        }
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"1jf6g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeFormat", ()=>timeFormat);
var _formatarr = require("./formatarr/formatarr");
var _formatarrDefault = parcelHelpers.interopDefault(_formatarr);
var _keyConverter = require("./keyConverter/keyConverter");
var _keyConverterDefault = parcelHelpers.interopDefault(_keyConverter);
const timeFormat = (date, format, opts = {})=>{
    const { zone } = opts;
    const formatarr = (0, _formatarrDefault.default)(format ?? "dd-mm-Y");
    console.log(zone);
    return (0, _keyConverterDefault.default)(date, formatarr);
};

},{"./formatarr/formatarr":"5zQRf","./keyConverter/keyConverter":"3Uua9","@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"5zQRf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(formatstr) {
        const formatarr = [];
        let isplain = false;
        let plaintext = "";
        let twinable = false;
        formatstr.split("").forEach((char)=>{
            // plaintext collector
            if (char === "{") {
                isplain = true;
                return;
            }
            if (char === "}") {
                formatarr.push({
                    iskey: false,
                    char: plaintext
                });
                plaintext = "";
                isplain = false;
                return;
            }
            if (isplain) {
                plaintext += char;
                return;
            }
            // key collector
            if (twinable) {
                if (chars.includes(char) && char === twinable) formatarr.push({
                    iskey: true,
                    char: char + char
                });
                else if (chars.includes(char)) {
                    formatarr.push({
                        iskey: true,
                        char: twinable
                    });
                    formatarr.push({
                        iskey: true,
                        char
                    });
                } else {
                    formatarr.push({
                        iskey: true,
                        char: twinable
                    });
                    formatarr.push({
                        iskey: false,
                        char
                    });
                }
            } else {
                if (twins.includes(char)) {
                    twinable = char;
                    return;
                } else if (chars.includes(char)) formatarr.push({
                    iskey: true,
                    char
                });
                else formatarr.push({
                    iskey: false,
                    char
                });
            }
            twinable = false;
        });
        if (twinable) formatarr.push({
            iskey: true,
            char: twinable
        });
        return formatarr;
    });
const chars = "d|D|m|M|y|Y|h|H|i|s|S|a|A".split("|");
const twins = "d|D|m|M|h|H|i|s|S".split("|");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"3Uua9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(dateobj, formatarr) {
        let string = "";
        const convlist = (0, _convertersDefault.default)(dateobj);
        formatarr.forEach((charinfo)=>{
            if (!charinfo.iskey) {
                string += charinfo.char;
                return;
            }
            string += convlist[charinfo.char]().toString();
        });
        return string;
    });
var _converters = require("./converters/converters");
var _convertersDefault = parcelHelpers.interopDefault(_converters);

},{"./converters/converters":"iNqBW","@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"iNqBW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(dateobj) {
        return {
            d: ()=>(0, _dateMinSecMsDefault.default)(dateobj, "date"),
            dd: ()=>(0, _dateMinSecMsDefault.default)(dateobj, "date", true),
            D: ()=>(0, _dayNameDefault.default)(dateobj),
            DD: ()=>(0, _dayNameDefault.default)(dateobj, true),
            m: ()=>(0, _monthDefault.default)(dateobj, false, false),
            mm: ()=>(0, _monthDefault.default)(dateobj, false, true),
            M: ()=>(0, _monthDefault.default)(dateobj, true, false),
            MM: ()=>(0, _monthDefault.default)(dateobj, true, true),
            y: ()=>(0, _yearDefault.default)(dateobj),
            Y: ()=>(0, _yearDefault.default)(dateobj, true),
            h: ()=>(0, _hourDefault.default)(dateobj, false, false),
            hh: ()=>(0, _hourDefault.default)(dateobj, false, true),
            H: ()=>(0, _hourDefault.default)(dateobj, true, false),
            HH: ()=>(0, _hourDefault.default)(dateobj, true, true),
            i: ()=>(0, _dateMinSecMsDefault.default)(dateobj, "min"),
            ii: ()=>(0, _dateMinSecMsDefault.default)(dateobj, "min", true),
            s: ()=>(0, _dateMinSecMsDefault.default)(dateobj, "sec"),
            ss: ()=>(0, _dateMinSecMsDefault.default)(dateobj, "sec", true),
            S: ()=>(0, _dateMinSecMsDefault.default)(dateobj, "ms"),
            SS: ()=>(0, _dateMinSecMsDefault.default)(dateobj, "ms", true),
            a: ()=>(0, _amPmDefault.default)(dateobj),
            A: ()=>(0, _amPmDefault.default)(dateobj, true)
        };
    });
var _amPm = require("./utils/amPm");
var _amPmDefault = parcelHelpers.interopDefault(_amPm);
var _dateMinSecMs = require("./utils/dateMinSecMs");
var _dateMinSecMsDefault = parcelHelpers.interopDefault(_dateMinSecMs);
var _dayName = require("./utils/dayName");
var _dayNameDefault = parcelHelpers.interopDefault(_dayName);
var _hour = require("./utils/hour");
var _hourDefault = parcelHelpers.interopDefault(_hour);
var _month = require("./utils/month");
var _monthDefault = parcelHelpers.interopDefault(_month);
var _year = require("./utils/year");
var _yearDefault = parcelHelpers.interopDefault(_year);

},{"./utils/amPm":"dRr1k","./utils/dateMinSecMs":"aFC7u","./utils/dayName":"5g2HY","./utils/hour":"4VKqo","./utils/month":"75P0l","./utils/year":"589rl","@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"dRr1k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(dateobj, capital = false) {
        const hours = dateobj.getHours();
        let ampm = "am";
        if (hours >= 12) ampm = "pm";
        if (capital) ampm = ampm.toUpperCase();
        return ampm;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"aFC7u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(dateobj, type, zeropad = false) {
        let dmsms;
        if (type === "date") dmsms = dateobj.getDate();
        else if (type === "min") dmsms = dateobj.getMinutes();
        else if (type === "sec") dmsms = dateobj.getSeconds();
        else dmsms = dateobj.getMilliseconds();
        if (zeropad) {
            const padcount = type === "ms" ? 3 : 2;
            dmsms = (0, _tnNumpad.numpad)(dmsms, padcount);
        }
        return dmsms;
    });
var _tnNumpad = require("tn-numpad");

},{"tn-numpad":"l7h9j","@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"l7h9j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "numpad", ()=>numpad);
function integer(num, padlen, padstr, toFixed) {
    if (toFixed !== false) num = parseFloat(num.toFixed(toFixed));
    var numstr = Math.abs(num).toString().split(".")[0];
    var digitlack = padlen - numstr.length;
    if (digitlack > 0) numstr = padstr.repeat(digitlack) + numstr;
    return numstr;
}
function fractional(num, toFixed) {
    var numstr;
    if (toFixed !== false) numstr = num.toFixed(toFixed);
    else numstr = num.toString();
    var frac = numstr.split(".")[1];
    frac = frac ? ".".concat(frac) : "";
    return frac;
}
var numpad = function numpad(num, padlen) {
    var padstr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "0";
    var toFixed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var minus = num < 0 ? "-" : "";
    var intePart = integer(num, padlen, padstr, toFixed);
    var fracPart = fractional(num, toFixed);
    return minus + intePart + fracPart;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"5g2HY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(dateobj, full = false) {
        const dayno = dateobj.getDay();
        if (full) return long[dayno];
        else return short[dayno];
    });
const short = "Sun|Mon|Tue|Wed|Thu|Fri|Sat".split("|");
const long = "Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday".split("|");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"4VKqo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(dateobj, format24, zeropad) {
        let hours = dateobj.getHours();
        if (!format24) {
            if (hours > 12) hours = hours - 12;
            if (hours === 0) hours = 12;
        }
        if (zeropad) hours = (0, _tnNumpad.numpad)(hours, 2);
        return hours;
    });
var _tnNumpad = require("tn-numpad");

},{"tn-numpad":"l7h9j","@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"75P0l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(dateobj, name, longer) {
        let monthno = dateobj.getMonth();
        if (name) {
            if (longer) return long[monthno];
            return short[monthno];
        }
        ++monthno;
        if (longer) return (0, _tnNumpad.numpad)(monthno, 2);
        return monthno;
    });
var _tnNumpad = require("tn-numpad");
const short = "Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec".split("|");
const long = "January|February|March|April|May|June|July|August|September|October|November|December".split("|") // prettier-ignore
;

},{"tn-numpad":"l7h9j","@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"589rl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>function(dateobj, full = false) {
        let fullyear = dateobj.getFullYear();
        if (!full) fullyear = fullyear.toString().substr(2, 2);
        return fullyear;
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"7IhEZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeIsFuture", ()=>timeIsFuture);
const timeIsFuture = (date)=>{
    return date.getTime() > new Date().getTime();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"bHV4R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeIsPast", ()=>timeIsPast);
const timeIsPast = (date)=>{
    return date.getTime() < new Date().getTime();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"5BuAY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeIsToday", ()=>timeIsToday);
const timeIsToday = (date)=>{
    const given = new Date(date);
    const today = new Date();
    return given.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"lMnVY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeRound", ()=>timeRound);
const timeRound = (date)=>{
    const given = new Date(date);
    return new Date(given.setHours(0, 0, 0, 0));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}],"iijzX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeShift", ()=>timeShift);
var _conv = require("../utils/conv");
const timeShift = (date, shiftby, amount = "day")=>{
    const timestamp = date.getTime() + shiftby * (0, _conv.conv)[amount];
    return new Date(timestamp);
};

},{"../utils/conv":"1xSif","@parcel/transformer-js/src/esmodule-helpers.js":"aRELh"}]},["bHUPl","dnXN7"], "dnXN7", "parcelRequire540c")

//# sourceMappingURL=index.17bcb0e1.js.map
