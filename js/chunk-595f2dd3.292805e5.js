(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-595f2dd3"],{"2f0d":function(t,e,a){"use strict";var n=a("dbcf"),i=a.n(n);i.a},cd6d:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.title?a("el-main",{class:"view-"+t.$route.name},[a("v-viewer",{attrs:{title:t.title,content:t.content}}),a("v-valine",{staticClass:"valine-container",attrs:{options:t.options}})],1):t._e()},i=[],c=a("d4ec"),r=a("bee2"),s=a("2caf"),o=a("262e"),u=a("9ab4"),l=a("60a3"),v=a("b589"),p=a("33a8"),f=function(t){Object(o["a"])(a,t);var e=Object(s["a"])(a);function a(){var t;return Object(c["a"])(this,a),t=e.apply(this,arguments),t.params={},t.title="",t.content={},t}return Object(r["a"])(a,[{key:"onParamesChange",value:function(){var t=this,e=this.$route.params;this.content=e.content,this.title=e.title,this.$nextTick((function(){e.title===t.params.title&&e.category===t.params.category||(t.params=e,t.$bus.$emit("valineUpdate"))}))}},{key:"mounted",value:function(){var t=this;this.$nextTick((function(){t.onParamesChange()}))}}]),a}(l["c"]);Object(u["a"])([Object(l["d"])("$route.params",{immediate:!1})],f.prototype,"onParamesChange",null),f=Object(u["a"])([Object(l["a"])({components:{"v-valine":v["a"],"v-viewer":p["a"]}})],f);var b=f,d=b,m=(a("2f0d"),a("2877")),h=Object(m["a"])(d,n,i,!1,null,"5e0f4edc",null);e["default"]=h.exports},dbcf:function(t,e,a){}}]);
//# sourceMappingURL=chunk-595f2dd3.292805e5.js.map