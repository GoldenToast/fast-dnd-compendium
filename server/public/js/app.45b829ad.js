(function(t){function e(e){for(var r,s,l=e[0],a=e[1],u=e[2],f=0,p=[];f<l.length;f++)s=l[f],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,l=1;l<n.length;l++){var a=n[l];0!==i[a]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=a;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=n("8c4f"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("b-container",{attrs:{fluid:""}},[n("b-nav",[n("b-nav-item",[n("router-link",{attrs:{to:"/spells"}},[t._v("Spells")])],1),n("b-nav-item",[n("router-link",{attrs:{to:"/monsters"}},[t._v("Monsters")])],1)],1),n("router-view")],1)],1)},s=[],l={name:"App"},a=l,u=(n("034f"),n("2877")),c=Object(u["a"])(a,o,s,!1,null,null,null),f=c.exports,p=n("5f5b"),d=n("b1e0"),m=(n("f9e3"),n("2dd8"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Spells")]),n("b-form-group",{staticClass:"mb-0",attrs:{"label-align-sm":"right","label-size":"sm","label-for":"filterInput"}},[n("b-input-group",[n("b-form-input",{attrs:{type:"search",id:"filterInput",placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),n("b-input-group-append",[n("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v("Clear")])],1)],1)],1),n("b-table",{attrs:{striped:"",hover:"",busy:t.isBusy,filter:t.filter,fields:t.fields,items:t.items},on:{"row-clicked":t.onRowSelected,"update:busy":function(e){t.isBusy=e},filtered:t.onFiltered}})],1)}),b=[],h=n("bc3a"),v=n.n(h),g={name:"Spells",data:function(){return{fields:["name"],items:[],isBusy:!1,filter:"",filterOn:[],totalRows:1,currentPage:1}},methods:{get:function(t){var e=this;return v.a.get(t).then((function(t){e.totalRows=t.data.count,e.items=t.data.results})).catch((function(t){console.log(t),e.items=[]}))},onRowSelected:function(t){this.$router.push({path:"spells/"+t.index})},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1}},mounted:function(){this.get("lib/api/spells")}},_=g,y=Object(u["a"])(_,m,b,!1,null,"845379a2",null),w=y.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-card",{attrs:{title:t.item.name}},[n("b-card-text",[n("h5",[t._v("Range")]),n("div",[t._v(t._s(t.item.range))]),n("h5",[t._v("Description")]),n("b-list-group",t._l(t.item.desc,(function(e){return n("b-list-group-item",{key:e.desc},[t._v(" ("+t._s(e)+" ")])})),1)],1)],1)],1)},x=[],S=(n("b0c0"),{name:"Spell",data:function(){return{item:{}}},methods:{get:function(t){var e=this;return v.a.get(t).then((function(t){e.item=t.data})).catch((function(t){console.log(t),e.item={}}))}},mounted:function(){this.get("lib/api/spells/"+this.$route.params.name)}}),j=S,k=Object(u["a"])(j,O,x,!1,null,"1be56922",null),P=k.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" "+t._s(t.item)+" "),n("b-card",{attrs:{title:t.item.name}},[n("b-card-text",[n("h5",[t._v("Size")]),n("div",[t._v(t._s(t.item.size))]),n("h5",[t._v("Type")]),n("div",[t._v(t._s(t.item.type))]),n("h5",[t._v("Alignment")]),n("div",[t._v(t._s(t.item.alignment))]),n("h5",[t._v("Description")]),n("b-list-group",t._l(t.item.desc,(function(e){return n("b-list-group-item",{key:e.desc},[t._v(" ("+t._s(e)+" ")])})),1)],1)],1)],1)},$=[],M={name:"Monster",data:function(){return{item:{}}},methods:{get:function(t){var e=this;return v.a.get(t).then((function(t){e.item=t.data})).catch((function(t){console.log(t),e.item={}}))}},mounted:function(){this.get("lib/api/monsters/"+this.$route.params.name)}},B=M,T=Object(u["a"])(B,R,$,!1,null,"023a9293",null),E=T.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Monsters")]),n("b-form-group",{staticClass:"mb-0",attrs:{"label-align-sm":"right","label-size":"sm","label-for":"filterInput"}},[n("b-input-group",[n("b-form-input",{attrs:{type:"search",id:"filterInput",placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),n("b-input-group-append",[n("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v("Clear")])],1)],1)],1),n("b-table",{attrs:{striped:"",hover:"",busy:t.isBusy,filter:t.filter,fields:t.fields,items:t.items},on:{"row-clicked":t.onRowSelected,"update:busy":function(e){t.isBusy=e},filtered:t.onFiltered}})],1)},C=[],F={name:"Monsters",data:function(){return{fields:["name"],items:[],isBusy:!1,filter:"",filterOn:[],totalRows:1,currentPage:1}},methods:{get:function(t){var e=this;return v.a.get(t).then((function(t){e.totalRows=t.data.count,e.items=t.data.results})).catch((function(t){console.log(t),e.items=[]}))},onRowSelected:function(t){this.$router.push({path:"monsters/"+t.index})},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1}},mounted:function(){this.get("lib/api/monsters")}},I=F,A=Object(u["a"])(I,z,C,!1,null,"21933de1",null),D=A.exports;r["default"].config.productionTip=!1,r["default"].use(p["a"]),r["default"].use(d["a"]);var J=new i["a"]({routes:[{path:"/spells",component:w},{path:"/spells/:name",component:P},{path:"/monsters",component:D},{path:"/monsters/:name",component:E}]});r["default"].use(i["a"]),new r["default"]({router:J,render:function(t){return t(f)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.45b829ad.js.map