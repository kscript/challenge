(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cef2fc5"],{"066d":function(t,e,a){"use strict";var n=a("57d3"),o=a.n(n);o.a},"0e58":function(t,e,a){"use strict";var n=a("6674"),o=a.n(n);o.a},"57d3":function(t,e,a){},6674:function(t,e,a){},"707b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-main",{class:"view-"+t.$route.name},[a("el-container",[a("v-category",{attrs:{activeItem:t.title,options:t.options},on:{changeKey:t.changeKey},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-aside",[a("el-table",{directives:[{name:"show",rawName:"v-show",value:e.data.category.length,expression:"scope.data.category.length"}],attrs:{data:e.data.category,"show-header":!1,"row-class-name":t.tableRowClassName},on:{"row-click":t.selectTitle}},[a("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.title)+" ")]}}],null,!0)})],1)],1),e.data.title?a("router-view"):t._e()]}}])})],1)],1)},o=[],i=a("d4ec"),c=a("bee2"),r=a("2caf"),s=a("262e"),u=a("9ab4"),l=a("60a3"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[t._t("default",null,{data:t.slotData}),t.options.routeview&&t.title?a("router-view"):t._e()],2)},h=[],y=(a("4160"),a("159b"),a("ade3")),v=function(t){Object(s["a"])(a,t);var e=Object(r["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.title="",t.params={},t.category=[],t.categoryMap={},t.slotData={category:[]},t}return Object(c["a"])(a,[{key:"onActiveItemChange",value:function(){this.categoryMap[this.activeItem]&&this.selectItem(this.categoryMap[this.activeItem])}},{key:"selectItem",value:function(t){var e=this.options.mapKey;this.title=t[e];var a=Object.assign({},this.$route.params,Object(y["a"])({},e,t[e]));this.$emit("changeKey",t[e]),this.$set(this.slotData,e,t[e]),a.category===this.params.category&&a[e]===this.params[e]||(this.params=a,this.$router.push({name:this.options.contentRouteName,params:Object.assign({},a,{content:t})}))}},{key:"updateCategoryMap",value:function(){var t=this;this.category.forEach((function(e){t.categoryMap[e[t.options.mapKey]]=e}))}},{key:"mounted",value:function(){var t=this;this.$set(this.slotData,this.options.mapKey,"");var e=this.$route.params;this.$store.dispatch(this.options.action,e.category).then((function(a){if(t.category=a,t.$set(t.slotData,"category",a),t.updateCategoryMap(),a.length){var n=t.categoryMap[e[t.options.mapKey]]||a[0];t.selectItem(n)}}))}}]),a}(l["c"]);Object(u["a"])([Object(l["b"])({type:Object,required:!1,default:function(){return{mapKey:"title",action:"category",contentRouteName:"question_category_content",routeview:!1}}})],v.prototype,"options",void 0),Object(u["a"])([Object(l["b"])({type:String,required:!1,default:""})],v.prototype,"activeItem",void 0),Object(u["a"])([Object(l["d"])("activeItem",{immediate:!1})],v.prototype,"onActiveItemChange",null),v=Object(u["a"])([Object(l["a"])({})],v);var f=v,m=f,b=(a("066d"),a("2877")),d=Object(b["a"])(m,p,h,!1,null,"0413d035",null),g=d.exports,j=function(t){Object(s["a"])(a,t);var e=Object(r["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.options={mapKey:"title",action:"category",contentRouteName:"question_category_content",routeview:!1},t.title="",t}return Object(c["a"])(a,[{key:"tableRowClassName",value:function(t){var e=t.row;return this.title===e.title?"selected":""}},{key:"selectTitle",value:function(t){this.title=t.title}},{key:"changeKey",value:function(t){this.title=t}}]),a}(l["c"]);j=Object(u["a"])([Object(l["a"])({components:{"v-category":g}})],j);var O=j,w=O,_=(a("0e58"),Object(b["a"])(w,n,o,!1,null,"2ff73078",null));e["default"]=_.exports},bee2:function(t,e,a){"use strict";function n(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}a.d(e,"a",(function(){return o}))}}]);
//# sourceMappingURL=chunk-5cef2fc5.c810e2c6.js.map