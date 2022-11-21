/*! For license information please see 376.2dcbc6f3.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk_kie_chain_status_webpage=self.webpackChunk_kie_chain_status_webpage||[]).push([[376],{474:function(t,e,r){r.d(e,{C:function(){return s},H:function(){return u}});var n=r(3104),o=r(6746),i=r(9526),a=r(6672),s=function(){function t(e,r){var o;if(void 0===e&&(e=""),void 0===r&&(r={}),e instanceof t)return e;"number"===typeof e&&(e=(0,n.Yt)(e)),this.originalInput=e;var a=(0,i.uA)(e);this.originalInput=e,this.r=a.r,this.g=a.g,this.b=a.b,this.a=a.a,this.roundA=Math.round(100*this.a)/100,this.format=null!==(o=r.format)&&void 0!==o?o:a.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=a.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},t.prototype.getBrightness=function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},t.prototype.getLuminance=function(){var t=this.toRgb(),e=t.r/255,r=t.g/255,n=t.b/255;return.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))},t.prototype.getAlpha=function(){return this.a},t.prototype.setAlpha=function(t){return this.a=(0,a.Yq)(t),this.roundA=Math.round(100*this.a)/100,this},t.prototype.toHsv=function(){var t=(0,n.py)(this.r,this.g,this.b);return{h:360*t.h,s:t.s,v:t.v,a:this.a}},t.prototype.toHsvString=function(){var t=(0,n.py)(this.r,this.g,this.b),e=Math.round(360*t.h),r=Math.round(100*t.s),o=Math.round(100*t.v);return 1===this.a?"hsv("+e+", "+r+"%, "+o+"%)":"hsva("+e+", "+r+"%, "+o+"%, "+this.roundA+")"},t.prototype.toHsl=function(){var t=(0,n.lC)(this.r,this.g,this.b);return{h:360*t.h,s:t.s,l:t.l,a:this.a}},t.prototype.toHslString=function(){var t=(0,n.lC)(this.r,this.g,this.b),e=Math.round(360*t.h),r=Math.round(100*t.s),o=Math.round(100*t.l);return 1===this.a?"hsl("+e+", "+r+"%, "+o+"%)":"hsla("+e+", "+r+"%, "+o+"%, "+this.roundA+")"},t.prototype.toHex=function(t){return void 0===t&&(t=!1),(0,n.vq)(this.r,this.g,this.b,t)},t.prototype.toHexString=function(t){return void 0===t&&(t=!1),"#"+this.toHex(t)},t.prototype.toHex8=function(t){return void 0===t&&(t=!1),(0,n.s)(this.r,this.g,this.b,this.a,t)},t.prototype.toHex8String=function(t){return void 0===t&&(t=!1),"#"+this.toHex8(t)},t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},t.prototype.toRgbString=function(){var t=Math.round(this.r),e=Math.round(this.g),r=Math.round(this.b);return 1===this.a?"rgb("+t+", "+e+", "+r+")":"rgba("+t+", "+e+", "+r+", "+this.roundA+")"},t.prototype.toPercentageRgb=function(){var t=function(t){return Math.round(100*(0,a.sh)(t,255))+"%"};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},t.prototype.toPercentageRgbString=function(){var t=function(t){return Math.round(100*(0,a.sh)(t,255))};return 1===this.a?"rgb("+t(this.r)+"%, "+t(this.g)+"%, "+t(this.b)+"%)":"rgba("+t(this.r)+"%, "+t(this.g)+"%, "+t(this.b)+"%, "+this.roundA+")"},t.prototype.toName=function(){if(0===this.a)return"transparent";if(this.a<1)return!1;for(var t="#"+(0,n.vq)(this.r,this.g,this.b,!1),e=0,r=Object.entries(o.R);e<r.length;e++){var i=r[e],a=i[0];if(t===i[1])return a}return!1},t.prototype.toString=function(t){var e=Boolean(t);t=null!==t&&void 0!==t?t:this.format;var r=!1,n=this.a<1&&this.a>=0;return e||!n||!t.startsWith("hex")&&"name"!==t?("rgb"===t&&(r=this.toRgbString()),"prgb"===t&&(r=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(r=this.toHexString()),"hex3"===t&&(r=this.toHexString(!0)),"hex4"===t&&(r=this.toHex8String(!0)),"hex8"===t&&(r=this.toHex8String()),"name"===t&&(r=this.toName()),"hsl"===t&&(r=this.toHslString()),"hsv"===t&&(r=this.toHsvString()),r||this.toHexString()):"name"===t&&0===this.a?this.toName():this.toRgbString()},t.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},t.prototype.clone=function(){return new t(this.toString())},t.prototype.lighten=function(e){void 0===e&&(e=10);var r=this.toHsl();return r.l+=e/100,r.l=(0,a.V2)(r.l),new t(r)},t.prototype.brighten=function(e){void 0===e&&(e=10);var r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(-e/100*255))),r.g=Math.max(0,Math.min(255,r.g-Math.round(-e/100*255))),r.b=Math.max(0,Math.min(255,r.b-Math.round(-e/100*255))),new t(r)},t.prototype.darken=function(e){void 0===e&&(e=10);var r=this.toHsl();return r.l-=e/100,r.l=(0,a.V2)(r.l),new t(r)},t.prototype.tint=function(t){return void 0===t&&(t=10),this.mix("white",t)},t.prototype.shade=function(t){return void 0===t&&(t=10),this.mix("black",t)},t.prototype.desaturate=function(e){void 0===e&&(e=10);var r=this.toHsl();return r.s-=e/100,r.s=(0,a.V2)(r.s),new t(r)},t.prototype.saturate=function(e){void 0===e&&(e=10);var r=this.toHsl();return r.s+=e/100,r.s=(0,a.V2)(r.s),new t(r)},t.prototype.greyscale=function(){return this.desaturate(100)},t.prototype.spin=function(e){var r=this.toHsl(),n=(r.h+e)%360;return r.h=n<0?360+n:n,new t(r)},t.prototype.mix=function(e,r){void 0===r&&(r=50);var n=this.toRgb(),o=new t(e).toRgb(),i=r/100;return new t({r:(o.r-n.r)*i+n.r,g:(o.g-n.g)*i+n.g,b:(o.b-n.b)*i+n.b,a:(o.a-n.a)*i+n.a})},t.prototype.analogous=function(e,r){void 0===e&&(e=6),void 0===r&&(r=30);var n=this.toHsl(),o=360/r,i=[this];for(n.h=(n.h-(o*e>>1)+720)%360;--e;)n.h=(n.h+o)%360,i.push(new t(n));return i},t.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new t(e)},t.prototype.monochromatic=function(e){void 0===e&&(e=6);for(var r=this.toHsv(),n=r.h,o=r.s,i=r.v,a=[],s=1/e;e--;)a.push(new t({h:n,s:o,v:i})),i=(i+s)%1;return a},t.prototype.splitcomplement=function(){var e=this.toHsl(),r=e.h;return[this,new t({h:(r+72)%360,s:e.s,l:e.l}),new t({h:(r+216)%360,s:e.s,l:e.l})]},t.prototype.onBackground=function(e){var r=this.toRgb(),n=new t(e).toRgb();return new t({r:n.r+(r.r-n.r)*r.a,g:n.g+(r.g-n.g)*r.a,b:n.b+(r.b-n.b)*r.a})},t.prototype.triad=function(){return this.polyad(3)},t.prototype.tetrad=function(){return this.polyad(4)},t.prototype.polyad=function(e){for(var r=this.toHsl(),n=r.h,o=[this],i=360/e,a=1;a<e;a++)o.push(new t({h:(n+a*i)%360,s:r.s,l:r.l}));return o},t.prototype.equals=function(e){return this.toRgbString()===new t(e).toRgbString()},t}();function u(t,e){return void 0===t&&(t=""),void 0===e&&(e={}),new s(t,e)}},2319:function(t,e,r){r.d(e,{Z:function(){return f}});var n=r(7896),o=r(6666),i=r(9249),a=r(7371),s=r(5754),u=r(3820),c=r(969),h=r(5749),l=r(5667),p=r.n(l),f=function(t){(0,s.Z)(r,t);var e=(0,u.Z)(r);function r(){var t;(0,i.Z)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).closeTimer=null,t.close=function(e){e&&e.stopPropagation(),t.clearCloseTimer();var r=t.props,n=r.onClose,o=r.noticeKey;n&&n(o)},t.startCloseTimer=function(){t.props.duration&&(t.closeTimer=window.setTimeout((function(){t.close()}),1e3*t.props.duration))},t.clearCloseTimer=function(){t.closeTimer&&(clearTimeout(t.closeTimer),t.closeTimer=null)},t}return(0,a.Z)(r,[{key:"componentDidMount",value:function(){this.startCloseTimer()}},{key:"componentDidUpdate",value:function(t){(this.props.duration!==t.duration||this.props.updateMark!==t.updateMark||this.props.visible!==t.visible&&this.props.visible)&&this.restartCloseTimer()}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"restartCloseTimer",value:function(){this.clearCloseTimer(),this.startCloseTimer()}},{key:"render",value:function(){var t=this,e=this.props,r=e.prefixCls,i=e.className,a=e.closable,s=e.closeIcon,u=e.style,l=e.onClick,f=e.children,v=e.holder,d="".concat(r,"-notice"),y=Object.keys(this.props).reduce((function(e,r){return"data-"!==r.substr(0,5)&&"aria-"!==r.substr(0,5)&&"role"!==r||(e[r]=t.props[r]),e}),{}),g=c.createElement("div",(0,n.Z)({className:p()(d,i,(0,o.Z)({},"".concat(d,"-closable"),a)),style:u,onMouseEnter:this.clearCloseTimer,onMouseLeave:this.startCloseTimer,onClick:l},y),c.createElement("div",{className:"".concat(d,"-content")},f),a?c.createElement("a",{tabIndex:0,onClick:this.close,className:"".concat(d,"-close")},s||c.createElement("span",{className:"".concat(d,"-close-x")})):null);return v?h.createPortal(g,v):g}}]),r}(c.Component);f.defaultProps={onClose:function(){},duration:1.5}},3522:function(t,e,r){r.r(e),r.d(e,{default:function(){return G}});var n=r(2159),o=r(7896),i=r(3028),a=r(9249),s=r(7371),u=r(5754),c=r(3820),h=r(969);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function p(){p=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(L){u=function(t,e,r){return t[e]=r}}function c(t,e,r,o){var i=e&&e.prototype instanceof v?e:v,a=Object.create(i.prototype),s=new S(o||[]);return n(a,"_invoke",{value:C(t,r,s)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(L){return{type:"throw",arg:L}}}t.wrap=c;var f={};function v(){}function d(){}function y(){}var g={};u(g,i,(function(){return this}));var m=Object.getPrototypeOf,b=m&&m(m(O([])));b&&b!==e&&r.call(b,i)&&(g=b);var w=y.prototype=v.prototype=Object.create(g);function k(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(n,i,a,s){var u=h(t[n],t,i);if("throw"!==u.type){var c=u.arg,p=c.value;return p&&"object"==l(p)&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){o("next",t,a,s)}),(function(t){o("throw",t,a,s)})):e.resolve(p).then((function(t){c.value=t,a(c)}),(function(t){return o("throw",t,a,s)}))}s(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function C(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return N()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=M(a,r);if(s){if(s===f)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function M(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,M(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=h(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return d.prototype=y,n(w,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:d,configurable:!0}),d.displayName=u(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},k(x.prototype),u(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(c(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(w),u(w,s,"Generator"),u(w,i,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=O,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function f(t,e,r,n,o,i,a){try{var s=t[i](a),u=s.value}catch(c){return void r(c)}s.done?e(u):Promise.resolve(u).then(n,o)}function v(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){f(i,n,o,a,s,"next",t)}function s(t){f(i,n,o,a,s,"throw",t)}a(void 0)}))}}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var g,m=r(5749),b=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){d(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},r.t(m,2)),w=b.version,k=b.render,x=b.unmountComponentAtNode;try{Number((w||"").split(".")[0])>=18&&(g=b.createRoot)}catch(F){}function C(t){var e=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;e&&"object"===l(e)&&(e.usingClientEntryPoint=t)}var M="__rc_react_root__";function E(t,e){g?function(t,e){C(!0);var r=e[M]||g(e);C(!1),r.render(t),e[M]=r}(t,e):function(t,e){k(t,e)}(t,e)}function _(t){return S.apply(this,arguments)}function S(){return(S=v(p().mark((function t(e){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.resolve().then((function(){var t;null===(t=e[M])||void 0===t||t.unmount(),delete e[M]})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(t){x(t)}function N(){return(N=v(p().mark((function t(e){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===g){t.next=2;break}return t.abrupt("return",_(e));case 2:O(e);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var L=r(5667),P=r.n(L),T=r(8289),Z=r(2319),j=r(767),H=["getContainer"],R=0,A=Date.now();function I(){var t=R;return R+=1,"rcNotification_".concat(A,"_").concat(t)}var D=function(t){(0,u.Z)(r,t);var e=(0,c.Z)(r);function r(){var t;(0,a.Z)(this,r);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))).state={notices:[]},t.hookRefs=new Map,t.add=function(e,r){var n,o=null!==(n=e.key)&&void 0!==n?n:I(),a=(0,i.Z)((0,i.Z)({},e),{},{key:o}),s=t.props.maxCount;t.setState((function(t){var e=t.notices,n=e.map((function(t){return t.notice.key})).indexOf(o),i=e.concat();return-1!==n?i.splice(n,1,{notice:a,holderCallback:r}):(s&&e.length>=s&&(a.key=i[0].notice.key,a.updateMark=I(),a.userPassKey=o,i.shift()),i.push({notice:a,holderCallback:r})),{notices:i}}))},t.remove=function(e){t.setState((function(t){return{notices:t.notices.filter((function(t){var r=t.notice,n=r.key,o=r.userPassKey;return(null!==o&&void 0!==o?o:n)!==e}))}}))},t.noticePropsMap={},t}return(0,s.Z)(r,[{key:"getTransitionName",value:function(){var t=this.props,e=t.prefixCls,r=t.animation,n=this.props.transitionName;return!n&&r&&(n="".concat(e,"-").concat(r)),n}},{key:"render",value:function(){var t=this,e=this.state.notices,r=this.props,n=r.prefixCls,a=r.className,s=r.closeIcon,u=r.style,c=[];return e.forEach((function(r,o){var a=r.notice,u=r.holderCallback,h=o===e.length-1?a.updateMark:void 0,l=a.key,p=a.userPassKey,f=(0,i.Z)((0,i.Z)((0,i.Z)({prefixCls:n,closeIcon:s},a),a.props),{},{key:l,noticeKey:p||l,updateMark:h,onClose:function(e){var r;t.remove(e),null===(r=a.onClose)||void 0===r||r.call(a)},onClick:a.onClick,children:a.content});c.push(l),t.noticePropsMap[l]={props:f,holderCallback:u}})),h.createElement("div",{className:P()(n,a),style:u},h.createElement(T.V,{keys:c,motionName:this.getTransitionName(),onVisibleChanged:function(e,r){var n=r.key;e||delete t.noticePropsMap[n]}},(function(e){var r=e.key,a=e.className,s=e.style,u=e.visible,c=t.noticePropsMap[r],l=c.props,p=c.holderCallback;return p?h.createElement("div",{key:r,className:P()(a,"".concat(n,"-hook-holder")),style:(0,i.Z)({},s),ref:function(e){"undefined"!==typeof r&&(e?(t.hookRefs.set(r,e),p(e,l)):t.hookRefs.delete(r))}}):h.createElement(Z.Z,(0,o.Z)({},l,{className:P()(a,null===l||void 0===l?void 0:l.className),style:(0,i.Z)((0,i.Z)({},s),null===l||void 0===l?void 0:l.style),visible:u}))})))}}]),r}(h.Component);D.newInstance=void 0,D.defaultProps={prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}},D.newInstance=function(t,e){var r=t||{},i=r.getContainer,a=(0,n.Z)(r,H),s=document.createElement("div");i?i().appendChild(s):document.body.appendChild(s);var u=!1;E(h.createElement(D,(0,o.Z)({},a,{ref:function(t){u||(u=!0,e({notice:function(e){t.add(e)},removeNotice:function(e){t.remove(e)},component:t,destroy:function(){!function(t){N.apply(this,arguments)}(s),s.parentNode&&s.parentNode.removeChild(s)},useNotification:function(){return(0,j.Z)(t)}}))}})),s)};var G=D},767:function(t,e,r){r.d(e,{Z:function(){return u}});var n=r(8079),o=r(7896),i=r(6234),a=r(969),s=r(2319);function u(t){var e=a.useRef({}),r=a.useState([]),u=(0,i.Z)(r,2),c=u[0],h=u[1];return[function(r){var i=!0;t.add(r,(function(t,r){var u=r.key;if(t&&(!e.current[u]||i)){var c=a.createElement(s.Z,(0,o.Z)({},r,{holder:t}));e.current[u]=c,h((function(t){var e=t.findIndex((function(t){return t.key===r.key}));if(-1===e)return[].concat((0,n.Z)(t),[c]);var o=(0,n.Z)(t);return o[e]=c,o}))}i=!1}))},a.createElement(a.Fragment,null,c)]}}}]);
//# sourceMappingURL=376.2dcbc6f3.chunk.js.map