(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{346:function(t,e,n){"use strict";n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return y})),n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return w}));n(26);var o=n(71);function r(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return(t=Array()).concat.apply(t,[e].concat(o))}function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:e}},render:function(e,n){var l="transition".concat(n.props.group?"-group":""),data={props:{name:t,mode:n.props.mode},on:{beforeEnter:function(t){t.style.transformOrigin=n.props.origin,t.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(data.on.leave=r(data.on.leave,(function(t){var e=t.offsetTop,n=t.offsetLeft,o=t.offsetWidth,r=t.offsetHeight;t._transitionInitialStyles={position:t.style.position,top:t.style.top,left:t.style.left,width:t.style.width,height:t.style.height},t.style.position="absolute",t.style.top=e+"px",t.style.left=n+"px",t.style.width=o+"px",t.style.height=r+"px"})),data.on.afterLeave=r(data.on.afterLeave,(function(t){if(t&&t._transitionInitialStyles){var e=t._transitionInitialStyles,n=e.position,o=e.top,r=e.left,l=e.width,c=e.height;delete t._transitionInitialStyles,t.style.position=n||"",t.style.top=o||"",t.style.left=r||"",t.style.width=l||"",t.style.height=c||""}}))),n.props.hideOnLeave&&(data.on.leave=r(data.on.leave,(function(t){t._initialDisplay=t.style.display,t.style.display="none"})),data.on.afterLeave=r(data.on.afterLeave,(function(t){t&&(t.style.display=t._initialDisplay||"")}))),e(l,Object(o.a)(n.data,data),n.children)}}}function c(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:t,functional:!0,props:{mode:{type:String,default:n}},render:function(n,r){return n("transition",Object(o.a)(r.data,{props:{name:t},on:e}),r.children)}}}var d=n(2),h=n(1),v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e?"width":"height",o="offset".concat(Object(h.r)(n));return{beforeEnter:function(t){t._parent=t.parentNode,t._initialStyle=Object(d.a)({transition:t.style.transition,overflow:t.style.overflow},n,t.style[n])},enter:function(e){var r=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden";var l="".concat(e[o],"px");e.style[n]="0",e.offsetHeight,e.style.transition=r.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((function(){e.style[n]=l}))},afterEnter:l,enterCancelled:l,leave:function(t){t._initialStyle=Object(d.a)({transition:"",overflow:t.style.overflow},n,t.style[n]),t.style.overflow="hidden",t.style[n]="".concat(t[o],"px"),t.offsetHeight,requestAnimationFrame((function(){return t.style[n]="0"}))},afterLeave:r,leaveCancelled:r};function r(e){t&&e._parent&&e._parent.classList.remove(t),l(e)}function l(t){var e=t._initialStyle[n];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[n]=e),delete t._initialStyle}},f=(l("carousel-transition"),l("carousel-reverse-transition"),l("tab-transition"),l("tab-reverse-transition"),l("menu-transition"),l("fab-transition","center center","out-in"),l("dialog-transition"),l("dialog-bottom-transition"),l("dialog-top-transition"),l("fade-transition")),y=(l("scale-transition"),l("scroll-x-transition"),l("scroll-x-reverse-transition"),l("scroll-y-transition"),l("scroll-y-reverse-transition"),l("slide-x-transition")),m=(l("slide-x-reverse-transition"),l("slide-y-transition"),l("slide-y-reverse-transition"),c("expand-transition",v())),w=c("expand-x-transition",v("",!0))},347:function(t,e,n){},351:function(t,e,n){t.exports=n.p+"img/ride.8085270.png"},352:function(t,e,n){t.exports=n.p+"img/teja.030b945.jpg"},356:function(t,e,n){"use strict";n(9),n(7),n(15),n(8),n(16);var o=n(13),r=n(2),l=(n(11),n(347),n(18)),c=n(346),d=n(138),h=n(52),v=n(177),f=n(39),y=n(81),m=n(139),w=n(104),_=n(12);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(l.a)(h.a,w.a,m.a,f.a,Object(v.a)("chipGroup"),Object(y.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return x(x(x(x({"v-chip":!0},m.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(m.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var n=Object(o.a)(e,2),r=n[0],l=n[1];t.$attrs.hasOwnProperty(r)&&Object(_.a)(r,l,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(d.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(c.b,t)},genClose:function(){var t=this;return this.$createElement(d.a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],n=this.generateRouteLink(),o=n.tag,data=n.data;data.attrs=x(x({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var r=this.textColor||this.outlined&&this.color;return t(o,this.setTextColor(r,data),e)}})},361:function(t,e,n){"use strict";n.r(e);var o=n(51),r=n(74),l=n.n(r),c=n(129),d=n(356),h=n(328),v=n(334),f=n(331),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:" pa-4  "},[o("div",{staticClass:"bg "},[o("v-row",{attrs:{align:"center",justify:"center"}},[o("v-col",{staticClass:"mt-15 ",attrs:{cols:"12",lg:"7"}},[o("div",{staticClass:"mt-10 mb-10  mx-15"},[o("h1",{staticClass:"font-weight-bold display-1 text-justify  mt-15 hidden-xs-only"},[t._v("Advanced AI integrated bike taxi services in Hyderabad")]),t._v(" "),o("h1",{staticClass:" font-weight-bold display-1 justify-center  mt-15 hidden-sm-and-up "},[t._v("Advanced AI integrated bike taxi services in Hyderabad")]),t._v(" "),o("br"),t._v(" "),o("h3",{staticClass:"subtitle text-justify hidden-xs-only font-weight-regular "},[t._v("Mopedo offers the most affordable and accessible mode to commute for everyone. \n             You have reached the right platform that provides surveillance for both of the customers and pilots. cards and more.")]),t._v(" "),o("h3",{staticClass:"subtitle justify-center hidden-sm-and-up font-weight-regular  "},[t._v("Mopedo offers the most affordable and accessible mode to commute for everyone. \n             You have reached the right platform that provides surveillance for both of the customers and pilots. cards and more.")]),t._v(" "),o("v-btn",{staticClass:"mt-8 black--text hidden-xs-only",attrs:{color:"yellow",elevation:"5",href:"https://www.mopedo.in/index.html#",target:"_blank"}},[t._v("get mopedo app")]),t._v(" "),o("v-btn",{staticClass:"mt-8 black--text hidden-sm-and-up",attrs:{color:"yellow",elevation:"5"}},[t._v("get mopedo app")]),t._v(" "),o("v-btn",{staticClass:" mx-5 mt-8 black--text hidden-xs-only",attrs:{color:"yellow",elevation:"5"}},[t._v(" pre-Register AS driver")]),t._v(" "),o("v-btn",{staticClass:" mt-8 black--text hidden-sm-and-up ",attrs:{color:"yellow",elevation:"5"}},[t._v(" pre-Register AS driver")])],1)]),t._v(" "),o("v-col",{staticClass:" mt-8 hidden-xs-only",attrs:{cols:"12",lg:"5"}},[o("img",{attrs:{src:n(351)}})])],1)],1),t._v(" "),o("v-container",{staticClass:"mt-15 "},[o("div",{staticClass:"mt-5"},[o("v-row",{attrs:{align:"center",justify:"center"}},[o("v-col",{attrs:{cols:"10",lg:"3"}},[o("img",{attrs:{src:n(352)}})]),t._v(" "),o("v-col",{attrs:{cols:"12",lg:"2"}}),t._v(" "),o("v-col",{staticClass:"mt-15",attrs:{cols:"12",lg:"7"}},[o("v-chip",{staticClass:"mb-5  ",attrs:{color:"yellow lighten-1  font-weight-bold deep-black--text"}},[t._v("Get To Know Us ")]),t._v(" "),o("h1",{staticClass:"display-1 font-weight-bold text-justify   "},[t._v("India’s top bike taxi services ")]),t._v(" "),o("br"),t._v(" "),o("h3",{staticClass:"subtitle text-justify font-weight-regular "},[t._v("Get To Know Us \tIndia’s top bike taxi services (Headline)\n            We have created on-demand bike taxi services that will fulfill the customer and rider experience.\n            A new mode of travel which makes it easy for the customers as we provide a disruptive service model.")]),t._v(" "),o("h3",{staticClass:"subtitle text-justify font-weight-regular "},[t._v("\n\t          We are here to serve you better in all ways for both the customers and riders. \n            Our services are entirely assist based applications that are accessible and also ensure high-end security for users for safer rides. \n             ")])],1)],1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:c.a,VChip:d.a,VCol:h.a,VContainer:v.a,VRow:f.a})}}]);