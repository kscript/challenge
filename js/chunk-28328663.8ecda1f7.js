(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28328663"],{"070e":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{class:"view-"+t.$route.name},[t.$route.name===t.name?n("el-main",[n("el-row",t._l(t.categorys,(function(e,r){return n("el-col",{key:r,attrs:{span:4}},[n("router-link",{attrs:{to:{path:"/question/"+e[0]+"/"}}},[n("section",[n("h3",{attrs:{"data-content":e[0]}},[t._v(t._s(e[0]))]),n("p",[t._v(t._s(e[1]||""))])])])],1)})),1)],1):n("router-view")],1)},i=[];n("b0c0"),n("96cf"),n("d3b7"),n("e6cf");function o(t,e,n,r,i,o,a){try{var c=t[o](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,i)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function c(t){o(a,r,i,c,u,"next",t)}function u(t){o(a,r,i,c,u,"throw",t)}c(void 0)}))}}var c=n("d4ec"),u=n("bee2"),s=n("2caf"),l=n("262e"),h=n("9ab4"),f=n("60a3"),p=n("71c2"),v=n("076e"),d=function(t){Object(l["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;return Object(c["a"])(this,n),t=e.apply(this,arguments),t.name="question",t.categorys=[],t}return Object(u["a"])(n,[{key:"getCategorys",value:function(){var t=a(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("categorys");case 2:this.categorys=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"mounted",value:function(){this.getCategorys()}}]),n}(f["c"]);d=Object(h["a"])([Object(f["a"])({components:{"v-header":p["a"],"v-footer":v["a"]}})],d);var g=d,y=g,m=(n("a753"),n("2877")),b=Object(m["a"])(y,r,i,!1,null,"581e0cac",null);e["default"]=b.exports},"076e":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-footer",{staticClass:"text-center"},[t._v(" ©kscript 2020- ")])},i=[],o=n("d4ec"),a=n("2caf"),c=n("262e"),u=n("9ab4"),s=n("60a3"),l=function(t){Object(c["a"])(n,t);var e=Object(a["a"])(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return n}(s["c"]);l=Object(u["a"])([Object(s["a"])({})],l);var h=l,f=h,p=(n("33df"),n("2877")),v=Object(p["a"])(f,r,i,!1,null,"4646555d",null);e["a"]=v.exports},1276:function(t,e,n){"use strict";var r=n("d784"),i=n("44e7"),o=n("825a"),a=n("1d80"),c=n("4840"),u=n("8aa5"),s=n("50c4"),l=n("14c3"),h=n("9263"),f=n("d039"),p=[].push,v=Math.min,d=4294967295,g=!f((function(){return!RegExp(d,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(a(this)),o=void 0===n?d:n>>>0;if(0===o)return[];if(void 0===t)return[r];if(!i(t))return e.call(r,t,o);var c,u,s,l=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,g=new RegExp(t.source,f+"g");while(c=h.call(g,r)){if(u=g.lastIndex,u>v&&(l.push(r.slice(v,c.index)),c.length>1&&c.index<r.length&&p.apply(l,c.slice(1)),s=c[0].length,v=u,l.length>=o))break;g.lastIndex===c.index&&g.lastIndex++}return v===r.length?!s&&g.test("")||l.push(""):l.push(r.slice(v)),l.length>o?l.slice(0,o):l}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=a(this),o=void 0==e?void 0:e[t];return void 0!==o?o.call(e,i,n):r.call(String(i),e,n)},function(t,i){var a=n(r,t,this,i,r!==e);if(a.done)return a.value;var h=o(t),f=String(this),p=c(h,RegExp),y=h.unicode,m=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(g?"y":"g"),b=new p(g?h:"^(?:"+h.source+")",m),w=void 0===i?d:i>>>0;if(0===w)return[];if(0===f.length)return null===l(b,f)?[f]:[];var x=0,O=0,j=[];while(O<f.length){b.lastIndex=g?O:0;var _,E=l(b,g?f:f.slice(O));if(null===E||(_=v(s(b.lastIndex+(g?0:O)),f.length))===x)O=u(f,O,y);else{if(j.push(f.slice(x,O)),j.length===w)return j;for(var k=1;k<=E.length-1;k++)if(j.push(E[k]),j.length===w)return j;O=x=_}}return j.push(f.slice(x)),j}]}),!g)},"33df":function(t,e,n){"use strict";var r=n("750f"),i=n.n(r);i.a},"44e7":function(t,e,n){var r=n("861d"),i=n("c6b6"),o=n("b622"),a=o("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==i(t))}},"6a70":function(t,e,n){},"71c2":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-header",[r("el-row",[r("el-col",{staticClass:"text-center",attrs:{span:5,offset:1}},[r("router-link",{attrs:{to:{name:"index"}}},[r("img",{staticClass:"logo",attrs:{src:n("cf05"),alt:""}}),r("span",{staticClass:"title"},[t._v("前端知识技能考查")])])],1),r("el-col",{attrs:{span:12}},[r("el-menu",{attrs:{"default-active":this.activeMenu,mode:"horizontal","text-color":"#eee","active-text-color":"#fff","background-color":"#333333"},on:{select:t.handleSelect}},t._l(t.menu,(function(e){return r("el-menu-item",{key:e.name,attrs:{index:e.name}},[t._v(t._s(e.label))])})),1)],1),r("el-col",{staticClass:"text-right",attrs:{span:5}},[r("a",{attrs:{href:"/"}},[r("i",{staticClass:"iconfont icon-github"})])])],1)],1)},i=[],o=(n("4160"),n("b0c0"),n("ac1f"),n("1276"),n("159b"),n("d4ec")),a=n("bee2"),c=n("2caf"),u=n("262e"),s=n("9ab4"),l=n("60a3"),h=function(t){Object(u["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(o["a"])(this,n),t=e.apply(this,arguments),t.activeMenu="",t.menuMap={},t.menu=[{label:"面试题",name:"question"},{label:"文章",name:"article"}],t}return Object(a["a"])(n,[{key:"onMenuNameChange",value:function(){this.$route.name&&"index"!==this.$route.name||(this.activeMenu="")}},{key:"handleSelect",value:function(t){this.activeMenu===t&&this.$route.name===t||this.$router.push({name:t}),this.setActiveMenu(t)}},{key:"updateMenuMap",value:function(){var t=this;this.menu.forEach((function(e){t.menuMap[e.name]=e}))}},{key:"setActiveMenu",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=(this.$route.name||"").split("_");t?this.activeMenu=t:e[0]&&(this.menuMap[e[0]]?this.activeMenu=e[0]:this.activeMenu="")}},{key:"mounted",value:function(){this.updateMenuMap(),this.setActiveMenu()}}]),n}(l["c"]);Object(s["a"])([Object(l["d"])("$route.name")],h.prototype,"onMenuNameChange",null),h=Object(s["a"])([Object(l["a"])({})],h);var f=h,p=f,v=(n("c8e8"),n("2877")),d=Object(v["a"])(p,r,i,!1,null,"672c71aa",null);e["a"]=d.exports},"750f":function(t,e,n){},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(t,e,n,r){var i=e&&e.prototype instanceof d?e:d,o=Object.create(i.prototype),a=new M(r||[]);return o._invoke=_(t,n,a),o}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}t.wrap=u;var l="suspendedStart",h="suspendedYield",f="executing",p="completed",v={};function d(){}function g(){}function y(){}var m={};m[o]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(C([])));w&&w!==n&&r.call(w,o)&&(m=w);var x=y.prototype=d.prototype=Object.create(m);function O(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function j(t,e){function n(i,o,a,c){var u=s(t[i],t,o);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(h).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var i;function o(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function _(t,e,n){var r=l;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return $()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var u=s(t,e,n);if("normal"===u.type){if(r=n.done?p:h,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=s(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function C(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:$}}function $(){return{value:e,done:!0}}return g.prototype=x.constructor=y,y.constructor=g,y[c]=g.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},O(j.prototype),j.prototype[a]=function(){return this},t.AsyncIterator=j,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new j(u(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(x),x[c]="Generator",x[o]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=C,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return c.type="throw",c.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;L(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:C(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=r}catch(i){Function("r","regeneratorRuntime = r")(r)}},a753:function(t,e,n){"use strict";var r=n("6a70"),i=n.n(r);i.a},b134:function(t,e,n){},bee2:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return i}))},c8e8:function(t,e,n){"use strict";var r=n("b134"),i=n.n(r);i.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}}]);
//# sourceMappingURL=chunk-28328663.8ecda1f7.js.map