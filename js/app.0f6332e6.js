(function(t){function e(e){for(var i,r,c=e[0],s=e[1],u=e[2],l=0,p=[];l<c.length;l++)r=c[l],o[r]&&p.push(o[r][0]),o[r]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(i=!1)}i&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},o={app:0},a=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/panono/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"068c":function(t,e,n){"use strict";var i=n("0aa5"),o=n.n(i);o.a},"0aa5":function(t,e,n){},2932:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),o=n("b048"),a=n.n(o),r=n("61e0"),c=n.n(r),s=n("9062"),u=n.n(s),d=n("bc3a"),l=n.n(d),p=n("a7fe"),f=n.n(p),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},v=[],g=n("2877"),b={},h=Object(g["a"])(b,m,v,!1,null,null,null);h.options.__file="App.vue";var _=h.exports,y=n("8c4f"),L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"loading-box"},[n("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}})],1),t.previewLink?n("router-view"):t._e(),t.isLoading?t._e():n("thumbnails")],1)},w=[],S=n("cebc"),j=n("2f62"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"set-bottom"},[t.isLoading?t._e():n("ul",{staticClass:"bottom-bar"},t._l(t.doneData,function(e){return n("li",{key:e.index,staticClass:"thumbnail-box",on:{click:function(n){t.clickHandler(e)}}},[n("div",{staticClass:"inner"},[n("div",{staticClass:"thumbnail",class:{selected:e.objectId===t.activeId},style:{backgroundImage:"url("+e.thumbnail+")"}}),n("span",[t._v(t._s(e.category))])])])}),0)])},E=[],x={name:"Thumbnails",computed:Object(S["a"])({},Object(j["b"])(["doneData","isLoading","activeId"])),methods:{clickHandler:function(t){this.$store.dispatch("changeSelectedId",t),this.$store.dispatch("changeSelectedUrl",t)}}},k=x,D=(n("068c"),Object(g["a"])(k,O,E,!1,null,"bafe14c4",null));D.options.__file="Thumbnails.vue";var I=D.exports,A={name:"home",methods:{init:function(){this.$route.params.id?this.$store.dispatch("getData",this.$route.params.id):this.$store.dispatch("getData","hola")}},computed:Object(S["a"])({},Object(j["b"])(["isLoading","doneData","previewLink"])),components:{Thumbnails:I},created:function(){this.init()}},$=A,U=(n("f0b9"),Object(g["a"])($,L,w,!1,null,"0bf78bd8",null));U.options.__file="Home.vue";var q=U.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a-scene",[n("a-assets",{attrs:{timeout:"60000"}},[n("img",{attrs:{id:"origin",src:t.activeLink,crossorigin:"anonymous"}}),n("img",{attrs:{id:"preview",src:t.previewLink,crossorigin:"anonymous"}})]),n("a-sky",{attrs:{id:"image-360",src:"",animation__rotate:t.rotateIn,animation__fadein:"startEvents:fadein;\n      property:material.opacity;from:0.5;to:1;dur:1000;",animation__fadeout:"startEvents:fadeout;\n      property:material.opacity;from:1;to:0.5;dur:1000;"}})],1)],1)},P=[],T={name:"Scene",methods:{imgLoading:function(){document.querySelector("#origin").addEventListener("load",function(){console.log("start loading origin"),document.querySelector("#image-360").setAttribute("src","#origin"),console.log("end loading origin")})},previewLoading:function(){var t=this;document.querySelector("#preview").addEventListener("load",function(){console.log("start loading privew"),document.querySelector("#image-360").setAttribute("position",t.getPosition),document.querySelector("#image-360").setAttribute("src","#preview"),document.querySelector("#origin").complete&&document.querySelector("#image-360").setAttribute("src","#origin"),document.querySelector("#image-360").setAttribute("rotation",t.getRotation),console.log("end loading privew")})},firstLoading:function(){var t=this;document.querySelector("#image-360").addEventListener("materialtextureloaded",function(){t.$store.dispatch("updateLoading",!1),document.querySelector("#image-360").emit("rotatein")},{once:!0})}},computed:Object(S["a"])({},Object(j["b"])(["activeLink","getRotation","previewLink","getPosition"]),{rotateIn:function(){return"startEvents:rotatein;property:rotation;from:90 0 0;to:".concat(this.getRotation,";dur:1000;")}}),mounted:function(){this.previewLoading(),this.imgLoading(),this.firstLoading()}},C=T,H=Object(g["a"])(C,R,P,!1,null,null,null);H.options.__file="Scene.vue";var N=H.exports;i["a"].use(y["a"]);var M,z=new y["a"]({base:"/panono/",routes:[{path:"*",redirect:"/"},{path:"/",name:"home",component:q,children:[{path:":id?",name:"scene",component:N}]}]}),J=(n("55dd"),n("a4bb")),G=n.n(J),B=n("bd86"),F="LOADING_HANDLER",K="DATA_HANDLER",Q="SELECTED_URL_HANDLER",V="SELECTED_ID_HANDLER";i["a"].use(j["a"]);var W=new j["a"].Store({state:{isLoading:!1,activeId:"",selectedUrl:"",previewUrl:"",rotatetion:{},position:{},data:[]},mutations:(M={},Object(B["a"])(M,F,function(t,e){t.isLoading=e}),Object(B["a"])(M,K,function(t,e){t.data=e}),Object(B["a"])(M,Q,function(t,e){var n=e.desktopUrl,i=e.panoramaRotation,o=e.thumbnail,a=e.position;t.selectedUrl=n,t.rotatetion=i,t.previewUrl=o,t.position=a}),Object(B["a"])(M,V,function(t,e){var n=e.objectId;t.activeId=n}),M),actions:{updateLoading:function(t,e){var n=t.commit;n(F,e)},getData:function(t,e){var n=t.commit,i=t.dispatch;i("updateLoading",!0),l.a.get("datas.json").then(function(t){var o=t.data[e];console.log(e,t);var a=G()(o).map(function(t){var e=o[t].data;return e}),r=a.sort(function(t,e){return t.index-e.index});n(K,r),i("changeSelectedId",r[0]),i("changeSelectedUrl",r[0])})},changeSelectedUrl:function(t,e){var n=t.commit;n(Q,e)},changeSelectedId:function(t,e){var n=t.commit;n(V,e)}},getters:{isLoading:function(t){return t.isLoading},doneData:function(t){return t.data},activeId:function(t){return t.activeId},activeLink:function(t){return t.selectedUrl},previewLink:function(t){return t.previewUrl},getRotation:function(t){var e=t.rotatetion,n=e.x,i=e.y,o=e.z;return"".concat(n," ").concat(i," ").concat(o)},getPosition:function(t){var e=t.position.x,n=t.position.y;return{x:e,y:n,z:-1e3}}}});i["a"].use(a.a),i["a"].use(c.a),i["a"].component("Loading",u.a),i["a"].use(f.a,l.a),i["a"].config.productionTip=!1,new i["a"]({router:z,store:W,render:function(t){return t(_)}}).$mount("#app")},f0b9:function(t,e,n){"use strict";var i=n("2932"),o=n.n(i);o.a}});
//# sourceMappingURL=app.0f6332e6.js.map