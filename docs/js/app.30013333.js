(function(t){function e(e){for(var r,o,s=e[0],c=e[1],u=e[2],d=0,h=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/turntable/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"2ece":function(t,e,n){},"462f":function(t,e,n){},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"5c9d":function(t,e,n){"use strict";var r=n("462f"),a=n.n(r);a.a},"9a57":function(t,e,n){"use strict";var r=n("2ece"),a=n.n(r);a.a},"9c0c":function(t,e,n){},b425:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view",{staticClass:"router"})],1)},i=[],o=r["a"].extend({}),s=o,c=(n("5c0b"),n("2877")),u=Object(c["a"])(s,a,i,!1,null,null,null),l=u.exports,d=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Turntable",{staticClass:"home__turntable",attrs:{data:t.items}}),n("TurntableItemList",{staticClass:"home__turntableItemList",model:{value:t.items,callback:function(e){t.items=e},expression:"items"}})],1)},f=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"turntable",style:{width:t.size,height:t.size},on:{click:t.start}},[n("div",{staticClass:"wrapper",style:{transform:"rotate3d(0,0,1,"+t.rotate+"deg)"}},t._l(t.data,(function(e,r){return n("div",{key:r,ref:"fill",refInFor:!0,staticClass:"fill",class:{select:t.result==r},style:t.getStyleForSectorForm(r)},[n("p",{staticClass:"fill__content",style:t.getStyleForText(r)},[t._v(" "+t._s(e.content)+" ")])])})),0),t.isIOS?n("button",{staticStyle:{position:"fixed",bottom:"0",left:"0",width:"100%"},on:{click:t.iOSPermission}},[t._v(" IOS 권한 요청 ")]):t._e()])},p=[],g=(n("99af"),n("d81d"),n("13d5"),n("a9e3"),n("d3b7"),n("ac1f"),n("466d"),n("96cf"),n("1da1")),v=r["a"].extend({name:"Turntable",props:{data:{type:Array,required:!0,default:[]},size:{type:String,default:"500px"}},data:function(){return{rotate:360*Math.random(),result:-1,isStart:!1,acc:0,permissionCheck:!1}},mounted:function(){this.isIOS||this.setDeviceMotion()},methods:{start:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isStart){e.next=14;break}t.isStart=!0,t.result=-1,t.acc=20+10*Math.random(),n=function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){return setTimeout((function(){return t()}),e)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();case 5:if(!(t.acc>.01)){e.next=12;break}return e.next=8,n(10);case 8:t.acc/=1.015,t.rotate+=t.acc,e.next=5;break;case 12:t.result=t.checkSelect(),t.isStart=!1;case 14:case"end":return e.stop()}}),e)})))()},setDeviceMotion:function(){var t=this;this.permissionCheck||(this.permissionCheck=!0,addEventListener("devicemotion",(function(e){var n=e.accelerationIncludingGravity.x;n&&n>40&&(t.start(),t.acc>3&&t.acc<25&&(t.acc+=5))})))},iOSPermission:function(t){var e=this;t.stopImmediatePropagation(),"function"===typeof DeviceMotionEvent.requestPermission&&DeviceMotionEvent.requestPermission().then((function(t){"granted"===t&&e.setDeviceMotion()})).catch(console.error)},degreesToRadians:function(t){return t*(Math.PI/180)},getEndPointBySectorForm:function(t){return 0==t?this.data[t].weight/this.getWeightSum*360:this.getEndPointBySectorForm(t-1)+this.data[t].weight/this.getWeightSum*360},checkSelect:function(){for(var t=360-Math.abs(this.rotate+90)%360,e=0;e<this.data.length;e++){var n=this.data[e].weight/this.getWeightSum*360,r=this.getEndPointBySectorForm(e),a=r-n;if(a<=t&&r>=t)return e}return-1},getStyleForSectorForm:function(t){var e=this.data[t].weight/this.getWeightSum*360,n=this.getEndPointBySectorForm(t),r=n-e,a=(r+n)/2,i=(r+a)/2,o=(n+a)/2;n=this.degreesToRadians(n),r=this.degreesToRadians(r),a=this.degreesToRadians(a),i=this.degreesToRadians(i),o=this.degreesToRadians(o);var s=Math.cos(r),c=Math.sin(r),u=100*Math.cos(i),l=100*Math.sin(i),d=100*Math.cos(a),h=100*Math.sin(a),f=100*Math.cos(o),m=100*Math.sin(o),p=Math.cos(n),g=Math.sin(n);return"clip-path: polygon(50% 50%,"+"".concat(50+50*s,"% ").concat(50+50*c,"%,")+"".concat(50+50*u,"% ").concat(50+50*l,"%,")+"".concat(50+50*d,"% ").concat(50+50*h,"%,")+"".concat(50+50*f,"% ").concat(50+50*m,"%,")+"".concat(50+50*p,"% ").concat(50+50*g,"%);")},getStyleForText:function(t){var e=this.data[t].weight/this.getWeightSum*360,n=this.getEndPointBySectorForm(t),r=n-e,a=(r+n)/2;a=this.degreesToRadians(a);var i=Math.cos(a)/1.5,o=Math.sin(a)/1.5;return"top:".concat(50+50*o,"%;\n\t\t\tleft:").concat(50+50*i,"%;\n\t\t\ttransform: translate(-50%, -50%) rotate(").concat((r+n)/2+90,"deg);")}},computed:{getWeightSum:function(){return this.data.map((function(t){return Number(t.weight)})).reduce((function(t,e){return t+e}))},isIOS:function(){return(null!=navigator.userAgent.match(/i(Phone|Pod)/i)||null!=navigator.userAgent.match(/Macintosh/i))&&!this.permissionCheck}}}),b=v,_=(n("5c9d"),Object(c["a"])(b,m,p,!1,null,"d17bc7fc",null)),y=_.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"turntableItemList"},[t._l(t.items,(function(e,r){return n("li",{key:r,staticClass:"turntableItemList__item"},[n("div",{staticClass:"turntableItemList__wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"item.content"}],staticClass:"turntableItemList__item__content",attrs:{type:"text",placeholder:"항목"+(r+1)},domProps:{value:e.content},on:{input:function(n){n.target.composing||t.$set(e,"content",n.target.value)}}}),n("button",{staticClass:"turntableItemList__item__delete",on:{click:function(e){return t.del(r)}}},[t._v(" D ")])]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.weight,expression:"item.weight"}],staticClass:"turntableItemList__item__range",attrs:{type:"range",min:"0",max:"10"},domProps:{value:e.weight},on:{__r:function(n){return t.$set(e,"weight",n.target.value)}}})])})),n("li",{staticClass:"turntableItemList__addBtn",on:{click:t.add}},[t._v("+")])],2)},S=[],x=(n("a434"),r["a"].extend({model:{prop:"items"},props:{items:{type:Array}},methods:{add:function(){this.items.push({content:"",weight:1})},del:function(t){this.items.splice(t,1)}}})),M=x,O=(n("ee72"),Object(c["a"])(M,w,S,!1,null,"667037ec",null)),P=O.exports,k=r["a"].extend({data:function(){return{items:[{content:"1",weight:1},{content:"2",weight:1},{content:"3",weight:1},{content:"4",weight:1},{content:"5",weight:1}]}},components:{Turntable:y,TurntableItemList:P},methods:{}}),C=k,I=(n("9a57"),Object(c["a"])(C,h,f,!1,null,"1b7d6ace",null)),T=I.exports;r["a"].use(d["a"]);var j=[{path:"/",name:"Home",component:T}],E=new d["a"]({mode:"history",base:"/turntable/",routes:j}),F=E,L=n("2f62");r["a"].use(L["a"]);var R=new L["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:F,store:R,render:function(t){return t(l)}}).$mount("#app")},ee72:function(t,e,n){"use strict";var r=n("b425"),a=n.n(r);a.a}});
//# sourceMappingURL=app.30013333.js.map