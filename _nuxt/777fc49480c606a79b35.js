(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{170:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.d(e,"a",function(){return n})},171:function(t,e,r){"use strict";function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}r.d(e,"a",function(){return n})},172:function(t,e,r){"use strict";var n=r(18);function o(t,e){return!e||"object"!==Object(n.a)(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}r.d(e,"a",function(){return o})},173:function(t,e,r){"use strict";function n(t,p){return(n=Object.setPrototypeOf||function(t,p){return t.__proto__=p,t})(t,p)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}r.d(e,"a",function(){return o})},174:function(t,e,r){"use strict";var n=r(0),o="undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys;function c(t,e,r){(r?Reflect.getOwnMetadataKeys(e,r):Reflect.getOwnMetadataKeys(e)).forEach(function(n){var o=r?Reflect.getOwnMetadata(n,e,r):Reflect.getOwnMetadata(n,e);r?Reflect.defineMetadata(n,o,t,r):Reflect.defineMetadata(n,o,t)})}var f={__proto__:[]}instanceof Array;function d(t){return function(e,r,n){var o="function"==typeof e?e:e.constructor;o.__decorators__||(o.__decorators__=[]),"number"!=typeof n&&(n=void 0),o.__decorators__.push(function(e){return t(e,r,n)})}}var l=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function m(t,e){void 0===e&&(e={}),e.name=e.name||t._componentTag||t.name;var r=t.prototype;Object.getOwnPropertyNames(r).forEach(function(t){if("constructor"!==t)if(l.indexOf(t)>-1)e[t]=r[t];else{var n=Object.getOwnPropertyDescriptor(r,t);void 0!==n.value?"function"==typeof n.value?(e.methods||(e.methods={}))[t]=n.value:(e.mixins||(e.mixins=[])).push({data:function(){var e;return(e={})[t]=n.value,e}}):(n.get||n.set)&&((e.computed||(e.computed={}))[t]={get:n.get,set:n.set})}}),(e.mixins||(e.mixins=[])).push({data:function(){return function(t,e){var r=e.prototype._init;e.prototype._init=function(){var e=this,r=Object.getOwnPropertyNames(t);if(t.$options.props)for(var n in t.$options.props)t.hasOwnProperty(n)||r.push(n);r.forEach(function(r){"_"!==r.charAt(0)&&Object.defineProperty(e,r,{get:function(){return t[r]},set:function(e){t[r]=e},configurable:!0})})};var data=new e;e.prototype._init=r;var n={};return Object.keys(data).forEach(function(t){void 0!==data[t]&&(n[t]=data[t])}),n}(this,t)}});var d=t.__decorators__;d&&(d.forEach(function(t){return t(e)}),delete t.__decorators__);var m,y,h=Object.getPrototypeOf(t.prototype),O=h instanceof n.a?h.constructor:n.a,_=O.extend(e);return function(t,e,r){Object.getOwnPropertyNames(e).forEach(function(n){if(!v[n]){var o=Object.getOwnPropertyDescriptor(t,n);if(!o||o.configurable){var c,d,l=Object.getOwnPropertyDescriptor(e,n);if(!f){if("cid"===n)return;var m=Object.getOwnPropertyDescriptor(r,n);if(c=l.value,d=typeof c,null!=c&&("object"===d||"function"===d)&&m&&m.value===l.value)return}0,Object.defineProperty(t,n,l)}}})}(_,t,O),o&&(c(m=_,y=t),Object.getOwnPropertyNames(y.prototype).forEach(function(t){c(m.prototype,y.prototype,t)}),Object.getOwnPropertyNames(y).forEach(function(t){c(m,y,t)})),_}var v={prototype:!0,arguments:!0,callee:!0,caller:!0};function y(t){return"function"==typeof t?m(t):function(e){return m(e,t)}}y.registerHooks=function(t){l.push.apply(l,t)};var h=y;r.d(e,"b",function(){return j}),r.d(e,"a",function(){return h});var O="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function _(t,e,r){O&&(Array.isArray(t)||"function"==typeof t||void 0!==t.type||(t.type=Reflect.getMetadata("design:type",e,r)))}function j(t){return void 0===t&&(t={}),function(e,r){_(t,e,r),d(function(e,r){(e.props||(e.props={}))[r]=t})(e,r)}}},175:function(t,e,r){"use strict";function n(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}r.d(e,"a",function(){return o})},179:function(t,e,r){var content=r(192);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("77151775",content,!0,{sourceMap:!1})},191:function(t,e,r){"use strict";var n=r(179);r.n(n).a},192:function(t,e,r){(t.exports=r(66)(!1)).push([t.i,".card[data-v-d74b3b78]{border:1px solid #ccc;box-shadow:0 0 2rem 0 rgba(0,0,0,.2);position:relative;transition:box-shadow .2s;background-position:100% 0;background-size:cover;font-size:.9rem;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-end;background-color:#fff;background-color:var(--secondary-color,#fff)}.card[small][data-v-d74b3b78]{min-height:7.5rem}.card[data-v-d74b3b78]:hover{box-shadow:0 0 1rem 0 rgba(0,0,0,.4)}.card>a[data-v-d74b3b78]{color:#000;position:absolute;top:0;bottom:0;right:0;left:0}.card>a[data-v-d74b3b78]:hover{opacity:1}.card h3[data-v-d74b3b78]{padding:0 1rem;margin:1rem 0 0;background-color:#fff;display:inline-block}.card h3[data-v-d74b3b78]:last-child{padding-bottom:1rem}.card section[data-v-d74b3b78]{background-color:hsla(0,0%,100%,.9);padding:1rem;align-self:stretch}.stump[data-v-d74b3b78]{min-height:5rem}[major] .stump[data-v-d74b3b78]{min-height:15rem}",""])},198:function(t,e,r){var content=r(221);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("36873827",content,!0,{sourceMap:!1})},201:function(t,e,r){"use strict";r(93);var n=r(170),o=r(175),c=r(172),f=r(171),d=r(173),l=r(18),m=r(0),v=r(174),y=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},h=function(t){function e(){return Object(n.a)(this,e),Object(c.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(o.a)(e,[{key:"isPointingOutside",get:function(){return this.$props.to.startsWith("http")}}]),e}(m.a);y([Object(v.b)(String)],h.prototype,"title",void 0),y([Object(v.b)(String)],h.prototype,"image",void 0),y([Object(v.b)({default:""})],h.prototype,"to",void 0),y([Object(v.b)(String)],h.prototype,"info",void 0);var O=h=y([v.a],h),_=(r(191),r(36)),component=Object(_.a)(O,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"card",style:{backgroundImage:"url("+t.image+")"}},[t.to?r("a",{attrs:{href:t.to,target:t.isPointingOutside?"_blank":"_self",rel:"noopener"}}):t._e(),t._v(" "),r("div",{staticClass:"stump"}),t._v(" "),t.title?r("h3",[t._v("\n    "+t._s(t.title)+"\n  ")]):t._e(),t._v(" "),t.info?r("section",{domProps:{innerHTML:t._s(t.info)}}):t._e()])},[],!1,null,"d74b3b78",null);e.a=component.exports},220:function(t,e,r){"use strict";var n=r(198);r.n(n).a},221:function(t,e,r){(t.exports=r(66)(!1)).push([t.i,"main{position:relative;top:60px}.minor{display:grid;grid-column-gap:2rem;grid-template-columns:repeat(auto-fill,minmax(10rem,1fr));margin-left:10%;margin-right:10%;max-width:40rem}.minor,.minor .card{box-sizing:border-box}.minor .card{margin-left:0;margin-right:0}.card{margin-left:10%;margin-bottom:2rem;max-width:40rem;margin-right:10%}",""])},231:function(t,e,r){"use strict";r.r(e);r(37);var n,o=r(5),c=r(170),f=r(172),d=r(171),l=r(173),m=r(18),v=r(0),y=r(174),h=r(201),O=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},_=function(t){function e(){return Object(c.a)(this,e),Object(f.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(l.a)(e,t),e}(v.a),j=_=O([Object(y.a)({components:{Card:h.a},asyncData:(n=Object(o.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.app.deepLoadCardToc("toc.md",{basePath:"index/"});case 2:return t.t0=t.sent,t.abrupt("return",{sections:t.t0});case 4:case"end":return t.stop()}},t)})),function(t){return n.apply(this,arguments)})})],_),w=(r(220),r(36)),component=Object(w.a)(j,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",t._l(t.sections,function(section,e){return r("section",{key:"section-"+e},[section.title?r("h2",{attrs:{id:section.anchor}},[t._v("\n      "+t._s(section.title)+"\n    ")]):t._e(),t._v(" "),t._l(section.collections.major,function(t,e){return r("Card",{key:"major-"+e,attrs:{title:t.attributes.title,image:t.attributes.image,to:t.attributes.to,info:t.html,major:""}})}),t._v(" "),t._l(section.collections.regular,function(t,e){return r("Card",{key:"regular-"+e,attrs:{title:t.attributes.title,image:t.attributes.image,to:t.attributes.to,info:t.html}})}),t._v(" "),r("section",{staticClass:"minor"},t._l(section.collections.minor,function(t,e){return r("Card",{key:"minor-"+e,attrs:{title:t.attributes.title,image:t.attributes.image,to:t.attributes.to,info:t.html}})}),1)],2)}),0)},[],!1,null,null,null);e.default=component.exports}}]);