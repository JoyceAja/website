"use strict";var precacheConfig=[["/website/index.html","bfd2b1d15ad942cdb1072a70718a93ec"],["/website/static/css/main.1191a2fa.css","238585442775e189de16f28a747ffa8e"],["/website/static/js/main.e9bcd663.js","70731e20621320d466b83ef94ece5539"],["/website/static/media/Duro.68c78126.png","68c78126cf7ab0183dd95ada9184b6a0"],["/website/static/media/Moon2.0-Bold.e1c9d28f.otf","e1c9d28f01f0370f8ec7b1fd16009f21"],["/website/static/media/Moon2.0-Light.14e8e211.otf","14e8e211ca6c8cd2bc46f566ab2a3c67"],["/website/static/media/Moon2.0-Regular.beaab266.otf","beaab26664137dc78edd6a735b31b40d"],["/website/static/media/PoiretOne-Regular.3b585e0e.ttf","3b585e0e2f91bef9ab6ea74f7e302f20"],["/website/static/media/Ycon.78c14a7e.png","78c14a7e6682d3cdc917cefb1bea86ed"],["/website/static/media/background.5d486177.jpg","5d48617701e99ef55c92edb5e02022bb"],["/website/static/media/css.c49e7d14.png","c49e7d145a68e86617ebb6586ae27525"],["/website/static/media/d3.036ef036.png","036ef03610695e2063e0d5139143b02e"],["/website/static/media/football.c647059f.png","c647059fdac12a650c2bf6739bcb096b"],["/website/static/media/gameon.11e3e03c.png","11e3e03cce7e178210a71667839cd493"],["/website/static/media/html.b95a32ac.png","b95a32ac3ea90041c4e29d5c47b571d9"],["/website/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/website/static/media/node.5b47d4f8.png","5b47d4f8d197911857e8e77cb4dd1569"],["/website/static/media/postgres.50156c71.png","50156c71fb2cf47d5cfe134231975922"],["/website/static/media/react.580ffd26.png","580ffd26ccaa16481ed87c1829c74943"],["/website/static/media/redux.51c63549.png","51c6354929949e7bc3d389184df61f44"],["/website/static/media/thanks2.aaf4098c.jpg","aaf4098cb726872c824642ff00985815"],["/website/static/media/youth-con.f0ba8664.png","f0ba8664a8b67c854a348d76d073358c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/website/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});