(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58a6260a"],{"335f":function(t,e,a){},"453d":function(t,e,a){},5318:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-main",{ref:"main"},[a("el-container",[t._t("default",null,{data:t.slotData}),t.options.routeview&&t.activeItem.title?a("router-view"):t._e()],2)],1)},o=[],i=(a("4160"),a("b0c0"),a("159b"),a("ade3")),r=(a("96cf"),a("1da1")),c=a("d4ec"),s=a("bee2"),u=a("2caf"),l=a("262e"),p=a("9ab4"),h=a("60a3"),b=function(t){Object(l["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(c["a"])(this,a),t=e.apply(this,arguments),t.title="",t.params={},t.category=[],t.categoryMap={},t.slotData={category:[]},t}return Object(s["a"])(a,[{key:"onActiveItemChange",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.activeItem.title){t.next=3;break}return t.next=3,this.selectItem(this.categoryMap[this.activeItem.title]||this.activeItem);case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"selectItem",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=this.options.mapKey,this.title=e[a],n=Object.assign({},this.$route.params,Object(i["a"])({},a,e[a])),this.$set(this.slotData,a,e[a]),this.$emit("toggleLink",e),n.category===this.params.category&&n[a]===this.params[a]||(this.params=n,this.$router.push({name:this.options.contentRouteName,params:Object.assign({},n,{content:e})}).catch((function(t){})),o=this.$refs.main,o.$el.scrollTop=0);case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"updateCategoryMap",value:function(){var t=this;this.category.forEach((function(e){t.categoryMap[e[t.options.mapKey]]=e}))}},{key:"mounted",value:function(){var t=this;this.$set(this.slotData,this.options.mapKey,"");var e=this.$route.params;this.$store.dispatch(this.options.action,{name:this.options.name,category:e.category}).then((function(a){if(t.category=a,t.$set(t.slotData,"category",a),t.updateCategoryMap(),a.length){var n=t.categoryMap[e[t.options.mapKey]]||a[0];t.selectItem(n)}}))}}]),a}(h["c"]);Object(p["a"])([Object(h["b"])({type:Object,required:!1,default:function(){return{mapKey:"title",name:"question",action:"category",contentRouteName:"question_category_content",routeview:!1}}})],b.prototype,"options",void 0),Object(p["a"])([Object(h["b"])({type:Object,required:!1,default:{}})],b.prototype,"activeItem",void 0),Object(p["a"])([Object(h["d"])("activeItem",{deep:!0,immediate:!1})],b.prototype,"onActiveItemChange",null),b=Object(p["a"])([Object(h["a"])({})],b);var m=b,v=m,f=(a("d9b8"),a("2877")),y=Object(f["a"])(v,n,o,!1,null,"6eeb0d3a",null);e["a"]=y.exports},"707b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-category",{staticClass:"view-question_category",attrs:{activeItem:t.activeItem,options:t.options},on:{toggleLink:t.toggleLink},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-aside",[a("el-table",{directives:[{name:"show",rawName:"v-show",value:e.data.category.length,expression:"scope.data.category.length"}],attrs:{data:e.data.category,"show-header":!1,"row-class-name":t.tableRowClassName},on:{"row-click":t.toggleLink}},[a("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.title)+" ")]}}],null,!0)})],1)],1),e.data.title?a("router-view"):t._e(),a("el-backtop",{attrs:{target:".view-question_category",bottom:100}},[a("i",{staticClass:"icon el-icon-arrow-up"})])]}}])})},o=[],i=a("d4ec"),r=a("bee2"),c=a("2caf"),s=a("262e"),u=a("9ab4"),l=a("60a3"),p=a("5318"),h=function(t){Object(s["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.activeItem={},t.options={mapKey:"title",type:"question",action:"category",contentRouteName:"question_category_content",routeview:!1},t.title="",t}return Object(r["a"])(a,[{key:"tableRowClassName",value:function(t){var e=t.row;return this.title===e.title?"selected":""}},{key:"toggleLink",value:function(t){this.activeItem=t,this.title=t.title}}]),a}(l["c"]);h=Object(u["a"])([Object(l["a"])({components:{"v-category":p["a"]}})],h);var b=h,m=b,v=(a("7dbb"),a("2877")),f=Object(v["a"])(m,n,o,!1,null,"01b1072b",null);e["default"]=f.exports},"7dbb":function(t,e,a){"use strict";var n=a("453d"),o=a.n(n);o.a},bee2:function(t,e,a){"use strict";function n(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}a.d(e,"a",(function(){return o}))},d9b8:function(t,e,a){"use strict";var n=a("335f"),o=a.n(n);o.a}}]);
//# sourceMappingURL=chunk-58a6260a.4beb0b81.js.map