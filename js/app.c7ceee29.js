(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],f=0,l=[];f<u.length;f++)o=u[f],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&l.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(t);while(l.length)l.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==c[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-095d741e":"a450f1e0","chunk-0b9913b0":"7e39d89e","chunk-1e5f5b8d":"8f15b497","chunk-c24aed34":"6503b477","chunk-27040718":"62882817","chunk-2d0c1ccf":"f3017756","chunk-df40c048":"056baff0"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-095d741e":1,"chunk-0b9913b0":1,"chunk-1e5f5b8d":1,"chunk-c24aed34":1,"chunk-27040718":1,"chunk-df40c048":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-095d741e":"4f9366cb","chunk-0b9913b0":"fca4224e","chunk-1e5f5b8d":"1cb43e16","chunk-c24aed34":"771a7e54","chunk-27040718":"dbdc2a86","chunk-2d0c1ccf":"31d6cfe0","chunk-df40c048":"964af10b"}[e]+".css",c=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=a[u],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===c))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],f=s.getAttribute("data-href");if(f===r||f===c)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],h.parentNode.removeChild(h),n(a)},h.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=a);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var l=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(h);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}c[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/challenge/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var h=f;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0feb":function(e,t){e.exports=unorm},3786:function(e,t){e.exports=Prism},5880:function(e,t){e.exports=Vuex},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"5f72":function(e,t){e.exports=ELEMENT},6389:function(e,t){e.exports=VueRouter},7838:function(e,t){e.exports=jsyaml},"8bbf":function(e,t){e.exports=Vue},"9c0c":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("8bbf"),o=n.n(r),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u=(n("5c0b"),n("2877")),i={},s=Object(u["a"])(i,c,a,!1,null,null,null),f=s.exports,l=n("6389"),h=n.n(l);o.a.use(h.a);var d=new h.a({mode:"history",base:"/challenge/",routes:[{path:"/",name:"index",component:function(e){return n.e("chunk-095d741e").then(function(){return e(n("1e4b"))}.bind(null,n)).catch(n.oe)}},{path:"/question",name:"question",component:function(e){return n.e("chunk-0b9913b0").then(function(){return e(n("070e"))}.bind(null,n)).catch(n.oe)},children:[{path:"/question/:category",name:"question_category",component:function(e){return Promise.all([n.e("chunk-c24aed34"),n.e("chunk-27040718")]).then(function(){return e(n("707b"))}.bind(null,n)).catch(n.oe)}},{path:"/question/:category/:title",name:"question_category_title",component:function(e){return Promise.all([n.e("chunk-c24aed34"),n.e("chunk-2d0c1ccf")]).then(function(){return e(n("481f"))}.bind(null,n)).catch(n.oe)}}]},{path:"/article",name:"article",component:function(e){return n.e("chunk-df40c048").then(function(){return e(n("230c"))}.bind(null,n)).catch(n.oe)},children:[]},{path:"/knowledge",name:"knowledge",component:function(e){return n.e("chunk-1e5f5b8d").then(function(){return e(n("7a26"))}.bind(null,n)).catch(n.oe)},children:[]}]}),p=n("d4ec"),b=n("5880"),m=function e(){Object(p["a"])(this,e),this.question={},this.categorys=[],this.categoryMap={}},g=(n("fb6a"),n("3835")),y=(n("d3b7"),n("ac1f"),n("5319"),n("cebe")),v=n.n(y),k=n("4328"),j=n("5530"),w=n("e80c"),O=n.n(w),P=O.a,q=(Object(j["a"])({},P),v.a.create({baseURL:P.staticPath,timeout:15e3,transformRequest:[function(e){return e instanceof FormData?e:k["stringify"](e)}]}));q.interceptors.request.use((function(e){return e.url&&(e.url=e.url.replace(/^(\\|\/)/,"")),e}),(function(e){return Promise.reject(e)})),q.interceptors.response.use((function(e){return Promise.resolve(e)}),(function(e){return Promise.reject(e)}));var x=q,_=P.store.cache,E=function(e){return _ instanceof Object?!_.hasOwnProperty(e)||!!P.store[e]:!!_},M={question:function(e,t){var n=e.state,r=e.commit,o=Object(g["a"])(t,2),c=o[0],a=c.title,u=void 0===a?"":a,i=c.path,s=void 0===i?"":i,f=o[1],l=void 0!==f&&f;return/\.md$/.test(u)?(u,u=u.slice(0,-3)):"".concat(u,".md"),E("question")&&n.question.hasOwnProperty(u)&&!l?n.question[u]:x({url:s,method:"get"}).then((function(e){var t=e.data;return r("question",{title:u,data:t}),t}))},category:function(e,t){var n=e.state,r=e.commit;return E("category")&&n.categoryMap.hasOwnProperty(t)?n.categoryMap[t]:x({url:"/question/".concat(t,".json"),method:"get"}).then((function(e){var n=e.data;return r("categoryMap",{category:t,data:n}),n}))},categorys:function(e){var t=e.state,n=e.commit;return E("categorys")&&t.categorys.length?t.categorys:x({url:"/question/categorys.json",method:"get"}).then((function(e){var t=e.data;return n("categorys",t),t}))}},S=M,T=Object.assign({},S),C=T,L={},A={question:function(e,t){var n=t.title,r=t.data;e.question[n]=r},categoryMap:function(e,t){var n=t.category,r=t.data;e.categoryMap[n]=r},categorys:function(e,t){e.categorys=t}},N=A;o.a.use(b);var $=function e(){Object(p["a"])(this,e),this.state=new m,this.getters=L,this.mutations=N,this.actions=C},B=new b["Store"](new $),D=n("5f72"),R=n.n(D),V=n("2caf"),F=n("262e"),J=n("9ab4"),U=n("60a3"),H=function(e){Object(F["a"])(n,e);var t=Object(V["a"])(n);function n(){return Object(p["a"])(this,n),t.apply(this,arguments)}return n}(U["c"]);H=Object(J["a"])([Object(U["a"])({})],H);var I=new H,K={install:function(){U["c"].prototype.$bus=I}};n("0fae");o.a.config.productionTip=!1,o.a.use(K),o.a.use(R.a),new o.a({router:d,store:B,render:function(e){return e(f)}}).$mount("#app")},cebe:function(e,t){e.exports=axios},e80c:function(e,t,n){(function(t){n("a15b");var r=n("ded3"),o=n("df7c"),c="/challenge-docs/",a="dist",u={staticPath:c,mockPath:o.join(t.cwd(),"..",c,a)},i={cache:!0},s=r({},u,{store:i});e.exports=s}).call(this,n("4362"))}});
//# sourceMappingURL=app.c7ceee29.js.map