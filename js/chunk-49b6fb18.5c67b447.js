(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49b6fb18"],{"024e":function(t,e,n){},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("d3b7"),n("e6cf");function r(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}},7355:function(t,e,n){"use strict";var r=n("024e"),o=n.n(r);o.a},"857a":function(t,e,n){var r=n("1d80"),o=/"/g;t.exports=function(t,e,n,i){var a=String(r(t)),c="<"+e;return""!==n&&(c+=" "+n+'="'+String(i).replace(o,"&quot;")+'"'),c+">"+a+"</"+e+">"}},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new C(r||[]);return i._invoke=_(t,n,a),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}t.wrap=u;var l="suspendedStart",h="suspendedYield",f="executing",p="completed",v={};function y(){}function d(){}function g(){}var m={};m[i]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(N([])));b&&b!==n&&r.call(b,i)&&(m=b);var x=g.prototype=y.prototype=Object.create(m);function k(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function L(t,e){function n(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(h).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var o;function i(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function _(t,e,n){var r=l;return function(o,i){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return P()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var u=s(t,e,n);if("normal"===u.type){if(r=n.done?p:h,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){while(++o<t.length)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return d.prototype=x.constructor=g,g.constructor=d,g[c]=d.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},k(L.prototype),L.prototype[a]=function(){return this},t.AsyncIterator=L,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new L(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=N,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:N(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},9911:function(t,e,n){"use strict";var r=n("23e7"),o=n("857a"),i=n("af03");r({target:"String",proto:!0,forced:i("link")},{link:function(t){return o(this,"a","href",t)}})},af03:function(t,e,n){var r=n("d039");t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},cd6d:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.title?n("el-main",{staticClass:"view-article_content"},[n("h1",[n("el-row",[n("el-col",{attrs:{span:20}},[t._v(" "+t._s(t.title)+" ")]),n("el-col",{staticClass:"text-right",attrs:{span:4}},[n("el-button",{attrs:{type:"text"},on:{click:t.editContent}},[t._v("参与编辑此页 "),n("i",{staticClass:"iconfont icon-github"})])],1)],1)],1),n("v-viewer",{staticClass:"content-container",attrs:{title:t.title,content:t.content}}),n("ul",{staticClass:"links"},t._l(t.link,(function(e,r){return n("li",{key:e.path},[n("span",{directives:[{name:"show",rawName:"v-show",value:!r,expression:"!index"}]},[t._v(" 上一篇: ")]),n("span",{directives:[{name:"show",rawName:"v-show",value:r,expression:"index"}]},[t._v(" 下一篇: ")]),e.path?n("el-link",{attrs:{type:"primary"},on:{click:function(n){return t.toggleLink(e)}}},[t._v(" "+t._s(e.title)+" ")]):n("span",[t._v("已经是"+t._s(t.link[0].title?"最后":"第")+"一篇了")])],1)})),0),n("v-valine",{staticClass:"valine-container",attrs:{options:t.options}})],1):t._e()},o=[],i=(n("a15b"),n("9911"),n("96cf"),n("1da1")),a=n("d4ec"),c=n("bee2"),u=n("2caf"),s=n("262e"),l=n("9ab4"),h=n("df7c"),f=n.n(h),p=n("2de2"),v=n("60a3"),y=n("b589"),d=n("33a8"),g=function(t){Object(s["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(a["a"])(this,n),t=e.apply(this,arguments),t.params={},t.title="",t.content={},t.link=[],t}return Object(c["a"])(n,[{key:"onParamesChange",value:function(){var t=this,e=this.$route.params;this.content=e.content instanceof Object?e.content:JSON.parse(e.content),this.title=e.title,this.$nextTick((function(){e.title===t.params.title&&e.category===t.params.category||(t.params=e,t.$bus.$emit("valineUpdate",(function(){t.setToggleLink()})))}))}},{key:"toggleLink",value:function(t){this.$emit("toggleLink",t)}},{key:"setToggleLink",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("toggleLinks",{name:"article",path:this.content.path});case 2:this.link=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"editContent",value:function(){window.open(f.a.join(p["a"].remotePath,this.content.path),"_blank")}},{key:"mounted",value:function(){var t=this;this.$nextTick((function(){t.onParamesChange()}))}}]),n}(v["c"]);Object(l["a"])([Object(v["d"])("$route.params",{immediate:!1})],g.prototype,"onParamesChange",null),g=Object(l["a"])([Object(v["a"])({components:{"v-valine":y["a"],"v-viewer":d["a"]}})],g);var m=g,w=m,b=(n("7355"),n("2877")),x=Object(b["a"])(w,r,o,!1,null,"71bb7108",null);e["default"]=x.exports}}]);
//# sourceMappingURL=chunk-49b6fb18.5c67b447.js.map