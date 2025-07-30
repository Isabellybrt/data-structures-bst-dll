// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
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

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
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
        globalObject
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
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

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
    }
  }
})({"elbaT":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "4943a1030f289648";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
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
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
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
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
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
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
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
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
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
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
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
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
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
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"gNc1f":[function(require,module,exports,__globalThis) {
var _doublyLinkedList = require("./DoublyLinkedList");
var _binarySearchTree = require("./BinarySearchTree");
const lista = new (0, _doublyLinkedList.DoublyLinkedList)();
const arvore = new (0, _binarySearchTree.BinarySearchTree)();
const output = document.getElementById("output");
// ----------------- Lista -----------------
window.addStart = ()=>{
    const value = getValue("valor");
    lista.insertAtStart(value);
    window.showForward();
};
window.addEnd = ()=>{
    const value = getValue("valor");
    lista.insertAtEnd(value);
    window.showForward();
};
window.addAt = ()=>{
    const value = getValue("valor");
    const pos = getValue("posicao");
    lista.insertAt(value, pos);
    window.showForward();
};
window.removeStart = ()=>{
    lista.removeFromStart();
    window.showForward();
};
window.removeEnd = ()=>{
    lista.removeFromEnd();
    window.showForward();
};
window.removeAt = ()=>{
    const pos = getValue("posicao");
    lista.removeFrom(pos);
    window.showForward();
};
window.showForward = ()=>{
    output.innerText = "Lista normal: " + lista.toArrayForward().join(" <-> ");
};
window.showBackward = ()=>{
    output.innerText = "Lista reversa: " + lista.toArrayBackward().join(" <-> ");
};
window.checkEmpty = ()=>{
    output.innerText = lista.isEmpty() ? "Lista vazia." : "Lista com elementos.";
};
window.clearList = ()=>{
    lista.clear();
    output.innerText = "Lista esvaziada.";
};
window.getSize = ()=>{
    output.innerText = `Tamanho da lista: ${lista.getSize()}`;
};
// ----------------- Árvore -----------------
window.treeInsert = ()=>{
    const value = getValue("valor-arvore");
    arvore.insert(value);
    output.innerText = `Valor ${value} inserido na \xe1rvore.`;
};
window.treeSearch = ()=>{
    const value = getValue("valor-arvore");
    output.innerText = arvore.search(value) ? `Valor ${value} encontrado.` : `Valor ${value} n\xe3o encontrado.`;
};
window.treeInOrder = ()=>{
    output.innerText = "Em ordem (inOrder): " + arvore.inOrder().join(", ");
};
window.treePreOrder = ()=>{
    output.innerText = "Pr\xe9-ordem: " + arvore.preOrder().join(", ");
};
window.treePostOrder = ()=>{
    output.innerText = "P\xf3s-ordem: " + arvore.postOrder().join(", ");
};
window.treeLevelOrder = ()=>{
    output.innerText = "Level-order (BFS): " + arvore.levelOrder().join(", ");
};
window.treeHeight = ()=>{
    output.innerText = `Altura da \xe1rvore: ${arvore.height()}`;
};
window.treeCount = ()=>{
    output.innerText = `Total de n\xf3s: ${arvore.count()}`;
};
window.treeAncestors = ()=>{
    const value = getValue("valor-consulta");
    const ancestors = arvore.ancestors(value);
    output.innerText = ancestors.length ? `Ancestrais de ${value}: ${ancestors.join(", ")}` : `Nenhum ancestral encontrado para ${value} ou n\xf3 n\xe3o existe.`;
};
window.treeDescendants = ()=>{
    const value = getValue("valor-consulta");
    const descendants = arvore.descendants(value);
    output.innerText = descendants.length ? `Descendentes de ${value}: ${descendants.join(", ")}` : `Nenhum descendente encontrado para ${value} ou n\xf3 n\xe3o existe.`;
};
window.treeLevel = ()=>{
    const value = getValue("valor-consulta");
    const level = arvore.getLevel(value);
    output.innerText = level >= 0 ? `N\xedvel do n\xf3 ${value}: ${level}` : `N\xf3 ${value} n\xe3o encontrado na \xe1rvore.`;
};
window.treeIsStrictlyBinary = ()=>{
    const result = arvore.isStrictlyBinary();
    output.innerText = `A \xe1rvore \xe9 estritamente bin\xe1ria? ${result ? "Sim" : "N\xe3o"}`;
};
window.treeIsFull = ()=>{
    const result = arvore.isFull();
    output.innerText = `A \xe1rvore \xe9 cheia? ${result ? "Sim" : "N\xe3o"}`;
};
// ----------------- Util -----------------
function getValue(id) {
    const input = document.getElementById(id);
    return parseInt(input.value);
}

},{"./DoublyLinkedList":"g3xil","./BinarySearchTree":"2QE51"}],"g3xil":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Node", ()=>Node);
parcelHelpers.export(exports, "DoublyLinkedList", ()=>DoublyLinkedList);
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }
    clear() {
        this.head = this.tail = null;
        this.size = 0;
    }
    insertAtStart(value) {
        const node = new Node(value);
        if (this.isEmpty()) this.head = this.tail = node;
        else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
    }
    insertAtEnd(value) {
        const node = new Node(value);
        if (this.isEmpty()) this.head = this.tail = node;
        else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }
    insertAt(value, index) {
        if (index < 0 || index > this.size) throw new Error("\xcdndice inv\xe1lido");
        if (index === 0) return this.insertAtStart(value);
        if (index === this.size) return this.insertAtEnd(value);
        const node = new Node(value);
        let current = this.head;
        for(let i = 0; i < index; i++)current = current.next;
        node.next = current;
        node.prev = current.prev;
        current.prev.next = node;
        current.prev = node;
        this.size++;
    }
    removeFromStart() {
        if (this.isEmpty()) return null;
        const value = this.head.value;
        this.head = this.head.next;
        if (this.head) this.head.prev = null;
        else this.tail = null;
        this.size--;
        return value;
    }
    removeFromEnd() {
        if (this.isEmpty()) return null;
        const value = this.tail.value;
        this.tail = this.tail.prev;
        if (this.tail) this.tail.next = null;
        else this.head = null;
        this.size--;
        return value;
    }
    removeFrom(index) {
        if (index < 0 || index >= this.size) throw new Error("\xcdndice inv\xe1lido");
        if (index === 0) return this.removeFromStart();
        if (index === this.size - 1) return this.removeFromEnd();
        let current = this.head;
        for(let i = 0; i < index; i++)current = current.next;
        current.prev.next = current.next;
        current.next.prev = current.prev;
        this.size--;
        return current.value;
    }
    toArrayForward() {
        const result = [];
        let current = this.head;
        while(current){
            result.push(current.value);
            current = current.next;
        }
        return result;
    }
    toArrayBackward() {
        const result = [];
        let current = this.tail;
        while(current){
            result.push(current.value);
            current = current.prev;
        }
        return result;
    }
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"2QE51":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Node", ()=>Node);
parcelHelpers.export(exports, "BinarySearchTree", ()=>BinarySearchTree);
class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}
class BinarySearchTree {
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) this.root = newNode;
        else this.insertNode(this.root, newNode);
    }
    insertNode(current, newNode) {
        if (newNode.value < current.value) {
            if (!current.left) current.left = newNode;
            else this.insertNode(current.left, newNode);
        } else if (!current.right) current.right = newNode;
        else this.insertNode(current.right, newNode);
    }
    search(value) {
        return this.searchNode(this.root, value);
    }
    searchNode(node, value) {
        if (!node) return false;
        if (value === node.value) return true;
        return value < node.value ? this.searchNode(node.left, value) : this.searchNode(node.right, value);
    }
    inOrder() {
        const result = [];
        this.inOrderTraverse(this.root, result);
        return result;
    }
    inOrderTraverse(node, result) {
        if (node) {
            this.inOrderTraverse(node.left, result);
            result.push(node.value);
            this.inOrderTraverse(node.right, result);
        }
    }
    preOrder() {
        const result = [];
        this.preOrderTraverse(this.root, result);
        return result;
    }
    preOrderTraverse(node, result) {
        if (node) {
            result.push(node.value);
            this.preOrderTraverse(node.left, result);
            this.preOrderTraverse(node.right, result);
        }
    }
    postOrder() {
        const result = [];
        this.postOrderTraverse(this.root, result);
        return result;
    }
    postOrderTraverse(node, result) {
        if (node) {
            this.postOrderTraverse(node.left, result);
            this.postOrderTraverse(node.right, result);
            result.push(node.value);
        }
    }
    levelOrder() {
        const result = [];
        const queue = [];
        if (this.root) queue.push(this.root);
        while(queue.length){
            const node = queue.shift();
            if (node) {
                result.push(node.value);
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
        }
        return result;
    }
    height(node = this.root) {
        if (!node) return -1;
        return 1 + Math.max(this.height(node.left), this.height(node.right));
    }
    size(node = this.root) {
        if (!node) return 0;
        return 1 + this.size(node.left) + this.size(node.right);
    }
    ancestors(value) {
        const result = [];
        this.findAncestors(this.root, value, result);
        return result;
    }
    findAncestors(node, value, result) {
        if (!node) return false;
        if (node.value === value) return true;
        if (this.findAncestors(node.left, value, result) || this.findAncestors(node.right, value, result)) {
            result.push(node.value);
            return true;
        }
        return false;
    }
    descendants(value) {
        const target = this.findNode(this.root, value);
        const result = [];
        if (target) this.collectDescendants(target, result);
        return result;
    }
    findNode(node, value) {
        if (!node) return null;
        if (node.value === value) return node;
        return value < node.value ? this.findNode(node.left, value) : this.findNode(node.right, value);
    }
    collectDescendants(node, result) {
        if (!node) return;
        if (node.left) {
            result.push(node.left.value);
            this.collectDescendants(node.left, result);
        }
        if (node.right) {
            result.push(node.right.value);
            this.collectDescendants(node.right, result);
        }
    }
    count() {
        const countNodes = (node)=>{
            if (node === null) return 0;
            return 1 + countNodes(node.left) + countNodes(node.right);
        };
        return countNodes(this.root);
    }
    getLevel(value) {
        return this.findLevel(this.root, value, 0);
    }
    findLevel(node, value, level) {
        if (!node) return -1;
        if (node.value === value) return level;
        const next = value < node.value ? node.left : node.right;
        return this.findLevel(next, value, level + 1);
    }
    isStrictlyBinary(node = this.root) {
        if (!node) return true;
        if (node.left && !node.right || !node.left && node.right) return false;
        return this.isStrictlyBinary(node.left) && this.isStrictlyBinary(node.right);
    }
    isFull(node = this.root) {
        const height = this.height();
        const size = this.size();
        return size === Math.pow(2, height + 1) - 1;
    }
    constructor(){
        this.root = null;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["elbaT","gNc1f"], "gNc1f", "parcelRequire6a95", {})

//# sourceMappingURL=data-structures-bst-dll.0f289648.js.map
