(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1cf10a9c"],{"707b":function(e,t,a){"use strict";a.r(t);var c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-main",[a("el-container",[a("el-aside",[a("el-table",{directives:[{name:"show",rawName:"v-show",value:e.category.length,expression:"category.length"}],attrs:{data:e.category,"show-header":!1,"row-class-name":e.tableRowClassName},on:{"row-click":e.selectTitle}},[a("el-table-column",{scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.title)+" ")]}}])})],1)],1),a("el-main",[a("v-viewer",{attrs:{title:e.title}})],1)],1)],1)},n=[],l=a("d4ec"),i=a("bee2"),r=a("2caf"),o=a("262e"),s=a("9ab4"),u=a("60a3"),v=a("33a8"),w=function(e){Object(o["a"])(a,e);var t=Object(r["a"])(a);function a(){var e;return Object(l["a"])(this,a),e=t.apply(this,arguments),e.category=[],e.title="",e.rowKey="",e}return Object(i["a"])(a,[{key:"selectTitle",value:function(e){this.title=e.title}},{key:"tableRowClassName",value:function(e){var t=e.row;return this.title===t.title?"selected":""}},{key:"mounted",value:function(){var e=this,t=this.$route.params;this.$store.dispatch("category",t.category).then((function(a){e.category=a,e.selectTitle({title:t.title||(a[0]||{}).title})}))}}]),a}(u["c"]);w=Object(s["a"])([Object(u["a"])({components:{"v-viewer":v["a"]}})],w);var h=w,b=h,d=(a("7c10"),a("2877")),f=Object(d["a"])(b,c,n,!1,null,"59c8c4eb",null);t["default"]=f.exports},"7c10":function(e,t,a){"use strict";var c=a("8dd2"),n=a.n(c);n.a},"8dd2":function(e,t,a){}}]);
//# sourceMappingURL=chunk-1cf10a9c.de956a7e.js.map