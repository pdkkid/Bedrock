import e from"styled-components";function r(e,r,n){return e(n={path:r,exports:{},require:function(e,r){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}var n="function"==typeof Symbol&&Symbol.for,t=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,a=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,c=n?Symbol.for("react.profiler"):60114,u=n?Symbol.for("react.provider"):60109,f=n?Symbol.for("react.context"):60110,s=n?Symbol.for("react.async_mode"):60111,l=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,d=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,b=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.block"):60121,h=n?Symbol.for("react.fundamental"):60117,g=n?Symbol.for("react.responder"):60118,S=n?Symbol.for("react.scope"):60119;function O(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:switch(e=e.type){case s:case l:case a:case c:case i:case y:return e;default:switch(e=e&&e.$$typeof){case f:case p:case b:case m:case u:return e;default:return r}}case o:return r}}}function x(e){return O(e)===l}var w={AsyncMode:s,ConcurrentMode:l,ContextConsumer:f,ContextProvider:u,Element:t,ForwardRef:p,Fragment:a,Lazy:b,Memo:m,Portal:o,Profiler:c,StrictMode:i,Suspense:y,isAsyncMode:function(e){return x(e)||O(e)===s},isConcurrentMode:x,isContextConsumer:function(e){return O(e)===f},isContextProvider:function(e){return O(e)===u},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},isForwardRef:function(e){return O(e)===p},isFragment:function(e){return O(e)===a},isLazy:function(e){return O(e)===b},isMemo:function(e){return O(e)===m},isPortal:function(e){return O(e)===o},isProfiler:function(e){return O(e)===c},isStrictMode:function(e){return O(e)===i},isSuspense:function(e){return O(e)===y},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===a||e===l||e===c||e===i||e===y||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===m||e.$$typeof===u||e.$$typeof===f||e.$$typeof===p||e.$$typeof===h||e.$$typeof===g||e.$$typeof===S||e.$$typeof===v)},typeOf:O},E=r(function(e,r){"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,c=e?Symbol.for("react.provider"):60109,u=e?Symbol.for("react.context"):60110,f=e?Symbol.for("react.async_mode"):60111,s=e?Symbol.for("react.concurrent_mode"):60111,l=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,d=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,b=e?Symbol.for("react.block"):60121,v=e?Symbol.for("react.fundamental"):60117,h=e?Symbol.for("react.responder"):60118,g=e?Symbol.for("react.scope"):60119;function S(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case n:var y=e.type;switch(y){case f:case s:case o:case i:case a:case p:return y;default:var b=y&&y.$$typeof;switch(b){case u:case l:case m:case d:case c:return b;default:return r}}case t:return r}}}var O=s,x=u,w=c,E=n,$=l,j=o,P=m,T=d,_=t,C=i,I=a,N=p,k=!1;function R(e){return S(e)===s}r.AsyncMode=f,r.ConcurrentMode=O,r.ContextConsumer=x,r.ContextProvider=w,r.Element=E,r.ForwardRef=$,r.Fragment=j,r.Lazy=P,r.Memo=T,r.Portal=_,r.Profiler=C,r.StrictMode=I,r.Suspense=N,r.isAsyncMode=function(e){return k||(k=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),R(e)||S(e)===f},r.isConcurrentMode=R,r.isContextConsumer=function(e){return S(e)===u},r.isContextProvider=function(e){return S(e)===c},r.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},r.isForwardRef=function(e){return S(e)===l},r.isFragment=function(e){return S(e)===o},r.isLazy=function(e){return S(e)===m},r.isMemo=function(e){return S(e)===d},r.isPortal=function(e){return S(e)===t},r.isProfiler=function(e){return S(e)===i},r.isStrictMode=function(e){return S(e)===a},r.isSuspense=function(e){return S(e)===p},r.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===s||e===i||e===a||e===p||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===d||e.$$typeof===c||e.$$typeof===u||e.$$typeof===l||e.$$typeof===v||e.$$typeof===h||e.$$typeof===g||e.$$typeof===b)},r.typeOf=S}()}),$=r(function(e){e.exports="production"===process.env.NODE_ENV?w:E}),j=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;function _(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var C=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map(function(e){return r[e]}).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach(function(e){t[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(e){return!1}}()?Object.assign:function(e,r){for(var n,t,o=_(e),a=1;a<arguments.length;a++){for(var i in n=Object(arguments[a]))P.call(n,i)&&(o[i]=n[i]);if(j){t=j(n);for(var c=0;c<t.length;c++)T.call(n,t[c])&&(o[t[c]]=n[t[c]])}}return o},I="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",N=function(){};if("production"!==process.env.NODE_ENV){var k=I,R={},A=Function.call.bind(Object.prototype.hasOwnProperty);N=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}}}function M(e,r,n,t,o){if("production"!==process.env.NODE_ENV)for(var a in e)if(A(e,a)){var i;try{if("function"!=typeof e[a]){var c=Error((t||"React class")+": "+n+" type `"+a+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[a]+"`.");throw c.name="Invariant Violation",c}i=e[a](r,a,t,n,null,k)}catch(e){i=e}if(!i||i instanceof Error||N((t||"React class")+": type specification of "+n+" `"+a+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof i+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),i instanceof Error&&!(i.message in R)){R[i.message]=!0;var u=o?o():"";N("Failed "+n+" type: "+i.message+(null!=u?u:""))}}}M.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(R={})};var V=M,D=Function.call.bind(Object.prototype.hasOwnProperty),F=function(){};function W(){return null}function q(){}function z(){}"production"!==process.env.NODE_ENV&&(F=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}}),z.resetWarningCache=q;var L=r(function(e){e.exports="production"!==process.env.NODE_ENV?function(e,r){var n="function"==typeof Symbol&&Symbol.iterator,t={array:c("array"),bool:c("boolean"),func:c("function"),number:c("number"),object:c("object"),string:c("string"),symbol:c("symbol"),any:i(W),arrayOf:function(e){return i(function(r,n,t,o,i){if("function"!=typeof e)return new a("Property `"+i+"` of component `"+t+"` has invalid PropType notation inside arrayOf.");var c=r[n];if(!Array.isArray(c))return new a("Invalid "+o+" `"+i+"` of type `"+f(c)+"` supplied to `"+t+"`, expected an array.");for(var u=0;u<c.length;u++){var s=e(c,u,t,o,i+"["+u+"]",I);if(s instanceof Error)return s}return null})},element:i(function(r,n,t,o,i){var c=r[n];return e(c)?null:new a("Invalid "+o+" `"+i+"` of type `"+f(c)+"` supplied to `"+t+"`, expected a single ReactElement.")}),elementType:i(function(e,r,n,t,o){var i=e[r];return $.isValidElementType(i)?null:new a("Invalid "+t+" `"+o+"` of type `"+f(i)+"` supplied to `"+n+"`, expected a single ReactElement type.")}),instanceOf:function(e){return i(function(r,n,t,o,i){var c;return r[n]instanceof e?null:new a("Invalid "+o+" `"+i+"` of type `"+((c=r[n]).constructor&&c.constructor.name?c.constructor.name:"<<anonymous>>")+"` supplied to `"+t+"`, expected instance of `"+(e.name||"<<anonymous>>")+"`.")})},node:i(function(e,r,n,t,o){return u(e[r])?null:new a("Invalid "+t+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}),objectOf:function(e){return i(function(r,n,t,o,i){if("function"!=typeof e)return new a("Property `"+i+"` of component `"+t+"` has invalid PropType notation inside objectOf.");var c=r[n],u=f(c);if("object"!==u)return new a("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+t+"`, expected an object.");for(var s in c)if(D(c,s)){var l=e(c,s,t,o,i+"."+s,I);if(l instanceof Error)return l}return null})},oneOf:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&F(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),W;function r(r,n,t,i,c){for(var u=r[n],f=0;f<e.length;f++)if(o(u,e[f]))return null;var l=JSON.stringify(e,function(e,r){return"symbol"===s(r)?String(r):r});return new a("Invalid "+i+" `"+c+"` of value `"+String(u)+"` supplied to `"+t+"`, expected one of "+l+".")}return i(r)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&F("Invalid argument supplied to oneOfType, expected an instance of array."),W;for(var r=0;r<e.length;r++){var n=e[r];if("function"!=typeof n)return F("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+l(n)+" at index "+r+"."),W}return i(function(r,n,t,o,i){for(var c=0;c<e.length;c++)if(null==(0,e[c])(r,n,t,o,i,I))return null;return new a("Invalid "+o+" `"+i+"` supplied to `"+t+"`.")})},shape:function(e){return i(function(r,n,t,o,i){var c=r[n],u=f(c);if("object"!==u)return new a("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+t+"`, expected `object`.");for(var s in e){var l=e[s];if(l){var p=l(c,s,t,o,i+"."+s,I);if(p)return p}}return null})},exact:function(e){return i(function(r,n,t,o,i){var c=r[n],u=f(c);if("object"!==u)return new a("Invalid "+o+" `"+i+"` of type `"+u+"` supplied to `"+t+"`, expected `object`.");var s=C({},r[n],e);for(var l in s){var p=e[l];if(!p)return new a("Invalid "+o+" `"+i+"` key `"+l+"` supplied to `"+t+"`.\nBad object: "+JSON.stringify(r[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=p(c,l,t,o,i+"."+l,I);if(y)return y}return null})}};function o(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function a(e){this.message=e,this.stack=""}function i(e){function r(r,n,t,o,i,c,u){if(o=o||"<<anonymous>>",c=c||t,u!==I){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}return null==n[t]?r?new a(null===n[t]?"The "+i+" `"+c+"` is marked as required in `"+o+"`, but its value is `null`.":"The "+i+" `"+c+"` is marked as required in `"+o+"`, but its value is `undefined`."):null:e(n,t,o,i,c)}process;var n=r.bind(null,!1);return n.isRequired=r.bind(null,!0),n}function c(e){return i(function(r,n,t,o,i,c){var u=r[n];return f(u)!==e?new a("Invalid "+o+" `"+i+"` of type `"+s(u)+"` supplied to `"+t+"`, expected `"+e+"`."):null})}function u(r){switch(typeof r){case"number":case"string":case"undefined":return!0;case"boolean":return!r;case"object":if(Array.isArray(r))return r.every(u);if(null===r||e(r))return!0;var t=function(e){var r=e&&(n&&e[n]||e["@@iterator"]);if("function"==typeof r)return r}(r);if(!t)return!1;var o,a=t.call(r);if(t!==r.entries){for(;!(o=a.next()).done;)if(!u(o.value))return!1}else for(;!(o=a.next()).done;){var i=o.value;if(i&&!u(i[1]))return!1}return!0;default:return!1}}function f(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return"symbol"===e||!!r&&("Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol)}(r,e)?"symbol":r}function s(e){if(null==e)return""+e;var r=f(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function l(e){var r=s(e);switch(r){case"array":case"object":return"an "+r;case"boolean":case"date":case"regexp":return"a "+r;default:return r}}return a.prototype=Error.prototype,t.checkPropTypes=V,t.resetWarningCache=V.resetWarningCache,t.PropTypes=t,t}($.isElement):function(){function e(e,r,n,t,o,a){if(a!==I){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function r(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:z,resetWarningCache:q};return n.PropTypes=n,n}()});function H(){var e,r,n=(e=["\n  overflow: scroll;\n\n  ","\n  ","\n\n  ","\n\n  & > * {\n    scroll-snap-align: ",";\n  }\n"],r||(r=e.slice(0)),e.raw=r,e);return H=function(){return n},n}var U=e.div(H(),function(e){return e.maxHeight?"max-height: "+e.maxHeight+"px;":""},function(e){return e.maxWidth?"max-width: "+e.maxWidth+"px;":""},function(e){return e.snapX?"\n  scroll-snap-type: x "+(e.proximity?"proximity":"mandatory")+";\n  display: flex;\n  ":"scroll-snap-type: y\n    "+(e.proximity?"proximity":"mandatory")+";"},function(e){return e.snapX?"center":"start"});U.displayName="Reel",U.propTypes={maxHeight:L.number,maxWidth:L.number,snapX:L.bool,proximity:L.bool};export default U;
//# sourceMappingURL=index.m.js.map
