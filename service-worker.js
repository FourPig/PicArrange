"use strict";var precacheConfig=[["./index.html","1ce35d776facc74af09e4b7981f5d7fc"],["./static/css/main.bd03feb8.css","5394181cc452d9156145d0d5f4aaba17"],["./static/js/main.1f42cd12.js","e0caf7ae006a986632a777f275c0bee1"],["./static/media/baiyang.12420945.jpg","12420945fa52ed51ba2d37c07e43cbda"],["./static/media/chunv.ac258331.jpg","ac2583315c78bf1a4d64550bf0e1c342"],["./static/media/jinniu.4123784e.jpg","4123784ece14171fcf0f70cf2bca51da"],["./static/media/juxie.02d7abe9.jpg","02d7abe9871a4639244fc5723011674c"],["./static/media/moxie.fa27b450.jpg","fa27b450d297af719c3506600550832c"],["./static/media/sheshou.394ead69.jpg","394ead69181db71f50786c393bfdd3b1"],["./static/media/shizi.0f11380a.jpg","0f11380aa7e3ff5db8bf3179c2d32d65"],["./static/media/shuangyu.4d6a9bd0.jpg","4d6a9bd04344eab62aaf307f0f9cdc05"],["./static/media/shuangzi.8b5ebca2.jpg","8b5ebca202f78c1f414234a08e44a79e"],["./static/media/shuiping.d4fbba6b.jpg","d4fbba6b0dff9308ca387d311b9cb357"],["./static/media/tianpin.9accfa3d.jpg","9accfa3d460633bada685b704042aa05"],["./static/media/tianxie.e2fe730c.jpg","e2fe730ce9dc8c9c91ec136a3285acd4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="./index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});