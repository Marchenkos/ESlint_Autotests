!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/dist",r(r.s=0)}([function(t,n,r){r(1),r(2),t.exports=r(3)},function(t,n,r){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&c(t,n)}function c(t,n){return(c=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function a(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function f(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function l(t,n,r){return n&&f(t.prototype,n),r&&f(t,r),t}r.r(n),r.d(n,"Shape",(function(){return s})),r.d(n,"Rectangle",(function(){return p})),r.d(n,"Square",(function(){return y})),r.d(n,"Circle",(function(){return h})),r.d(n,"ShapesStore",(function(){return d}));var s=function(){function t(n){a(this,t),this.name=n}return l(t,null,[{key:"calculateArea",value:function(){}}]),t}(),p=function(t){function n(t,r){var e;return a(this,n),(e=o(this,u(n).call(this,"Rectangle"))).height=t,e.width=r,e}return i(n,t),l(n,[{key:"calculateArea",value:function(){return this.height*this.width}}]),n}(s),y=function(t){function n(t){var r;return a(this,n),(r=o(this,u(n).call(this,"Square"))).sideLength=t,r}return i(n,t),l(n,[{key:"calculateArea",value:function(){return this.sideLength*this.sideLength}}]),n}(s),h=function(t){function n(t){var r;return a(this,n),(r=o(this,u(n).call(this,"Circle"))).radius=t,r}return i(n,t),l(n,[{key:"calculateArea",value:function(){return 3.14*this.radius*this.radius}}]),n}(s),d=function(t){function n(t){var r;return a(this,n),(r=o(this,u(n).call(this))).shapesArray=t,r}return i(n,t),l(n,[{key:"calculateArea",value:function(){for(var t=0,n=0;n<this.shapesArray.length;n++)t+=this.shapesArray[n].calculateArea();return t}}]),n}(s)},function(t,n,r){"use strict";function e(t){return function(t){if(Array.isArray(t)){for(var n=0,r=new Array(t.length);n<t.length;n++)r[n]=t[n];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(t){var n=this,r=Array.prototype.slice.call(arguments,1);return function(){for(var o=arguments.length,u=new Array(o),i=0;i<o;i++)u[i]=arguments[i];return t.apply(n,[].concat(e(r),u))}}function u(t){var n=t.length;return function r(){for(var o=arguments.length,u=new Array(o),i=0;i<o;i++)u[i]=arguments[i];return u.length>=n?t.apply(this,u):function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];var i=[].concat(u,n);return r.apply(void 0,e(i))}}}function i(t){var n=new Map;return function(){var r=arguments.length<=0?void 0:arguments[0];if(n.has(r.toString()))return console.log("From cache"),n.get(r.toString());console.log("Calculating");var e=t(r);return n.set(r.toString(),e),e}}function c(t){var n=this,r=Array.prototype.slice.call(arguments,1);return function(){return t.apply(n,r)}}r.r(n),r.d(n,"applyPartial",(function(){return o})),r.d(n,"curry",(function(){return u})),r.d(n,"memoize",(function(){return i})),r.d(n,"lazy",(function(){return c}))},function(t,n,r){"use strict";function e(t,n){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,e=0;e<t.length;e++)r=n(t[e],r);return r}function o(t,n){return e(t,(function(t,r){return r.push(n(t)),r}),[])}function u(t,n){return e(t,(function(t,r){return n(t)&&r.push(t),r}),[])}function i(t){return e(t,(function(t,n){return t+n}),0)/t.length}function c(t){return i(u(t,(function(t){return t%2==0&&null!=t})))}r.r(n),r.d(n,"folding",(function(){return e})),r.d(n,"map",(function(){return o})),r.d(n,"filter",(function(){return u})),r.d(n,"average",(function(){return i})),r.d(n,"averageOfEven",(function(){return c}))}]);