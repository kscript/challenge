(function(e){function t(t){for(var r,c,u=t[0],i=t[1],s=t[2],f=0,l=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&l.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(t);while(l.length)l.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},o={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0c91ed1f":"9d066e4c","chunk-24618a4b":"ec6a1251","chunk-42c8bb8e":"106289c1","chunk-652b5b1f":"ce7f220e","chunk-0bce496d":"4230355c","chunk-39f11bdc":"4916f8d2","chunk-68fef240":"9136be45","chunk-ccc10d36":"b3e51940","chunk-ed882bea":"5a1d59e5"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-0c91ed1f":1,"chunk-24618a4b":1,"chunk-42c8bb8e":1,"chunk-652b5b1f":1,"chunk-0bce496d":1,"chunk-39f11bdc":1,"chunk-68fef240":1,"chunk-ccc10d36":1,"chunk-ed882bea":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0c91ed1f":"e1f4efb5","chunk-24618a4b":"dc0c3005","chunk-42c8bb8e":"8fb01a58","chunk-652b5b1f":"37272ee3","chunk-0bce496d":"9b854faf","chunk-39f11bdc":"dacc7617","chunk-68fef240":"ad79510f","chunk-ccc10d36":"125d62f8","chunk-ed882bea":"26e62953"}[e]+".css",o=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=a[u],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===o))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],f=s.getAttribute("data-href");if(f===r||f===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete c[e],h.parentNode.removeChild(h),n(a)},h.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){c[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=a);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var l=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(h);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",l.name="ChunkLoadError",l.type=r,l.request=c,n[1](l)}o[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/challenge/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var h=f;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0feb":function(e,t){e.exports=unorm},3786:function(e,t){e.exports=Prism},"3d5e":function(e,t){e.exports=Valine},5880:function(e,t){e.exports=Vuex},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),c=n.n(r);c.a},"5f72":function(e,t){e.exports=ELEMENT},6389:function(e,t){e.exports=VueRouter},7838:function(e,t){e.exports=jsyaml},"8bbf":function(e,t){e.exports=Vue},"9c0c":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("8bbf"),c=n.n(r),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u=(n("5c0b"),n("2877")),i={},s=Object(u["a"])(i,o,a,!1,null,null,null),f=s.exports,l=n("6389"),h=n.n(l);c.a.use(h.a);var d=new h.a({mode:"history",base:"/challenge/",routes:[{path:"/",name:"index",component:function(e){return n.e("chunk-0c91ed1f").then(function(){return e(n("1e4b"))}.bind(null,n)).catch(n.oe)},children:[{path:"/question",name:"question",component:function(e){return n.e("chunk-42c8bb8e").then(function(){return e(n("070e"))}.bind(null,n)).catch(n.oe)},children:[{path:"/question/:category",name:"question_category",component:function(e){return n.e("chunk-24618a4b").then(function(){return e(n("707b"))}.bind(null,n)).catch(n.oe)},children:[{path:"/question/:category/:title",name:"question_category_content",component:function(e){return Promise.all([n.e("chunk-652b5b1f"),n.e("chunk-39f11bdc")]).then(function(){return e(n("356a"))}.bind(null,n)).catch(n.oe)}}]}]},{path:"/article",name:"article",component:function(e){return n.e("chunk-ed882bea").then(function(){return e(n("230c"))}.bind(null,n)).catch(n.oe)},children:[{path:"/article/:category",name:"article_category",component:function(e){return n.e("chunk-68fef240").then(function(){return e(n("645d"))}.bind(null,n)).catch(n.oe)},children:[{path:"/article/:category/:title",name:"article_category_content",component:function(e){return Promise.all([n.e("chunk-652b5b1f"),n.e("chunk-0bce496d")]).then(function(){return e(n("cd6d"))}.bind(null,n)).catch(n.oe)}}]}]},{path:"/knowledge",name:"knowledge",component:function(e){return n.e("chunk-ccc10d36").then(function(){return e(n("7a26"))}.bind(null,n)).catch(n.oe)},children:[]}]}]}),p=n("d4ec"),m=n("5880"),b=function e(){Object(p["a"])(this,e),this.mdFiles={},this.categorys={question:[],article:[],knowledge:[]},this.timeline={question:[],article:[],knowledge:[]},this.category={question:{},article:{},knowledge:{}}},g=(n("99af"),n("a15b"),n("b0c0"),n("d3b7"),n("ac1f"),n("5319"),n("cebe")),y=n.n(g),v=n("4328"),k=n("5530"),w=n("e80c"),j=n.n(w),O=j.a,P=(Object(k["a"])({},O),y.a.create({baseURL:O.staticPath,timeout:15e3,transformRequest:[function(e){return e instanceof FormData?e:v["stringify"](e)}]}));P.interceptors.request.use((function(e){return e.url&&(e.url=e.url.replace(/^(\\|\/)/,"")),e}),(function(e){return Promise.reject(e)})),P.interceptors.response.use((function(e){return Promise.resolve(e)}),(function(e){return Promise.reject(e)}));var x=P,_=n("df7c"),q=n.n(_),E=O.store.cache,F=function(e){return E instanceof Object?!E.hasOwnProperty(e)||!!O.store[e]:!!E},S={mdFiles:function(e,t){var n=e.state,r=e.commit,c=t.path,o=t.refresh,a=void 0!==o&&o;return c=q.a.join(c),F("mdFiles")&&n.mdFiles.hasOwnProperty(c)&&!a?n.mdFiles[c]:x({url:c,method:"get"}).then((function(e){var t=e.data;return r("mdFiles",{path:c,data:t}),t}))},category:function(e,t){var n=e.state,r=e.commit,c=t.name,o=void 0===c?"question":c,a=t.category,u=n.category[o];return F("category")&&u&&u.hasOwnProperty(a)?u[a]:x({url:"/".concat(o,"/").concat(a,".json"),method:"get"}).then((function(e){var t=e.data;return r("category",{name:o,category:a,data:t}),t}))},categorys:function(e,t){var n=e.state,r=e.commit,c=t.name,o=void 0===c?"question":c,a=n.categorys[o];return F("categorys")&&a&&a.length?a:x({url:"/".concat(o,"/categorys.json"),method:"get"}).then((function(e){var t=e.data;return r("categorys",{name:o,data:t}),t}))},timeline:function(e,t){var n=e.state,r=e.commit,c=t.name,o=void 0===c?"question":c,a=n.timeline[o];return F("timeline")&&a&&a.length?a:x({url:"/".concat(o,"/list.json"),method:"get"}).then((function(e){var t=e.data;return r("timeline",{name:o,data:t}),t}))}},T=S,C=Object.assign({},T),L=C,A={},N={mdFiles:function(e,t){var n=t.path,r=t.data;e.mdFiles[q.a.join(n)]=r},category:function(e,t){var n=t.name,r=t.category,c=t.data;e.category.hasOwnProperty(n)&&(e.category[n][r]=c)},categorys:function(e,t){var n=t.name,r=t.data;e.categorys.hasOwnProperty(n)&&(e.categorys[n]=r)},timeline:function(e,t){var n=t.name,r=t.data;e.timeline.hasOwnProperty(n)&&(e.timeline[n]=r)}},M=N;c.a.use(m);var V=function e(){Object(p["a"])(this,e),this.state=new b,this.getters=A,this.mutations=M,this.actions=L},B=new m["Store"](new V),D=n("5f72"),R=n.n(D),$=n("2caf"),J=n("262e"),U=n("9ab4"),H=n("60a3"),I=function(e){Object(J["a"])(n,e);var t=Object($["a"])(n);function n(){return Object(p["a"])(this,n),t.apply(this,arguments)}return n}(H["c"]);I=Object(U["a"])([Object(H["a"])({})],I);var K=new I,z={install:function(){H["c"].prototype.$bus=K}};n("0fae");c.a.config.productionTip=!1,c.a.use(z),c.a.use(R.a),new c.a({router:d,store:B,render:function(e){return e(f)}}).$mount("#app")},cebe:function(e,t){e.exports=axios},e80c:function(e,t,n){(function(t){n("a15b");var r=n("ded3"),c=n("df7c"),o="/challenge-docs/",a="dist",u={staticPath:o,mockPath:c.join(t.cwd(),"..",o,a)},i={cache:!0},s=r({},u,{store:i});e.exports=s}).call(this,n("4362"))}});
//# sourceMappingURL=app.4c746d77.js.map