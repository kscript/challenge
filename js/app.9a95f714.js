(function(e){function t(t){for(var r,a,i=t[0],u=t[1],s=t[2],f=0,l=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&l.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(l.length)l.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-0928ea0e":"26e19d4f","chunk-1023afd0":"6c10b282","chunk-2adaf8b5":"1fb4d6ac","chunk-3e05f1e4":"7192da13","chunk-1e8ab845":"b3c00b42","chunk-2c540134":"7fb95a7c","chunk-a454d96c":"35617a00","chunk-b6f32638":"bc4f71a5","chunk-c533671c":"a5b48c6f"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-0928ea0e":1,"chunk-1023afd0":1,"chunk-2adaf8b5":1,"chunk-3e05f1e4":1,"chunk-1e8ab845":1,"chunk-2c540134":1,"chunk-a454d96c":1,"chunk-b6f32638":1,"chunk-c533671c":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0928ea0e":"a62b3ea1","chunk-1023afd0":"7c20d65f","chunk-2adaf8b5":"a08ddc36","chunk-3e05f1e4":"6c6405ac","chunk-1e8ab845":"f4b1dd65","chunk-2c540134":"c228f4d1","chunk-a454d96c":"6771ac0d","chunk-b6f32638":"9debacb6","chunk-c533671c":"d4e3c535"}[e]+".css",c=u.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===c))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],f=s.getAttribute("data-href");if(f===r||f===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],d.parentNode.removeChild(d),n(o)},d.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=i(e);var l=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}c[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/challenge/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=f;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0feb":function(e,t){e.exports=unorm},"2de2":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("5530"),a=n("e80c"),c=n.n(a),o=c.a;Object(r["a"])({},o)},3786:function(e,t){e.exports=Prism},"3d5e":function(e,t){e.exports=Valine},5880:function(e,t){e.exports=Vuex},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"5f72":function(e,t){e.exports=ELEMENT},6389:function(e,t){e.exports=VueRouter},7838:function(e,t){e.exports=jsyaml},"8bbf":function(e,t){e.exports=Vue},"9c0c":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("8bbf"),a=n.n(r),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=(n("5c0b"),n("2877")),u={},s=Object(i["a"])(u,c,o,!1,null,null,null),f=s.exports,l=n("6389"),d=n.n(l);a.a.use(d.a);var h=new d.a({mode:"history",base:"/challenge/",routes:[{path:"/",name:"index",component:function(e){return n.e("chunk-2adaf8b5").then(function(){return e(n("1e4b"))}.bind(null,n)).catch(n.oe)},children:[{path:"/question",name:"question",component:function(e){return n.e("chunk-1023afd0").then(function(){return e(n("070e"))}.bind(null,n)).catch(n.oe)},children:[{path:"/question/:category",name:"question_category",component:function(e){return n.e("chunk-c533671c").then(function(){return e(n("707b"))}.bind(null,n)).catch(n.oe)},children:[{path:"/question/:category/:title",name:"question_category_content",component:function(e){return Promise.all([n.e("chunk-3e05f1e4"),n.e("chunk-1e8ab845")]).then(function(){return e(n("356a"))}.bind(null,n)).catch(n.oe)}}]}]},{path:"/article",name:"article",component:function(e){return n.e("chunk-b6f32638").then(function(){return e(n("230c"))}.bind(null,n)).catch(n.oe)},children:[{path:"/article/:category",name:"article_category",component:function(e){return n.e("chunk-0928ea0e").then(function(){return e(n("645d"))}.bind(null,n)).catch(n.oe)},children:[{path:"/article/:category/:title",name:"article_category_content",component:function(e){return Promise.all([n.e("chunk-3e05f1e4"),n.e("chunk-2c540134")]).then(function(){return e(n("cd6d"))}.bind(null,n)).catch(n.oe)}}]}]},{path:"/knowledge",name:"knowledge",component:function(e){return n.e("chunk-a454d96c").then(function(){return e(n("7a26"))}.bind(null,n)).catch(n.oe)},children:[]}]}]}),p=n("d4ec"),m=n("5880"),g=function e(){Object(p["a"])(this,e),this.info=null,this.toggleLinks={},this.mdFiles={},this.categorys={question:[],article:[],knowledge:[]},this.timeline={question:{},article:{},knowledge:{}},this.category={question:{},article:{},knowledge:{}}},b=(n("99af"),n("4160"),n("a15b"),n("b0c0"),n("159b"),n("96cf"),n("1da1")),k=(n("d3b7"),n("ac1f"),n("5319"),n("cebe")),v=n.n(k),y=n("4328"),w=n("2de2"),x=n("5f72"),j=n.n(x),O=v.a.create({baseURL:w["a"].staticPath,timeout:15e3,transformRequest:[function(e){return e instanceof FormData?e:y["stringify"](e)}]}),P=null,_=function(){return P=x["Loading"].service({lock:!0,text:"加载中..",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.1)"})},q=function(){P&&P.close()};O.interceptors.request.use((function(e){return _(),e.url&&(e.url=e.url.replace(/^(\\|\/)/,"")),e}),(function(e){return q(),Promise.reject(e)})),O.interceptors.response.use((function(e){return q(),Promise.resolve(e)}),(function(e){return q(),Promise.reject(e)}));var R=O,E=n("df7c"),L=n.n(E),F=w["a"].store.cache,S=function(e){return F instanceof Object?!F.hasOwnProperty(e)||!!w["a"].store[e]:!!F},T={info:function(e){var t=arguments;return Object(b["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.state,a=e.commit,c=t.length>1&&void 0!==t[1]&&t[1],r.info||c){n.next=8;break}return n.next=5,R({url:"/info.json",method:"get"});case 5:o=n.sent,i=o.data.data,a("info",i);case 8:case"end":return n.stop()}}),n)})))()},mdFiles:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o,i,u,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.state,a=e.commit,c=t.path,o=t.refresh,i=void 0!==o&&o,c=L.a.join(c),!S("mdFiles")||!r.mdFiles.hasOwnProperty(c)||i){n.next=5;break}return n.abrupt("return",r.mdFiles[c]);case 5:return n.next=7,R({url:c,method:"get"});case 7:return u=n.sent,s=u.data,a("mdFiles",{path:c,data:s}),n.abrupt("return",s);case 11:case"end":return n.stop()}}),n)})))()},categorys:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o,i,u,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.state,a=e.commit,c=t.name,o=void 0===c?"question":c,i=r.categorys[o],!(S("categorys")&&i&&i.length)){n.next=5;break}return n.abrupt("return",i);case 5:return n.next=7,R({url:"/".concat(o,"/categorys.json"),method:"get"});case 7:return u=n.sent,s=u.data,a("categorys",{name:o,data:s}),n.abrupt("return",s);case 11:case"end":return n.stop()}}),n)})))()},category:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o,i,u,s,f,l,d,h;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.state,a=e.commit,c=t.name,o=void 0===c?"question":c,i=t.category,u=t.pageno,s=void 0===u?1:u,f=r.category[o]||{},l=f[i]||{},!S("category")||!l[s]){n.next=6;break}return n.abrupt("return",l[s]);case 6:return n.next=8,R({url:"/".concat(o,"/").concat(i,"/category").concat(s?"_"+s:"",".json"),method:"get"});case 8:return d=n.sent,h=d.data,a("category",{name:o,category:i,data:h}),n.abrupt("return",h);case 12:case"end":return n.stop()}}),n)})))()},timeline:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o,i,u,s,f,l,d;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.state,a=e.commit,c=t.name,o=void 0===c?"question":c,i=t.pageno,u=void 0===i?1:i,s={},f=r.timeline[o],!(S("timeline")&&f&&f.data)){n.next=6;break}return n.abrupt("return",f);case 6:return n.prev=6,n.next=9,R({url:"/".concat(o,"/timeline").concat(u?"_"+u:"",".json"),method:"get"});case 9:return l=n.sent,d=l.data,d.data.forEach((function(e,t){s[e.path]=(d.pageno-1)*d.size+t})),a("timeline",{name:o,data:d,pageno:u}),a("toggleLinks",{name:o,data:d,pageno:u,links:s}),n.abrupt("return",d);case 17:return n.prev=17,n.t0=n["catch"](6),n.abrupt("return",{err:n.t0,data:[]});case 20:case"end":return n.stop()}}),n,null,[[6,17]])})))()},toggleLinks:function(e,t){return Object(b["a"])(regeneratorRuntime.mark((function n(){var r,a,c,o,i,u,s,f,l,d,h,p,m,g;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.state,a=e.dispatch,c=t.name,o=void 0===c?"question":c,i=t.path,u=void 0===i?"":i,s=r.toggleLinks[o]||{},f=s[u],l=r.info,d=l.page.timeline||l.page.size,h=r.timeline[o],p=1+~~(f/d),m=h[p].data||{},g=[m[f%d-1]||{},m[f%d+1]||{}],f%d!==0){n.next=17;break}if(!(f>=d)){n.next=15;break}return n.next=14,a("timeline",{name:o,pageno:p-1});case 14:g[0]=(h[p-1].data||{})[d-1]||{};case 15:n.next=21;break;case 17:if(f%d!==d-1){n.next=21;break}return n.next=20,a("timeline",{name:o,pageno:p+1});case 20:g[1]=((h[p+1]||{}).data||{})[0]||{};case 21:return n.abrupt("return",g);case 22:case"end":return n.stop()}}),n)})))()}},C=T,A=Object.assign({},C),N=A,M={},V={mdFiles:function(e,t){var n=t.path,r=t.data;e.mdFiles[L.a.join(n)]=r},category:function(e,t){var n=t.name,r=t.category,a=t.data,c=a.pageno,o=e.category[n]=e.category[n]||[],i=o[r]=o[r]||{};i[c]=a},categorys:function(e,t){var n=t.name,r=t.data;e.categorys.hasOwnProperty(n)&&(e.categorys[n]=r)},toggleLinks:function(e,t){var n=t.name,r=t.links;t.pageno;e.toggleLinks[n]=r},timeline:function(e,t){var n=t.name,r=t.data,a=r.pageno;e.timeline[n]=e.timeline[n]||[],e.timeline[n][a]=r},info:function(e,t){e.info=t}},B=V;a.a.use(m);var D=function e(){Object(p["a"])(this,e),this.state=new g,this.getters=M,this.mutations=B,this.actions=N},$=new m["Store"](new D),z=n("262e"),J=n("2caf"),U=n("9ab4"),H=n("60a3"),I=function(e){Object(z["a"])(n,e);var t=Object(J["a"])(n);function n(){return Object(p["a"])(this,n),t.apply(this,arguments)}return n}(H["c"]);I=Object(U["a"])([Object(H["a"])({})],I);var K=new I,G={install:function(){H["c"].prototype.$bus=K}};n("0fae");a.a.config.productionTip=!1,a.a.use(G),a.a.use(j.a),$.dispatch("info").then((function(){new a.a({router:h,store:$,render:function(e){return e(f)}}).$mount("#app")}))},cebe:function(e,t){e.exports=axios},e80c:function(e,t,n){(function(t){n("a15b");var r=n("ded3"),a=n("df7c"),c="/challenge-docs/",o="dist",i={host:"https://github.com",user:"kscript",repository:"challenge-docs",branch:"master",dir:"public"},u={repository:"challenge",staticPath:c,mockPath:a.join(t.cwd(),"..",c,o),remote:i,remotePath:[i.host,i.user,i.repository,"edit",i.branch,i.dir].join("/")},s={cache:!0},f=r({},u,{store:s});e.exports=f}).call(this,n("4362"))}});
//# sourceMappingURL=app.9a95f714.js.map