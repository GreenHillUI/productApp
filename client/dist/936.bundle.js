"use strict";(self.webpackChunkproductapp=self.webpackChunkproductapp||[]).push([[936],{1936:(t,e,n)=>{n.r(e),n.d(e,{default:()=>d});var r=n(7294),o=n(9669),c=n.n(o),u=n(6113);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},s(t,e)}function l(t,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&s(t,e)}(i,t);var e,n,r,o,u=(r=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=p(r);if(o){var n=p(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return l(this,t)});function i(){return a(this,i),u.apply(this,arguments)}return e=i,(n=[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this.props,e=t.productId,n=t.setProductInfo,r=t.setStyles,o=t.setSelectedStyle,u=t.setMetaData,i=t.setProductQs,a=t.setReviews,f=t.setMetaCharacteristics;return c().get("/a/products/".concat(e)).then((function(t){n(t.data)})).catch((function(){return console.log("Error loading product info")})),c().get("/a/products/".concat(e,"/styles")).then((function(t){r(t.data.results),o(t.data.results.filter((function(t){return t["default?"]})))})).catch((function(t){return console.log(t)})),c().get("/a/reviews/".concat(e,"/meta")).then((function(t){u(t.data.ratings),f(t.data.characteristics)})).catch((function(t){return console.log(t)})),c().get("/a/reviews/".concat(e)).then((function(t){a(t.data.results)})).catch((function(t){return console.error("help",t)})),c().get("/a/questions/".concat(e,"?count=",100)).then((function(t){i(t.data)})).catch((function(t){console.log(t)})),null}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),i}(r.Component);const d=(0,u.$j)((function(t){return{productId:t.productId}}),(function(t){return{setProductInfo:function(e){return t({type:"SETPRODUCTINFO",productInfo:e})},setStyles:function(e){return t({type:"SETALLSTYLES",styles:e})},setSelectedStyle:function(e){return t({type:"SETSELECTEDSTYLE",selectedStyle:e})},setMetaData:function(e){return t({type:"SETMETADATA",metaData:e})},setProductQs:function(e){return t({type:"SET_QUESTIONS",payload:e})},setReviews:function(e){return t({type:"SETREVIEWS",reviews:e})},setMetaCharacteristics:function(e){return t({type:"SETCHARACTERISTICS",characteristics:e})}}}))(y)}}]);