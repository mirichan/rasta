(()=>{"use strict";var e,t,r,n,o,a,i,s,c,u={451:(e,t,r)=>{var n=self;r.e(984).then(r.bind(r,984)).then((function(e){e.init(),n.addEventListener("message",(function(t){if("test"===t.data.type){console.log("Generating image data for...",t.data);var r=new ImageData(new Uint8ClampedArray(e.get_buffer(t.data.width,t.data.height,t.data.row0,t.data.rows).buffer),t.data.width,t.data.rows);n.postMessage({type:"image",width:t.data.width,height:t.data.height,row0:t.data.row0,rows:t.data.rows,data:r})}})),n.postMessage({type:"ready"})}))}},d={};function f(e){var t=d[e];if(void 0!==t)return t.exports;var r=d[e]={id:e,loaded:!1,exports:{}};return u[e](r,r.exports,f),r.loaded=!0,r.exports}f.m=u,f.c=d,f.d=(e,t)=>{for(var r in t)f.o(t,r)&&!f.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((t,r)=>(f.f[r](e,t),t)),[])),f.u=e=>e+".app.worker.js",f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;f.g.importScripts&&(e=f.g.location+"");var t=f.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),f.p=e})(),(()=>{var e={94:1};f.f.i=(t,r)=>{e[t]||importScripts(f.p+f.u(t))};var t=self.webpackChunklucifer=self.webpackChunklucifer||[],r=t.push.bind(t);t.push=t=>{var[n,o,a]=t;for(var i in o)f.o(o,i)&&(f.m[i]=o[i]);for(a&&a(f);n.length;)e[n.pop()]=1;r(t)}})(),i={},s={217:function(){return{"./index_bg.js":{__wbg_new_693216e109162396:function(){return void 0===e&&(e=f.c[41].exports),e.Ih()},__wbg_stack_0ddaca5d1abfb52f:function(e,r){return void 0===t&&(t=f.c[41].exports),t.yq(e,r)},__wbg_error_09919627ac0992f5:function(e,t){return void 0===r&&(r=f.c[41].exports),r.gk(e,t)},__wbindgen_object_drop_ref:function(e){return void 0===n&&(n=f.c[41].exports),n.ug(e)},__wbg_random_a582babfa4489c72:function(){return void 0===o&&(o=f.c[41].exports),o.KV()},__wbindgen_throw:function(e,t){return void 0===a&&(a=f.c[41].exports),a.Or(e,t)}}}}},c={984:[217]},f.w={},f.f.wasm=function(e,t){(c[e]||[]).forEach((function(r,n){var o=i[r];if(o)t.push(o);else{var a,c=s[r](),u=fetch(f.p+""+{984:{217:"a9adba03a086cfe2a3d2"}}[e][r]+".module.wasm");a=c&&"function"==typeof c.then&&"function"==typeof WebAssembly.compileStreaming?Promise.all([WebAssembly.compileStreaming(u),c]).then((function(e){return WebAssembly.instantiate(e[0],e[1])})):"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(u,c):u.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,c)})),t.push(i[r]=a.then((function(e){return f.w[r]=(e.instance||e).exports})))}}))},f(451)})();