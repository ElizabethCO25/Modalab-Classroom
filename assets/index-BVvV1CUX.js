function K0(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function G0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var wy={exports:{}},zl={},Ty={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ao=Symbol.for("react.element"),Q0=Symbol.for("react.portal"),Y0=Symbol.for("react.fragment"),X0=Symbol.for("react.strict_mode"),J0=Symbol.for("react.profiler"),Z0=Symbol.for("react.provider"),eT=Symbol.for("react.context"),tT=Symbol.for("react.forward_ref"),nT=Symbol.for("react.suspense"),rT=Symbol.for("react.memo"),iT=Symbol.for("react.lazy"),Mp=Symbol.iterator;function sT(t){return t===null||typeof t!="object"?null:(t=Mp&&t[Mp]||t["@@iterator"],typeof t=="function"?t:null)}var Iy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sy=Object.assign,Ry={};function Gi(t,e,n){this.props=t,this.context=e,this.refs=Ry,this.updater=n||Iy}Gi.prototype.isReactComponent={};Gi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Gi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ay(){}Ay.prototype=Gi.prototype;function Qh(t,e,n){this.props=t,this.context=e,this.refs=Ry,this.updater=n||Iy}var Yh=Qh.prototype=new Ay;Yh.constructor=Qh;Sy(Yh,Gi.prototype);Yh.isPureReactComponent=!0;var bp=Array.isArray,Cy=Object.prototype.hasOwnProperty,Xh={current:null},Py={key:!0,ref:!0,__self:!0,__source:!0};function ky(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Cy.call(e,r)&&!Py.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ao,type:t,key:s,ref:o,props:i,_owner:Xh.current}}function oT(t,e){return{$$typeof:Ao,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ao}function aT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Up=/\/+/g;function qu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?aT(""+t.key):e.toString(36)}function Da(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ao:case Q0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+qu(o,0):r,bp(i)?(n="",t!=null&&(n=t.replace(Up,"$&/")+"/"),Da(i,e,n,"",function(h){return h})):i!=null&&(Jh(i)&&(i=oT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Up,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",bp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+qu(s,l);o+=Da(s,e,n,u,i)}else if(u=sT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+qu(s,l++),o+=Da(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ua(t,e,n){if(t==null)return t;var r=[],i=0;return Da(t,r,"","",function(s){return e.call(n,s,i++)}),r}function lT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ut={current:null},Oa={transition:null},uT={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:Oa,ReactCurrentOwner:Xh};function Ny(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:ua,forEach:function(t,e,n){ua(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ua(t,function(){e++}),e},toArray:function(t){return ua(t,function(e){return e})||[]},only:function(t){if(!Jh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=Gi;ee.Fragment=Y0;ee.Profiler=J0;ee.PureComponent=Qh;ee.StrictMode=X0;ee.Suspense=nT;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uT;ee.act=Ny;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Sy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Xh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Cy.call(e,u)&&!Py.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Ao,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:eT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Z0,_context:t},t.Consumer=t};ee.createElement=ky;ee.createFactory=function(t){var e=ky.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:tT,render:t}};ee.isValidElement=Jh;ee.lazy=function(t){return{$$typeof:iT,_payload:{_status:-1,_result:t},_init:lT}};ee.memo=function(t,e){return{$$typeof:rT,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Oa.transition;Oa.transition={};try{t()}finally{Oa.transition=e}};ee.unstable_act=Ny;ee.useCallback=function(t,e){return ut.current.useCallback(t,e)};ee.useContext=function(t){return ut.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return ut.current.useDeferredValue(t)};ee.useEffect=function(t,e){return ut.current.useEffect(t,e)};ee.useId=function(){return ut.current.useId()};ee.useImperativeHandle=function(t,e,n){return ut.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return ut.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return ut.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return ut.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return ut.current.useReducer(t,e,n)};ee.useRef=function(t){return ut.current.useRef(t)};ee.useState=function(t){return ut.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return ut.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return ut.current.useTransition()};ee.version="18.3.1";Ty.exports=ee;var b=Ty.exports;const xy=G0(b),cT=K0({__proto__:null,default:xy},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hT=b,dT=Symbol.for("react.element"),fT=Symbol.for("react.fragment"),pT=Object.prototype.hasOwnProperty,mT=hT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gT={key:!0,ref:!0,__self:!0,__source:!0};function Dy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)pT.call(e,r)&&!gT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:dT,type:t,key:s,ref:o,props:i,_owner:mT.current}}zl.Fragment=fT;zl.jsx=Dy;zl.jsxs=Dy;wy.exports=zl;var C=wy.exports,xc={},Oy={exports:{}},Tt={},Vy={exports:{}},Ly={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Y){var Z=z.length;z.push(Y);e:for(;0<Z;){var ye=Z-1>>>1,ue=z[ye];if(0<i(ue,Y))z[ye]=Y,z[Z]=ue,Z=ye;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Y=z[0],Z=z.pop();if(Z!==Y){z[0]=Z;e:for(var ye=0,ue=z.length,Se=ue>>>1;ye<Se;){var an=2*(ye+1)-1,ln=z[an],un=an+1,cn=z[un];if(0>i(ln,Z))un<ue&&0>i(cn,ln)?(z[ye]=cn,z[un]=Z,ye=un):(z[ye]=ln,z[an]=Z,ye=an);else if(un<ue&&0>i(cn,Z))z[ye]=cn,z[un]=Z,ye=un;else break e}}return Y}function i(z,Y){var Z=z.sortIndex-Y.sortIndex;return Z!==0?Z:z.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,g=3,A=!1,P=!1,D=!1,N=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(z){for(var Y=n(h);Y!==null;){if(Y.callback===null)r(h);else if(Y.startTime<=z)r(h),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(h)}}function O(z){if(D=!1,R(z),!P)if(n(u)!==null)P=!0,vr(U);else{var Y=n(h);Y!==null&&Ve(O,Y.startTime-z)}}function U(z,Y){P=!1,D&&(D=!1,w(y),y=-1),A=!0;var Z=g;try{for(R(Y),p=n(u);p!==null&&(!(p.expirationTime>Y)||z&&!S());){var ye=p.callback;if(typeof ye=="function"){p.callback=null,g=p.priorityLevel;var ue=ye(p.expirationTime<=Y);Y=t.unstable_now(),typeof ue=="function"?p.callback=ue:p===n(u)&&r(u),R(Y)}else r(u);p=n(u)}if(p!==null)var Se=!0;else{var an=n(h);an!==null&&Ve(O,an.startTime-Y),Se=!1}return Se}finally{p=null,g=Z,A=!1}}var j=!1,v=null,y=-1,E=5,T=-1;function S(){return!(t.unstable_now()-T<E)}function k(){if(v!==null){var z=t.unstable_now();T=z;var Y=!0;try{Y=v(!0,z)}finally{Y?I():(j=!1,v=null)}}else j=!1}var I;if(typeof _=="function")I=function(){_(k)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,rt=H.port2;H.port1.onmessage=k,I=function(){rt.postMessage(null)}}else I=function(){N(k,0)};function vr(z){v=z,j||(j=!0,I())}function Ve(z,Y){y=N(function(){z(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){P||A||(P=!0,vr(U))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(g){case 1:case 2:case 3:var Y=3;break;default:Y=g}var Z=g;g=Y;try{return z()}finally{g=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Y){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Z=g;g=z;try{return Y()}finally{g=Z}},t.unstable_scheduleCallback=function(z,Y,Z){var ye=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ye+Z:ye):Z=ye,z){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=Z+ue,z={id:f++,callback:Y,priorityLevel:z,startTime:Z,expirationTime:ue,sortIndex:-1},Z>ye?(z.sortIndex=Z,e(h,z),n(u)===null&&z===n(h)&&(D?(w(y),y=-1):D=!0,Ve(O,Z-ye))):(z.sortIndex=ue,e(u,z),P||A||(P=!0,vr(U))),z},t.unstable_shouldYield=S,t.unstable_wrapCallback=function(z){var Y=g;return function(){var Z=g;g=Y;try{return z.apply(this,arguments)}finally{g=Z}}}})(Ly);Vy.exports=Ly;var yT=Vy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _T=b,wt=yT;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var My=new Set,Xs={};function qr(t,e){Vi(t,e),Vi(t+"Capture",e)}function Vi(t,e){for(Xs[t]=e,t=0;t<e.length;t++)My.add(e[t])}var In=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dc=Object.prototype.hasOwnProperty,vT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fp={},jp={};function ET(t){return Dc.call(jp,t)?!0:Dc.call(Fp,t)?!1:vT.test(t)?jp[t]=!0:(Fp[t]=!0,!1)}function wT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function TT(t,e,n,r){if(e===null||typeof e>"u"||wT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var We={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){We[t]=new ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];We[e]=new ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){We[t]=new ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){We[t]=new ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){We[t]=new ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){We[t]=new ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){We[t]=new ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){We[t]=new ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){We[t]=new ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zh=/[\-:]([a-z])/g;function ed(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zh,ed);We[e]=new ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zh,ed);We[e]=new ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zh,ed);We[e]=new ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){We[t]=new ct(t,1,!1,t.toLowerCase(),null,!1,!1)});We.xlinkHref=new ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){We[t]=new ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function td(t,e,n,r){var i=We.hasOwnProperty(e)?We[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(TT(e,n,i,r)&&(n=null),r||i===null?ET(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Dn=_T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ca=Symbol.for("react.element"),ui=Symbol.for("react.portal"),ci=Symbol.for("react.fragment"),nd=Symbol.for("react.strict_mode"),Oc=Symbol.for("react.profiler"),by=Symbol.for("react.provider"),Uy=Symbol.for("react.context"),rd=Symbol.for("react.forward_ref"),Vc=Symbol.for("react.suspense"),Lc=Symbol.for("react.suspense_list"),id=Symbol.for("react.memo"),Un=Symbol.for("react.lazy"),Fy=Symbol.for("react.offscreen"),Bp=Symbol.iterator;function gs(t){return t===null||typeof t!="object"?null:(t=Bp&&t[Bp]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,Ku;function As(t){if(Ku===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ku=e&&e[1]||""}return`
`+Ku+t}var Gu=!1;function Qu(t,e){if(!t||Gu)return"";Gu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Gu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?As(t):""}function IT(t){switch(t.tag){case 5:return As(t.type);case 16:return As("Lazy");case 13:return As("Suspense");case 19:return As("SuspenseList");case 0:case 2:case 15:return t=Qu(t.type,!1),t;case 11:return t=Qu(t.type.render,!1),t;case 1:return t=Qu(t.type,!0),t;default:return""}}function Mc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ci:return"Fragment";case ui:return"Portal";case Oc:return"Profiler";case nd:return"StrictMode";case Vc:return"Suspense";case Lc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Uy:return(t.displayName||"Context")+".Consumer";case by:return(t._context.displayName||"Context")+".Provider";case rd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case id:return e=t.displayName||null,e!==null?e:Mc(t.type)||"Memo";case Un:e=t._payload,t=t._init;try{return Mc(t(e))}catch{}}return null}function ST(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mc(e);case 8:return e===nd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function RT(t){var e=jy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ha(t){t._valueTracker||(t._valueTracker=RT(t))}function By(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=jy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Za(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bc(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function zp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function zy(t,e){e=e.checked,e!=null&&td(t,"checked",e,!1)}function Uc(t,e){zy(t,e);var n=lr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Fc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Fc(t,e.type,lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $p(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Fc(t,e,n){(e!=="number"||Za(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Cs=Array.isArray;function Ii(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+lr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function jc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Wp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Cs(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:lr(n)}}function $y(t,e){var n=lr(e.value),r=lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Hp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Wy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Wy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var da,Hy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(da=da||document.createElement("div"),da.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=da.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Js(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ms={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},AT=["Webkit","ms","Moz","O"];Object.keys(Ms).forEach(function(t){AT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ms[e]=Ms[t]})});function qy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ms.hasOwnProperty(t)&&Ms[t]?(""+e).trim():e+"px"}function Ky(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=qy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var CT=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zc(t,e){if(e){if(CT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function $c(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wc=null;function sd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hc=null,Si=null,Ri=null;function qp(t){if(t=ko(t)){if(typeof Hc!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Kl(e),Hc(t.stateNode,t.type,e))}}function Gy(t){Si?Ri?Ri.push(t):Ri=[t]:Si=t}function Qy(){if(Si){var t=Si,e=Ri;if(Ri=Si=null,qp(t),e)for(t=0;t<e.length;t++)qp(e[t])}}function Yy(t,e){return t(e)}function Xy(){}var Yu=!1;function Jy(t,e,n){if(Yu)return t(e,n);Yu=!0;try{return Yy(t,e,n)}finally{Yu=!1,(Si!==null||Ri!==null)&&(Xy(),Qy())}}function Zs(t,e){var n=t.stateNode;if(n===null)return null;var r=Kl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var qc=!1;if(In)try{var ys={};Object.defineProperty(ys,"passive",{get:function(){qc=!0}}),window.addEventListener("test",ys,ys),window.removeEventListener("test",ys,ys)}catch{qc=!1}function PT(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var bs=!1,el=null,tl=!1,Kc=null,kT={onError:function(t){bs=!0,el=t}};function NT(t,e,n,r,i,s,o,l,u){bs=!1,el=null,PT.apply(kT,arguments)}function xT(t,e,n,r,i,s,o,l,u){if(NT.apply(this,arguments),bs){if(bs){var h=el;bs=!1,el=null}else throw Error(F(198));tl||(tl=!0,Kc=h)}}function Kr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Zy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Kp(t){if(Kr(t)!==t)throw Error(F(188))}function DT(t){var e=t.alternate;if(!e){if(e=Kr(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Kp(i),t;if(s===r)return Kp(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function e_(t){return t=DT(t),t!==null?t_(t):null}function t_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=t_(t);if(e!==null)return e;t=t.sibling}return null}var n_=wt.unstable_scheduleCallback,Gp=wt.unstable_cancelCallback,OT=wt.unstable_shouldYield,VT=wt.unstable_requestPaint,Ae=wt.unstable_now,LT=wt.unstable_getCurrentPriorityLevel,od=wt.unstable_ImmediatePriority,r_=wt.unstable_UserBlockingPriority,nl=wt.unstable_NormalPriority,MT=wt.unstable_LowPriority,i_=wt.unstable_IdlePriority,$l=null,Gt=null;function bT(t){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot($l,t,void 0,(t.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:jT,UT=Math.log,FT=Math.LN2;function jT(t){return t>>>=0,t===0?32:31-(UT(t)/FT|0)|0}var fa=64,pa=4194304;function Ps(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function rl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ps(l):(s&=o,s!==0&&(r=Ps(s)))}else o=n&~i,o!==0?r=Ps(o):s!==0&&(r=Ps(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ft(e),i=1<<n,r|=t[n],e&=~i;return r}function BT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ft(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=BT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Gc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function s_(){var t=fa;return fa<<=1,!(fa&4194240)&&(fa=64),t}function Xu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Co(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ft(e),t[e]=n}function $T(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ft(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ad(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ft(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ae=0;function o_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var a_,ld,l_,u_,c_,Qc=!1,ma=[],Xn=null,Jn=null,Zn=null,eo=new Map,to=new Map,jn=[],WT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qp(t,e){switch(t){case"focusin":case"focusout":Xn=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Zn=null;break;case"pointerover":case"pointerout":eo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(e.pointerId)}}function _s(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ko(e),e!==null&&ld(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function HT(t,e,n,r,i){switch(e){case"focusin":return Xn=_s(Xn,t,e,n,r,i),!0;case"dragenter":return Jn=_s(Jn,t,e,n,r,i),!0;case"mouseover":return Zn=_s(Zn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return eo.set(s,_s(eo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,to.set(s,_s(to.get(s)||null,t,e,n,r,i)),!0}return!1}function h_(t){var e=Cr(t.target);if(e!==null){var n=Kr(e);if(n!==null){if(e=n.tag,e===13){if(e=Zy(n),e!==null){t.blockedOn=e,c_(t.priority,function(){l_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Va(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Yc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Wc=r,n.target.dispatchEvent(r),Wc=null}else return e=ko(n),e!==null&&ld(e),t.blockedOn=n,!1;e.shift()}return!0}function Yp(t,e,n){Va(t)&&n.delete(e)}function qT(){Qc=!1,Xn!==null&&Va(Xn)&&(Xn=null),Jn!==null&&Va(Jn)&&(Jn=null),Zn!==null&&Va(Zn)&&(Zn=null),eo.forEach(Yp),to.forEach(Yp)}function vs(t,e){t.blockedOn===e&&(t.blockedOn=null,Qc||(Qc=!0,wt.unstable_scheduleCallback(wt.unstable_NormalPriority,qT)))}function no(t){function e(i){return vs(i,t)}if(0<ma.length){vs(ma[0],t);for(var n=1;n<ma.length;n++){var r=ma[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Xn!==null&&vs(Xn,t),Jn!==null&&vs(Jn,t),Zn!==null&&vs(Zn,t),eo.forEach(e),to.forEach(e),n=0;n<jn.length;n++)r=jn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<jn.length&&(n=jn[0],n.blockedOn===null);)h_(n),n.blockedOn===null&&jn.shift()}var Ai=Dn.ReactCurrentBatchConfig,il=!0;function KT(t,e,n,r){var i=ae,s=Ai.transition;Ai.transition=null;try{ae=1,ud(t,e,n,r)}finally{ae=i,Ai.transition=s}}function GT(t,e,n,r){var i=ae,s=Ai.transition;Ai.transition=null;try{ae=4,ud(t,e,n,r)}finally{ae=i,Ai.transition=s}}function ud(t,e,n,r){if(il){var i=Yc(t,e,n,r);if(i===null)ac(t,e,r,sl,n),Qp(t,r);else if(HT(i,t,e,n,r))r.stopPropagation();else if(Qp(t,r),e&4&&-1<WT.indexOf(t)){for(;i!==null;){var s=ko(i);if(s!==null&&a_(s),s=Yc(t,e,n,r),s===null&&ac(t,e,r,sl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ac(t,e,r,null,n)}}var sl=null;function Yc(t,e,n,r){if(sl=null,t=sd(r),t=Cr(t),t!==null)if(e=Kr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Zy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return sl=t,null}function d_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(LT()){case od:return 1;case r_:return 4;case nl:case MT:return 16;case i_:return 536870912;default:return 16}default:return 16}}var Kn=null,cd=null,La=null;function f_(){if(La)return La;var t,e=cd,n=e.length,r,i="value"in Kn?Kn.value:Kn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return La=i.slice(t,1<r?1-r:void 0)}function Ma(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ga(){return!0}function Xp(){return!1}function It(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ga:Xp,this.isPropagationStopped=Xp,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ga)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ga)},persist:function(){},isPersistent:ga}),e}var Qi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hd=It(Qi),Po=Ee({},Qi,{view:0,detail:0}),QT=It(Po),Ju,Zu,Es,Wl=Ee({},Po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Es&&(Es&&t.type==="mousemove"?(Ju=t.screenX-Es.screenX,Zu=t.screenY-Es.screenY):Zu=Ju=0,Es=t),Ju)},movementY:function(t){return"movementY"in t?t.movementY:Zu}}),Jp=It(Wl),YT=Ee({},Wl,{dataTransfer:0}),XT=It(YT),JT=Ee({},Po,{relatedTarget:0}),ec=It(JT),ZT=Ee({},Qi,{animationName:0,elapsedTime:0,pseudoElement:0}),eI=It(ZT),tI=Ee({},Qi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),nI=It(tI),rI=Ee({},Qi,{data:0}),Zp=It(rI),iI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function aI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=oI[t])?!!e[t]:!1}function dd(){return aI}var lI=Ee({},Po,{key:function(t){if(t.key){var e=iI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ma(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?sI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dd,charCode:function(t){return t.type==="keypress"?Ma(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ma(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),uI=It(lI),cI=Ee({},Wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),em=It(cI),hI=Ee({},Po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dd}),dI=It(hI),fI=Ee({},Qi,{propertyName:0,elapsedTime:0,pseudoElement:0}),pI=It(fI),mI=Ee({},Wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),gI=It(mI),yI=[9,13,27,32],fd=In&&"CompositionEvent"in window,Us=null;In&&"documentMode"in document&&(Us=document.documentMode);var _I=In&&"TextEvent"in window&&!Us,p_=In&&(!fd||Us&&8<Us&&11>=Us),tm=" ",nm=!1;function m_(t,e){switch(t){case"keyup":return yI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function g_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hi=!1;function vI(t,e){switch(t){case"compositionend":return g_(e);case"keypress":return e.which!==32?null:(nm=!0,tm);case"textInput":return t=e.data,t===tm&&nm?null:t;default:return null}}function EI(t,e){if(hi)return t==="compositionend"||!fd&&m_(t,e)?(t=f_(),La=cd=Kn=null,hi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return p_&&e.locale!=="ko"?null:e.data;default:return null}}var wI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!wI[t.type]:e==="textarea"}function y_(t,e,n,r){Gy(r),e=ol(e,"onChange"),0<e.length&&(n=new hd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Fs=null,ro=null;function TI(t){P_(t,0)}function Hl(t){var e=pi(t);if(By(e))return t}function II(t,e){if(t==="change")return e}var __=!1;if(In){var tc;if(In){var nc="oninput"in document;if(!nc){var im=document.createElement("div");im.setAttribute("oninput","return;"),nc=typeof im.oninput=="function"}tc=nc}else tc=!1;__=tc&&(!document.documentMode||9<document.documentMode)}function sm(){Fs&&(Fs.detachEvent("onpropertychange",v_),ro=Fs=null)}function v_(t){if(t.propertyName==="value"&&Hl(ro)){var e=[];y_(e,ro,t,sd(t)),Jy(TI,e)}}function SI(t,e,n){t==="focusin"?(sm(),Fs=e,ro=n,Fs.attachEvent("onpropertychange",v_)):t==="focusout"&&sm()}function RI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hl(ro)}function AI(t,e){if(t==="click")return Hl(e)}function CI(t,e){if(t==="input"||t==="change")return Hl(e)}function PI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zt=typeof Object.is=="function"?Object.is:PI;function io(t,e){if(zt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Dc.call(e,i)||!zt(t[i],e[i]))return!1}return!0}function om(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function am(t,e){var n=om(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=om(n)}}function E_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?E_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function w_(){for(var t=window,e=Za();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Za(t.document)}return e}function pd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function kI(t){var e=w_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&E_(n.ownerDocument.documentElement,n)){if(r!==null&&pd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=am(n,s);var o=am(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var NI=In&&"documentMode"in document&&11>=document.documentMode,di=null,Xc=null,js=null,Jc=!1;function lm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jc||di==null||di!==Za(r)||(r=di,"selectionStart"in r&&pd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),js&&io(js,r)||(js=r,r=ol(Xc,"onSelect"),0<r.length&&(e=new hd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=di)))}function ya(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var fi={animationend:ya("Animation","AnimationEnd"),animationiteration:ya("Animation","AnimationIteration"),animationstart:ya("Animation","AnimationStart"),transitionend:ya("Transition","TransitionEnd")},rc={},T_={};In&&(T_=document.createElement("div").style,"AnimationEvent"in window||(delete fi.animationend.animation,delete fi.animationiteration.animation,delete fi.animationstart.animation),"TransitionEvent"in window||delete fi.transitionend.transition);function ql(t){if(rc[t])return rc[t];if(!fi[t])return t;var e=fi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in T_)return rc[t]=e[n];return t}var I_=ql("animationend"),S_=ql("animationiteration"),R_=ql("animationstart"),A_=ql("transitionend"),C_=new Map,um="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(t,e){C_.set(t,e),qr(e,[t])}for(var ic=0;ic<um.length;ic++){var sc=um[ic],xI=sc.toLowerCase(),DI=sc[0].toUpperCase()+sc.slice(1);pr(xI,"on"+DI)}pr(I_,"onAnimationEnd");pr(S_,"onAnimationIteration");pr(R_,"onAnimationStart");pr("dblclick","onDoubleClick");pr("focusin","onFocus");pr("focusout","onBlur");pr(A_,"onTransitionEnd");Vi("onMouseEnter",["mouseout","mouseover"]);Vi("onMouseLeave",["mouseout","mouseover"]);Vi("onPointerEnter",["pointerout","pointerover"]);Vi("onPointerLeave",["pointerout","pointerover"]);qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ks="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),OI=new Set("cancel close invalid load scroll toggle".split(" ").concat(ks));function cm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,xT(r,e,void 0,t),t.currentTarget=null}function P_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;cm(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;cm(i,l,h),s=u}}}if(tl)throw t=Kc,tl=!1,Kc=null,t}function fe(t,e){var n=e[rh];n===void 0&&(n=e[rh]=new Set);var r=t+"__bubble";n.has(r)||(k_(e,t,2,!1),n.add(r))}function oc(t,e,n){var r=0;e&&(r|=4),k_(n,t,r,e)}var _a="_reactListening"+Math.random().toString(36).slice(2);function so(t){if(!t[_a]){t[_a]=!0,My.forEach(function(n){n!=="selectionchange"&&(OI.has(n)||oc(n,!1,t),oc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_a]||(e[_a]=!0,oc("selectionchange",!1,e))}}function k_(t,e,n,r){switch(d_(e)){case 1:var i=KT;break;case 4:i=GT;break;default:i=ud}n=i.bind(null,e,n,t),i=void 0,!qc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ac(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Cr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Jy(function(){var h=s,f=sd(n),p=[];e:{var g=C_.get(t);if(g!==void 0){var A=hd,P=t;switch(t){case"keypress":if(Ma(n)===0)break e;case"keydown":case"keyup":A=uI;break;case"focusin":P="focus",A=ec;break;case"focusout":P="blur",A=ec;break;case"beforeblur":case"afterblur":A=ec;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Jp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=XT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=dI;break;case I_:case S_:case R_:A=eI;break;case A_:A=pI;break;case"scroll":A=QT;break;case"wheel":A=gI;break;case"copy":case"cut":case"paste":A=nI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=em}var D=(e&4)!==0,N=!D&&t==="scroll",w=D?g!==null?g+"Capture":null:g;D=[];for(var _=h,R;_!==null;){R=_;var O=R.stateNode;if(R.tag===5&&O!==null&&(R=O,w!==null&&(O=Zs(_,w),O!=null&&D.push(oo(_,O,R)))),N)break;_=_.return}0<D.length&&(g=new A(g,P,null,n,f),p.push({event:g,listeners:D}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",g&&n!==Wc&&(P=n.relatedTarget||n.fromElement)&&(Cr(P)||P[Sn]))break e;if((A||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,A?(P=n.relatedTarget||n.toElement,A=h,P=P?Cr(P):null,P!==null&&(N=Kr(P),P!==N||P.tag!==5&&P.tag!==6)&&(P=null)):(A=null,P=h),A!==P)){if(D=Jp,O="onMouseLeave",w="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(D=em,O="onPointerLeave",w="onPointerEnter",_="pointer"),N=A==null?g:pi(A),R=P==null?g:pi(P),g=new D(O,_+"leave",A,n,f),g.target=N,g.relatedTarget=R,O=null,Cr(f)===h&&(D=new D(w,_+"enter",P,n,f),D.target=R,D.relatedTarget=N,O=D),N=O,A&&P)t:{for(D=A,w=P,_=0,R=D;R;R=ii(R))_++;for(R=0,O=w;O;O=ii(O))R++;for(;0<_-R;)D=ii(D),_--;for(;0<R-_;)w=ii(w),R--;for(;_--;){if(D===w||w!==null&&D===w.alternate)break t;D=ii(D),w=ii(w)}D=null}else D=null;A!==null&&hm(p,g,A,D,!1),P!==null&&N!==null&&hm(p,N,P,D,!0)}}e:{if(g=h?pi(h):window,A=g.nodeName&&g.nodeName.toLowerCase(),A==="select"||A==="input"&&g.type==="file")var U=II;else if(rm(g))if(__)U=CI;else{U=RI;var j=SI}else(A=g.nodeName)&&A.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(U=AI);if(U&&(U=U(t,h))){y_(p,U,n,f);break e}j&&j(t,g,h),t==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&Fc(g,"number",g.value)}switch(j=h?pi(h):window,t){case"focusin":(rm(j)||j.contentEditable==="true")&&(di=j,Xc=h,js=null);break;case"focusout":js=Xc=di=null;break;case"mousedown":Jc=!0;break;case"contextmenu":case"mouseup":case"dragend":Jc=!1,lm(p,n,f);break;case"selectionchange":if(NI)break;case"keydown":case"keyup":lm(p,n,f)}var v;if(fd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else hi?m_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(p_&&n.locale!=="ko"&&(hi||y!=="onCompositionStart"?y==="onCompositionEnd"&&hi&&(v=f_()):(Kn=f,cd="value"in Kn?Kn.value:Kn.textContent,hi=!0)),j=ol(h,y),0<j.length&&(y=new Zp(y,t,null,n,f),p.push({event:y,listeners:j}),v?y.data=v:(v=g_(n),v!==null&&(y.data=v)))),(v=_I?vI(t,n):EI(t,n))&&(h=ol(h,"onBeforeInput"),0<h.length&&(f=new Zp("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=v))}P_(p,e)})}function oo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ol(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Zs(t,n),s!=null&&r.unshift(oo(t,s,i)),s=Zs(t,e),s!=null&&r.push(oo(t,s,i))),t=t.return}return r}function ii(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Zs(n,s),u!=null&&o.unshift(oo(n,u,l))):i||(u=Zs(n,s),u!=null&&o.push(oo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var VI=/\r\n?/g,LI=/\u0000|\uFFFD/g;function dm(t){return(typeof t=="string"?t:""+t).replace(VI,`
`).replace(LI,"")}function va(t,e,n){if(e=dm(e),dm(t)!==e&&n)throw Error(F(425))}function al(){}var Zc=null,eh=null;function th(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var nh=typeof setTimeout=="function"?setTimeout:void 0,MI=typeof clearTimeout=="function"?clearTimeout:void 0,fm=typeof Promise=="function"?Promise:void 0,bI=typeof queueMicrotask=="function"?queueMicrotask:typeof fm<"u"?function(t){return fm.resolve(null).then(t).catch(UI)}:nh;function UI(t){setTimeout(function(){throw t})}function lc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),no(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);no(e)}function er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function pm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Yi=Math.random().toString(36).slice(2),qt="__reactFiber$"+Yi,ao="__reactProps$"+Yi,Sn="__reactContainer$"+Yi,rh="__reactEvents$"+Yi,FI="__reactListeners$"+Yi,jI="__reactHandles$"+Yi;function Cr(t){var e=t[qt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Sn]||n[qt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=pm(t);t!==null;){if(n=t[qt])return n;t=pm(t)}return e}t=n,n=t.parentNode}return null}function ko(t){return t=t[qt]||t[Sn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function pi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Kl(t){return t[ao]||null}var ih=[],mi=-1;function mr(t){return{current:t}}function pe(t){0>mi||(t.current=ih[mi],ih[mi]=null,mi--)}function he(t,e){mi++,ih[mi]=t.current,t.current=e}var ur={},tt=mr(ur),ft=mr(!1),Lr=ur;function Li(t,e){var n=t.type.contextTypes;if(!n)return ur;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function pt(t){return t=t.childContextTypes,t!=null}function ll(){pe(ft),pe(tt)}function mm(t,e,n){if(tt.current!==ur)throw Error(F(168));he(tt,e),he(ft,n)}function N_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,ST(t)||"Unknown",i));return Ee({},n,r)}function ul(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ur,Lr=tt.current,he(tt,t),he(ft,ft.current),!0}function gm(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=N_(t,e,Lr),r.__reactInternalMemoizedMergedChildContext=t,pe(ft),pe(tt),he(tt,t)):pe(ft),he(ft,n)}var pn=null,Gl=!1,uc=!1;function x_(t){pn===null?pn=[t]:pn.push(t)}function BI(t){Gl=!0,x_(t)}function gr(){if(!uc&&pn!==null){uc=!0;var t=0,e=ae;try{var n=pn;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}pn=null,Gl=!1}catch(i){throw pn!==null&&(pn=pn.slice(t+1)),n_(od,gr),i}finally{ae=e,uc=!1}}return null}var gi=[],yi=0,cl=null,hl=0,St=[],Rt=0,Mr=null,mn=1,gn="";function Sr(t,e){gi[yi++]=hl,gi[yi++]=cl,cl=t,hl=e}function D_(t,e,n){St[Rt++]=mn,St[Rt++]=gn,St[Rt++]=Mr,Mr=t;var r=mn;t=gn;var i=32-Ft(r)-1;r&=~(1<<i),n+=1;var s=32-Ft(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,mn=1<<32-Ft(e)+i|n<<i|r,gn=s+t}else mn=1<<s|n<<i|r,gn=t}function md(t){t.return!==null&&(Sr(t,1),D_(t,1,0))}function gd(t){for(;t===cl;)cl=gi[--yi],gi[yi]=null,hl=gi[--yi],gi[yi]=null;for(;t===Mr;)Mr=St[--Rt],St[Rt]=null,gn=St[--Rt],St[Rt]=null,mn=St[--Rt],St[Rt]=null}var vt=null,_t=null,me=!1,Mt=null;function O_(t,e){var n=Pt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ym(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vt=t,_t=er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vt=t,_t=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Mr!==null?{id:mn,overflow:gn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vt=t,_t=null,!0):!1;default:return!1}}function sh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function oh(t){if(me){var e=_t;if(e){var n=e;if(!ym(t,e)){if(sh(t))throw Error(F(418));e=er(n.nextSibling);var r=vt;e&&ym(t,e)?O_(r,n):(t.flags=t.flags&-4097|2,me=!1,vt=t)}}else{if(sh(t))throw Error(F(418));t.flags=t.flags&-4097|2,me=!1,vt=t}}}function _m(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vt=t}function Ea(t){if(t!==vt)return!1;if(!me)return _m(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!th(t.type,t.memoizedProps)),e&&(e=_t)){if(sh(t))throw V_(),Error(F(418));for(;e;)O_(t,e),e=er(e.nextSibling)}if(_m(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_t=er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_t=null}}else _t=vt?er(t.stateNode.nextSibling):null;return!0}function V_(){for(var t=_t;t;)t=er(t.nextSibling)}function Mi(){_t=vt=null,me=!1}function yd(t){Mt===null?Mt=[t]:Mt.push(t)}var zI=Dn.ReactCurrentBatchConfig;function ws(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function wa(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vm(t){var e=t._init;return e(t._payload)}function L_(t){function e(w,_){if(t){var R=w.deletions;R===null?(w.deletions=[_],w.flags|=16):R.push(_)}}function n(w,_){if(!t)return null;for(;_!==null;)e(w,_),_=_.sibling;return null}function r(w,_){for(w=new Map;_!==null;)_.key!==null?w.set(_.key,_):w.set(_.index,_),_=_.sibling;return w}function i(w,_){return w=ir(w,_),w.index=0,w.sibling=null,w}function s(w,_,R){return w.index=R,t?(R=w.alternate,R!==null?(R=R.index,R<_?(w.flags|=2,_):R):(w.flags|=2,_)):(w.flags|=1048576,_)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,_,R,O){return _===null||_.tag!==6?(_=gc(R,w.mode,O),_.return=w,_):(_=i(_,R),_.return=w,_)}function u(w,_,R,O){var U=R.type;return U===ci?f(w,_,R.props.children,O,R.key):_!==null&&(_.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Un&&vm(U)===_.type)?(O=i(_,R.props),O.ref=ws(w,_,R),O.return=w,O):(O=$a(R.type,R.key,R.props,null,w.mode,O),O.ref=ws(w,_,R),O.return=w,O)}function h(w,_,R,O){return _===null||_.tag!==4||_.stateNode.containerInfo!==R.containerInfo||_.stateNode.implementation!==R.implementation?(_=yc(R,w.mode,O),_.return=w,_):(_=i(_,R.children||[]),_.return=w,_)}function f(w,_,R,O,U){return _===null||_.tag!==7?(_=Dr(R,w.mode,O,U),_.return=w,_):(_=i(_,R),_.return=w,_)}function p(w,_,R){if(typeof _=="string"&&_!==""||typeof _=="number")return _=gc(""+_,w.mode,R),_.return=w,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ca:return R=$a(_.type,_.key,_.props,null,w.mode,R),R.ref=ws(w,null,_),R.return=w,R;case ui:return _=yc(_,w.mode,R),_.return=w,_;case Un:var O=_._init;return p(w,O(_._payload),R)}if(Cs(_)||gs(_))return _=Dr(_,w.mode,R,null),_.return=w,_;wa(w,_)}return null}function g(w,_,R,O){var U=_!==null?_.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return U!==null?null:l(w,_,""+R,O);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case ca:return R.key===U?u(w,_,R,O):null;case ui:return R.key===U?h(w,_,R,O):null;case Un:return U=R._init,g(w,_,U(R._payload),O)}if(Cs(R)||gs(R))return U!==null?null:f(w,_,R,O,null);wa(w,R)}return null}function A(w,_,R,O,U){if(typeof O=="string"&&O!==""||typeof O=="number")return w=w.get(R)||null,l(_,w,""+O,U);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case ca:return w=w.get(O.key===null?R:O.key)||null,u(_,w,O,U);case ui:return w=w.get(O.key===null?R:O.key)||null,h(_,w,O,U);case Un:var j=O._init;return A(w,_,R,j(O._payload),U)}if(Cs(O)||gs(O))return w=w.get(R)||null,f(_,w,O,U,null);wa(_,O)}return null}function P(w,_,R,O){for(var U=null,j=null,v=_,y=_=0,E=null;v!==null&&y<R.length;y++){v.index>y?(E=v,v=null):E=v.sibling;var T=g(w,v,R[y],O);if(T===null){v===null&&(v=E);break}t&&v&&T.alternate===null&&e(w,v),_=s(T,_,y),j===null?U=T:j.sibling=T,j=T,v=E}if(y===R.length)return n(w,v),me&&Sr(w,y),U;if(v===null){for(;y<R.length;y++)v=p(w,R[y],O),v!==null&&(_=s(v,_,y),j===null?U=v:j.sibling=v,j=v);return me&&Sr(w,y),U}for(v=r(w,v);y<R.length;y++)E=A(v,w,y,R[y],O),E!==null&&(t&&E.alternate!==null&&v.delete(E.key===null?y:E.key),_=s(E,_,y),j===null?U=E:j.sibling=E,j=E);return t&&v.forEach(function(S){return e(w,S)}),me&&Sr(w,y),U}function D(w,_,R,O){var U=gs(R);if(typeof U!="function")throw Error(F(150));if(R=U.call(R),R==null)throw Error(F(151));for(var j=U=null,v=_,y=_=0,E=null,T=R.next();v!==null&&!T.done;y++,T=R.next()){v.index>y?(E=v,v=null):E=v.sibling;var S=g(w,v,T.value,O);if(S===null){v===null&&(v=E);break}t&&v&&S.alternate===null&&e(w,v),_=s(S,_,y),j===null?U=S:j.sibling=S,j=S,v=E}if(T.done)return n(w,v),me&&Sr(w,y),U;if(v===null){for(;!T.done;y++,T=R.next())T=p(w,T.value,O),T!==null&&(_=s(T,_,y),j===null?U=T:j.sibling=T,j=T);return me&&Sr(w,y),U}for(v=r(w,v);!T.done;y++,T=R.next())T=A(v,w,y,T.value,O),T!==null&&(t&&T.alternate!==null&&v.delete(T.key===null?y:T.key),_=s(T,_,y),j===null?U=T:j.sibling=T,j=T);return t&&v.forEach(function(k){return e(w,k)}),me&&Sr(w,y),U}function N(w,_,R,O){if(typeof R=="object"&&R!==null&&R.type===ci&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case ca:e:{for(var U=R.key,j=_;j!==null;){if(j.key===U){if(U=R.type,U===ci){if(j.tag===7){n(w,j.sibling),_=i(j,R.props.children),_.return=w,w=_;break e}}else if(j.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Un&&vm(U)===j.type){n(w,j.sibling),_=i(j,R.props),_.ref=ws(w,j,R),_.return=w,w=_;break e}n(w,j);break}else e(w,j);j=j.sibling}R.type===ci?(_=Dr(R.props.children,w.mode,O,R.key),_.return=w,w=_):(O=$a(R.type,R.key,R.props,null,w.mode,O),O.ref=ws(w,_,R),O.return=w,w=O)}return o(w);case ui:e:{for(j=R.key;_!==null;){if(_.key===j)if(_.tag===4&&_.stateNode.containerInfo===R.containerInfo&&_.stateNode.implementation===R.implementation){n(w,_.sibling),_=i(_,R.children||[]),_.return=w,w=_;break e}else{n(w,_);break}else e(w,_);_=_.sibling}_=yc(R,w.mode,O),_.return=w,w=_}return o(w);case Un:return j=R._init,N(w,_,j(R._payload),O)}if(Cs(R))return P(w,_,R,O);if(gs(R))return D(w,_,R,O);wa(w,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,_!==null&&_.tag===6?(n(w,_.sibling),_=i(_,R),_.return=w,w=_):(n(w,_),_=gc(R,w.mode,O),_.return=w,w=_),o(w)):n(w,_)}return N}var bi=L_(!0),M_=L_(!1),dl=mr(null),fl=null,_i=null,_d=null;function vd(){_d=_i=fl=null}function Ed(t){var e=dl.current;pe(dl),t._currentValue=e}function ah(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ci(t,e){fl=t,_d=_i=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dt=!0),t.firstContext=null)}function Nt(t){var e=t._currentValue;if(_d!==t)if(t={context:t,memoizedValue:e,next:null},_i===null){if(fl===null)throw Error(F(308));_i=t,fl.dependencies={lanes:0,firstContext:t}}else _i=_i.next=t;return e}var Pr=null;function wd(t){Pr===null?Pr=[t]:Pr.push(t)}function b_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,wd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Rn(t,r)}function Rn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Fn=!1;function Td(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function U_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function En(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Rn(t,n)}return i=r.interleaved,i===null?(e.next=e,wd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Rn(t,n)}function ba(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ad(t,n)}}function Em(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pl(t,e,n,r){var i=t.updateQueue;Fn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=h=u=null,l=s;do{var g=l.lane,A=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,D=l;switch(g=e,A=n,D.tag){case 1:if(P=D.payload,typeof P=="function"){p=P.call(A,p,g);break e}p=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=D.payload,g=typeof P=="function"?P.call(A,p,g):P,g==null)break e;p=Ee({},p,g);break e;case 2:Fn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else A={eventTime:A,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=A,u=p):f=f.next=A,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ur|=o,t.lanes=o,t.memoizedState=p}}function wm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var No={},Qt=mr(No),lo=mr(No),uo=mr(No);function kr(t){if(t===No)throw Error(F(174));return t}function Id(t,e){switch(he(uo,e),he(lo,t),he(Qt,No),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bc(e,t)}pe(Qt),he(Qt,e)}function Ui(){pe(Qt),pe(lo),pe(uo)}function F_(t){kr(uo.current);var e=kr(Qt.current),n=Bc(e,t.type);e!==n&&(he(lo,t),he(Qt,n))}function Sd(t){lo.current===t&&(pe(Qt),pe(lo))}var _e=mr(0);function ml(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cc=[];function Rd(){for(var t=0;t<cc.length;t++)cc[t]._workInProgressVersionPrimary=null;cc.length=0}var Ua=Dn.ReactCurrentDispatcher,hc=Dn.ReactCurrentBatchConfig,br=0,ve=null,Ne=null,Me=null,gl=!1,Bs=!1,co=0,$I=0;function Qe(){throw Error(F(321))}function Ad(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zt(t[n],e[n]))return!1;return!0}function Cd(t,e,n,r,i,s){if(br=s,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ua.current=t===null||t.memoizedState===null?KI:GI,t=n(r,i),Bs){s=0;do{if(Bs=!1,co=0,25<=s)throw Error(F(301));s+=1,Me=Ne=null,e.updateQueue=null,Ua.current=QI,t=n(r,i)}while(Bs)}if(Ua.current=yl,e=Ne!==null&&Ne.next!==null,br=0,Me=Ne=ve=null,gl=!1,e)throw Error(F(300));return t}function Pd(){var t=co!==0;return co=0,t}function Ht(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?ve.memoizedState=Me=t:Me=Me.next=t,Me}function xt(){if(Ne===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=Ne.next;var e=Me===null?ve.memoizedState:Me.next;if(e!==null)Me=e,Ne=t;else{if(t===null)throw Error(F(310));Ne=t,t={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Me===null?ve.memoizedState=Me=t:Me=Me.next=t}return Me}function ho(t,e){return typeof e=="function"?e(t):e}function dc(t){var e=xt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Ne,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((br&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,ve.lanes|=f,Ur|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,zt(r,e.memoizedState)||(dt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ve.lanes|=s,Ur|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function fc(t){var e=xt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);zt(s,e.memoizedState)||(dt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function j_(){}function B_(t,e){var n=ve,r=xt(),i=e(),s=!zt(r.memoizedState,i);if(s&&(r.memoizedState=i,dt=!0),r=r.queue,kd(W_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,fo(9,$_.bind(null,n,r,i,e),void 0,null),be===null)throw Error(F(349));br&30||z_(n,e,i)}return i}function z_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function $_(t,e,n,r){e.value=n,e.getSnapshot=r,H_(e)&&q_(t)}function W_(t,e,n){return n(function(){H_(e)&&q_(t)})}function H_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zt(t,n)}catch{return!0}}function q_(t){var e=Rn(t,1);e!==null&&jt(e,t,1,-1)}function Tm(t){var e=Ht();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:t},e.queue=t,t=t.dispatch=qI.bind(null,ve,t),[e.memoizedState,t]}function fo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function K_(){return xt().memoizedState}function Fa(t,e,n,r){var i=Ht();ve.flags|=t,i.memoizedState=fo(1|e,n,void 0,r===void 0?null:r)}function Ql(t,e,n,r){var i=xt();r=r===void 0?null:r;var s=void 0;if(Ne!==null){var o=Ne.memoizedState;if(s=o.destroy,r!==null&&Ad(r,o.deps)){i.memoizedState=fo(e,n,s,r);return}}ve.flags|=t,i.memoizedState=fo(1|e,n,s,r)}function Im(t,e){return Fa(8390656,8,t,e)}function kd(t,e){return Ql(2048,8,t,e)}function G_(t,e){return Ql(4,2,t,e)}function Q_(t,e){return Ql(4,4,t,e)}function Y_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function X_(t,e,n){return n=n!=null?n.concat([t]):null,Ql(4,4,Y_.bind(null,e,t),n)}function Nd(){}function J_(t,e){var n=xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ad(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Z_(t,e){var n=xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ad(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ev(t,e,n){return br&21?(zt(n,e)||(n=s_(),ve.lanes|=n,Ur|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dt=!0),t.memoizedState=n)}function WI(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=hc.transition;hc.transition={};try{t(!1),e()}finally{ae=n,hc.transition=r}}function tv(){return xt().memoizedState}function HI(t,e,n){var r=rr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nv(t))rv(e,n);else if(n=b_(t,e,n,r),n!==null){var i=at();jt(n,t,r,i),iv(n,e,r)}}function qI(t,e,n){var r=rr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(nv(t))rv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,zt(l,o)){var u=e.interleaved;u===null?(i.next=i,wd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=b_(t,e,i,r),n!==null&&(i=at(),jt(n,t,r,i),iv(n,e,r))}}function nv(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function rv(t,e){Bs=gl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function iv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ad(t,n)}}var yl={readContext:Nt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},KI={readContext:Nt,useCallback:function(t,e){return Ht().memoizedState=[t,e===void 0?null:e],t},useContext:Nt,useEffect:Im,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Fa(4194308,4,Y_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Fa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Fa(4,2,t,e)},useMemo:function(t,e){var n=Ht();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ht();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=HI.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=Ht();return t={current:t},e.memoizedState=t},useState:Tm,useDebugValue:Nd,useDeferredValue:function(t){return Ht().memoizedState=t},useTransition:function(){var t=Tm(!1),e=t[0];return t=WI.bind(null,t[1]),Ht().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,i=Ht();if(me){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),be===null)throw Error(F(349));br&30||z_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Im(W_.bind(null,r,s,t),[t]),r.flags|=2048,fo(9,$_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ht(),e=be.identifierPrefix;if(me){var n=gn,r=mn;n=(r&~(1<<32-Ft(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=co++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=$I++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},GI={readContext:Nt,useCallback:J_,useContext:Nt,useEffect:kd,useImperativeHandle:X_,useInsertionEffect:G_,useLayoutEffect:Q_,useMemo:Z_,useReducer:dc,useRef:K_,useState:function(){return dc(ho)},useDebugValue:Nd,useDeferredValue:function(t){var e=xt();return ev(e,Ne.memoizedState,t)},useTransition:function(){var t=dc(ho)[0],e=xt().memoizedState;return[t,e]},useMutableSource:j_,useSyncExternalStore:B_,useId:tv,unstable_isNewReconciler:!1},QI={readContext:Nt,useCallback:J_,useContext:Nt,useEffect:kd,useImperativeHandle:X_,useInsertionEffect:G_,useLayoutEffect:Q_,useMemo:Z_,useReducer:fc,useRef:K_,useState:function(){return fc(ho)},useDebugValue:Nd,useDeferredValue:function(t){var e=xt();return Ne===null?e.memoizedState=t:ev(e,Ne.memoizedState,t)},useTransition:function(){var t=fc(ho)[0],e=xt().memoizedState;return[t,e]},useMutableSource:j_,useSyncExternalStore:B_,useId:tv,unstable_isNewReconciler:!1};function Vt(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function lh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yl={isMounted:function(t){return(t=t._reactInternals)?Kr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=at(),i=rr(t),s=En(r,i);s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,i),e!==null&&(jt(e,t,i,r),ba(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=at(),i=rr(t),s=En(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,i),e!==null&&(jt(e,t,i,r),ba(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=at(),r=rr(t),i=En(n,r);i.tag=2,e!=null&&(i.callback=e),e=tr(t,i,r),e!==null&&(jt(e,t,r,n),ba(e,t,r))}};function Sm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!io(n,r)||!io(i,s):!0}function sv(t,e,n){var r=!1,i=ur,s=e.contextType;return typeof s=="object"&&s!==null?s=Nt(s):(i=pt(e)?Lr:tt.current,r=e.contextTypes,s=(r=r!=null)?Li(t,i):ur),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Rm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Yl.enqueueReplaceState(e,e.state,null)}function uh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Td(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Nt(s):(s=pt(e)?Lr:tt.current,i.context=Li(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(lh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Yl.enqueueReplaceState(i,i.state,null),pl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Fi(t,e){try{var n="",r=e;do n+=IT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function pc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ch(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var YI=typeof WeakMap=="function"?WeakMap:Map;function ov(t,e,n){n=En(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){vl||(vl=!0,Eh=r),ch(t,e)},n}function av(t,e,n){n=En(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ch(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ch(t,e),typeof r!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Am(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new YI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=cS.bind(null,t,e,n),e.then(t,t))}function Cm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Pm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=En(-1,1),e.tag=2,tr(n,e,1))),n.lanes|=1),t)}var XI=Dn.ReactCurrentOwner,dt=!1;function ot(t,e,n,r){e.child=t===null?M_(e,null,n,r):bi(e,t.child,n,r)}function km(t,e,n,r,i){n=n.render;var s=e.ref;return Ci(e,i),r=Cd(t,e,n,r,s,i),n=Pd(),t!==null&&!dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,An(t,e,i)):(me&&n&&md(e),e.flags|=1,ot(t,e,r,i),e.child)}function Nm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ud(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,lv(t,e,s,r,i)):(t=$a(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:io,n(o,r)&&t.ref===e.ref)return An(t,e,i)}return e.flags|=1,t=ir(s,r),t.ref=e.ref,t.return=e,e.child=t}function lv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(io(s,r)&&t.ref===e.ref)if(dt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(dt=!0);else return e.lanes=t.lanes,An(t,e,i)}return hh(t,e,n,r,i)}function uv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(Ei,yt),yt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,he(Ei,yt),yt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,he(Ei,yt),yt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,he(Ei,yt),yt|=r;return ot(t,e,i,n),e.child}function cv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function hh(t,e,n,r,i){var s=pt(n)?Lr:tt.current;return s=Li(e,s),Ci(e,i),n=Cd(t,e,n,r,s,i),r=Pd(),t!==null&&!dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,An(t,e,i)):(me&&r&&md(e),e.flags|=1,ot(t,e,n,i),e.child)}function xm(t,e,n,r,i){if(pt(n)){var s=!0;ul(e)}else s=!1;if(Ci(e,i),e.stateNode===null)ja(t,e),sv(e,n,r),uh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Nt(h):(h=pt(n)?Lr:tt.current,h=Li(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Rm(e,o,r,h),Fn=!1;var g=e.memoizedState;o.state=g,pl(e,r,o,i),u=e.memoizedState,l!==r||g!==u||ft.current||Fn?(typeof f=="function"&&(lh(e,n,f,r),u=e.memoizedState),(l=Fn||Sm(e,n,l,r,g,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,U_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Vt(e.type,l),o.props=h,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Nt(u):(u=pt(n)?Lr:tt.current,u=Li(e,u));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&Rm(e,o,r,u),Fn=!1,g=e.memoizedState,o.state=g,pl(e,r,o,i);var P=e.memoizedState;l!==p||g!==P||ft.current||Fn?(typeof A=="function"&&(lh(e,n,A,r),P=e.memoizedState),(h=Fn||Sm(e,n,h,r,g,P,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return dh(t,e,n,r,s,i)}function dh(t,e,n,r,i,s){cv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&gm(e,n,!1),An(t,e,s);r=e.stateNode,XI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=bi(e,t.child,null,s),e.child=bi(e,null,l,s)):ot(t,e,l,s),e.memoizedState=r.state,i&&gm(e,n,!0),e.child}function hv(t){var e=t.stateNode;e.pendingContext?mm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&mm(t,e.context,!1),Id(t,e.containerInfo)}function Dm(t,e,n,r,i){return Mi(),yd(i),e.flags|=256,ot(t,e,n,r),e.child}var fh={dehydrated:null,treeContext:null,retryLane:0};function ph(t){return{baseLanes:t,cachePool:null,transitions:null}}function dv(t,e,n){var r=e.pendingProps,i=_e.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),he(_e,i&1),t===null)return oh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Zl(o,r,0,null),t=Dr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ph(n),e.memoizedState=fh,t):xd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return JI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ir(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ir(l,s):(s=Dr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ph(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=fh,r}return s=t.child,t=s.sibling,r=ir(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function xd(t,e){return e=Zl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ta(t,e,n,r){return r!==null&&yd(r),bi(e,t.child,null,n),t=xd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function JI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=pc(Error(F(422))),Ta(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Zl({mode:"visible",children:r.children},i,0,null),s=Dr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&bi(e,t.child,null,o),e.child.memoizedState=ph(o),e.memoizedState=fh,s);if(!(e.mode&1))return Ta(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=pc(s,r,void 0),Ta(t,e,o,r)}if(l=(o&t.childLanes)!==0,dt||l){if(r=be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Rn(t,i),jt(r,t,i,-1))}return bd(),r=pc(Error(F(421))),Ta(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=hS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,_t=er(i.nextSibling),vt=e,me=!0,Mt=null,t!==null&&(St[Rt++]=mn,St[Rt++]=gn,St[Rt++]=Mr,mn=t.id,gn=t.overflow,Mr=e),e=xd(e,r.children),e.flags|=4096,e)}function Om(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ah(t.return,e,n)}function mc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function fv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ot(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Om(t,n,e);else if(t.tag===19)Om(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(he(_e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ml(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),mc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ml(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}mc(e,!0,n,null,s);break;case"together":mc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ja(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function An(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ur|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ZI(t,e,n){switch(e.tag){case 3:hv(e),Mi();break;case 5:F_(e);break;case 1:pt(e.type)&&ul(e);break;case 4:Id(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;he(dl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(he(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?dv(t,e,n):(he(_e,_e.current&1),t=An(t,e,n),t!==null?t.sibling:null);he(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return fv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,uv(t,e,n)}return An(t,e,n)}var pv,mh,mv,gv;pv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};mh=function(){};mv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,kr(Qt.current);var s=null;switch(n){case"input":i=bc(t,i),r=bc(t,r),s=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),s=[];break;case"textarea":i=jc(t,i),r=jc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=al)}zc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Xs.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Xs.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&fe("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};gv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ts(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ye(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function eS(t,e,n){var r=e.pendingProps;switch(gd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(e),null;case 1:return pt(e.type)&&ll(),Ye(e),null;case 3:return r=e.stateNode,Ui(),pe(ft),pe(tt),Rd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ea(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mt!==null&&(Ih(Mt),Mt=null))),mh(t,e),Ye(e),null;case 5:Sd(e);var i=kr(uo.current);if(n=e.type,t!==null&&e.stateNode!=null)mv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Ye(e),null}if(t=kr(Qt.current),Ea(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[qt]=e,r[ao]=s,t=(e.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<ks.length;i++)fe(ks[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":zp(r,s),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},fe("invalid",r);break;case"textarea":Wp(r,s),fe("invalid",r)}zc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&va(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&va(r.textContent,l,t),i=["children",""+l]):Xs.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&fe("scroll",r)}switch(n){case"input":ha(r),$p(r,s,!0);break;case"textarea":ha(r),Hp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=al)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Wy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[qt]=e,t[ao]=r,pv(t,e,!1,!1),e.stateNode=t;e:{switch(o=$c(n,r),n){case"dialog":fe("cancel",t),fe("close",t),i=r;break;case"iframe":case"object":case"embed":fe("load",t),i=r;break;case"video":case"audio":for(i=0;i<ks.length;i++)fe(ks[i],t);i=r;break;case"source":fe("error",t),i=r;break;case"img":case"image":case"link":fe("error",t),fe("load",t),i=r;break;case"details":fe("toggle",t),i=r;break;case"input":zp(t,r),i=bc(t,r),fe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),fe("invalid",t);break;case"textarea":Wp(t,r),i=jc(t,r),fe("invalid",t);break;default:i=r}zc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Ky(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Hy(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Js(t,u):typeof u=="number"&&Js(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xs.hasOwnProperty(s)?u!=null&&s==="onScroll"&&fe("scroll",t):u!=null&&td(t,s,u,o))}switch(n){case"input":ha(t),$p(t,r,!1);break;case"textarea":ha(t),Hp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+lr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ii(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ii(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=al)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ye(e),null;case 6:if(t&&e.stateNode!=null)gv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=kr(uo.current),kr(Qt.current),Ea(e)){if(r=e.stateNode,n=e.memoizedProps,r[qt]=e,(s=r.nodeValue!==n)&&(t=vt,t!==null))switch(t.tag){case 3:va(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&va(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qt]=e,e.stateNode=r}return Ye(e),null;case 13:if(pe(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&_t!==null&&e.mode&1&&!(e.flags&128))V_(),Mi(),e.flags|=98560,s=!1;else if(s=Ea(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[qt]=e}else Mi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ye(e),s=!1}else Mt!==null&&(Ih(Mt),Mt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?De===0&&(De=3):bd())),e.updateQueue!==null&&(e.flags|=4),Ye(e),null);case 4:return Ui(),mh(t,e),t===null&&so(e.stateNode.containerInfo),Ye(e),null;case 10:return Ed(e.type._context),Ye(e),null;case 17:return pt(e.type)&&ll(),Ye(e),null;case 19:if(pe(_e),s=e.memoizedState,s===null)return Ye(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ts(s,!1);else{if(De!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ml(t),o!==null){for(e.flags|=128,Ts(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return he(_e,_e.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ae()>ji&&(e.flags|=128,r=!0,Ts(s,!1),e.lanes=4194304)}else{if(!r)if(t=ml(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ts(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!me)return Ye(e),null}else 2*Ae()-s.renderingStartTime>ji&&n!==1073741824&&(e.flags|=128,r=!0,Ts(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ae(),e.sibling=null,n=_e.current,he(_e,r?n&1|2:n&1),e):(Ye(e),null);case 22:case 23:return Md(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?yt&1073741824&&(Ye(e),e.subtreeFlags&6&&(e.flags|=8192)):Ye(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function tS(t,e){switch(gd(e),e.tag){case 1:return pt(e.type)&&ll(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ui(),pe(ft),pe(tt),Rd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Sd(e),null;case 13:if(pe(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Mi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(_e),null;case 4:return Ui(),null;case 10:return Ed(e.type._context),null;case 22:case 23:return Md(),null;case 24:return null;default:return null}}var Ia=!1,Ze=!1,nS=typeof WeakSet=="function"?WeakSet:Set,$=null;function vi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(t,e,r)}else n.current=null}function gh(t,e,n){try{n()}catch(r){Ie(t,e,r)}}var Vm=!1;function rS(t,e){if(Zc=il,t=w_(),pd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,g=null;t:for(;;){for(var A;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(A=p.firstChild)!==null;)g=p,p=A;for(;;){if(p===t)break t;if(g===n&&++h===i&&(l=o),g===s&&++f===r&&(u=o),(A=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(eh={focusedElem:t,selectionRange:n},il=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var D=P.memoizedProps,N=P.memoizedState,w=e.stateNode,_=w.getSnapshotBeforeUpdate(e.elementType===e.type?D:Vt(e.type,D),N);w.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var R=e.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(O){Ie(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return P=Vm,Vm=!1,P}function zs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&gh(e,n,s)}i=i.next}while(i!==r)}}function Xl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function yh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function yv(t){var e=t.alternate;e!==null&&(t.alternate=null,yv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qt],delete e[ao],delete e[rh],delete e[FI],delete e[jI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function _v(t){return t.tag===5||t.tag===3||t.tag===4}function Lm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_v(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _h(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=al));else if(r!==4&&(t=t.child,t!==null))for(_h(t,e,n),t=t.sibling;t!==null;)_h(t,e,n),t=t.sibling}function vh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(vh(t,e,n),t=t.sibling;t!==null;)vh(t,e,n),t=t.sibling}var Fe=null,Lt=!1;function Mn(t,e,n){for(n=n.child;n!==null;)vv(t,e,n),n=n.sibling}function vv(t,e,n){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount($l,n)}catch{}switch(n.tag){case 5:Ze||vi(n,e);case 6:var r=Fe,i=Lt;Fe=null,Mn(t,e,n),Fe=r,Lt=i,Fe!==null&&(Lt?(t=Fe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&(Lt?(t=Fe,n=n.stateNode,t.nodeType===8?lc(t.parentNode,n):t.nodeType===1&&lc(t,n),no(t)):lc(Fe,n.stateNode));break;case 4:r=Fe,i=Lt,Fe=n.stateNode.containerInfo,Lt=!0,Mn(t,e,n),Fe=r,Lt=i;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&gh(n,e,o),i=i.next}while(i!==r)}Mn(t,e,n);break;case 1:if(!Ze&&(vi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ie(n,e,l)}Mn(t,e,n);break;case 21:Mn(t,e,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,Mn(t,e,n),Ze=r):Mn(t,e,n);break;default:Mn(t,e,n)}}function Mm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new nS),e.forEach(function(r){var i=dS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ot(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Fe=l.stateNode,Lt=!1;break e;case 3:Fe=l.stateNode.containerInfo,Lt=!0;break e;case 4:Fe=l.stateNode.containerInfo,Lt=!0;break e}l=l.return}if(Fe===null)throw Error(F(160));vv(s,o,i),Fe=null,Lt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Ie(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ev(e,t),e=e.sibling}function Ev(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ot(e,t),Wt(t),r&4){try{zs(3,t,t.return),Xl(3,t)}catch(D){Ie(t,t.return,D)}try{zs(5,t,t.return)}catch(D){Ie(t,t.return,D)}}break;case 1:Ot(e,t),Wt(t),r&512&&n!==null&&vi(n,n.return);break;case 5:if(Ot(e,t),Wt(t),r&512&&n!==null&&vi(n,n.return),t.flags&32){var i=t.stateNode;try{Js(i,"")}catch(D){Ie(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&zy(i,s),$c(l,o);var h=$c(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?Ky(i,p):f==="dangerouslySetInnerHTML"?Hy(i,p):f==="children"?Js(i,p):td(i,f,p,h)}switch(l){case"input":Uc(i,s);break;case"textarea":$y(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?Ii(i,!!s.multiple,A,!1):g!==!!s.multiple&&(s.defaultValue!=null?Ii(i,!!s.multiple,s.defaultValue,!0):Ii(i,!!s.multiple,s.multiple?[]:"",!1))}i[ao]=s}catch(D){Ie(t,t.return,D)}}break;case 6:if(Ot(e,t),Wt(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(D){Ie(t,t.return,D)}}break;case 3:if(Ot(e,t),Wt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{no(e.containerInfo)}catch(D){Ie(t,t.return,D)}break;case 4:Ot(e,t),Wt(t);break;case 13:Ot(e,t),Wt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Vd=Ae())),r&4&&Mm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ze=(h=Ze)||f,Ot(e,t),Ze=h):Ot(e,t),Wt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for($=t,f=t.child;f!==null;){for(p=$=f;$!==null;){switch(g=$,A=g.child,g.tag){case 0:case 11:case 14:case 15:zs(4,g,g.return);break;case 1:vi(g,g.return);var P=g.stateNode;if(typeof P.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(D){Ie(r,n,D)}}break;case 5:vi(g,g.return);break;case 22:if(g.memoizedState!==null){Um(p);continue}}A!==null?(A.return=g,$=A):Um(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=qy("display",o))}catch(D){Ie(t,t.return,D)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(D){Ie(t,t.return,D)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ot(e,t),Wt(t),r&4&&Mm(t);break;case 21:break;default:Ot(e,t),Wt(t)}}function Wt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(_v(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Js(i,""),r.flags&=-33);var s=Lm(t);vh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Lm(t);_h(t,l,o);break;default:throw Error(F(161))}}catch(u){Ie(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function iS(t,e,n){$=t,wv(t)}function wv(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ia;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Ze;l=Ia;var h=Ze;if(Ia=o,(Ze=u)&&!h)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?Fm(i):u!==null?(u.return=o,$=u):Fm(i);for(;s!==null;)$=s,wv(s),s=s.sibling;$=i,Ia=l,Ze=h}bm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):bm(t)}}function bm(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ze||Xl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Vt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&wm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}wm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&no(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Ze||e.flags&512&&yh(e)}catch(g){Ie(e,e.return,g)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Um(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Fm(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xl(4,e)}catch(u){Ie(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ie(e,i,u)}}var s=e.return;try{yh(e)}catch(u){Ie(e,s,u)}break;case 5:var o=e.return;try{yh(e)}catch(u){Ie(e,o,u)}}}catch(u){Ie(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var sS=Math.ceil,_l=Dn.ReactCurrentDispatcher,Dd=Dn.ReactCurrentOwner,kt=Dn.ReactCurrentBatchConfig,ie=0,be=null,Pe=null,ze=0,yt=0,Ei=mr(0),De=0,po=null,Ur=0,Jl=0,Od=0,$s=null,ht=null,Vd=0,ji=1/0,fn=null,vl=!1,Eh=null,nr=null,Sa=!1,Gn=null,El=0,Ws=0,wh=null,Ba=-1,za=0;function at(){return ie&6?Ae():Ba!==-1?Ba:Ba=Ae()}function rr(t){return t.mode&1?ie&2&&ze!==0?ze&-ze:zI.transition!==null?(za===0&&(za=s_()),za):(t=ae,t!==0||(t=window.event,t=t===void 0?16:d_(t.type)),t):1}function jt(t,e,n,r){if(50<Ws)throw Ws=0,wh=null,Error(F(185));Co(t,n,r),(!(ie&2)||t!==be)&&(t===be&&(!(ie&2)&&(Jl|=n),De===4&&Bn(t,ze)),mt(t,r),n===1&&ie===0&&!(e.mode&1)&&(ji=Ae()+500,Gl&&gr()))}function mt(t,e){var n=t.callbackNode;zT(t,e);var r=rl(t,t===be?ze:0);if(r===0)n!==null&&Gp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Gp(n),e===1)t.tag===0?BI(jm.bind(null,t)):x_(jm.bind(null,t)),bI(function(){!(ie&6)&&gr()}),n=null;else{switch(o_(r)){case 1:n=od;break;case 4:n=r_;break;case 16:n=nl;break;case 536870912:n=i_;break;default:n=nl}n=kv(n,Tv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Tv(t,e){if(Ba=-1,za=0,ie&6)throw Error(F(327));var n=t.callbackNode;if(Pi()&&t.callbackNode!==n)return null;var r=rl(t,t===be?ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=wl(t,r);else{e=r;var i=ie;ie|=2;var s=Sv();(be!==t||ze!==e)&&(fn=null,ji=Ae()+500,xr(t,e));do try{lS();break}catch(l){Iv(t,l)}while(!0);vd(),_l.current=s,ie=i,Pe!==null?e=0:(be=null,ze=0,e=De)}if(e!==0){if(e===2&&(i=Gc(t),i!==0&&(r=i,e=Th(t,i))),e===1)throw n=po,xr(t,0),Bn(t,r),mt(t,Ae()),n;if(e===6)Bn(t,r);else{if(i=t.current.alternate,!(r&30)&&!oS(i)&&(e=wl(t,r),e===2&&(s=Gc(t),s!==0&&(r=s,e=Th(t,s))),e===1))throw n=po,xr(t,0),Bn(t,r),mt(t,Ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Rr(t,ht,fn);break;case 3:if(Bn(t,r),(r&130023424)===r&&(e=Vd+500-Ae(),10<e)){if(rl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){at(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=nh(Rr.bind(null,t,ht,fn),e);break}Rr(t,ht,fn);break;case 4:if(Bn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ft(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sS(r/1960))-r,10<r){t.timeoutHandle=nh(Rr.bind(null,t,ht,fn),r);break}Rr(t,ht,fn);break;case 5:Rr(t,ht,fn);break;default:throw Error(F(329))}}}return mt(t,Ae()),t.callbackNode===n?Tv.bind(null,t):null}function Th(t,e){var n=$s;return t.current.memoizedState.isDehydrated&&(xr(t,e).flags|=256),t=wl(t,e),t!==2&&(e=ht,ht=n,e!==null&&Ih(e)),t}function Ih(t){ht===null?ht=t:ht.push.apply(ht,t)}function oS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!zt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Bn(t,e){for(e&=~Od,e&=~Jl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ft(e),r=1<<n;t[n]=-1,e&=~r}}function jm(t){if(ie&6)throw Error(F(327));Pi();var e=rl(t,0);if(!(e&1))return mt(t,Ae()),null;var n=wl(t,e);if(t.tag!==0&&n===2){var r=Gc(t);r!==0&&(e=r,n=Th(t,r))}if(n===1)throw n=po,xr(t,0),Bn(t,e),mt(t,Ae()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rr(t,ht,fn),mt(t,Ae()),null}function Ld(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(ji=Ae()+500,Gl&&gr())}}function Fr(t){Gn!==null&&Gn.tag===0&&!(ie&6)&&Pi();var e=ie;ie|=1;var n=kt.transition,r=ae;try{if(kt.transition=null,ae=1,t)return t()}finally{ae=r,kt.transition=n,ie=e,!(ie&6)&&gr()}}function Md(){yt=Ei.current,pe(Ei)}function xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,MI(n)),Pe!==null)for(n=Pe.return;n!==null;){var r=n;switch(gd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ll();break;case 3:Ui(),pe(ft),pe(tt),Rd();break;case 5:Sd(r);break;case 4:Ui();break;case 13:pe(_e);break;case 19:pe(_e);break;case 10:Ed(r.type._context);break;case 22:case 23:Md()}n=n.return}if(be=t,Pe=t=ir(t.current,null),ze=yt=e,De=0,po=null,Od=Jl=Ur=0,ht=$s=null,Pr!==null){for(e=0;e<Pr.length;e++)if(n=Pr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Pr=null}return t}function Iv(t,e){do{var n=Pe;try{if(vd(),Ua.current=yl,gl){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}gl=!1}if(br=0,Me=Ne=ve=null,Bs=!1,co=0,Dd.current=null,n===null||n.return===null){De=1,po=e,Pe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=ze,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=Cm(o);if(A!==null){A.flags&=-257,Pm(A,o,l,s,e),A.mode&1&&Am(s,h,e),e=A,u=h;var P=e.updateQueue;if(P===null){var D=new Set;D.add(u),e.updateQueue=D}else P.add(u);break e}else{if(!(e&1)){Am(s,h,e),bd();break e}u=Error(F(426))}}else if(me&&l.mode&1){var N=Cm(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Pm(N,o,l,s,e),yd(Fi(u,l));break e}}s=u=Fi(u,l),De!==4&&(De=2),$s===null?$s=[s]:$s.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=ov(s,u,e);Em(s,w);break e;case 1:l=u;var _=s.type,R=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(nr===null||!nr.has(R)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=av(s,l,e);Em(s,O);break e}}s=s.return}while(s!==null)}Av(n)}catch(U){e=U,Pe===n&&n!==null&&(Pe=n=n.return);continue}break}while(!0)}function Sv(){var t=_l.current;return _l.current=yl,t===null?yl:t}function bd(){(De===0||De===3||De===2)&&(De=4),be===null||!(Ur&268435455)&&!(Jl&268435455)||Bn(be,ze)}function wl(t,e){var n=ie;ie|=2;var r=Sv();(be!==t||ze!==e)&&(fn=null,xr(t,e));do try{aS();break}catch(i){Iv(t,i)}while(!0);if(vd(),ie=n,_l.current=r,Pe!==null)throw Error(F(261));return be=null,ze=0,De}function aS(){for(;Pe!==null;)Rv(Pe)}function lS(){for(;Pe!==null&&!OT();)Rv(Pe)}function Rv(t){var e=Pv(t.alternate,t,yt);t.memoizedProps=t.pendingProps,e===null?Av(t):Pe=e,Dd.current=null}function Av(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=tS(n,e),n!==null){n.flags&=32767,Pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{De=6,Pe=null;return}}else if(n=eS(n,e,yt),n!==null){Pe=n;return}if(e=e.sibling,e!==null){Pe=e;return}Pe=e=t}while(e!==null);De===0&&(De=5)}function Rr(t,e,n){var r=ae,i=kt.transition;try{kt.transition=null,ae=1,uS(t,e,n,r)}finally{kt.transition=i,ae=r}return null}function uS(t,e,n,r){do Pi();while(Gn!==null);if(ie&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if($T(t,s),t===be&&(Pe=be=null,ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Sa||(Sa=!0,kv(nl,function(){return Pi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kt.transition,kt.transition=null;var o=ae;ae=1;var l=ie;ie|=4,Dd.current=null,rS(t,n),Ev(n,t),kI(eh),il=!!Zc,eh=Zc=null,t.current=n,iS(n),VT(),ie=l,ae=o,kt.transition=s}else t.current=n;if(Sa&&(Sa=!1,Gn=t,El=i),s=t.pendingLanes,s===0&&(nr=null),bT(n.stateNode),mt(t,Ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(vl)throw vl=!1,t=Eh,Eh=null,t;return El&1&&t.tag!==0&&Pi(),s=t.pendingLanes,s&1?t===wh?Ws++:(Ws=0,wh=t):Ws=0,gr(),null}function Pi(){if(Gn!==null){var t=o_(El),e=kt.transition,n=ae;try{if(kt.transition=null,ae=16>t?16:t,Gn===null)var r=!1;else{if(t=Gn,Gn=null,El=0,ie&6)throw Error(F(331));var i=ie;for(ie|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for($=h;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:zs(8,f,s)}var p=f.child;if(p!==null)p.return=f,$=p;else for(;$!==null;){f=$;var g=f.sibling,A=f.return;if(yv(f),f===h){$=null;break}if(g!==null){g.return=A,$=g;break}$=A}}}var P=s.alternate;if(P!==null){var D=P.child;if(D!==null){P.child=null;do{var N=D.sibling;D.sibling=null,D=N}while(D!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:zs(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,$=w;break e}$=s.return}}var _=t.current;for($=_;$!==null;){o=$;var R=o.child;if(o.subtreeFlags&2064&&R!==null)R.return=o,$=R;else e:for(o=_;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Xl(9,l)}}catch(U){Ie(l,l.return,U)}if(l===o){$=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,$=O;break e}$=l.return}}if(ie=i,gr(),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot($l,t)}catch{}r=!0}return r}finally{ae=n,kt.transition=e}}return!1}function Bm(t,e,n){e=Fi(n,e),e=ov(t,e,1),t=tr(t,e,1),e=at(),t!==null&&(Co(t,1,e),mt(t,e))}function Ie(t,e,n){if(t.tag===3)Bm(t,t,n);else for(;e!==null;){if(e.tag===3){Bm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nr===null||!nr.has(r))){t=Fi(n,t),t=av(e,t,1),e=tr(e,t,1),t=at(),e!==null&&(Co(e,1,t),mt(e,t));break}}e=e.return}}function cS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=at(),t.pingedLanes|=t.suspendedLanes&n,be===t&&(ze&n)===n&&(De===4||De===3&&(ze&130023424)===ze&&500>Ae()-Vd?xr(t,0):Od|=n),mt(t,e)}function Cv(t,e){e===0&&(t.mode&1?(e=pa,pa<<=1,!(pa&130023424)&&(pa=4194304)):e=1);var n=at();t=Rn(t,e),t!==null&&(Co(t,e,n),mt(t,n))}function hS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Cv(t,n)}function dS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Cv(t,n)}var Pv;Pv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ft.current)dt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dt=!1,ZI(t,e,n);dt=!!(t.flags&131072)}else dt=!1,me&&e.flags&1048576&&D_(e,hl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ja(t,e),t=e.pendingProps;var i=Li(e,tt.current);Ci(e,n),i=Cd(null,e,r,t,i,n);var s=Pd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pt(r)?(s=!0,ul(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Td(e),i.updater=Yl,e.stateNode=i,i._reactInternals=e,uh(e,r,t,n),e=dh(null,e,r,!0,s,n)):(e.tag=0,me&&s&&md(e),ot(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ja(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=pS(r),t=Vt(r,t),i){case 0:e=hh(null,e,r,t,n);break e;case 1:e=xm(null,e,r,t,n);break e;case 11:e=km(null,e,r,t,n);break e;case 14:e=Nm(null,e,r,Vt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),hh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),xm(t,e,r,i,n);case 3:e:{if(hv(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,U_(t,e),pl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Fi(Error(F(423)),e),e=Dm(t,e,r,n,i);break e}else if(r!==i){i=Fi(Error(F(424)),e),e=Dm(t,e,r,n,i);break e}else for(_t=er(e.stateNode.containerInfo.firstChild),vt=e,me=!0,Mt=null,n=M_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mi(),r===i){e=An(t,e,n);break e}ot(t,e,r,n)}e=e.child}return e;case 5:return F_(e),t===null&&oh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,th(r,i)?o=null:s!==null&&th(r,s)&&(e.flags|=32),cv(t,e),ot(t,e,o,n),e.child;case 6:return t===null&&oh(e),null;case 13:return dv(t,e,n);case 4:return Id(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=bi(e,null,r,n):ot(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),km(t,e,r,i,n);case 7:return ot(t,e,e.pendingProps,n),e.child;case 8:return ot(t,e,e.pendingProps.children,n),e.child;case 12:return ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,he(dl,r._currentValue),r._currentValue=o,s!==null)if(zt(s.value,o)){if(s.children===i.children&&!ft.current){e=An(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=En(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),ah(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ah(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ot(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ci(e,n),i=Nt(i),r=r(i),e.flags|=1,ot(t,e,r,n),e.child;case 14:return r=e.type,i=Vt(r,e.pendingProps),i=Vt(r.type,i),Nm(t,e,r,i,n);case 15:return lv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Vt(r,i),ja(t,e),e.tag=1,pt(r)?(t=!0,ul(e)):t=!1,Ci(e,n),sv(e,r,i),uh(e,r,i,n),dh(null,e,r,!0,t,n);case 19:return fv(t,e,n);case 22:return uv(t,e,n)}throw Error(F(156,e.tag))};function kv(t,e){return n_(t,e)}function fS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(t,e,n,r){return new fS(t,e,n,r)}function Ud(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pS(t){if(typeof t=="function")return Ud(t)?1:0;if(t!=null){if(t=t.$$typeof,t===rd)return 11;if(t===id)return 14}return 2}function ir(t,e){var n=t.alternate;return n===null?(n=Pt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $a(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ud(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ci:return Dr(n.children,i,s,e);case nd:o=8,i|=8;break;case Oc:return t=Pt(12,n,e,i|2),t.elementType=Oc,t.lanes=s,t;case Vc:return t=Pt(13,n,e,i),t.elementType=Vc,t.lanes=s,t;case Lc:return t=Pt(19,n,e,i),t.elementType=Lc,t.lanes=s,t;case Fy:return Zl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case by:o=10;break e;case Uy:o=9;break e;case rd:o=11;break e;case id:o=14;break e;case Un:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Pt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Dr(t,e,n,r){return t=Pt(7,t,r,e),t.lanes=n,t}function Zl(t,e,n,r){return t=Pt(22,t,r,e),t.elementType=Fy,t.lanes=n,t.stateNode={isHidden:!1},t}function gc(t,e,n){return t=Pt(6,t,null,e),t.lanes=n,t}function yc(t,e,n){return e=Pt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function mS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xu(0),this.expirationTimes=Xu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fd(t,e,n,r,i,s,o,l,u){return t=new mS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Pt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Td(s),t}function gS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ui,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Nv(t){if(!t)return ur;t=t._reactInternals;e:{if(Kr(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(pt(n))return N_(t,n,e)}return e}function xv(t,e,n,r,i,s,o,l,u){return t=Fd(n,r,!0,t,i,s,o,l,u),t.context=Nv(null),n=t.current,r=at(),i=rr(n),s=En(r,i),s.callback=e??null,tr(n,s,i),t.current.lanes=i,Co(t,i,r),mt(t,r),t}function eu(t,e,n,r){var i=e.current,s=at(),o=rr(i);return n=Nv(n),e.context===null?e.context=n:e.pendingContext=n,e=En(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=tr(i,e,o),t!==null&&(jt(t,i,o,s),ba(t,i,o)),o}function Tl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function jd(t,e){zm(t,e),(t=t.alternate)&&zm(t,e)}function yS(){return null}var Dv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bd(t){this._internalRoot=t}tu.prototype.render=Bd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));eu(t,e,null,null)};tu.prototype.unmount=Bd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Fr(function(){eu(null,t,null,null)}),e[Sn]=null}};function tu(t){this._internalRoot=t}tu.prototype.unstable_scheduleHydration=function(t){if(t){var e=u_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<jn.length&&e!==0&&e<jn[n].priority;n++);jn.splice(n,0,t),n===0&&h_(t)}};function zd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $m(){}function _S(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=Tl(o);s.call(h)}}var o=xv(e,r,t,0,null,!1,!1,"",$m);return t._reactRootContainer=o,t[Sn]=o.current,so(t.nodeType===8?t.parentNode:t),Fr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=Tl(u);l.call(h)}}var u=Fd(t,0,!1,null,null,!1,!1,"",$m);return t._reactRootContainer=u,t[Sn]=u.current,so(t.nodeType===8?t.parentNode:t),Fr(function(){eu(e,u,n,r)}),u}function ru(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Tl(o);l.call(u)}}eu(e,o,t,i)}else o=_S(n,e,t,i,r);return Tl(o)}a_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ps(e.pendingLanes);n!==0&&(ad(e,n|1),mt(e,Ae()),!(ie&6)&&(ji=Ae()+500,gr()))}break;case 13:Fr(function(){var r=Rn(t,1);if(r!==null){var i=at();jt(r,t,1,i)}}),jd(t,1)}};ld=function(t){if(t.tag===13){var e=Rn(t,134217728);if(e!==null){var n=at();jt(e,t,134217728,n)}jd(t,134217728)}};l_=function(t){if(t.tag===13){var e=rr(t),n=Rn(t,e);if(n!==null){var r=at();jt(n,t,e,r)}jd(t,e)}};u_=function(){return ae};c_=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};Hc=function(t,e,n){switch(e){case"input":if(Uc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Kl(r);if(!i)throw Error(F(90));By(r),Uc(r,i)}}}break;case"textarea":$y(t,n);break;case"select":e=n.value,e!=null&&Ii(t,!!n.multiple,e,!1)}};Yy=Ld;Xy=Fr;var vS={usingClientEntryPoint:!1,Events:[ko,pi,Kl,Gy,Qy,Ld]},Is={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ES={bundleType:Is.bundleType,version:Is.version,rendererPackageName:Is.rendererPackageName,rendererConfig:Is.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=e_(t),t===null?null:t.stateNode},findFiberByHostInstance:Is.findFiberByHostInstance||yS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ra.isDisabled&&Ra.supportsFiber)try{$l=Ra.inject(ES),Gt=Ra}catch{}}Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vS;Tt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zd(e))throw Error(F(200));return gS(t,e,null,n)};Tt.createRoot=function(t,e){if(!zd(t))throw Error(F(299));var n=!1,r="",i=Dv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Fd(t,1,!1,null,null,n,!1,r,i),t[Sn]=e.current,so(t.nodeType===8?t.parentNode:t),new Bd(e)};Tt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=e_(e),t=t===null?null:t.stateNode,t};Tt.flushSync=function(t){return Fr(t)};Tt.hydrate=function(t,e,n){if(!nu(e))throw Error(F(200));return ru(null,t,e,!0,n)};Tt.hydrateRoot=function(t,e,n){if(!zd(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Dv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=xv(e,null,t,1,n??null,i,!1,s,o),t[Sn]=e.current,so(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new tu(e)};Tt.render=function(t,e,n){if(!nu(e))throw Error(F(200));return ru(null,t,e,!1,n)};Tt.unmountComponentAtNode=function(t){if(!nu(t))throw Error(F(40));return t._reactRootContainer?(Fr(function(){ru(null,null,t,!1,function(){t._reactRootContainer=null,t[Sn]=null})}),!0):!1};Tt.unstable_batchedUpdates=Ld;Tt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!nu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return ru(t,e,n,!1,r)};Tt.version="18.3.1-next-f1338f8080-20240426";function Ov(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ov)}catch(t){console.error(t)}}Ov(),Oy.exports=Tt;var wS=Oy.exports,Wm=wS;xc.createRoot=Wm.createRoot,xc.hydrateRoot=Wm.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mo(){return mo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},mo.apply(null,arguments)}var Qn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Qn||(Qn={}));const Hm="popstate";function TS(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:l="",hash:u=""}=Gr(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Sh("",{pathname:o,search:l,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let u=i.location.href,h=u.indexOf("#");l=h===-1?u:u.slice(0,h)}return l+"#"+(typeof s=="string"?s:Vv(s))}function r(i,s){iu(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return SS(e,n,r,t)}function ke(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function iu(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function IS(){return Math.random().toString(36).substr(2,8)}function qm(t,e){return{usr:t.state,key:t.key,idx:e}}function Sh(t,e,n,r){return n===void 0&&(n=null),mo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Gr(e):e,{state:n,key:e&&e.key||r||IS()})}function Vv(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Gr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function SS(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Qn.Pop,u=null,h=f();h==null&&(h=0,o.replaceState(mo({},o.state,{idx:h}),""));function f(){return(o.state||{idx:null}).idx}function p(){l=Qn.Pop;let N=f(),w=N==null?null:N-h;h=N,u&&u({action:l,location:D.location,delta:w})}function g(N,w){l=Qn.Push;let _=Sh(D.location,N,w);n&&n(_,N),h=f()+1;let R=qm(_,h),O=D.createHref(_);try{o.pushState(R,"",O)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;i.location.assign(O)}s&&u&&u({action:l,location:D.location,delta:1})}function A(N,w){l=Qn.Replace;let _=Sh(D.location,N,w);n&&n(_,N),h=f();let R=qm(_,h),O=D.createHref(_);o.replaceState(R,"",O),s&&u&&u({action:l,location:D.location,delta:0})}function P(N){let w=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof N=="string"?N:Vv(N);return _=_.replace(/ $/,"%20"),ke(w,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,w)}let D={get action(){return l},get location(){return t(i,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Hm,p),u=N,()=>{i.removeEventListener(Hm,p),u=null}},createHref(N){return e(i,N)},createURL:P,encodeLocation(N){let w=P(N);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:g,replace:A,go(N){return o.go(N)}};return D}var Km;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Km||(Km={}));function RS(t,e,n){return n===void 0&&(n="/"),AS(t,e,n)}function AS(t,e,n,r){let i=typeof e=="string"?Gr(e):e,s=bv(i.pathname||"/",n);if(s==null)return null;let o=Lv(t);CS(o);let l=null,u=FS(s);for(let h=0;l==null&&h<o.length;++h)l=MS(o[h],u);return l}function Lv(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(ke(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let h=Or([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(ke(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),Lv(s.children,e,f,h)),!(s.path==null&&!s.index)&&e.push({path:h,score:VS(h,s.index),routesMeta:f})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of Mv(s.path))i(s,o,u)}),e}function Mv(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Mv(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function CS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:LS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const PS=/^:[\w-]+$/,kS=3,NS=2,xS=1,DS=10,OS=-2,Gm=t=>t==="*";function VS(t,e){let n=t.split("/"),r=n.length;return n.some(Gm)&&(r+=OS),e&&(r+=NS),n.filter(i=>!Gm(i)).reduce((i,s)=>i+(PS.test(s)?kS:s===""?xS:DS),r)}function LS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function MS(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],h=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",p=bS({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},f),g=u.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:Or([s,p.pathname]),pathnameBase:WS(Or([s,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(s=Or([s,p.pathnameBase]))}return o}function bS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=US(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((h,f,p)=>{let{paramName:g,isOptional:A}=f;if(g==="*"){let D=l[p]||"";o=s.slice(0,s.length-D.length).replace(/(.)\/+$/,"$1")}const P=l[p];return A&&!P?h[g]=void 0:h[g]=(P||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:o,pattern:t}}function US(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),iu(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function FS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return iu(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function bv(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const jS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,BS=t=>jS.test(t);function zS(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Gr(t):t,s;if(n)if(BS(n))s=n;else{if(n.includes("//")){let o=n;n=jv(n),iu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Qm(n.substring(1),"/"):s=Qm(n,e)}else s=e;return{pathname:s,search:HS(r),hash:qS(i)}}function Qm(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function _c(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $S(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Uv(t,e){let n=$S(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Fv(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Gr(t):(i=mo({},t),ke(!i.pathname||!i.pathname.includes("?"),_c("?","pathname","search",i)),ke(!i.pathname||!i.pathname.includes("#"),_c("#","pathname","hash",i)),ke(!i.search||!i.search.includes("#"),_c("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}l=p>=0?e[p]:"/"}let u=zS(i,l),h=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(h||f)&&(u.pathname+="/"),u}const jv=t=>t.replace(/\/\/+/g,"/"),Or=t=>jv(t.join("/")),WS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),HS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,qS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function KS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Bv=["post","put","patch","delete"];new Set(Bv);const GS=["get",...Bv];new Set(GS);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function go(){return go=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},go.apply(null,arguments)}const $d=b.createContext(null),QS=b.createContext(null),xo=b.createContext(null),su=b.createContext(null),Qr=b.createContext({outlet:null,matches:[],isDataRoute:!1}),zv=b.createContext(null);function Do(){return b.useContext(su)!=null}function Wd(){return Do()||ke(!1),b.useContext(su).location}function $v(t){b.useContext(xo).static||b.useLayoutEffect(t)}function Hd(){let{isDataRoute:t}=b.useContext(Qr);return t?lR():YS()}function YS(){Do()||ke(!1);let t=b.useContext($d),{basename:e,future:n,navigator:r}=b.useContext(xo),{matches:i}=b.useContext(Qr),{pathname:s}=Wd(),o=JSON.stringify(Uv(i,n.v7_relativeSplatPath)),l=b.useRef(!1);return $v(()=>{l.current=!0}),b.useCallback(function(h,f){if(f===void 0&&(f={}),!l.current)return;if(typeof h=="number"){r.go(h);return}let p=Fv(h,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Or([e,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[e,r,o,s,t])}function XS(t,e){return JS(t,e)}function JS(t,e,n,r){Do()||ke(!1);let{navigator:i}=b.useContext(xo),{matches:s}=b.useContext(Qr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let h=Wd(),f;if(e){var p;let N=typeof e=="string"?Gr(e):e;u==="/"||(p=N.pathname)!=null&&p.startsWith(u)||ke(!1),f=N}else f=h;let g=f.pathname||"/",A=g;if(u!=="/"){let N=u.replace(/^\//,"").split("/");A="/"+g.replace(/^\//,"").split("/").slice(N.length).join("/")}let P=RS(t,{pathname:A}),D=rR(P&&P.map(N=>Object.assign({},N,{params:Object.assign({},l,N.params),pathname:Or([u,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?u:Or([u,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),s,n,r);return e&&D?b.createElement(su.Provider,{value:{location:go({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Qn.Pop}},D):D}function ZS(){let t=aR(),e=KS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),n?b.createElement("pre",{style:i},n):null,null)}const eR=b.createElement(ZS,null);class tR extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?b.createElement(Qr.Provider,{value:this.props.routeContext},b.createElement(zv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function nR(t){let{routeContext:e,match:n,children:r}=t,i=b.useContext($d);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Qr.Provider,{value:e},r)}function rR(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||ke(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let p=o[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=f),p.route.id){let{loaderData:g,errors:A}=n,P=p.route.loader&&g[p.route.id]===void 0&&(!A||A[p.route.id]===void 0);if(p.route.lazy||P){u=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((f,p,g)=>{let A,P=!1,D=null,N=null;n&&(A=l&&p.route.id?l[p.route.id]:void 0,D=p.route.errorElement||eR,u&&(h<0&&g===0?(uR("route-fallback"),P=!0,N=null):h===g&&(P=!0,N=p.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,g+1)),_=()=>{let R;return A?R=D:P?R=N:p.route.Component?R=b.createElement(p.route.Component,null):p.route.element?R=p.route.element:R=f,b.createElement(nR,{match:p,routeContext:{outlet:f,matches:w,isDataRoute:n!=null},children:R})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?b.createElement(tR,{location:n.location,revalidation:n.revalidation,component:D,error:A,children:_(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):_()},null)}var Wv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Wv||{}),Hv=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Hv||{});function iR(t){let e=b.useContext($d);return e||ke(!1),e}function sR(t){let e=b.useContext(QS);return e||ke(!1),e}function oR(t){let e=b.useContext(Qr);return e||ke(!1),e}function qv(t){let e=oR(),n=e.matches[e.matches.length-1];return n.route.id||ke(!1),n.route.id}function aR(){var t;let e=b.useContext(zv),n=sR(),r=qv();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function lR(){let{router:t}=iR(Wv.UseNavigateStable),e=qv(Hv.UseNavigateStable),n=b.useRef(!1);return $v(()=>{n.current=!0}),b.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,go({fromRouteId:e},s)))},[t,e])}const Ym={};function uR(t,e,n){Ym[t]||(Ym[t]=!0)}function cR(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function wi(t){let{to:e,replace:n,state:r,relative:i}=t;Do()||ke(!1);let{future:s,static:o}=b.useContext(xo),{matches:l}=b.useContext(Qr),{pathname:u}=Wd(),h=Hd(),f=Fv(e,Uv(l,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(f);return b.useEffect(()=>h(JSON.parse(p),{replace:n,state:r,relative:i}),[h,p,i,n,r]),null}function si(t){ke(!1)}function hR(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Qn.Pop,navigator:s,static:o=!1,future:l}=t;Do()&&ke(!1);let u=e.replace(/^\/*/,"/"),h=b.useMemo(()=>({basename:u,navigator:s,static:o,future:go({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Gr(r));let{pathname:f="/",search:p="",hash:g="",state:A=null,key:P="default"}=r,D=b.useMemo(()=>{let N=bv(f,u);return N==null?null:{location:{pathname:N,search:p,hash:g,state:A,key:P},navigationType:i}},[u,f,p,g,A,P,i]);return D==null?null:b.createElement(xo.Provider,{value:h},b.createElement(su.Provider,{children:n,value:D}))}function dR(t){let{children:e,location:n}=t;return XS(Rh(e),n)}new Promise(()=>{});function Rh(t,e){e===void 0&&(e=[]);let n=[];return b.Children.forEach(t,(r,i)=>{if(!b.isValidElement(r))return;let s=[...e,i];if(r.type===b.Fragment){n.push.apply(n,Rh(r.props.children,s));return}r.type!==si&&ke(!1),!r.props.index||!r.props.children||ke(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Rh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const fR="6";try{window.__reactRouterVersion=fR}catch{}const pR="startTransition",Xm=cT[pR];function mR(t){let{basename:e,children:n,future:r,window:i}=t,s=b.useRef();s.current==null&&(s.current=TS({window:i,v5Compat:!0}));let o=s.current,[l,u]=b.useState({action:o.action,location:o.location}),{v7_startTransition:h}=r||{},f=b.useCallback(p=>{h&&Xm?Xm(()=>u(p)):u(p)},[u,h]);return b.useLayoutEffect(()=>o.listen(f),[o,f]),b.useEffect(()=>cR(r),[r]),b.createElement(hR,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}var Jm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Jm||(Jm={}));var Zm;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Zm||(Zm={}));var eg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},gR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Gv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,A=h&63;u||(A=64,o||(g=64)),r.push(n[f],n[p],n[g],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Kv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new yR;const g=s<<2|l>>4;if(r.push(g),h!==64){const A=l<<4&240|h>>2;if(r.push(A),p!==64){const P=h<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class yR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _R=function(t){const e=Kv(t);return Gv.encodeByteArray(e,!0)},Il=function(t){return _R(t).replace(/\./g,"")},Qv=function(t){try{return Gv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=()=>vR().__FIREBASE_DEFAULTS__,wR=()=>{if(typeof process>"u"||typeof eg>"u")return;const t=eg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},TR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qv(t[1]);return e&&JSON.parse(e)},ou=()=>{try{return ER()||wR()||TR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Yv=t=>{var e,n;return(n=(e=ou())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Xv=t=>{const e=Yv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Jv=()=>{var t;return(t=ou())===null||t===void 0?void 0:t.config},Zv=t=>{var e;return(e=ou())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Il(JSON.stringify(n)),Il(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function SR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function RR(){var t;const e=(t=ou())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function AR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function CR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function PR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kR(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function NR(){return!RR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xR(){try{return typeof indexedDB=="object"}catch{return!1}}function DR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR="FirebaseError";class sn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=OR,Object.setPrototypeOf(this,sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oo.prototype.create)}}class Oo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?VR(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new sn(i,l,r)}}function VR(t,e){return t.replace(LR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const LR=/\{\$([^}]+)}/g;function MR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Sl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(tg(s)&&tg(o)){if(!Sl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function tg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ns(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function xs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function bR(t,e){const n=new UR(t,e);return n.subscribe.bind(n)}class UR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");FR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=vc),i.error===void 0&&(i.error=vc),i.complete===void 0&&(i.complete=vc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function FR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t){return t&&t._delegate?t._delegate:t}class cr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new IR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zR(e))try{this.getOrInitializeService({instanceIdentifier:Ar})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ar){return this.instances.has(e)}getOptions(e=Ar){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:BR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ar){return this.component?this.component.multipleInstances?e:Ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BR(t){return t===Ar?void 0:t}function zR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const WR={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},HR=ne.INFO,qR={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},KR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=qR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qd{constructor(e){this.name=e,this._logLevel=HR,this._logHandler=KR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?WR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const GR=(t,e)=>e.some(n=>t instanceof n);let ng,rg;function QR(){return ng||(ng=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YR(){return rg||(rg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tE=new WeakMap,Ah=new WeakMap,nE=new WeakMap,Ec=new WeakMap,Kd=new WeakMap;function XR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(sr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tE.set(n,t)}).catch(()=>{}),Kd.set(e,t),e}function JR(t){if(Ah.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ah.set(t,e)}let Ch={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ah.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ZR(t){Ch=t(Ch)}function eA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(wc(this),e,...n);return nE.set(r,e.sort?e.sort():[e]),sr(r)}:YR().includes(t)?function(...e){return t.apply(wc(this),e),sr(tE.get(this))}:function(...e){return sr(t.apply(wc(this),e))}}function tA(t){return typeof t=="function"?eA(t):(t instanceof IDBTransaction&&JR(t),GR(t,QR())?new Proxy(t,Ch):t)}function sr(t){if(t instanceof IDBRequest)return XR(t);if(Ec.has(t))return Ec.get(t);const e=tA(t);return e!==t&&(Ec.set(t,e),Kd.set(e,t)),e}const wc=t=>Kd.get(t);function nA(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=sr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(sr(o.result),u.oldVersion,u.newVersion,sr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const rA=["get","getKey","getAll","getAllKeys","count"],iA=["put","add","delete","clear"],Tc=new Map;function ig(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Tc.get(e))return Tc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=iA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||rA.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Tc.set(e,s),s}ZR(t=>({...t,get:(e,n,r)=>ig(e,n)||t.get(e,n,r),has:(e,n)=>!!ig(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(oA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function oA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ph="@firebase/app",sg="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new qd("@firebase/app"),aA="@firebase/app-compat",lA="@firebase/analytics-compat",uA="@firebase/analytics",cA="@firebase/app-check-compat",hA="@firebase/app-check",dA="@firebase/auth",fA="@firebase/auth-compat",pA="@firebase/database",mA="@firebase/data-connect",gA="@firebase/database-compat",yA="@firebase/functions",_A="@firebase/functions-compat",vA="@firebase/installations",EA="@firebase/installations-compat",wA="@firebase/messaging",TA="@firebase/messaging-compat",IA="@firebase/performance",SA="@firebase/performance-compat",RA="@firebase/remote-config",AA="@firebase/remote-config-compat",CA="@firebase/storage",PA="@firebase/storage-compat",kA="@firebase/firestore",NA="@firebase/vertexai-preview",xA="@firebase/firestore-compat",DA="firebase",OA="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh="[DEFAULT]",VA={[Ph]:"fire-core",[aA]:"fire-core-compat",[uA]:"fire-analytics",[lA]:"fire-analytics-compat",[hA]:"fire-app-check",[cA]:"fire-app-check-compat",[dA]:"fire-auth",[fA]:"fire-auth-compat",[pA]:"fire-rtdb",[mA]:"fire-data-connect",[gA]:"fire-rtdb-compat",[yA]:"fire-fn",[_A]:"fire-fn-compat",[vA]:"fire-iid",[EA]:"fire-iid-compat",[wA]:"fire-fcm",[TA]:"fire-fcm-compat",[IA]:"fire-perf",[SA]:"fire-perf-compat",[RA]:"fire-rc",[AA]:"fire-rc-compat",[CA]:"fire-gcs",[PA]:"fire-gcs-compat",[kA]:"fire-fst",[xA]:"fire-fst-compat",[NA]:"fire-vertex","fire-js":"fire-js",[DA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl=new Map,LA=new Map,Nh=new Map;function og(t,e){try{t.container.addComponent(e)}catch(n){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function jr(t){const e=t.name;if(Nh.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;Nh.set(e,t);for(const n of Rl.values())og(n,t);for(const n of LA.values())og(n,t);return!0}function au(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Kt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},or=new Oo("app","Firebase",MA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw or.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=OA;function rE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:kh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw or.create("bad-app-name",{appName:String(i)});if(n||(n=Jv()),!n)throw or.create("no-options");const s=Rl.get(i);if(s){if(Sl(n,s.options)&&Sl(r,s.config))return s;throw or.create("duplicate-app",{appName:i})}const o=new $R(i);for(const u of Nh.values())o.addComponent(u);const l=new bA(n,r,o);return Rl.set(i,l),l}function Gd(t=kh){const e=Rl.get(t);if(!e&&t===kh&&Jv())return rE();if(!e)throw or.create("no-app",{appName:t});return e}function Yt(t,e,n){var r;let i=(r=VA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(l.join(" "));return}jr(new cr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA="firebase-heartbeat-database",FA=1,yo="firebase-heartbeat-store";let Ic=null;function iE(){return Ic||(Ic=nA(UA,FA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(yo)}catch(n){console.warn(n)}}}}).catch(t=>{throw or.create("idb-open",{originalErrorMessage:t.message})})),Ic}async function jA(t){try{const n=(await iE()).transaction(yo),r=await n.objectStore(yo).get(sE(t));return await n.done,r}catch(e){if(e instanceof sn)Cn.warn(e.message);else{const n=or.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cn.warn(n.message)}}}async function ag(t,e){try{const r=(await iE()).transaction(yo,"readwrite");await r.objectStore(yo).put(e,sE(t)),await r.done}catch(n){if(n instanceof sn)Cn.warn(n.message);else{const r=or.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cn.warn(r.message)}}}function sE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA=1024,zA=30*24*60*60*1e3;class $A{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new HA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=lg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=zA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Cn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=lg(),{heartbeatsToSend:r,unsentEntries:i}=WA(this._heartbeatsCache.heartbeats),s=Il(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Cn.warn(n),""}}}function lg(){return new Date().toISOString().substring(0,10)}function WA(t,e=BA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ug(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ug(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class HA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xR()?DR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await jA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ag(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ag(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ug(t){return Il(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(t){jr(new cr("platform-logger",e=>new sA(e),"PRIVATE")),jr(new cr("heartbeat",e=>new $A(e),"PRIVATE")),Yt(Ph,sg,t),Yt(Ph,sg,"esm2017"),Yt("fire-js","")}qA("");function Qd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function oE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const KA=oE,aE=new Oo("auth","Firebase",oE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=new qd("@firebase/auth");function GA(t,...e){Al.logLevel<=ne.WARN&&Al.warn(`Auth (${Yr}): ${t}`,...e)}function Wa(t,...e){Al.logLevel<=ne.ERROR&&Al.error(`Auth (${Yr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t,...e){throw Yd(t,...e)}function Xt(t,...e){return Yd(t,...e)}function lE(t,e,n){const r=Object.assign(Object.assign({},KA()),{[e]:n});return new Oo("auth","Firebase",r).create(e,{appName:t.name})}function wn(t){return lE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Yd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return aE.create(t,...e)}function G(t,e,...n){if(!t)throw Yd(e,...n)}function yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wa(e),new Error(e)}function Pn(t,e){t||yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function QA(){return cg()==="http:"||cg()==="https:"}function cg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(QA()||CR()||"connection"in navigator)?navigator.onLine:!0}function XA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pn(n>e,"Short delay should be less than long delay!"),this.isMobile=SR()||PR()}get(){return YA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(t,e){Pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA=new Lo(3e4,6e4);function yr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _r(t,e,n,r,i={}){return cE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Vo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return AR()||(h.referrerPolicy="no-referrer"),uE.fetch()(hE(t,t.config.apiHost,n,l),h)})}async function cE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},JA),e);try{const i=new tC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Aa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Aa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Aa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Aa(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw lE(t,f,h);$t(t,f)}}catch(i){if(i instanceof sn)throw i;$t(t,"network-request-failed",{message:String(i)})}}async function Mo(t,e,n,r,i={}){const s=await _r(t,e,n,r,i);return"mfaPendingCredential"in s&&$t(t,"multi-factor-auth-required",{_serverResponse:s}),s}function hE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Xd(t.config,i):`${t.config.apiScheme}://${i}`}function eC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xt(this.auth,"network-request-failed")),ZA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Aa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Xt(t,e,r);return i.customData._tokenResponse=n,i}function hg(t){return t!==void 0&&t.enterprise!==void 0}class nC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return eC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function rC(t,e){return _r(t,"GET","/v2/recaptchaConfig",yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iC(t,e){return _r(t,"POST","/v1/accounts:delete",e)}async function dE(t,e){return _r(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sC(t,e=!1){const n=lt(t),r=await n.getIdToken(e),i=Jd(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Hs(Sc(i.auth_time)),issuedAtTime:Hs(Sc(i.iat)),expirationTime:Hs(Sc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Sc(t){return Number(t)*1e3}function Jd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Wa("JWT malformed, contained fewer than 3 sections"),null;try{const i=Qv(n);return i?JSON.parse(i):(Wa("Failed to decode base64 JWT payload"),null)}catch(i){return Wa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function dg(t){const e=Jd(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _o(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof sn&&oC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function oC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hs(this.lastLoginAt),this.creationTime=Hs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await _o(t,dE(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?fE(s.providerUserInfo):[],l=uC(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Dh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function lC(t){const e=lt(t);await Cl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function fE(t){return t.map(e=>{var{providerId:n}=e,r=Qd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cC(t,e){const n=await cE(t,{},async()=>{const r=Vo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=hE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",uE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function hC(t,e){return _r(t,"POST","/v2/accounts:revokeToken",yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=dg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await cC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ki;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ki,this.toJSON())}_performRefresh(){return yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _n{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Qd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Dh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await _o(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sC(this,e)}reload(){return lC(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Cl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Kt(this.auth.app))return Promise.reject(wn(this.auth));const e=await this.getIdToken();return await _o(this,iC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,A=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(l=n.tenantId)!==null&&l!==void 0?l:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,w=(h=n.createdAt)!==null&&h!==void 0?h:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:R,emailVerified:O,isAnonymous:U,providerData:j,stsTokenManager:v}=n;G(R&&v,e,"internal-error");const y=ki.fromJSON(this.name,v);G(typeof R=="string",e,"internal-error"),bn(p,e.name),bn(g,e.name),G(typeof O=="boolean",e,"internal-error"),G(typeof U=="boolean",e,"internal-error"),bn(A,e.name),bn(P,e.name),bn(D,e.name),bn(N,e.name),bn(w,e.name),bn(_,e.name);const E=new _n({uid:R,auth:e,email:g,emailVerified:O,displayName:p,isAnonymous:U,photoURL:P,phoneNumber:A,tenantId:D,stsTokenManager:y,createdAt:w,lastLoginAt:_});return j&&Array.isArray(j)&&(E.providerData=j.map(T=>Object.assign({},T))),N&&(E._redirectEventId=N),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new ki;i.updateFromServerResponse(n);const s=new _n({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Cl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?fE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ki;l.updateFromIdToken(r);const u=new _n({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Dh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg=new Map;function vn(t){Pn(t instanceof Function,"Expected a class definition");let e=fg.get(t);return e?(Pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,fg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}pE.type="NONE";const pg=pE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(t,e,n){return`firebase:${t}:${e}:${n}`}class Ni{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ha(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ha("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ni(vn(pg),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||vn(pg);const o=Ha(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const p=_n._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ni(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Ni(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_E(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(EE(e))return"Blackberry";if(wE(e))return"Webos";if(gE(e))return"Safari";if((e.includes("chrome/")||yE(e))&&!e.includes("edge/"))return"Chrome";if(vE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function mE(t=nt()){return/firefox\//i.test(t)}function gE(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yE(t=nt()){return/crios\//i.test(t)}function _E(t=nt()){return/iemobile/i.test(t)}function vE(t=nt()){return/android/i.test(t)}function EE(t=nt()){return/blackberry/i.test(t)}function wE(t=nt()){return/webos/i.test(t)}function Zd(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dC(t=nt()){var e;return Zd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fC(){return kR()&&document.documentMode===10}function TE(t=nt()){return Zd(t)||vE(t)||wE(t)||EE(t)||/windows phone/i.test(t)||_E(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(t,e=[]){let n;switch(t){case"Browser":n=mg(nt());break;case"Worker":n=`${mg(nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mC(t,e={}){return _r(t,"GET","/v2/passwordPolicy",yr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC=6;class yC{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:gC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gg(this),this.idTokenSubscription=new gg(this),this.beforeStateQueue=new pC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=aE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=vn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ni.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await dE(this,{idToken:e}),r=await _n._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Kt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Cl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=XA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Kt(this.app))return Promise.reject(wn(this));const n=e?lt(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Kt(this.app)?Promise.reject(wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Kt(this.app)?Promise.reject(wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mC(this),n=new yC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Oo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await hC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&vn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Ni.create(this,[vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=IE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&GA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Xr(t){return lt(t)}class gg{constructor(e){this.auth=e,this.observer=null,this.addObserver=bR(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vC(t){lu=t}function SE(t){return lu.loadJS(t)}function EC(){return lu.recaptchaEnterpriseScript}function wC(){return lu.gapiScript}function TC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const IC="recaptcha-enterprise",SC="NO_RECAPTCHA";class RC{constructor(e){this.type=IC,this.auth=Xr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{rC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new nC(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;hg(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(SC)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&hg(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=EC();u.length!==0&&(u+=l),SE(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function yg(t,e,n,r=!1){const i=new RC(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Oh(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await yg(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await yg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(t,e){const n=au(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Sl(s,e??{}))return i;$t(i,"already-initialized")}return n.initialize({options:e})}function CC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function PC(t,e,n){const r=Xr(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=RE(e),{host:o,port:l}=kC(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),NC()}function RE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kC(t){const e=RE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:_g(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:_g(o)}}}function _g(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function NC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return yn("not implemented")}_getIdTokenResponse(e){return yn("not implemented")}_linkToIdToken(e,n){return yn("not implemented")}_getReauthenticationResolver(e){return yn("not implemented")}}async function xC(t,e){return _r(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DC(t,e){return Mo(t,"POST","/v1/accounts:signInWithPassword",yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OC(t,e){return Mo(t,"POST","/v1/accounts:signInWithEmailLink",yr(t,e))}async function VC(t,e){return Mo(t,"POST","/v1/accounts:signInWithEmailLink",yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo extends ef{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new vo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new vo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Oh(e,n,"signInWithPassword",DC);case"emailLink":return OC(e,{email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Oh(e,r,"signUpPassword",xC);case"emailLink":return VC(e,{idToken:n,email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xi(t,e){return Mo(t,"POST","/v1/accounts:signInWithIdp",yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC="http://localhost";class Br extends ef{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Qd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Br(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return xi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,xi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xi(e,n)}buildRequest(){const e={requestUri:LC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bC(t){const e=Ns(xs(t)).link,n=e?Ns(xs(e)).deep_link_id:null,r=Ns(xs(t)).deep_link_id;return(r?Ns(xs(r)).link:null)||r||n||e||t}class tf{constructor(e){var n,r,i,s,o,l;const u=Ns(xs(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,p=MC((i=u.mode)!==null&&i!==void 0?i:null);G(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=bC(e);try{return new tf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(){this.providerId=Xi.PROVIDER_ID}static credential(e,n){return vo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=tf.parseLink(n);return G(r,"argument-error"),vo._fromEmailAndCode(e,r.code,r.tenantId)}}Xi.PROVIDER_ID="password";Xi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo extends AE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends bo{constructor(){super("facebook.com")}static credential(e){return Br._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";zn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends bo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Br._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.GOOGLE_SIGN_IN_METHOD="google.com";$n.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends bo{constructor(){super("github.com")}static credential(e){return Br._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.GITHUB_SIGN_IN_METHOD="github.com";Wn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends bo{constructor(){super("twitter.com")}static credential(e,n){return Br._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.TWITTER_SIGN_IN_METHOD="twitter.com";Hn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UC(t,e){return Mo(t,"POST","/v1/accounts:signUp",yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await _n._fromIdTokenResponse(e,r,i),o=vg(r);return new zr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=vg(r);return new zr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function vg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl extends sn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Pl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Pl(e,n,r,i)}}function CE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Pl._fromErrorAndOperation(t,s,e,r):s})}async function FC(t,e,n=!1){const r=await _o(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jC(t,e,n=!1){const{auth:r}=t;if(Kt(r.app))return Promise.reject(wn(r));const i="reauthenticate";try{const s=await _o(t,CE(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=Jd(s.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),zr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&$t(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PE(t,e,n=!1){if(Kt(t.app))return Promise.reject(wn(t));const r="signIn",i=await CE(t,r,e),s=await zr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function BC(t,e){return PE(Xr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kE(t){const e=Xr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function zC(t,e,n){if(Kt(t.app))return Promise.reject(wn(t));const r=Xr(t),o=await Oh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",UC).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&kE(t),u}),l=await zr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function $C(t,e,n){return Kt(t.app)?Promise.reject(wn(t)):BC(lt(t),Xi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&kE(t),r})}function WC(t,e,n,r){return lt(t).onIdTokenChanged(e,n,r)}function HC(t,e,n){return lt(t).beforeAuthStateChanged(e,n)}function qC(t,e,n,r){return lt(t).onAuthStateChanged(e,n,r)}function Eg(t){return lt(t).signOut()}const kl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(kl,"1"),this.storage.removeItem(kl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC=1e3,GC=10;class xE extends NE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=TE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);fC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,GC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},KC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xE.type="LOCAL";const QC=xE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE extends NE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}DE.type="SESSION";const OE=DE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new uu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await YC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}uu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=nf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(){return window}function JC(t){Jt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VE(){return typeof Jt().WorkerGlobalScope<"u"&&typeof Jt().importScripts=="function"}async function ZC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function tP(){return VE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE="firebaseLocalStorageDb",nP=1,Nl="firebaseLocalStorage",ME="fbase_key";class Uo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function cu(t,e){return t.transaction([Nl],e?"readwrite":"readonly").objectStore(Nl)}function rP(){const t=indexedDB.deleteDatabase(LE);return new Uo(t).toPromise()}function Vh(){const t=indexedDB.open(LE,nP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Nl,{keyPath:ME})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Nl)?e(r):(r.close(),await rP(),e(await Vh()))})})}async function wg(t,e,n){const r=cu(t,!0).put({[ME]:e,value:n});return new Uo(r).toPromise()}async function iP(t,e){const n=cu(t,!1).get(e),r=await new Uo(n).toPromise();return r===void 0?null:r.value}function Tg(t,e){const n=cu(t,!0).delete(e);return new Uo(n).toPromise()}const sP=800,oP=3;class bE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>oP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return VE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=uu._getInstance(tP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ZC(),!this.activeServiceWorker)return;this.sender=new XC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vh();return await wg(e,kl,"1"),await Tg(e,kl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>iP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Tg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=cu(i,!1).getAll();return new Uo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bE.type="LOCAL";const aP=bE;new Lo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lP(t,e){return e?vn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf extends ef{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function uP(t){return PE(t.auth,new rf(t),t.bypassAuthState)}function cP(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),jC(n,new rf(t),t.bypassAuthState)}async function hP(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),FC(n,new rf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uP;case"linkViaPopup":case"linkViaRedirect":return hP;case"reauthViaPopup":case"reauthViaRedirect":return cP;default:$t(this.auth,"internal-error")}}resolve(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP=new Lo(2e3,1e4);class Ti extends UE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ti.currentPopupAction&&Ti.currentPopupAction.cancel(),Ti.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Pn(this.filter.length===1,"Popup operations only handle one event");const e=nf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ti.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dP.get())};e()}}Ti.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP="pendingRedirect",qa=new Map;class pP extends UE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=qa.get(this.auth._key());if(!e){try{const r=await mP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}qa.set(this.auth._key(),e)}return this.bypassAuthState||qa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mP(t,e){const n=_P(e),r=yP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function gP(t,e){qa.set(t._key(),e)}function yP(t){return vn(t._redirectPersistence)}function _P(t){return Ha(fP,t.config.apiKey,t.name)}async function vP(t,e,n=!1){if(Kt(t.app))return Promise.reject(wn(t));const r=Xr(t),i=lP(r,e),o=await new pP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EP=10*60*1e3;class wP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!TP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!FE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Xt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=EP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ig(e))}saveEventToCache(e){this.cachedEventUids.add(Ig(e)),this.lastProcessedEventTime=Date.now()}}function Ig(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function FE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function TP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return FE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IP(t,e={}){return _r(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RP=/^https?/;async function AP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await IP(t);for(const n of e)try{if(CP(n))return}catch{}$t(t,"unauthorized-domain")}function CP(t){const e=xh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!RP.test(n))return!1;if(SP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP=new Lo(3e4,6e4);function Sg(){const t=Jt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kP(t){return new Promise((e,n)=>{var r,i,s;function o(){Sg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sg(),n(Xt(t,"network-request-failed"))},timeout:PP.get()})}if(!((i=(r=Jt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Jt().gapi)===null||s===void 0)&&s.load)o();else{const l=TC("iframefcb");return Jt()[l]=()=>{gapi.load?o():n(Xt(t,"network-request-failed"))},SE(`${wC()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ka=null,e})}let Ka=null;function NP(t){return Ka=Ka||kP(t),Ka}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP=new Lo(5e3,15e3),DP="__/auth/iframe",OP="emulator/auth/iframe",VP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function MP(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Xd(e,OP):`https://${t.config.authDomain}/${DP}`,r={apiKey:e.apiKey,appName:t.name,v:Yr},i=LP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Vo(r).slice(1)}`}async function bP(t){const e=await NP(t),n=Jt().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:MP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Xt(t,"network-request-failed"),l=Jt().setTimeout(()=>{s(o)},xP.get());function u(){Jt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FP=500,jP=600,BP="_blank",zP="http://localhost";class Rg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $P(t,e,n,r=FP,i=jP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},UP),{width:r.toString(),height:i.toString(),top:s,left:o}),h=nt().toLowerCase();n&&(l=yE(h)?BP:n),mE(h)&&(e=e||zP,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[A,P])=>`${g}${A}=${P},`,"");if(dC(h)&&l!=="_self")return WP(e||"",l),new Rg(null);const p=window.open(e||"",l,f);G(p,t,"popup-blocked");try{p.focus()}catch{}return new Rg(p)}function WP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP="__/auth/handler",qP="emulator/auth/handler",KP=encodeURIComponent("fac");async function Ag(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Yr,eventId:i};if(e instanceof AE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",MR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof bo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${KP}=${encodeURIComponent(u)}`:"";return`${GP(t)}?${Vo(l).slice(1)}${h}`}function GP({config:t}){return t.emulator?Xd(t,qP):`https://${t.authDomain}/${HP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="webStorageSupport";class QP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=OE,this._completeRedirectFn=vP,this._overrideRedirectResult=gP}async _openPopup(e,n,r,i){var s;Pn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ag(e,n,r,xh(),i);return $P(e,o,nf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Ag(e,n,r,xh(),i);return JC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Pn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await bP(e),r=new wP(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rc,{type:Rc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Rc];o!==void 0&&n(!!o),$t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=AP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return TE()||gE()||Zd()}}const YP=QP;var Cg="@firebase/auth",Pg="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ZP(t){jr(new cr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:IE(t)},h=new _C(r,i,s,u);return CC(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),jr(new cr("auth-internal",e=>{const n=Xr(e.getProvider("auth").getImmediate());return(r=>new XP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yt(Cg,Pg,JP(t)),Yt(Cg,Pg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek=5*60,tk=Zv("authIdTokenMaxAge")||ek;let kg=null;const nk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>tk)return;const i=n==null?void 0:n.token;kg!==i&&(kg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function rk(t=Gd()){const e=au(t,"auth");if(e.isInitialized())return e.getImmediate();const n=AC(t,{popupRedirectResolver:YP,persistence:[aP,QC,OE]}),r=Zv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=nk(s.toString());HC(n,o,()=>o(n.currentUser)),WC(n,l=>o(l))}}const i=Yv("auth");return i&&PC(n,`http://${i}`),n}function ik(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}vC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Xt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",ik().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ZP("Browser");var Ng=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vr,jE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function E(){}E.prototype=y.prototype,v.D=y.prototype,v.prototype=new E,v.prototype.constructor=v,v.C=function(T,S,k){for(var I=Array(arguments.length-2),H=2;H<arguments.length;H++)I[H-2]=arguments[H];return y.prototype[S].apply(T,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,y,E){E||(E=0);var T=Array(16);if(typeof y=="string")for(var S=0;16>S;++S)T[S]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(S=0;16>S;++S)T[S]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=v.g[0],E=v.g[1],S=v.g[2];var k=v.g[3],I=y+(k^E&(S^k))+T[0]+3614090360&4294967295;y=E+(I<<7&4294967295|I>>>25),I=k+(S^y&(E^S))+T[1]+3905402710&4294967295,k=y+(I<<12&4294967295|I>>>20),I=S+(E^k&(y^E))+T[2]+606105819&4294967295,S=k+(I<<17&4294967295|I>>>15),I=E+(y^S&(k^y))+T[3]+3250441966&4294967295,E=S+(I<<22&4294967295|I>>>10),I=y+(k^E&(S^k))+T[4]+4118548399&4294967295,y=E+(I<<7&4294967295|I>>>25),I=k+(S^y&(E^S))+T[5]+1200080426&4294967295,k=y+(I<<12&4294967295|I>>>20),I=S+(E^k&(y^E))+T[6]+2821735955&4294967295,S=k+(I<<17&4294967295|I>>>15),I=E+(y^S&(k^y))+T[7]+4249261313&4294967295,E=S+(I<<22&4294967295|I>>>10),I=y+(k^E&(S^k))+T[8]+1770035416&4294967295,y=E+(I<<7&4294967295|I>>>25),I=k+(S^y&(E^S))+T[9]+2336552879&4294967295,k=y+(I<<12&4294967295|I>>>20),I=S+(E^k&(y^E))+T[10]+4294925233&4294967295,S=k+(I<<17&4294967295|I>>>15),I=E+(y^S&(k^y))+T[11]+2304563134&4294967295,E=S+(I<<22&4294967295|I>>>10),I=y+(k^E&(S^k))+T[12]+1804603682&4294967295,y=E+(I<<7&4294967295|I>>>25),I=k+(S^y&(E^S))+T[13]+4254626195&4294967295,k=y+(I<<12&4294967295|I>>>20),I=S+(E^k&(y^E))+T[14]+2792965006&4294967295,S=k+(I<<17&4294967295|I>>>15),I=E+(y^S&(k^y))+T[15]+1236535329&4294967295,E=S+(I<<22&4294967295|I>>>10),I=y+(S^k&(E^S))+T[1]+4129170786&4294967295,y=E+(I<<5&4294967295|I>>>27),I=k+(E^S&(y^E))+T[6]+3225465664&4294967295,k=y+(I<<9&4294967295|I>>>23),I=S+(y^E&(k^y))+T[11]+643717713&4294967295,S=k+(I<<14&4294967295|I>>>18),I=E+(k^y&(S^k))+T[0]+3921069994&4294967295,E=S+(I<<20&4294967295|I>>>12),I=y+(S^k&(E^S))+T[5]+3593408605&4294967295,y=E+(I<<5&4294967295|I>>>27),I=k+(E^S&(y^E))+T[10]+38016083&4294967295,k=y+(I<<9&4294967295|I>>>23),I=S+(y^E&(k^y))+T[15]+3634488961&4294967295,S=k+(I<<14&4294967295|I>>>18),I=E+(k^y&(S^k))+T[4]+3889429448&4294967295,E=S+(I<<20&4294967295|I>>>12),I=y+(S^k&(E^S))+T[9]+568446438&4294967295,y=E+(I<<5&4294967295|I>>>27),I=k+(E^S&(y^E))+T[14]+3275163606&4294967295,k=y+(I<<9&4294967295|I>>>23),I=S+(y^E&(k^y))+T[3]+4107603335&4294967295,S=k+(I<<14&4294967295|I>>>18),I=E+(k^y&(S^k))+T[8]+1163531501&4294967295,E=S+(I<<20&4294967295|I>>>12),I=y+(S^k&(E^S))+T[13]+2850285829&4294967295,y=E+(I<<5&4294967295|I>>>27),I=k+(E^S&(y^E))+T[2]+4243563512&4294967295,k=y+(I<<9&4294967295|I>>>23),I=S+(y^E&(k^y))+T[7]+1735328473&4294967295,S=k+(I<<14&4294967295|I>>>18),I=E+(k^y&(S^k))+T[12]+2368359562&4294967295,E=S+(I<<20&4294967295|I>>>12),I=y+(E^S^k)+T[5]+4294588738&4294967295,y=E+(I<<4&4294967295|I>>>28),I=k+(y^E^S)+T[8]+2272392833&4294967295,k=y+(I<<11&4294967295|I>>>21),I=S+(k^y^E)+T[11]+1839030562&4294967295,S=k+(I<<16&4294967295|I>>>16),I=E+(S^k^y)+T[14]+4259657740&4294967295,E=S+(I<<23&4294967295|I>>>9),I=y+(E^S^k)+T[1]+2763975236&4294967295,y=E+(I<<4&4294967295|I>>>28),I=k+(y^E^S)+T[4]+1272893353&4294967295,k=y+(I<<11&4294967295|I>>>21),I=S+(k^y^E)+T[7]+4139469664&4294967295,S=k+(I<<16&4294967295|I>>>16),I=E+(S^k^y)+T[10]+3200236656&4294967295,E=S+(I<<23&4294967295|I>>>9),I=y+(E^S^k)+T[13]+681279174&4294967295,y=E+(I<<4&4294967295|I>>>28),I=k+(y^E^S)+T[0]+3936430074&4294967295,k=y+(I<<11&4294967295|I>>>21),I=S+(k^y^E)+T[3]+3572445317&4294967295,S=k+(I<<16&4294967295|I>>>16),I=E+(S^k^y)+T[6]+76029189&4294967295,E=S+(I<<23&4294967295|I>>>9),I=y+(E^S^k)+T[9]+3654602809&4294967295,y=E+(I<<4&4294967295|I>>>28),I=k+(y^E^S)+T[12]+3873151461&4294967295,k=y+(I<<11&4294967295|I>>>21),I=S+(k^y^E)+T[15]+530742520&4294967295,S=k+(I<<16&4294967295|I>>>16),I=E+(S^k^y)+T[2]+3299628645&4294967295,E=S+(I<<23&4294967295|I>>>9),I=y+(S^(E|~k))+T[0]+4096336452&4294967295,y=E+(I<<6&4294967295|I>>>26),I=k+(E^(y|~S))+T[7]+1126891415&4294967295,k=y+(I<<10&4294967295|I>>>22),I=S+(y^(k|~E))+T[14]+2878612391&4294967295,S=k+(I<<15&4294967295|I>>>17),I=E+(k^(S|~y))+T[5]+4237533241&4294967295,E=S+(I<<21&4294967295|I>>>11),I=y+(S^(E|~k))+T[12]+1700485571&4294967295,y=E+(I<<6&4294967295|I>>>26),I=k+(E^(y|~S))+T[3]+2399980690&4294967295,k=y+(I<<10&4294967295|I>>>22),I=S+(y^(k|~E))+T[10]+4293915773&4294967295,S=k+(I<<15&4294967295|I>>>17),I=E+(k^(S|~y))+T[1]+2240044497&4294967295,E=S+(I<<21&4294967295|I>>>11),I=y+(S^(E|~k))+T[8]+1873313359&4294967295,y=E+(I<<6&4294967295|I>>>26),I=k+(E^(y|~S))+T[15]+4264355552&4294967295,k=y+(I<<10&4294967295|I>>>22),I=S+(y^(k|~E))+T[6]+2734768916&4294967295,S=k+(I<<15&4294967295|I>>>17),I=E+(k^(S|~y))+T[13]+1309151649&4294967295,E=S+(I<<21&4294967295|I>>>11),I=y+(S^(E|~k))+T[4]+4149444226&4294967295,y=E+(I<<6&4294967295|I>>>26),I=k+(E^(y|~S))+T[11]+3174756917&4294967295,k=y+(I<<10&4294967295|I>>>22),I=S+(y^(k|~E))+T[2]+718787259&4294967295,S=k+(I<<15&4294967295|I>>>17),I=E+(k^(S|~y))+T[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(S+(I<<21&4294967295|I>>>11))&4294967295,v.g[2]=v.g[2]+S&4294967295,v.g[3]=v.g[3]+k&4294967295}r.prototype.u=function(v,y){y===void 0&&(y=v.length);for(var E=y-this.blockSize,T=this.B,S=this.h,k=0;k<y;){if(S==0)for(;k<=E;)i(this,v,k),k+=this.blockSize;if(typeof v=="string"){for(;k<y;)if(T[S++]=v.charCodeAt(k++),S==this.blockSize){i(this,T),S=0;break}}else for(;k<y;)if(T[S++]=v[k++],S==this.blockSize){i(this,T),S=0;break}}this.h=S,this.o+=y},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;var E=8*this.o;for(y=v.length-8;y<v.length;++y)v[y]=E&255,E/=256;for(this.u(v),v=Array(16),y=E=0;4>y;++y)for(var T=0;32>T;T+=8)v[E++]=this.g[y]>>>T&255;return v};function s(v,y){var E=l;return Object.prototype.hasOwnProperty.call(E,v)?E[v]:E[v]=y(v)}function o(v,y){this.h=y;for(var E=[],T=!0,S=v.length-1;0<=S;S--){var k=v[S]|0;T&&k==y||(E[S]=k,T=!1)}this.g=E}var l={};function u(v){return-128<=v&&128>v?s(v,function(y){return new o([y|0],0>y?-1:0)}):new o([v|0],0>v?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return N(h(-v));for(var y=[],E=1,T=0;v>=E;T++)y[T]=v/E|0,E*=4294967296;return new o(y,0)}function f(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return N(f(v.substring(1),y));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(y,8)),T=p,S=0;S<v.length;S+=8){var k=Math.min(8,v.length-S),I=parseInt(v.substring(S,S+k),y);8>k?(k=h(Math.pow(y,k)),T=T.j(k).add(h(I))):(T=T.j(E),T=T.add(h(I)))}return T}var p=u(0),g=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(D(this))return-N(this).m();for(var v=0,y=1,E=0;E<this.g.length;E++){var T=this.i(E);v+=(0<=T?T:4294967296+T)*y,y*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(P(this))return"0";if(D(this))return"-"+N(this).toString(v);for(var y=h(Math.pow(v,6)),E=this,T="";;){var S=O(E,y).g;E=w(E,S.j(y));var k=((0<E.g.length?E.g[0]:E.h)>>>0).toString(v);if(E=S,P(E))return k+T;for(;6>k.length;)k="0"+k;T=k+T}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function P(v){if(v.h!=0)return!1;for(var y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function D(v){return v.h==-1}t.l=function(v){return v=w(this,v),D(v)?-1:P(v)?0:1};function N(v){for(var y=v.g.length,E=[],T=0;T<y;T++)E[T]=~v.g[T];return new o(E,~v.h).add(g)}t.abs=function(){return D(this)?N(this):this},t.add=function(v){for(var y=Math.max(this.g.length,v.g.length),E=[],T=0,S=0;S<=y;S++){var k=T+(this.i(S)&65535)+(v.i(S)&65535),I=(k>>>16)+(this.i(S)>>>16)+(v.i(S)>>>16);T=I>>>16,k&=65535,I&=65535,E[S]=I<<16|k}return new o(E,E[E.length-1]&-2147483648?-1:0)};function w(v,y){return v.add(N(y))}t.j=function(v){if(P(this)||P(v))return p;if(D(this))return D(v)?N(this).j(N(v)):N(N(this).j(v));if(D(v))return N(this.j(N(v)));if(0>this.l(A)&&0>v.l(A))return h(this.m()*v.m());for(var y=this.g.length+v.g.length,E=[],T=0;T<2*y;T++)E[T]=0;for(T=0;T<this.g.length;T++)for(var S=0;S<v.g.length;S++){var k=this.i(T)>>>16,I=this.i(T)&65535,H=v.i(S)>>>16,rt=v.i(S)&65535;E[2*T+2*S]+=I*rt,_(E,2*T+2*S),E[2*T+2*S+1]+=k*rt,_(E,2*T+2*S+1),E[2*T+2*S+1]+=I*H,_(E,2*T+2*S+1),E[2*T+2*S+2]+=k*H,_(E,2*T+2*S+2)}for(T=0;T<y;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=y;T<2*y;T++)E[T]=0;return new o(E,0)};function _(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function R(v,y){this.g=v,this.h=y}function O(v,y){if(P(y))throw Error("division by zero");if(P(v))return new R(p,p);if(D(v))return y=O(N(v),y),new R(N(y.g),N(y.h));if(D(y))return y=O(v,N(y)),new R(N(y.g),y.h);if(30<v.g.length){if(D(v)||D(y))throw Error("slowDivide_ only works with positive integers.");for(var E=g,T=y;0>=T.l(v);)E=U(E),T=U(T);var S=j(E,1),k=j(T,1);for(T=j(T,2),E=j(E,2);!P(T);){var I=k.add(T);0>=I.l(v)&&(S=S.add(E),k=I),T=j(T,1),E=j(E,1)}return y=w(v,S.j(y)),new R(S,y)}for(S=p;0<=v.l(y);){for(E=Math.max(1,Math.floor(v.m()/y.m())),T=Math.ceil(Math.log(E)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),k=h(E),I=k.j(y);D(I)||0<I.l(v);)E-=T,k=h(E),I=k.j(y);P(k)&&(k=g),S=S.add(k),v=w(v,I)}return new R(S,v)}t.A=function(v){return O(this,v).h},t.and=function(v){for(var y=Math.max(this.g.length,v.g.length),E=[],T=0;T<y;T++)E[T]=this.i(T)&v.i(T);return new o(E,this.h&v.h)},t.or=function(v){for(var y=Math.max(this.g.length,v.g.length),E=[],T=0;T<y;T++)E[T]=this.i(T)|v.i(T);return new o(E,this.h|v.h)},t.xor=function(v){for(var y=Math.max(this.g.length,v.g.length),E=[],T=0;T<y;T++)E[T]=this.i(T)^v.i(T);return new o(E,this.h^v.h)};function U(v){for(var y=v.g.length+1,E=[],T=0;T<y;T++)E[T]=v.i(T)<<1|v.i(T-1)>>>31;return new o(E,v.h)}function j(v,y){var E=y>>5;y%=32;for(var T=v.g.length-E,S=[],k=0;k<T;k++)S[k]=0<y?v.i(k+E)>>>y|v.i(k+E+1)<<32-y:v.i(k+E);return new o(S,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,jE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Vr=o}).apply(typeof Ng<"u"?Ng:typeof self<"u"?self:typeof window<"u"?window:{});var Ca=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var BE,Ds,zE,Ga,Lh,$E,WE,HE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ca=="object"&&Ca];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var x=a[m];if(!(x in d))break e;d=d[x]}a=a[a.length-1],m=d[a],c=c(m),c!=m&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,m=!1,x={next:function(){if(!m&&d<a.length){var V=d++;return{value:c(V,a[V]),done:!1}}return m=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function p(a,c,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,m),a.apply(c,x)}}return function(){return a.apply(c,arguments)}}function g(a,c,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function A(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function P(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,x,V){for(var B=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)B[ce-2]=arguments[ce];return c.prototype[x].apply(m,B)}}function D(a){const c=a.length;if(0<c){const d=Array(c);for(let m=0;m<c;m++)d[m]=a[m];return d}return[]}function N(a,c){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(u(m)){const x=a.length||0,V=m.length||0;a.length=x+V;for(let B=0;B<V;B++)a[x+B]=m[B]}else a.push(m)}}class w{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function _(a){return/^[\s\xa0]*$/.test(a)}function R(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var U=R().indexOf("Gecko")!=-1&&!(R().toLowerCase().indexOf("webkit")!=-1&&R().indexOf("Edge")==-1)&&!(R().indexOf("Trident")!=-1||R().indexOf("MSIE")!=-1)&&R().indexOf("Edge")==-1;function j(a,c,d){for(const m in a)c.call(d,a[m],m,a)}function v(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function y(a){const c={};for(const d in a)c[d]=a[d];return c}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,c){let d,m;for(let x=1;x<arguments.length;x++){m=arguments[x];for(d in m)a[d]=m[d];for(let V=0;V<E.length;V++)d=E[V],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function S(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function k(a){l.setTimeout(()=>{throw a},0)}function I(){var a=Y;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class H{constructor(){this.h=this.g=null}add(c,d){const m=rt.get();m.set(c,d),this.h?this.h.next=m:this.g=m,this.h=m}}var rt=new w(()=>new vr,a=>a.reset());class vr{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ve,z=!1,Y=new H,Z=()=>{const a=l.Promise.resolve(void 0);Ve=()=>{a.then(ye)}};var ye=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(d){k(d)}var c=rt;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}z=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Se(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Se.prototype.h=function(){this.defaultPrevented=!0};var an=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function ln(a,c){if(Se.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(U){e:{try{O(c.nodeName);var x=!0;break e}catch{}x=!1}x||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:un[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ln.aa.h.call(this)}}P(ln,Se);var un={2:"touch",3:"pen",4:"mouse"};ln.prototype.h=function(){ln.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var cn="closure_listenable_"+(1e6*Math.random()|0),g0=0;function y0(a,c,d,m,x){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!m,this.ha=x,this.key=++g0,this.da=this.fa=!1}function Ho(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function qo(a){this.src=a,this.g={},this.h=0}qo.prototype.add=function(a,c,d,m,x){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var B=Su(a,c,m,x);return-1<B?(c=a[B],d||(c.fa=!1)):(c=new y0(c,this.src,V,!!m,x),c.fa=d,a.push(c)),c};function Iu(a,c){var d=c.type;if(d in a.g){var m=a.g[d],x=Array.prototype.indexOf.call(m,c,void 0),V;(V=0<=x)&&Array.prototype.splice.call(m,x,1),V&&(Ho(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Su(a,c,d,m){for(var x=0;x<a.length;++x){var V=a[x];if(!V.da&&V.listener==c&&V.capture==!!d&&V.ha==m)return x}return-1}var Ru="closure_lm_"+(1e6*Math.random()|0),Au={};function bf(a,c,d,m,x){if(Array.isArray(c)){for(var V=0;V<c.length;V++)bf(a,c[V],d,m,x);return null}return d=jf(d),a&&a[cn]?a.K(c,d,h(m)?!!m.capture:!1,x):_0(a,c,d,!1,m,x)}function _0(a,c,d,m,x,V){if(!c)throw Error("Invalid event type");var B=h(x)?!!x.capture:!!x,ce=Pu(a);if(ce||(a[Ru]=ce=new qo(a)),d=ce.add(c,d,m,B,V),d.proxy)return d;if(m=v0(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)an||(x=B),x===void 0&&(x=!1),a.addEventListener(c.toString(),m,x);else if(a.attachEvent)a.attachEvent(Ff(c.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function v0(){function a(d){return c.call(a.src,a.listener,d)}const c=E0;return a}function Uf(a,c,d,m,x){if(Array.isArray(c))for(var V=0;V<c.length;V++)Uf(a,c[V],d,m,x);else m=h(m)?!!m.capture:!!m,d=jf(d),a&&a[cn]?(a=a.i,c=String(c).toString(),c in a.g&&(V=a.g[c],d=Su(V,d,m,x),-1<d&&(Ho(V[d]),Array.prototype.splice.call(V,d,1),V.length==0&&(delete a.g[c],a.h--)))):a&&(a=Pu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Su(c,d,m,x)),(d=-1<a?c[a]:null)&&Cu(d))}function Cu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[cn])Iu(c.i,a);else{var d=a.type,m=a.proxy;c.removeEventListener?c.removeEventListener(d,m,a.capture):c.detachEvent?c.detachEvent(Ff(d),m):c.addListener&&c.removeListener&&c.removeListener(m),(d=Pu(c))?(Iu(d,a),d.h==0&&(d.src=null,c[Ru]=null)):Ho(a)}}}function Ff(a){return a in Au?Au[a]:Au[a]="on"+a}function E0(a,c){if(a.da)a=!0;else{c=new ln(c,this);var d=a.listener,m=a.ha||a.src;a.fa&&Cu(a),a=d.call(m,c)}return a}function Pu(a){return a=a[Ru],a instanceof qo?a:null}var ku="__closure_events_fn_"+(1e9*Math.random()>>>0);function jf(a){return typeof a=="function"?a:(a[ku]||(a[ku]=function(c){return a.handleEvent(c)}),a[ku])}function qe(){ue.call(this),this.i=new qo(this),this.M=this,this.F=null}P(qe,ue),qe.prototype[cn]=!0,qe.prototype.removeEventListener=function(a,c,d,m){Uf(this,a,c,d,m)};function it(a,c){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=c.type||c,typeof c=="string")c=new Se(c,a);else if(c instanceof Se)c.target=c.target||a;else{var x=c;c=new Se(m,a),T(c,x)}if(x=!0,d)for(var V=d.length-1;0<=V;V--){var B=c.g=d[V];x=Ko(B,m,!0,c)&&x}if(B=c.g=a,x=Ko(B,m,!0,c)&&x,x=Ko(B,m,!1,c)&&x,d)for(V=0;V<d.length;V++)B=c.g=d[V],x=Ko(B,m,!1,c)&&x}qe.prototype.N=function(){if(qe.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],m=0;m<d.length;m++)Ho(d[m]);delete a.g[c],a.h--}}this.F=null},qe.prototype.K=function(a,c,d,m){return this.i.add(String(a),c,!1,d,m)},qe.prototype.L=function(a,c,d,m){return this.i.add(String(a),c,!0,d,m)};function Ko(a,c,d,m){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var x=!0,V=0;V<c.length;++V){var B=c[V];if(B&&!B.da&&B.capture==d){var ce=B.listener,Ue=B.ha||B.src;B.fa&&Iu(a.i,B),x=ce.call(Ue,m)!==!1&&x}}return x&&!m.defaultPrevented}function Bf(a,c,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function zf(a){a.g=Bf(()=>{a.g=null,a.i&&(a.i=!1,zf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class w0 extends ue{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:zf(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rs(a){ue.call(this),this.h=a,this.g={}}P(rs,ue);var $f=[];function Wf(a){j(a.g,function(c,d){this.g.hasOwnProperty(d)&&Cu(c)},a),a.g={}}rs.prototype.N=function(){rs.aa.N.call(this),Wf(this)},rs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Nu=l.JSON.stringify,T0=l.JSON.parse,I0=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function xu(){}xu.prototype.h=null;function Hf(a){return a.h||(a.h=a.i())}function qf(){}var is={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Du(){Se.call(this,"d")}P(Du,Se);function Ou(){Se.call(this,"c")}P(Ou,Se);var Er={},Kf=null;function Go(){return Kf=Kf||new qe}Er.La="serverreachability";function Gf(a){Se.call(this,Er.La,a)}P(Gf,Se);function ss(a){const c=Go();it(c,new Gf(c))}Er.STAT_EVENT="statevent";function Qf(a,c){Se.call(this,Er.STAT_EVENT,a),this.stat=c}P(Qf,Se);function st(a){const c=Go();it(c,new Qf(c,a))}Er.Ma="timingevent";function Yf(a,c){Se.call(this,Er.Ma,a),this.size=c}P(Yf,Se);function os(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function as(){this.g=!0}as.prototype.xa=function(){this.g=!1};function S0(a,c,d,m,x,V){a.info(function(){if(a.g)if(V)for(var B="",ce=V.split("&"),Ue=0;Ue<ce.length;Ue++){var se=ce[Ue].split("=");if(1<se.length){var Ke=se[0];se=se[1];var Ge=Ke.split("_");B=2<=Ge.length&&Ge[1]=="type"?B+(Ke+"="+se+"&"):B+(Ke+"=redacted&")}}else B=null;else B=V;return"XMLHTTP REQ ("+m+") [attempt "+x+"]: "+c+`
`+d+`
`+B})}function R0(a,c,d,m,x,V,B){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+x+"]: "+c+`
`+d+`
`+V+" "+B})}function ei(a,c,d,m){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+C0(a,d)+(m?" "+m:"")})}function A0(a,c){a.info(function(){return"TIMEOUT: "+c})}as.prototype.info=function(){};function C0(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var x=m[1];if(Array.isArray(x)&&!(1>x.length)){var V=x[0];if(V!="noop"&&V!="stop"&&V!="close")for(var B=1;B<x.length;B++)x[B]=""}}}}return Nu(d)}catch{return c}}var Qo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Xf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Vu;function Yo(){}P(Yo,xu),Yo.prototype.g=function(){return new XMLHttpRequest},Yo.prototype.i=function(){return{}},Vu=new Yo;function On(a,c,d,m){this.j=a,this.i=c,this.l=d,this.R=m||1,this.U=new rs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Jf}function Jf(){this.i=null,this.g="",this.h=!1}var Zf={},Lu={};function Mu(a,c,d){a.L=1,a.v=ea(hn(c)),a.m=d,a.P=!0,ep(a,null)}function ep(a,c){a.F=Date.now(),Xo(a),a.A=hn(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),pp(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Jf,a.g=Dp(a.j,d?c:null,!a.m),0<a.O&&(a.M=new w0(g(a.Y,a,a.g),a.O)),c=a.U,d=a.g,m=a.ca;var x="readystatechange";Array.isArray(x)||(x&&($f[0]=x.toString()),x=$f);for(var V=0;V<x.length;V++){var B=bf(d,x[V],m||c.handleEvent,!1,c.h||c);if(!B)break;c.g[B.key]=B}c=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),ss(),S0(a.i,a.u,a.A,a.l,a.R,a.m)}On.prototype.ca=function(a){a=a.target;const c=this.M;c&&dn(a)==3?c.j():this.Y(a)},On.prototype.Y=function(a){try{if(a==this.g)e:{const Ge=dn(this.g);var c=this.g.Ba();const ri=this.g.Z();if(!(3>Ge)&&(Ge!=3||this.g&&(this.h.h||this.g.oa()||wp(this.g)))){this.J||Ge!=4||c==7||(c==8||0>=ri?ss(3):ss(2)),bu(this);var d=this.g.Z();this.X=d;t:if(tp(this)){var m=wp(this.g);a="";var x=m.length,V=dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wr(this),ls(this);var B="";break t}this.h.i=new l.TextDecoder}for(c=0;c<x;c++)this.h.h=!0,a+=this.h.i.decode(m[c],{stream:!(V&&c==x-1)});m.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=d==200,R0(this.i,this.u,this.A,this.l,this.R,Ge,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ce,Ue=this.g;if((ce=Ue.g?Ue.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(ce)){var se=ce;break t}}se=null}if(d=se)ei(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Uu(this,d);else{this.o=!1,this.s=3,st(12),wr(this),ls(this);break e}}if(this.P){d=!0;let Dt;for(;!this.J&&this.C<B.length;)if(Dt=P0(this,B),Dt==Lu){Ge==4&&(this.s=4,st(14),d=!1),ei(this.i,this.l,null,"[Incomplete Response]");break}else if(Dt==Zf){this.s=4,st(15),ei(this.i,this.l,B,"[Invalid Chunk]"),d=!1;break}else ei(this.i,this.l,Dt,null),Uu(this,Dt);if(tp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ge!=4||B.length!=0||this.h.h||(this.s=1,st(16),d=!1),this.o=this.o&&d,!d)ei(this.i,this.l,B,"[Invalid Chunked Response]"),wr(this),ls(this);else if(0<B.length&&!this.W){this.W=!0;var Ke=this.j;Ke.g==this&&Ke.ba&&!Ke.M&&(Ke.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Wu(Ke),Ke.M=!0,st(11))}}else ei(this.i,this.l,B,null),Uu(this,B);Ge==4&&wr(this),this.o&&!this.J&&(Ge==4?Pp(this.j,this):(this.o=!1,Xo(this)))}else H0(this.g),d==400&&0<B.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),wr(this),ls(this)}}}catch{}finally{}};function tp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function P0(a,c){var d=a.C,m=c.indexOf(`
`,d);return m==-1?Lu:(d=Number(c.substring(d,m)),isNaN(d)?Zf:(m+=1,m+d>c.length?Lu:(c=c.slice(m,m+d),a.C=m+d,c)))}On.prototype.cancel=function(){this.J=!0,wr(this)};function Xo(a){a.S=Date.now()+a.I,np(a,a.I)}function np(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=os(g(a.ba,a),c)}function bu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}On.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(A0(this.i,this.A),this.L!=2&&(ss(),st(17)),wr(this),this.s=2,ls(this)):np(this,this.S-a)};function ls(a){a.j.G==0||a.J||Pp(a.j,a)}function wr(a){bu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Wf(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Uu(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Fu(d.h,a))){if(!a.K&&Fu(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var x=m;if(x[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)oa(d),ia(d);else break e;$u(d),st(18)}}else d.za=x[1],0<d.za-d.T&&37500>x[2]&&d.F&&d.v==0&&!d.C&&(d.C=os(g(d.Za,d),6e3));if(1>=sp(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Ir(d,11)}else if((a.K||d.g==a)&&oa(d),!_(c))for(x=d.Da.g.parse(c),c=0;c<x.length;c++){let se=x[c];if(d.T=se[0],se=se[1],d.G==2)if(se[0]=="c"){d.K=se[1],d.ia=se[2];const Ke=se[3];Ke!=null&&(d.la=Ke,d.j.info("VER="+d.la));const Ge=se[4];Ge!=null&&(d.Aa=Ge,d.j.info("SVER="+d.Aa));const ri=se[5];ri!=null&&typeof ri=="number"&&0<ri&&(m=1.5*ri,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Dt=a.g;if(Dt){const la=Dt.g?Dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(la){var V=m.h;V.g||la.indexOf("spdy")==-1&&la.indexOf("quic")==-1&&la.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(ju(V,V.h),V.h=null))}if(m.D){const Hu=Dt.g?Dt.g.getResponseHeader("X-HTTP-Session-Id"):null;Hu&&(m.ya=Hu,de(m.I,m.D,Hu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var B=a;if(m.qa=xp(m,m.J?m.ia:null,m.W),B.K){op(m.h,B);var ce=B,Ue=m.L;Ue&&(ce.I=Ue),ce.B&&(bu(ce),Xo(ce)),m.g=B}else Ap(m);0<d.i.length&&sa(d)}else se[0]!="stop"&&se[0]!="close"||Ir(d,7);else d.G==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?Ir(d,7):zu(d):se[0]!="noop"&&d.l&&d.l.ta(se),d.v=0)}}ss(4)}catch{}}var k0=class{constructor(a,c){this.g=a,this.map=c}};function rp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ip(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function sp(a){return a.h?1:a.g?a.g.size:0}function Fu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function ju(a,c){a.g?a.g.add(c):a.h=c}function op(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}rp.prototype.cancel=function(){if(this.i=ap(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ap(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return D(a.i)}function N0(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,m=0;m<d;m++)c.push(a[m]);return c}c=[],d=0;for(m in a)c[d++]=a[m];return c}function x0(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const m in a)c[d++]=m;return c}}}function lp(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=x0(a),m=N0(a),x=m.length,V=0;V<x;V++)c.call(void 0,m[V],d&&d[V],a)}var up=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function D0(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),x=null;if(0<=m){var V=a[d].substring(0,m);x=a[d].substring(m+1)}else V=a[d];c(V,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Tr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Tr){this.h=a.h,Jo(this,a.j),this.o=a.o,this.g=a.g,Zo(this,a.s),this.l=a.l;var c=a.i,d=new hs;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),cp(this,d),this.m=a.m}else a&&(c=String(a).match(up))?(this.h=!1,Jo(this,c[1]||"",!0),this.o=us(c[2]||""),this.g=us(c[3]||"",!0),Zo(this,c[4]),this.l=us(c[5]||"",!0),cp(this,c[6]||"",!0),this.m=us(c[7]||"")):(this.h=!1,this.i=new hs(null,this.h))}Tr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(cs(c,hp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(cs(c,hp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(cs(d,d.charAt(0)=="/"?L0:V0,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",cs(d,b0)),a.join("")};function hn(a){return new Tr(a)}function Jo(a,c,d){a.j=d?us(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Zo(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function cp(a,c,d){c instanceof hs?(a.i=c,U0(a.i,a.h)):(d||(c=cs(c,M0)),a.i=new hs(c,a.h))}function de(a,c,d){a.i.set(c,d)}function ea(a){return de(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function us(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function cs(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,O0),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function O0(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var hp=/[#\/\?@]/g,V0=/[#\?:]/g,L0=/[#\?]/g,M0=/[#\?@]/g,b0=/#/g;function hs(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Vn(a){a.g||(a.g=new Map,a.h=0,a.i&&D0(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=hs.prototype,t.add=function(a,c){Vn(this),this.i=null,a=ti(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function dp(a,c){Vn(a),c=ti(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function fp(a,c){return Vn(a),c=ti(a,c),a.g.has(c)}t.forEach=function(a,c){Vn(this),this.g.forEach(function(d,m){d.forEach(function(x){a.call(c,x,m,this)},this)},this)},t.na=function(){Vn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let m=0;m<c.length;m++){const x=a[m];for(let V=0;V<x.length;V++)d.push(c[m])}return d},t.V=function(a){Vn(this);let c=[];if(typeof a=="string")fp(this,a)&&(c=c.concat(this.g.get(ti(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Vn(this),this.i=null,a=ti(this,a),fp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function pp(a,c,d){dp(a,c),0<d.length&&(a.i=null,a.g.set(ti(a,c),D(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var m=c[d];const V=encodeURIComponent(String(m)),B=this.V(m);for(m=0;m<B.length;m++){var x=V;B[m]!==""&&(x+="="+encodeURIComponent(String(B[m]))),a.push(x)}}return this.i=a.join("&")};function ti(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function U0(a,c){c&&!a.j&&(Vn(a),a.i=null,a.g.forEach(function(d,m){var x=m.toLowerCase();m!=x&&(dp(this,m),pp(this,x,d))},a)),a.j=c}function F0(a,c){const d=new as;if(l.Image){const m=new Image;m.onload=A(Ln,d,"TestLoadImage: loaded",!0,c,m),m.onerror=A(Ln,d,"TestLoadImage: error",!1,c,m),m.onabort=A(Ln,d,"TestLoadImage: abort",!1,c,m),m.ontimeout=A(Ln,d,"TestLoadImage: timeout",!1,c,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else c(!1)}function j0(a,c){const d=new as,m=new AbortController,x=setTimeout(()=>{m.abort(),Ln(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:m.signal}).then(V=>{clearTimeout(x),V.ok?Ln(d,"TestPingServer: ok",!0,c):Ln(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(x),Ln(d,"TestPingServer: error",!1,c)})}function Ln(a,c,d,m,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),m(d)}catch{}}function B0(){this.g=new I0}function z0(a,c,d){const m=d||"";try{lp(a,function(x,V){let B=x;h(x)&&(B=Nu(x)),c.push(m+V+"="+encodeURIComponent(B))})}catch(x){throw c.push(m+"type="+encodeURIComponent("_badmap")),x}}function ta(a){this.l=a.Ub||null,this.j=a.eb||!1}P(ta,xu),ta.prototype.g=function(){return new na(this.l,this.j)},ta.prototype.i=function(a){return function(){return a}}({});function na(a,c){qe.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(na,qe),t=na.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,fs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ds(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,fs(this)),this.g&&(this.readyState=3,fs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;mp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function mp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?ds(this):fs(this),this.readyState==3&&mp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ds(this))},t.Qa=function(a){this.g&&(this.response=a,ds(this))},t.ga=function(){this.g&&ds(this)};function ds(a){a.readyState=4,a.l=null,a.j=null,a.v=null,fs(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function fs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(na.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function gp(a){let c="";return j(a,function(d,m){c+=m,c+=":",c+=d,c+=`\r
`}),c}function Bu(a,c,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=gp(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):de(a,c,d))}function Te(a){qe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Te,qe);var $0=/^https?$/i,W0=["POST","PUT"];t=Te.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Vu.g(),this.v=this.o?Hf(this.o):Hf(Vu),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(V){yp(this,V);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var x in m)d.set(x,m[x]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const V of m.keys())d.set(V,m.get(V));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),x=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(W0,c,void 0))||m||x||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,B]of d)this.g.setRequestHeader(V,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ep(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){yp(this,V)}};function yp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,_p(a),ra(a)}function _p(a){a.A||(a.A=!0,it(a,"complete"),it(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,it(this,"complete"),it(this,"abort"),ra(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ra(this,!0)),Te.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?vp(this):this.bb())},t.bb=function(){vp(this)};function vp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||dn(a)!=4||a.Z()!=2)){if(a.u&&dn(a)==4)Bf(a.Ea,0,a);else if(it(a,"readystatechange"),dn(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var m;if(m=B===0){var x=String(a.D).match(up)[1]||null;!x&&l.self&&l.self.location&&(x=l.self.location.protocol.slice(0,-1)),m=!$0.test(x?x.toLowerCase():"")}d=m}if(d)it(a,"complete"),it(a,"success");else{a.m=6;try{var V=2<dn(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",_p(a)}}finally{ra(a)}}}}function ra(a,c){if(a.g){Ep(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||it(a,"ready");try{d.onreadystatechange=m}catch{}}}function Ep(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function dn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<dn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),T0(c)}};function wp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function H0(a){const c={};a=(a.g&&2<=dn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(_(a[m]))continue;var d=S(a[m]);const x=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=c[x]||[];c[x]=V,V.push(d)}v(c,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ps(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Tp(a){this.Aa=0,this.i=[],this.j=new as,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ps("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ps("baseRetryDelayMs",5e3,a),this.cb=ps("retryDelaySeedMs",1e4,a),this.Wa=ps("forwardChannelMaxRetries",2,a),this.wa=ps("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new rp(a&&a.concurrentRequestLimit),this.Da=new B0,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Tp.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,m){st(0),this.W=a,this.H=c||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=xp(this,null,this.W),sa(this)};function zu(a){if(Ip(a),a.G==3){var c=a.U++,d=hn(a.I);if(de(d,"SID",a.K),de(d,"RID",c),de(d,"TYPE","terminate"),ms(a,d),c=new On(a,a.j,c),c.L=2,c.v=ea(hn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Dp(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Xo(c)}Np(a)}function ia(a){a.g&&(Wu(a),a.g.cancel(),a.g=null)}function Ip(a){ia(a),a.u&&(l.clearTimeout(a.u),a.u=null),oa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function sa(a){if(!ip(a.h)&&!a.s){a.s=!0;var c=a.Ga;Ve||Z(),z||(Ve(),z=!0),Y.add(c,a),a.B=0}}function q0(a,c){return sp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=os(g(a.Ga,a,c),kp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const x=new On(this,this.j,a);let V=this.o;if(this.S&&(V?(V=y(V),T(V,this.S)):V=this.S),this.m!==null||this.O||(x.H=V,V=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Rp(this,x,c),d=hn(this.I),de(d,"RID",a),de(d,"CVER",22),this.D&&de(d,"X-HTTP-Session-Id",this.D),ms(this,d),V&&(this.O?c="headers="+encodeURIComponent(String(gp(V)))+"&"+c:this.m&&Bu(d,this.m,V)),ju(this.h,x),this.Ua&&de(d,"TYPE","init"),this.P?(de(d,"$req",c),de(d,"SID","null"),x.T=!0,Mu(x,d,null)):Mu(x,d,c),this.G=2}}else this.G==3&&(a?Sp(this,a):this.i.length==0||ip(this.h)||Sp(this))};function Sp(a,c){var d;c?d=c.l:d=a.U++;const m=hn(a.I);de(m,"SID",a.K),de(m,"RID",d),de(m,"AID",a.T),ms(a,m),a.m&&a.o&&Bu(m,a.m,a.o),d=new On(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=Rp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ju(a.h,d),Mu(d,m,c)}function ms(a,c){a.H&&j(a.H,function(d,m){de(c,m,d)}),a.l&&lp({},function(d,m){de(c,m,d)})}function Rp(a,c,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var x=a.i;let V=-1;for(;;){const B=["count="+d];V==-1?0<d?(V=x[0].g,B.push("ofs="+V)):V=0:B.push("ofs="+V);let ce=!0;for(let Ue=0;Ue<d;Ue++){let se=x[Ue].g;const Ke=x[Ue].map;if(se-=V,0>se)V=Math.max(0,x[Ue].g-100),ce=!1;else try{z0(Ke,B,"req"+se+"_")}catch{m&&m(Ke)}}if(ce){m=B.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,m}function Ap(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Ve||Z(),z||(Ve(),z=!0),Y.add(c,a),a.v=0}}function $u(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=os(g(a.Fa,a),kp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Cp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=os(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),ia(this),Cp(this))};function Wu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Cp(a){a.g=new On(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=hn(a.qa);de(c,"RID","rpc"),de(c,"SID",a.K),de(c,"AID",a.T),de(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&de(c,"TO",a.ja),de(c,"TYPE","xmlhttp"),ms(a,c),a.m&&a.o&&Bu(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=ea(hn(c)),d.m=null,d.P=!0,ep(d,a)}t.Za=function(){this.C!=null&&(this.C=null,ia(this),$u(this),st(19))};function oa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Pp(a,c){var d=null;if(a.g==c){oa(a),Wu(a),a.g=null;var m=2}else if(Fu(a.h,c))d=c.D,op(a.h,c),m=1;else return;if(a.G!=0){if(c.o)if(m==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var x=a.B;m=Go(),it(m,new Yf(m,d)),sa(a)}else Ap(a);else if(x=c.s,x==3||x==0&&0<c.X||!(m==1&&q0(a,c)||m==2&&$u(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),x){case 1:Ir(a,5);break;case 4:Ir(a,10);break;case 3:Ir(a,6);break;default:Ir(a,2)}}}function kp(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function Ir(a,c){if(a.j.info("Error code "+c),c==2){var d=g(a.fb,a),m=a.Xa;const x=!m;m=new Tr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Jo(m,"https"),ea(m),x?F0(m.toString(),d):j0(m.toString(),d)}else st(2);a.G=0,a.l&&a.l.sa(c),Np(a),Ip(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function Np(a){if(a.G=0,a.ka=[],a.l){const c=ap(a.h);(c.length!=0||a.i.length!=0)&&(N(a.ka,c),N(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function xp(a,c,d){var m=d instanceof Tr?hn(d):new Tr(d);if(m.g!="")c&&(m.g=c+"."+m.g),Zo(m,m.s);else{var x=l.location;m=x.protocol,c=c?c+"."+x.hostname:x.hostname,x=+x.port;var V=new Tr(null);m&&Jo(V,m),c&&(V.g=c),x&&Zo(V,x),d&&(V.l=d),m=V}return d=a.D,c=a.ya,d&&c&&de(m,d,c),de(m,"VER",a.la),ms(a,m),m}function Dp(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Te(new ta({eb:d})):new Te(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Op(){}t=Op.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function aa(){}aa.prototype.g=function(a,c){return new gt(a,c)};function gt(a,c){qe.call(this),this.g=new Tp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!_(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new ni(this)}P(gt,qe),gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},gt.prototype.close=function(){zu(this.g)},gt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Nu(a),a=d);c.i.push(new k0(c.Ya++,a)),c.G==3&&sa(c)},gt.prototype.N=function(){this.g.l=null,delete this.j,zu(this.g),delete this.g,gt.aa.N.call(this)};function Vp(a){Du.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}P(Vp,Du);function Lp(){Ou.call(this),this.status=1}P(Lp,Ou);function ni(a){this.g=a}P(ni,Op),ni.prototype.ua=function(){it(this.g,"a")},ni.prototype.ta=function(a){it(this.g,new Vp(a))},ni.prototype.sa=function(a){it(this.g,new Lp)},ni.prototype.ra=function(){it(this.g,"b")},aa.prototype.createWebChannel=aa.prototype.g,gt.prototype.send=gt.prototype.o,gt.prototype.open=gt.prototype.m,gt.prototype.close=gt.prototype.close,HE=function(){return new aa},WE=function(){return Go()},$E=Er,Lh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Qo.NO_ERROR=0,Qo.TIMEOUT=8,Qo.HTTP_ERROR=6,Ga=Qo,Xf.COMPLETE="complete",zE=Xf,qf.EventType=is,is.OPEN="a",is.CLOSE="b",is.ERROR="c",is.MESSAGE="d",qe.prototype.listen=qe.prototype.K,Ds=qf,Te.prototype.listenOnce=Te.prototype.L,Te.prototype.getLastError=Te.prototype.Ka,Te.prototype.getLastErrorCode=Te.prototype.Ba,Te.prototype.getStatus=Te.prototype.Z,Te.prototype.getResponseJson=Te.prototype.Oa,Te.prototype.getResponseText=Te.prototype.oa,Te.prototype.send=Te.prototype.ea,Te.prototype.setWithCredentials=Te.prototype.Ha,BE=Te}).apply(typeof Ca<"u"?Ca:typeof self<"u"?self:typeof window<"u"?window:{});const xg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ji="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=new qd("@firebase/firestore");function Ss(){return $r.logLevel}function W(t,...e){if($r.logLevel<=ne.DEBUG){const n=e.map(sf);$r.debug(`Firestore (${Ji}): ${t}`,...n)}}function kn(t,...e){if($r.logLevel<=ne.ERROR){const n=e.map(sf);$r.error(`Firestore (${Ji}): ${t}`,...n)}}function Bi(t,...e){if($r.logLevel<=ne.WARN){const n=e.map(sf);$r.warn(`Firestore (${Ji}): ${t}`,...n)}}function sf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${Ji}) INTERNAL ASSERTION FAILED: `+t;throw kn(e),new Error(e)}function le(t,e){t||Q()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Je.UNAUTHENTICATED))}shutdown(){}}class ok{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ak{constructor(e){this.t=e,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){le(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Tn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Tn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Tn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(le(typeof r.accessToken=="string"),new qE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string"),new Je(e)}}class lk{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class uk{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new lk(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ck{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hk{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){le(this.o===void 0);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(le(typeof n.token=="string"),this.R=n.token,new ck(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=dk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function zi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Oe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Oe(0,0))}static max(){return new X(new Oe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Eo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Eo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ge extends Eo{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const fk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends Eo{construct(e,n,r){return new Be(e,n,r)}static isValidIdentifier(e){return fk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Be(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new q(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Be(n)}static emptyPath(){return new Be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(ge.fromString(e))}static fromName(e){return new K(ge.fromString(e).popFirst(5))}static empty(){return new K(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new ge(e.slice()))}}function pk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Oe(n+1,0):new Oe(n,r));return new hr(i,K.empty(),e)}function mk(t){return new hr(t.readTime,t.key,-1)}class hr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new hr(X.min(),K.empty(),-1)}static max(){return new hr(X.max(),K.empty(),-1)}}function gk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _k{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fo(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==yk)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function vk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function jo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}of.oe=-1;function hu(t){return t==null}function xl(t){return t===0&&1/t==-1/0}function Ek(t){return typeof t=="number"&&Number.isInteger(t)&&!xl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Zi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function GE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){this.comparator=e,this.root=n||je.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pa(this.root,e,this.comparator,!0)}}class Pa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??je.RED,this.left=i??je.EMPTY,this.right=s??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new je(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return je.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,i,s){return this}insert(e,n,r){return new je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Og(this.data.getIterator())}getIteratorFrom(e){return new Og(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof $e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $e(this.comparator);return n.data=e,n}}class Og{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.fields=e,e.sort(Be.comparator)}static empty(){return new bt([])}unionWith(e){let n=new $e(Be.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return zi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new QE("Invalid base64 string: "+s):s}}(e);return new He(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new He(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}He.EMPTY_BYTE_STRING=new He("");const wk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function dr(t){if(le(!!t),typeof t=="string"){let e=0;const n=wk.exec(t);if(le(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Re(t.seconds),nanos:Re(t.nanos)}}function Re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Wr(t){return typeof t=="string"?He.fromBase64String(t):He.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function lf(t){const e=t.mapValue.fields.__previous_value__;return af(e)?lf(e):e}function wo(t){const e=dr(t.mapValue.fields.__local_write_time__.timestampValue);return new Oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class To{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new To("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof To&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka={mapValue:{}};function Hr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?af(t)?4:Sk(t)?9007199254740991:Ik(t)?10:11:Q()}function tn(t,e){if(t===e)return!0;const n=Hr(t);if(n!==Hr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return wo(t).isEqual(wo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=dr(i.timestampValue),l=dr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Wr(i.bytesValue).isEqual(Wr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Re(i.geoPointValue.latitude)===Re(s.geoPointValue.latitude)&&Re(i.geoPointValue.longitude)===Re(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Re(i.integerValue)===Re(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Re(i.doubleValue),l=Re(s.doubleValue);return o===l?xl(o)===xl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return zi(t.arrayValue.values||[],e.arrayValue.values||[],tn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Dg(o)!==Dg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!tn(o[u],l[u])))return!1;return!0}(t,e);default:return Q()}}function Io(t,e){return(t.values||[]).find(n=>tn(n,e))!==void 0}function $i(t,e){if(t===e)return 0;const n=Hr(t),r=Hr(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Re(s.integerValue||s.doubleValue),u=Re(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Vg(t.timestampValue,e.timestampValue);case 4:return Vg(wo(t),wo(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Wr(s),u=Wr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=oe(l[h],u[h]);if(f!==0)return f}return oe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=oe(Re(s.latitude),Re(o.latitude));return l!==0?l:oe(Re(s.longitude),Re(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Lg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const p=s.fields||{},g=o.fields||{},A=(l=p.value)===null||l===void 0?void 0:l.arrayValue,P=(u=g.value)===null||u===void 0?void 0:u.arrayValue,D=oe(((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:Lg(A,P)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ka.mapValue&&o===ka.mapValue)return 0;if(s===ka.mapValue)return 1;if(o===ka.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const g=oe(u[p],f[p]);if(g!==0)return g;const A=$i(l[u[p]],h[f[p]]);if(A!==0)return A}return oe(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Q()}}function Vg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=dr(t),r=dr(e),i=oe(n.seconds,r.seconds);return i!==0?i:oe(n.nanos,r.nanos)}function Lg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=$i(n[i],r[i]);if(s)return s}return oe(n.length,r.length)}function Wi(t){return Mh(t)}function Mh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=dr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Wr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Mh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Mh(n.fields[o])}`;return i+"}"}(t.mapValue):Q()}function bh(t){return!!t&&"integerValue"in t}function uf(t){return!!t&&"arrayValue"in t}function Mg(t){return!!t&&"nullValue"in t}function bg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Qa(t){return!!t&&"mapValue"in t}function Ik(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function qs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Zi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=qs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Sk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Qa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qs(n)}setAll(e){let n=Be.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=qs(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Qa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Qa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Zi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ct(qs(this.value))}}function YE(t){const e=[];return Zi(t.fields,(n,r)=>{const i=new Be([n]);if(Qa(r)){const s=YE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new et(e,0,X.min(),X.min(),X.min(),Ct.empty(),0)}static newFoundDocument(e,n,r,i){return new et(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new et(e,2,n,X.min(),X.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new et(e,3,n,X.min(),X.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n){this.position=e,this.inclusive=n}}function Ug(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=$i(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Fg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,n="asc"){this.field=e,this.dir=n}}function Rk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{}class xe extends XE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Ck(e,n,r):n==="array-contains"?new Nk(e,r):n==="in"?new xk(e,r):n==="not-in"?new Dk(e,r):n==="array-contains-any"?new Ok(e,r):new xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Pk(e,r):new kk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison($i(n,this.value)):n!==null&&Hr(this.value)===Hr(n)&&this.matchesComparison($i(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nn extends XE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new nn(e,n)}matches(e){return JE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function JE(t){return t.op==="and"}function ZE(t){return Ak(t)&&JE(t)}function Ak(t){for(const e of t.filters)if(e instanceof nn)return!1;return!0}function Uh(t){if(t instanceof xe)return t.field.canonicalString()+t.op.toString()+Wi(t.value);if(ZE(t))return t.filters.map(e=>Uh(e)).join(",");{const e=t.filters.map(n=>Uh(n)).join(",");return`${t.op}(${e})`}}function ew(t,e){return t instanceof xe?function(r,i){return i instanceof xe&&r.op===i.op&&r.field.isEqual(i.field)&&tn(r.value,i.value)}(t,e):t instanceof nn?function(r,i){return i instanceof nn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&ew(o,i.filters[l]),!0):!1}(t,e):void Q()}function tw(t){return t instanceof xe?function(n){return`${n.field.canonicalString()} ${n.op} ${Wi(n.value)}`}(t):t instanceof nn?function(n){return n.op.toString()+" {"+n.getFilters().map(tw).join(" ,")+"}"}(t):"Filter"}class Ck extends xe{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class Pk extends xe{constructor(e,n){super(e,"in",n),this.keys=nw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class kk extends xe{constructor(e,n){super(e,"not-in",n),this.keys=nw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function nw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class Nk extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return uf(n)&&Io(n.arrayValue,this.value)}}class xk extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Io(this.value.arrayValue,n)}}class Dk extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Io(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Io(this.value.arrayValue,n)}}class Ok extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!uf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Io(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function jg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Vk(t,e,n,r,i,s,o)}function cf(t){const e=J(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Uh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),hu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Wi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Wi(r)).join(",")),e.ue=n}return e.ue}function hf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Rk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ew(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Fg(t.startAt,e.startAt)&&Fg(t.endAt,e.endAt)}function Fh(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Lk(t,e,n,r,i,s,o,l){return new du(t,e,n,r,i,s,o,l)}function df(t){return new du(t)}function Bg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Mk(t){return t.collectionGroup!==null}function Ks(t){const e=J(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new $e(Be.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ol(s,r))}),n.has(Be.keyField().canonicalString())||e.ce.push(new Ol(Be.keyField(),r))}return e.ce}function Zt(t){const e=J(t);return e.le||(e.le=bk(e,Ks(t))),e.le}function bk(t,e){if(t.limitType==="F")return jg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ol(i.field,s)});const n=t.endAt?new Dl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Dl(t.startAt.position,t.startAt.inclusive):null;return jg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function jh(t,e,n){return new du(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function fu(t,e){return hf(Zt(t),Zt(e))&&t.limitType===e.limitType}function rw(t){return`${cf(Zt(t))}|lt:${t.limitType}`}function oi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>tw(i)).join(", ")}]`),hu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Wi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Wi(i)).join(",")),`Target(${r})`}(Zt(t))}; limitType=${t.limitType})`}function pu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):K.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ks(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Ug(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Ks(r),i)||r.endAt&&!function(o,l,u){const h=Ug(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Ks(r),i))}(t,e)}function Uk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function iw(t){return(e,n)=>{let r=!1;for(const i of Ks(t)){const s=Fk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Fk(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?$i(u,h):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Zi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return GE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk=new we(K.comparator);function Nn(){return jk}const sw=new we(K.comparator);function Os(...t){let e=sw;for(const n of t)e=e.insert(n.key,n);return e}function ow(t){let e=sw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Nr(){return Gs()}function aw(){return Gs()}function Gs(){return new es(t=>t.toString(),(t,e)=>t.isEqual(e))}const Bk=new we(K.comparator),zk=new $e(K.comparator);function te(...t){let e=zk;for(const n of t)e=e.add(n);return e}const $k=new $e(oe);function Wk(){return $k}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xl(e)?"-0":e}}function lw(t){return{integerValue:""+t}}function Hk(t,e){return Ek(e)?lw(e):ff(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(){this._=void 0}}function qk(t,e,n){return t instanceof Vl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&af(s)&&(s=lf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof So?cw(t,e):t instanceof Ro?hw(t,e):function(i,s){const o=uw(i,s),l=zg(o)+zg(i.Pe);return bh(o)&&bh(i.Pe)?lw(l):ff(i.serializer,l)}(t,e)}function Kk(t,e,n){return t instanceof So?cw(t,e):t instanceof Ro?hw(t,e):n}function uw(t,e){return t instanceof Ll?function(r){return bh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Vl extends mu{}class So extends mu{constructor(e){super(),this.elements=e}}function cw(t,e){const n=dw(e);for(const r of t.elements)n.some(i=>tn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ro extends mu{constructor(e){super(),this.elements=e}}function hw(t,e){let n=dw(e);for(const r of t.elements)n=n.filter(i=>!tn(i,r));return{arrayValue:{values:n}}}class Ll extends mu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function zg(t){return Re(t.integerValue||t.doubleValue)}function dw(t){return uf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Gk(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof So&&i instanceof So||r instanceof Ro&&i instanceof Ro?zi(r.elements,i.elements,tn):r instanceof Ll&&i instanceof Ll?tn(r.Pe,i.Pe):r instanceof Vl&&i instanceof Vl}(t.transform,e.transform)}class Qk{constructor(e,n){this.version=e,this.transformResults=n}}class Bt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Bt}static exists(e){return new Bt(void 0,e)}static updateTime(e){return new Bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ya(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class gu{}function fw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new pf(t.key,Bt.none()):new Bo(t.key,t.data,Bt.none());{const n=t.data,r=Ct.empty();let i=new $e(Be.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Jr(t.key,r,new bt(i.toArray()),Bt.none())}}function Yk(t,e,n){t instanceof Bo?function(i,s,o){const l=i.value.clone(),u=Wg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Jr?function(i,s,o){if(!Ya(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Wg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(pw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Qs(t,e,n,r){return t instanceof Bo?function(s,o,l,u){if(!Ya(s.precondition,o))return l;const h=s.value.clone(),f=Hg(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Jr?function(s,o,l,u){if(!Ya(s.precondition,o))return l;const h=Hg(s.fieldTransforms,u,o),f=o.data;return f.setAll(pw(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Ya(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Xk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=uw(r.transform,i||null);s!=null&&(n===null&&(n=Ct.empty()),n.set(r.field,s))}return n||null}function $g(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&zi(r,i,(s,o)=>Gk(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Bo extends gu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Jr extends gu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function pw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Wg(t,e,n){const r=new Map;le(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,Kk(o,l,n[i]))}return r}function Hg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,qk(s,o,e))}return r}class pf extends gu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Jk extends gu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Yk(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Qs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Qs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=aw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=fw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&zi(this.mutations,e.mutations,(n,r)=>$g(n,r))&&zi(this.baseMutations,e.baseMutations,(n,r)=>$g(n,r))}}class mf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){le(e.mutations.length===r.length);let i=function(){return Bk}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new mf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce,re;function n1(t){switch(t){default:return Q();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function mw(t){if(t===void 0)return kn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Ce.OK:return L.OK;case Ce.CANCELLED:return L.CANCELLED;case Ce.UNKNOWN:return L.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return L.INTERNAL;case Ce.UNAVAILABLE:return L.UNAVAILABLE;case Ce.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ce.NOT_FOUND:return L.NOT_FOUND;case Ce.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ce.ABORTED:return L.ABORTED;case Ce.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ce.DATA_LOSS:return L.DATA_LOSS;default:return Q()}}(re=Ce||(Ce={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r1(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1=new Vr([4294967295,4294967295],0);function qg(t){const e=r1().encode(t),n=new jE;return n.update(e),new Uint8Array(n.digest())}function Kg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Vr([n,r],0),new Vr([i,s],0)]}class gf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Vs(`Invalid padding: ${n}`);if(r<0)throw new Vs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Vs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Vs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Vr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Vr.fromNumber(r)));return i.compare(i1)===1&&(i=new Vr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=qg(e),[r,i]=Kg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new gf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=qg(e),[r,i]=Kg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Vs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,zo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new yu(X.min(),i,new we(oe),Nn(),te())}}class zo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new zo(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class gw{constructor(e,n){this.targetId=e,this.me=n}}class yw{constructor(e,n,r=He.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Gg{constructor(){this.fe=0,this.ge=Yg(),this.pe=He.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=te(),n=te(),r=te();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new zo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Yg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class s1{constructor(e){this.Le=e,this.Be=new Map,this.ke=Nn(),this.qe=Qg(),this.Qe=new we(oe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Fh(s))if(r===0){const o=new K(s.path);this.Ue(n,o,et.newNoDocument(o,X.min()))}else le(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Wr(r).toUint8Array()}catch(u){if(u instanceof QE)return Bi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new gf(o,i,s)}catch(u){return Bi(u instanceof Vs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Fh(l.target)){const u=new K(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,et.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=te();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new yu(e,n,this.Qe,this.ke,r);return this.ke=Nn(),this.qe=Qg(),this.Qe=new we(oe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Gg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new $e(oe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Gg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Qg(){return new we(K.comparator)}function Yg(){return new we(K.comparator)}const o1={asc:"ASCENDING",desc:"DESCENDING"},a1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},l1={and:"AND",or:"OR"};class u1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Bh(t,e){return t.useProto3Json||hu(e)?e:{value:e}}function Ml(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _w(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function c1(t,e){return Ml(t,e.toTimestamp())}function en(t){return le(!!t),X.fromTimestamp(function(n){const r=dr(n);return new Oe(r.seconds,r.nanos)}(t))}function yf(t,e){return zh(t,e).canonicalString()}function zh(t,e){const n=function(i){return new ge(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function vw(t){const e=ge.fromString(t);return le(Sw(e)),e}function $h(t,e){return yf(t.databaseId,e.path)}function Ac(t,e){const n=vw(e);if(n.get(1)!==t.databaseId.projectId)throw new q(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(ww(n))}function Ew(t,e){return yf(t.databaseId,e)}function h1(t){const e=vw(t);return e.length===4?ge.emptyPath():ww(e)}function Wh(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ww(t){return le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Xg(t,e,n){return{name:$h(t,e),fields:n.value.mapValue.fields}}function d1(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(le(f===void 0||typeof f=="string"),He.fromBase64String(f||"")):(le(f===void 0||f instanceof Buffer||f instanceof Uint8Array),He.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?L.UNKNOWN:mw(h.code);return new q(f,h.message||"")}(o);n=new yw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ac(t,r.document.name),s=en(r.document.updateTime),o=r.document.createTime?en(r.document.createTime):X.min(),l=new Ct({mapValue:{fields:r.document.fields}}),u=et.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Xa(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ac(t,r.document),s=r.readTime?en(r.readTime):X.min(),o=et.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Xa([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ac(t,r.document),s=r.removedTargetIds||[];n=new Xa([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new t1(i,s),l=r.targetId;n=new gw(l,o)}}return n}function f1(t,e){let n;if(e instanceof Bo)n={update:Xg(t,e.key,e.value)};else if(e instanceof pf)n={delete:$h(t,e.key)};else if(e instanceof Jr)n={update:Xg(t,e.key,e.data),updateMask:T1(e.fieldMask)};else{if(!(e instanceof Jk))return Q();n={verify:$h(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Vl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof So)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ro)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ll)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:c1(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(t,e.precondition)),n}function p1(t,e){return t&&t.length>0?(le(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?en(i.updateTime):en(s);return o.isEqual(X.min())&&(o=en(s)),new Qk(o,i.transformResults||[])}(n,e))):[]}function m1(t,e){return{documents:[Ew(t,e.path)]}}function g1(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Ew(t,i);const s=function(h){if(h.length!==0)return Iw(nn.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:ai(g.field),direction:v1(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Bh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function y1(t){let e=h1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){le(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const g=Tw(p);return g instanceof nn&&ZE(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(P){return new Ol(li(P.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,hu(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,A=p.values||[];return new Dl(A,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,A=p.values||[];return new Dl(A,g)}(n.endAt)),Lk(e,i,o,s,l,"F",u,h)}function _1(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Tw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=li(n.unaryFilter.field);return xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=li(n.unaryFilter.field);return xe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=li(n.unaryFilter.field);return xe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=li(n.unaryFilter.field);return xe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return xe.create(li(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return nn.create(n.compositeFilter.filters.map(r=>Tw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function v1(t){return o1[t]}function E1(t){return a1[t]}function w1(t){return l1[t]}function ai(t){return{fieldPath:t.canonicalString()}}function li(t){return Be.fromServerFormat(t.fieldPath)}function Iw(t){return t instanceof xe?function(n){if(n.op==="=="){if(bg(n.value))return{unaryFilter:{field:ai(n.field),op:"IS_NAN"}};if(Mg(n.value))return{unaryFilter:{field:ai(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(bg(n.value))return{unaryFilter:{field:ai(n.field),op:"IS_NOT_NAN"}};if(Mg(n.value))return{unaryFilter:{field:ai(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ai(n.field),op:E1(n.op),value:n.value}}}(t):t instanceof nn?function(n){const r=n.getFilters().map(i=>Iw(i));return r.length===1?r[0]:{compositeFilter:{op:w1(n.op),filters:r}}}(t):Q()}function T1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Sw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n,r,i,s=X.min(),o=X.min(),l=He.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Yn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Yn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e){this.ct=e}}function S1(t){const e=y1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?jh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(){this.un=new A1}addToCollectionParentIndex(e,n){return this.un.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(hr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(hr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class A1{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new $e(ge.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new $e(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Hi(0)}static kn(){return new Hi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(){this.changes=new es(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Qs(r.mutation,i,bt.empty(),Oe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=Nr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Os();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Nr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Nn();const o=Gs(),l=function(){return Gs()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Jr)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Qs(f.mutation,h,f.mutation.getFieldMask(),Oe.now())):o.set(h.key,bt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return l.set(h,new P1(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Gs();let i=new we((o,l)=>o-l),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||bt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(i.get(l.batchId)||te()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=aw();f.forEach(g=>{if(!s.has(g)){const A=fw(n.get(g),r.get(g));A!==null&&p.set(g,A),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Mk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Nr());let l=-1,u=s;return o.next(h=>M.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,te())).next(f=>({batchId:l,changes:ow(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=Os();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Os();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const h=function(p,g){return new du(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,et.newInvalidDocument(f)))});let l=Os();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Qs(f.mutation,h,bt.empty(),Oe.now()),pu(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return M.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:en(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:S1(i.bundledQuery),readTime:en(i.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(){this.overlays=new we(K.comparator),this.Ir=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Nr();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Nr(),s=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new we((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Nr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Nr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return M.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new e1(n,r));let s=this.Ir.get(n);s===void 0&&(s=te(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(){this.sessionToken=He.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(){this.Tr=new $e(Le.Er),this.dr=new $e(Le.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Le(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Le(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new ge([])),r=new Le(n,e),i=new Le(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new ge([])),r=new Le(n,e),i=new Le(n,e+1);let s=te();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Le(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Le{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||oe(e.wr,n.wr)}static Ar(e,n){return oe(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new $e(Le.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Zk(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Le(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Le(n,0),i=new Le(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new $e(oe);return n.forEach(i=>{const s=new Le(i,0),o=new Le(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;K.isDocumentKey(s)||(s=s.child(""));const o=new Le(new K(s),0);let l=new $e(oe);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),M.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){le(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(n.mutations,i=>{const s=new Le(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Le(n,0),i=this.br.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e){this.Mr=e,this.docs=function(){return new we(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():et.newInvalidDocument(n))}getEntries(e,n){let r=Nn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():et.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Nn();const o=n.path,l=new K(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||gk(mk(f),r)<=0||(i.has(f.key)||pu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q()}Or(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new L1(this)}getSize(e){return M.resolve(this.size)}}class L1 extends C1{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(e){this.persistence=e,this.Nr=new es(n=>cf(n),hf),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Lr=0,this.Br=new _f,this.targetCount=0,this.kr=Hi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),M.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Hi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Kn(n),M.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e,n){this.qr={},this.overlays={},this.Qr=new of(0),this.Kr=!1,this.Kr=!0,this.$r=new D1,this.referenceDelegate=e(this),this.Ur=new M1(this),this.indexManager=new R1,this.remoteDocumentCache=function(i){return new V1(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new I1(n),this.Gr=new N1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new x1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new O1(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new U1(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class U1 extends _k{constructor(e){super(),this.currentSequenceNumber=e}}class vf{constructor(e){this.persistence=e,this.Jr=new _f,this.Yr=null}static Zr(e){return new vf(e)}get Xr(){if(this.Yr)return this.Yr;throw Q()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),M.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const i=K.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return M.or([()=>M.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ef(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return NR()?8:vk(nt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new F1;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ss()<=ne.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",oi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(Ss()<=ne.DEBUG&&W("QueryEngine","Query:",oi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ss()<=ne.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",oi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zt(n))):M.resolve())}Yi(e,n){if(Bg(n))return M.resolve(null);let r=Zt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=jh(n,null,"F"),r=Zt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,jh(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return Bg(n)||i.isEqual(X.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?M.resolve(null):(Ss()<=ne.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),oi(n)),this.rs(e,o,n,pk(i,-1)).next(l=>l))})}ts(e,n){let r=new $e(iw(e));return n.forEach((i,s)=>{pu(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Ss()<=ne.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",oi(n)),this.Ji.getDocumentsMatchingQuery(e,n,hr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new we(oe),this._s=new es(s=>cf(s),hf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new k1(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function z1(t,e,n,r){return new B1(t,e,n,r)}async function Rw(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=te();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function $1(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,g=p.keys();let A=M.resolve();return g.forEach(P=>{A=A.next(()=>f.getEntry(u,P)).next(D=>{const N=h.docVersions.get(P);le(N!==null),D.version.compareTo(N)<0&&(p.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=te();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Aw(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function W1(t,e){const n=J(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,p)=>{const g=i.get(p);if(!g)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,p)));let A=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?A=A.withResumeToken(He.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(p,A),function(D,N,w){return D.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(g,A,f)&&l.push(n.Ur.updateTargetData(s,A))});let u=Nn(),h=te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(H1(s,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(X.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function H1(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Nn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function q1(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function K1(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Yn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Hh(t,e,n){const r=J(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!jo(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Jg(t,e,n){const r=J(t);let i=X.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=J(u),g=p._s.get(f);return g!==void 0?M.resolve(p.os.get(g)):p.Ur.getTargetData(h,f)}(r,o,Zt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:te())).next(l=>(G1(r,Uk(e),l),{documents:l,Ts:s})))}function G1(t,e,n){let r=t.us.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Zg{constructor(){this.activeTargetIds=Wk()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Q1{constructor(){this.so=new Zg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Zg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Na=null;function Cc(){return Na===null?Na=function(){return 268435456+Math.round(2147483648*Math.random())}():Na++,"0x"+Na.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="WebChannelConnection";class Z1 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Cc(),u=this.xo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(f=>(W("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Bi("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ji}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=X1[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Cc();return new Promise((o,l)=>{const u=new BE;u.setWithCredentials(!0),u.listenOnce(zE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ga.NO_ERROR:const f=u.getResponseJson();W(Xe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Ga.TIMEOUT:W(Xe,`RPC '${e}' ${s} timed out`),l(new q(L.DEADLINE_EXCEEDED,"Request time out"));break;case Ga.HTTP_ERROR:const p=u.getStatus();if(W(Xe,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const A=g==null?void 0:g.error;if(A&&A.status&&A.message){const P=function(N){const w=N.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(w)>=0?w:L.UNKNOWN}(A.status);l(new q(P,A.message))}else l(new q(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new q(L.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{W(Xe,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);W(Xe,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=Cc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=HE(),l=WE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");W(Xe,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);let g=!1,A=!1;const P=new J1({Io:N=>{A?W(Xe,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(g||(W(Xe,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),W(Xe,`RPC '${e}' stream ${i} sending:`,N),p.send(N))},To:()=>p.close()}),D=(N,w,_)=>{N.listen(w,R=>{try{_(R)}catch(O){setTimeout(()=>{throw O},0)}})};return D(p,Ds.EventType.OPEN,()=>{A||(W(Xe,`RPC '${e}' stream ${i} transport opened.`),P.yo())}),D(p,Ds.EventType.CLOSE,()=>{A||(A=!0,W(Xe,`RPC '${e}' stream ${i} transport closed`),P.So())}),D(p,Ds.EventType.ERROR,N=>{A||(A=!0,Bi(Xe,`RPC '${e}' stream ${i} transport errored:`,N),P.So(new q(L.UNAVAILABLE,"The operation could not be completed")))}),D(p,Ds.EventType.MESSAGE,N=>{var w;if(!A){const _=N.data[0];le(!!_);const R=_,O=R.error||((w=R[0])===null||w===void 0?void 0:w.error);if(O){W(Xe,`RPC '${e}' stream ${i} received error:`,O);const U=O.status;let j=function(E){const T=Ce[E];if(T!==void 0)return mw(T)}(U),v=O.message;j===void 0&&(j=L.INTERNAL,v="Unknown error status: "+U+" with message "+O.message),A=!0,P.So(new q(j,v)),p.close()}else W(Xe,`RPC '${e}' stream ${i} received:`,_),P.bo(_)}}),D(l,$E.STAT_EVENT,N=>{N.stat===Lh.PROXY?W(Xe,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===Lh.NOPROXY&&W(Xe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function Pc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(t){return new u1(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Cw(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(kn(n.toString()),kn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new q(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eN extends Pw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=d1(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?en(o.readTime):X.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Wh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Fh(u)?{documents:m1(s,u)}:{query:g1(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=_w(s,o.resumeToken);const h=Bh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(X.min())>0){l.readTime=Ml(s,o.snapshotVersion.toTimestamp());const h=Bh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=_1(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Wh(this.serializer),n.removeTarget=e,this.a_(n)}}class tN extends Pw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return le(!!e.streamToken),this.lastStreamToken=e.streamToken,le(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=p1(e.writeResults,e.commitTime),r=en(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Wh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>f1(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new q(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,zh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(L.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,zh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class rN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(kn(n),this.D_=!1):W("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{Zr(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=J(u);h.L_.add(4),await $o(h),h.q_.set("Unknown"),h.L_.delete(4),await vu(h)}(this))})}),this.q_=new rN(r,i)}}async function vu(t){if(Zr(t))for(const e of t.B_)await e(!0)}async function $o(t){for(const e of t.B_)await e(!1)}function kw(t,e){const n=J(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Sf(n)?If(n):ts(n).r_()&&Tf(n,e))}function wf(t,e){const n=J(t),r=ts(n);n.N_.delete(e),r.r_()&&Nw(n,e),n.N_.size===0&&(r.r_()?r.o_():Zr(n)&&n.q_.set("Unknown"))}function Tf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ts(t).A_(e)}function Nw(t,e){t.Q_.xe(e),ts(t).R_(e)}function If(t){t.Q_=new s1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ts(t).start(),t.q_.v_()}function Sf(t){return Zr(t)&&!ts(t).n_()&&t.N_.size>0}function Zr(t){return J(t).L_.size===0}function xw(t){t.Q_=void 0}async function sN(t){t.q_.set("Online")}async function oN(t){t.N_.forEach((e,n)=>{Tf(t,e)})}async function aN(t,e){xw(t),Sf(t)?(t.q_.M_(e),If(t)):t.q_.set("Unknown")}async function lN(t,e,n){if(t.q_.set("Online"),e instanceof yw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await bl(t,r)}else if(e instanceof Xa?t.Q_.Ke(e):e instanceof gw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(X.min()))try{const r=await Aw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(He.EMPTY_BYTE_STRING,f.snapshotVersion)),Nw(s,u);const p=new Yn(f.target,u,h,f.sequenceNumber);Tf(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await bl(t,r)}}async function bl(t,e,n){if(!jo(e))throw e;t.L_.add(1),await $o(t),t.q_.set("Offline"),n||(n=()=>Aw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await vu(t)})}function Dw(t,e){return e().catch(n=>bl(t,n,e))}async function Eu(t){const e=J(t),n=fr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;uN(e);)try{const i=await q1(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,cN(e,i)}catch(i){await bl(e,i)}Ow(e)&&Vw(e)}function uN(t){return Zr(t)&&t.O_.length<10}function cN(t,e){t.O_.push(e);const n=fr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Ow(t){return Zr(t)&&!fr(t).n_()&&t.O_.length>0}function Vw(t){fr(t).start()}async function hN(t){fr(t).p_()}async function dN(t){const e=fr(t);for(const n of t.O_)e.m_(n.mutations)}async function fN(t,e,n){const r=t.O_.shift(),i=mf.from(r,e,n);await Dw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Eu(t)}async function pN(t,e){e&&fr(t).V_&&await async function(r,i){if(function(o){return n1(o)&&o!==L.ABORTED}(i.code)){const s=r.O_.shift();fr(r).s_(),await Dw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Eu(r)}}(t,e),Ow(t)&&Vw(t)}async function ty(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=Zr(n);n.L_.add(3),await $o(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await vu(n)}async function mN(t,e){const n=J(t);e?(n.L_.delete(2),await vu(n)):e||(n.L_.add(2),await $o(n),n.q_.set("Unknown"))}function ts(t){return t.K_||(t.K_=function(n,r,i){const s=J(n);return s.w_(),new eN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:sN.bind(null,t),Ro:oN.bind(null,t),mo:aN.bind(null,t),d_:lN.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Sf(t)?If(t):t.q_.set("Unknown")):(await t.K_.stop(),xw(t))})),t.K_}function fr(t){return t.U_||(t.U_=function(n,r,i){const s=J(n);return s.w_(),new tN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:hN.bind(null,t),mo:pN.bind(null,t),f_:dN.bind(null,t),g_:fN.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Eu(t)):(await t.U_.stop(),t.O_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Rf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Af(t,e){if(kn("AsyncQueue",`${e}: ${t}`),jo(t))return new q(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Os(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new Di(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Di)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Di;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(){this.W_=new we(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Q():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class qi{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new qi(e,n,Di.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class yN{constructor(){this.queries=ry(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=J(n),s=i.queries;i.queries=ry(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new q(L.ABORTED,"Firestore shutting down"))}}function ry(){return new es(t=>rw(t),fu)}async function Lw(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new gN,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Af(o,`Initialization of query '${oi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Cf(n)}async function Mw(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function _N(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Cf(n)}function vN(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Cf(t){t.Y_.forEach(e=>{e.next()})}var qh,iy;(iy=qh||(qh={})).ea="default",iy.Cache="cache";class bw{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new qi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=qi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==qh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e){this.key=e}}class Fw{constructor(e){this.key=e}}class EN{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=te(),this.mutatedKeys=te(),this.Aa=iw(e),this.Ra=new Di(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new ny,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const g=i.get(f),A=pu(this.query,p)?p:null,P=!!g&&this.mutatedKeys.has(g.key),D=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let N=!1;g&&A?g.data.isEqual(A.data)?P!==D&&(r.track({type:3,doc:A}),N=!0):this.ga(g,A)||(r.track({type:2,doc:A}),N=!0,(u&&this.Aa(A,u)>0||h&&this.Aa(A,h)<0)&&(l=!0)):!g&&A?(r.track({type:0,doc:A}),N=!0):g&&!A&&(r.track({type:1,doc:g}),N=!0,(u||h)&&(l=!0)),N&&(A?(o=o.add(A),s=D?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(A,P){const D=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return D(A)-D(P)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new qi(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new ny,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=te(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Fw(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Uw(r))}),n}ba(e){this.Ta=e.Ts,this.da=te();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return qi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class wN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class TN{constructor(e){this.key=e,this.va=!1}}class IN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new es(l=>rw(l),fu),this.Ma=new Map,this.xa=new Set,this.Oa=new we(K.comparator),this.Na=new Map,this.La=new _f,this.Ba={},this.ka=new Map,this.qa=Hi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function SN(t,e,n=!0){const r=Hw(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await jw(r,e,n,!0),i}async function RN(t,e){const n=Hw(t);await jw(n,e,!0,!1)}async function jw(t,e,n,r){const i=await K1(t.localStore,Zt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await AN(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&kw(t.remoteStore,i),l}async function AN(t,e,n,r,i){t.Ka=(p,g,A)=>async function(D,N,w,_){let R=N.view.ma(w);R.ns&&(R=await Jg(D.localStore,N.query,!1).then(({documents:v})=>N.view.ma(v,R)));const O=_&&_.targetChanges.get(N.targetId),U=_&&_.targetMismatches.get(N.targetId)!=null,j=N.view.applyChanges(R,D.isPrimaryClient,O,U);return oy(D,N.targetId,j.wa),j.snapshot}(t,p,g,A);const s=await Jg(t.localStore,e,!0),o=new EN(e,s.Ts),l=o.ma(s.documents),u=zo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);oy(t,n,h.wa);const f=new wN(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function CN(t,e,n){const r=J(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!fu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Hh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&wf(r.remoteStore,i.targetId),Kh(r,i.targetId)}).catch(Fo)):(Kh(r,i.targetId),await Hh(r.localStore,i.targetId,!0))}async function PN(t,e){const n=J(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),wf(n.remoteStore,r.targetId))}async function kN(t,e,n){const r=MN(t);try{const i=await function(o,l){const u=J(o),h=Oe.now(),f=l.reduce((A,P)=>A.add(P.key),te());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let P=Nn(),D=te();return u.cs.getEntries(A,f).next(N=>{P=N,P.forEach((w,_)=>{_.isValidDocument()||(D=D.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,P)).next(N=>{p=N;const w=[];for(const _ of l){const R=Xk(_,p.get(_.key).overlayedDocument);R!=null&&w.push(new Jr(_.key,R,YE(R.value.mapValue),Bt.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,w,l)}).next(N=>{g=N;const w=N.applyToLocalDocumentSet(p,D);return u.documentOverlayCache.saveOverlays(A,N.batchId,w)})}).then(()=>({batchId:g.batchId,changes:ow(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new we(oe)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await Wo(r,i.changes),await Eu(r.remoteStore)}catch(i){const s=Af(i,"Failed to persist write");n.reject(s)}}async function Bw(t,e){const n=J(t);try{const r=await W1(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?le(o.va):i.removedDocuments.size>0&&(le(o.va),o.va=!1))}),await Wo(n,r,e)}catch(r){await Fo(r)}}function sy(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const g of p.j_)g.Z_(l)&&(h=!0)}),h&&Cf(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function NN(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new we(K.comparator);o=o.insert(s,et.newNoDocument(s,X.min()));const l=te().add(s),u=new yu(X.min(),new Map,new we(oe),o,l);await Bw(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Pf(r)}else await Hh(r.localStore,e,!1).then(()=>Kh(r,e,n)).catch(Fo)}async function xN(t,e){const n=J(t),r=e.batch.batchId;try{const i=await $1(n.localStore,e);$w(n,r,null),zw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Wo(n,i)}catch(i){await Fo(i)}}async function DN(t,e,n){const r=J(t);try{const i=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(le(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);$w(r,e,n),zw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Wo(r,i)}catch(i){await Fo(i)}}function zw(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function $w(t,e,n){const r=J(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Kh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Ww(t,r)})}function Ww(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(wf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Pf(t))}function oy(t,e,n){for(const r of n)r instanceof Uw?(t.La.addReference(r.key,e),ON(t,r)):r instanceof Fw?(W("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Ww(t,r.key)):Q()}function ON(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(W("SyncEngine","New document in limbo: "+n),t.xa.add(r),Pf(t))}function Pf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(ge.fromString(e)),r=t.qa.next();t.Na.set(r,new TN(n)),t.Oa=t.Oa.insert(n,r),kw(t.remoteStore,new Yn(Zt(df(n.path)),r,"TargetPurposeLimboResolution",of.oe))}}async function Wo(t,e,n){const r=J(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=Ef.Wi(u.targetId,h);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const f=J(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,g=>M.forEach(g.$i,A=>f.persistence.referenceDelegate.addReference(p,g.targetId,A)).next(()=>M.forEach(g.Ui,A=>f.persistence.referenceDelegate.removeReference(p,g.targetId,A)))))}catch(p){if(!jo(p))throw p;W("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const A=f.os.get(g),P=A.snapshotVersion,D=A.withLastLimboFreeSnapshotVersion(P);f.os=f.os.insert(g,D)}}}(r.localStore,s))}async function VN(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await Rw(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new q(L.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Wo(n,r.hs)}}function LN(t,e){const n=J(t),r=n.Na.get(e);if(r&&r.va)return te().add(r.key);{let i=te();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function Hw(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Bw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=LN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=NN.bind(null,e),e.Ca.d_=_N.bind(null,e.eventManager),e.Ca.$a=vN.bind(null,e.eventManager),e}function MN(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=DN.bind(null,e),e}class Ul{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_u(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return z1(this.persistence,new j1,e.initialUser,this.serializer)}Ga(e){return new b1(vf.Zr,this.serializer)}Wa(e){return new Q1}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ul.provider={build:()=>new Ul};class Gh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>sy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=VN.bind(null,this.syncEngine),await mN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new yN}()}createDatastore(e){const n=_u(e.databaseInfo.databaseId),r=function(s){return new Z1(s)}(e.databaseInfo);return function(s,o,l,u){return new nN(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new iN(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>sy(this.syncEngine,n,0),function(){return ey.D()?new ey:new Y1}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const p=new IN(i,s,o,l,u,h);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=J(i);W("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await $o(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Gh.provider={build:()=>new Gh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):kn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Je.UNAUTHENTICATED,this.clientId=KE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Af(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function kc(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Rw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ay(t,e){t.asyncQueue.verifyOperationInProgress();const n=await UN(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ty(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>ty(e.remoteStore,i)),t._onlineComponents=e}async function UN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await kc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Bi("Error using user provided cache. Falling back to memory cache: "+n),await kc(t,new Ul)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await kc(t,new Ul);return t._offlineComponents}async function Kw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await ay(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await ay(t,new Gh))),t._onlineComponents}function FN(t){return Kw(t).then(e=>e.syncEngine)}async function Gw(t){const e=await Kw(t),n=e.eventManager;return n.onListen=SN.bind(null,e.syncEngine),n.onUnlisten=CN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=RN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=PN.bind(null,e.syncEngine),n}function jN(t,e,n={}){const r=new Tn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new qw({next:g=>{f.Za(),o.enqueueAndForget(()=>Mw(s,p));const A=g.docs.has(l);!A&&g.fromCache?h.reject(new q(L.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&g.fromCache&&u&&u.source==="server"?h.reject(new q(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new bw(df(l.path),f,{includeMetadataChanges:!0,_a:!0});return Lw(s,p)}(await Gw(t),t.asyncQueue,e,n,r)),r.promise}function BN(t,e,n={}){const r=new Tn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new qw({next:g=>{f.Za(),o.enqueueAndForget(()=>Mw(s,p)),g.fromCache&&u.source==="server"?h.reject(new q(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new bw(l,f,{includeMetadataChanges:!0,_a:!0});return Lw(s,p)}(await Gw(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(t,e,n){if(!n)throw new q(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function zN(t,e,n,r){if(e===!0&&r===!0)throw new q(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function uy(t){if(!K.isDocumentKey(t))throw new q(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cy(t){if(K.isDocumentKey(t))throw new q(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function kf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function xn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=kf(t);throw new q(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}zN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Qw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sk;switch(r.type){case"firstParty":return new uk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ly.get(n);r&&(W("ComponentProvider","Removing Datastore"),ly.delete(n),r.terminate())}(this),Promise.resolve()}}function $N(t,e,n,r={}){var i;const s=(t=xn(t,wu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Bi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Je.MOCK_USER;else{l=eE(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new q(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Je(h)}t._authCredentials=new ok(new qE(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Tu(this.firestore,e,this._query)}}class Et{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ar(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Et(this.firestore,e,this._key)}}class ar extends Tu{constructor(e,n,r){super(e,n,df(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Et(this.firestore,null,new K(e))}withConverter(e){return new ar(this.firestore,e,this._path)}}function qn(t,e,...n){if(t=lt(t),Yw("collection","path",e),t instanceof wu){const r=ge.fromString(e,...n);return cy(r),new ar(t,null,r)}{if(!(t instanceof Et||t instanceof ar))throw new q(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return cy(r),new ar(t.firestore,null,r)}}function Ys(t,e,...n){if(t=lt(t),arguments.length===1&&(e=KE.newId()),Yw("doc","path",e),t instanceof wu){const r=ge.fromString(e,...n);return uy(r),new Et(t,null,new K(r))}{if(!(t instanceof Et||t instanceof ar))throw new q(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return uy(r),new Et(t.firestore,t instanceof ar?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Cw(this,"async_queue_retry"),this.Vu=()=>{const r=Pc();r&&W("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Pc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Pc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Tn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!jo(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw kn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Rf.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Q()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class ns extends wu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new dy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new dy(e),this._firestoreClient=void 0,await e}}}function WN(t,e){const n=typeof t=="object"?t:Gd(),r=typeof t=="string"?t:"(default)",i=au(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Xv("firestore");s&&$N(i,...s)}return i}function Nf(t){if(t._terminated)throw new q(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||HN(t),t._firestoreClient}function HN(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new Tk(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Qw(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new bN(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ki(He.fromBase64String(e))}catch(n){throw new q(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ki(He.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN=/^__.*__$/;class KN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Jr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Bo(e,this.data,n,this.fieldTransforms)}}function Jw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Vf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Vf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Fl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Jw(this.Cu)&&qN.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class GN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||_u(e)}Qu(e,n,r,i=!1){return new Vf({Cu:e,methodName:n,qu:r,path:Be.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zw(t){const e=t._freezeSettings(),n=_u(t._databaseId);return new GN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function e0(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);i0("Data must be an object, but it was:",o,r);const l=n0(r,o);let u,h;if(s.merge)u=new bt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const g=QN(e,p,n);if(!o.contains(g))throw new q(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);XN(f,g)||f.push(g)}u=new bt(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new KN(new Ct(l),u,h)}function t0(t,e){if(r0(t=lt(t)))return i0("Unsupported field value:",e,t),n0(t,e);if(t instanceof Xw)return function(r,i){if(!Jw(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=t0(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=lt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Hk(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Oe.fromDate(r);return{timestampValue:Ml(i.serializer,s)}}if(r instanceof Oe){const s=new Oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ml(i.serializer,s)}}if(r instanceof Df)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ki)return{bytesValue:_w(i.serializer,r._byteString)};if(r instanceof Et){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:yf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Of)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return ff(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${kf(r)}`)}(t,e)}function n0(t,e){const n={};return GE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zi(t,(r,i)=>{const s=t0(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function r0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Oe||t instanceof Df||t instanceof Ki||t instanceof Et||t instanceof Xw||t instanceof Of)}function i0(t,e,n){if(!r0(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=kf(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function QN(t,e,n){if((e=lt(e))instanceof xf)return e._internalPath;if(typeof e=="string")return s0(t,e);throw Fl("Field path arguments must be of type string or ",t,!1,void 0,n)}const YN=new RegExp("[~\\*/\\[\\]]");function s0(t,e,n){if(e.search(YN)>=0)throw Fl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xf(...e.split("."))._internalPath}catch{throw Fl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(L.INVALID_ARGUMENT,l+t+u)}function XN(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Et(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new JN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(a0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class JN extends o0{data(){return super.data()}}function a0(t,e){return typeof e=="string"?s0(t,e):e instanceof xf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ex{convertValue(e,n="none"){switch(Hr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Wr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Zi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Re(o.doubleValue));return new Of(s)}convertGeoPoint(e){return new Df(Re(e.latitude),Re(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=lf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(wo(e));default:return null}}convertTimestamp(e){const n=dr(e);return new Oe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ge.fromString(e);le(Sw(r));const i=new To(r.get(1),r.get(3)),s=new K(r.popFirst(5));return i.isEqual(n)||kn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class u0 extends o0{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ja(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(a0("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ja extends u0{data(e={}){return super.data(e)}}class tx{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ls(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ja(this._firestore,this._userDataWriter,r.key,r,new Ls(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Ja(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ls(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Ja(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ls(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:nx(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function nx(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy(t){t=xn(t,Et);const e=xn(t.firestore,ns);return jN(Nf(e),t._key).then(n=>sx(e,t,n))}class c0 extends ex{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ki(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Et(this.firestore,null,n)}}function Oi(t){t=xn(t,Tu);const e=xn(t.firestore,ns),n=Nf(e),r=new c0(e);return ZN(t._query),BN(n,t._query).then(i=>new tx(e,r,t,i))}function rx(t,e,n){t=xn(t,Et);const r=xn(t.firestore,ns),i=l0(t.converter,e);return Lf(r,[e0(Zw(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Bt.none())])}function ix(t){return Lf(xn(t.firestore,ns),[new pf(t._key,Bt.none())])}function py(t,e){const n=xn(t.firestore,ns),r=Ys(t),i=l0(t.converter,e);return Lf(n,[e0(Zw(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Bt.exists(!1))]).then(()=>r)}function Lf(t,e){return function(r,i){const s=new Tn;return r.asyncQueue.enqueueAndForget(async()=>kN(await FN(r),i,s)),s.promise}(Nf(t),e)}function sx(t,e,n){const r=n.docs.get(e._key),i=new c0(t);return new u0(t,i,e._key,r,new Ls(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Ji=i})(Yr),jr(new cr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new ns(new ak(r.getProvider("auth-internal")),new hk(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new q(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new To(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Yt(xg,"4.7.3",e),Yt(xg,"4.7.3","esm2017")})();var ox="firebase",ax="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt(ox,ax,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0="firebasestorage.googleapis.com",lx="storageBucket",ux=2*60*1e3,cx=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends sn{constructor(e,n,r=0){super(Nc(e),`Firebase Storage: ${n} (${Nc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,on.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Nc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var rn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(rn||(rn={}));function Nc(t){return"storage/"+t}function hx(){const t="An unknown error occurred, please check the error payload for server response.";return new on(rn.UNKNOWN,t)}function dx(){return new on(rn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function fx(){return new on(rn.CANCELED,"User canceled the upload/download.")}function px(t){return new on(rn.INVALID_URL,"Invalid URL '"+t+"'.")}function mx(t){return new on(rn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function my(t){return new on(rn.INVALID_ARGUMENT,t)}function d0(){return new on(rn.APP_DELETED,"The Firebase app was deleted.")}function gx(t){return new on(rn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ut.makeFromUrl(e,n)}catch{return new Ut(e,"")}if(r.path==="")return r;throw mx(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function h(O){O.path_=decodeURIComponent(O.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",A=new RegExp(`^https?://${p}/${f}/b/${i}/o${g}`,"i"),P={bucket:1,path:3},D=n===h0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",w=new RegExp(`^https?://${D}/${i}/${N}`,"i"),R=[{regex:l,indices:u,postModify:s},{regex:A,indices:P,postModify:h},{regex:w,indices:{bucket:1,path:2},postModify:h}];for(let O=0;O<R.length;O++){const U=R[O],j=U.regex.exec(e);if(j){const v=j[U.indices.bucket];let y=j[U.indices.path];y||(y=""),r=new Ut(v,y),U.postModify(r);break}}if(r==null)throw px(e);return r}}class yx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _x(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let h=!1;function f(...N){h||(h=!0,e.apply(null,N))}function p(N){i=setTimeout(()=>{i=null,t(A,u())},N)}function g(){s&&clearTimeout(s)}function A(N,...w){if(h){g();return}if(N){g(),f.call(null,N,...w);return}if(u()||o){g(),f.call(null,N,...w);return}r<64&&(r*=2);let R;l===1?(l=2,R=0):R=(r+Math.random())*1e3,p(R)}let P=!1;function D(N){P||(P=!0,g(),!h&&(i!==null?(N||(l=2),clearTimeout(i),p(0)):N||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,D(!0)},n),D}function vx(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ex(t){return t!==void 0}function gy(t,e,n,r){if(r<e)throw my(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw my(`Invalid value for '${t}'. Expected ${n} or less.`)}function wx(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var jl;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(jl||(jl={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tx(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(e,n,r,i,s,o,l,u,h,f,p,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((A,P)=>{this.resolve_=A,this.reject_=P,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new xa(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===jl.NO_ERROR,u=s.getStatus();if(!l||Tx(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===jl.ABORT;r(!1,new xa(!1,null,f));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new xa(h,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());Ex(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=hx();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?d0():fx();o(u)}else{const u=dx();o(u)}};this.canceled_?n(!1,new xa(!1,null,!0)):this.backoffId_=_x(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&vx(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class xa{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Sx(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Rx(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Ax(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Cx(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Px(t,e,n,r,i,s,o=!0){const l=wx(t.urlParams),u=t.url+l,h=Object.assign({},t.headers);return Ax(h,e),Sx(h,n),Rx(h,s),Cx(h,r),new Ix(u,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kx(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Nx(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n){this._service=e,n instanceof Ut?this._location=n:this._location=Ut.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Bl(e,n)}get root(){const e=new Ut(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Nx(this._location.path)}get storage(){return this._service}get parent(){const e=kx(this._location.path);if(e===null)return null;const n=new Ut(this._location.bucket,e);return new Bl(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw gx(e)}}function yy(t,e){const n=e==null?void 0:e[lx];return n==null?null:Ut.makeFromBucketSpec(n,t)}function xx(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:eE(i,t.app.options.projectId))}class Dx{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=h0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ux,this._maxUploadRetryTime=cx,this._requests=new Set,i!=null?this._bucket=Ut.makeFromBucketSpec(i,this._host):this._bucket=yy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ut.makeFromBucketSpec(this._url,e):this._bucket=yy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){gy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){gy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Bl(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new yx(d0());{const o=Px(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const _y="@firebase/storage",vy="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0="storage";function Ox(t=Gd(),e){t=lt(t);const r=au(t,f0).getImmediate({identifier:e}),i=Xv("storage");return i&&Vx(r,...i),r}function Vx(t,e,n,r={}){xx(t,e,n,r)}function Lx(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Dx(n,r,i,e,Yr)}function Mx(){jr(new cr(f0,Lx,"PUBLIC").setMultipleInstances(!0)),Yt(_y,vy,""),Yt(_y,vy,"esm2017")}Mx();const bx={apiKey:"AIzaSyBhyT_RCqsPrIbeobE1-0XbOLRsKnkWafs",authDomain:"modalab-classroom.firebaseapp.com",projectId:"modalab-classroom",storageBucket:"modalab-classroom.firebasestorage.app",messagingSenderId:"544221051450",appId:"1:544221051450:web:7d5a0e930370fdd33b5303"},Mf=rE(bx),Rs=rk(Mf),At=WN(Mf);Ox(Mf);const p0=b.createContext();function m0(){return b.useContext(p0)}function Ux({children:t}){const[e,n]=b.useState(null),[r,i]=b.useState(null),[s,o]=b.useState(!0);function l(p,g){return console.log("🔐 Intentando login con:",p),$C(Rs,p,g)}async function u(p,g,A,P="student"){console.log("📝 Registrando nuevo usuario:",p);try{const N=(await zC(Rs,p,g)).user;if(console.log("✅ Usuario Auth creado, UID:",N.uid),await rx(Ys(At,"users",N.uid),{email:p,name:A,role:P,activo:!0,createdAt:new Date().toISOString()}),console.log("✅ Documento creado en Firestore para UID:",N.uid),!(await fy(Ys(At,"users",N.uid))).exists())throw new Error("No se pudo crear el documento en Firestore");return console.log("✅ Usuario registrado y documento verificado en Firestore"),N}catch(D){throw console.error("❌ Error al registrar usuario:",D),D}}function h(){return Eg(Rs)}b.useEffect(()=>(console.log("🔄 Configurando listener de autenticación..."),qC(Rs,async g=>{if(console.log("👤 onAuthStateChanged ejecutado. Usuario:",g?g.email:"null"),g){console.log("✅ Usuario autenticado - UID:",g.uid),n(g);try{console.log("🔍 Buscando documento en Firestore para UID:",g.uid);const A=await fy(Ys(At,"users",g.uid));if(A.exists()){const P=A.data();if(console.log("✅ Documento encontrado en Firestore:",P),P.activo===!1){console.warn("⚠️ Usuario inactivo, cerrando sesión"),await Eg(Rs),n(null),i(null),o(!1);return}i(P)}else console.warn("⚠️ No se encontró documento en Firestore, usando valores por defecto"),i({role:"student",email:g.email,name:"Usuario",activo:!0})}catch(A){console.error("❌ Error al obtener documento de Firestore:",A),i({role:"student",email:g.email,name:"Usuario",activo:!0})}o(!1)}else console.log("⚠️ No hay usuario autenticado"),n(null),i(null),o(!1)})),[]);const f={currentUser:e,userData:r,userRole:r==null?void 0:r.role,login:l,register:u,logout:h,loading:s};return C.jsx(p0.Provider,{value:f,children:!s&&t})}function Ey({children:t,requiredRole:e}){const{currentUser:n,userRole:r,loading:i}=m0();return i?C.jsxs("div",{className:"loading",children:[C.jsx("div",{className:"spinner"}),C.jsx("p",{children:"Cargando..."})]}):n?e&&r!==e?r==="admin"?C.jsx(wi,{to:"/admin",replace:!0}):r==="student"?C.jsx(wi,{to:"/student",replace:!0}):C.jsx(wi,{to:"/login",replace:!0}):t:C.jsx(wi,{to:"/login",replace:!0})}function Fx(){const[t,e]=b.useState(!0),[n,r]=b.useState(""),[i,s]=b.useState(""),[o,l]=b.useState(""),[u,h]=b.useState("student"),[f,p]=b.useState(""),[g,A]=b.useState(!1),{login:P,register:D}=m0();async function N(w){if(w.preventDefault(),!n||!i){p("Por favor completa todos los campos");return}if(!t&&!o){p("Por favor ingresa tu nombre");return}try{p(""),A(!0),t?await P(n,i):await D(n,i,o,u)}catch(_){p(t?"Error al iniciar sesión. Verifica tus credenciales.":"Error al crear cuenta. El email ya puede estar en uso."),console.error("Auth error:",_)}finally{A(!1)}}return C.jsx("div",{className:"login-container",children:C.jsxs("div",{className:"login-card",children:[C.jsxs("div",{className:"login-header",children:[C.jsx("h1",{children:"ModaLAB Escuela"}),C.jsx("p",{children:"Aula Virtual"})]}),C.jsxs("form",{onSubmit:N,className:"login-form",children:[f&&C.jsx("div",{className:"alert alert-error",children:f}),!t&&C.jsxs(C.Fragment,{children:[C.jsxs("div",{className:"form-group",children:[C.jsx("label",{htmlFor:"name",children:"Nombre completo"}),C.jsx("input",{type:"text",id:"name",value:o,onChange:w=>l(w.target.value),placeholder:"Tu nombre",disabled:g,required:!0,autoComplete:"name"})]}),C.jsxs("div",{className:"form-group",children:[C.jsx("label",{htmlFor:"role",children:"Rol"}),C.jsxs("select",{id:"role",value:u,onChange:w=>h(w.target.value),disabled:g,required:!0,children:[C.jsx("option",{value:"student",children:"Estudiante"}),C.jsx("option",{value:"admin",children:"Administrador"})]})]})]}),C.jsxs("div",{className:"form-group",children:[C.jsx("label",{htmlFor:"email",children:"Correo electrónico"}),C.jsx("input",{type:"email",id:"email",value:n,onChange:w=>r(w.target.value),placeholder:"tu@correo.com",disabled:g,required:!0,autoComplete:"username"})]}),C.jsxs("div",{className:"form-group",children:[C.jsx("label",{htmlFor:"password",children:"Contraseña"}),C.jsx("input",{type:"password",id:"password",value:i,onChange:w=>s(w.target.value),placeholder:"••••••••",disabled:g,required:!0,autoComplete:"current-password"})]}),C.jsx("button",{type:"submit",className:"btn btn-primary btn-block",disabled:g,children:g?"Procesando...":t?"Iniciar sesión":"Crear cuenta"})]}),C.jsx("div",{className:"login-footer",children:C.jsxs("p",{children:[t?"¿No tienes cuenta?":"¿Ya tienes cuenta?",C.jsx("button",{type:"button",className:"btn-link",onClick:()=>{e(!t),p("")},disabled:g,children:t?"Crear una nueva":"Iniciar sesión"})]})})]})})}function jx(){const t=Hd(),[e,n]=b.useState({email:"admin@demo.com"}),[r,i]=b.useState("admin"),[s,o]=b.useState("admin"),[l,u]=b.useState("cursos"),[h,f]=b.useState([]),[p,g]=b.useState([]),[A,P]=b.useState([]),[D,N]=b.useState(!0),[w,_]=b.useState(""),[R,O]=b.useState(""),[U,j]=b.useState({nombre:"",descripcion:""}),[v,y]=b.useState({email:"",password:"",role:"student"});b.useEffect(()=>{if(r!=="admin"){t("/student");return}E()},[r,t]),b.useEffect(()=>{s==="student"&&t("/student")},[s,t]);async function E(){try{N(!0);const H=await Oi(qn(At,"cursos"));f(H.docs.map(Ve=>({id:Ve.id,...Ve.data()})));const rt=await Oi(qn(At,"users"));g(rt.docs.map(Ve=>({id:Ve.id,...Ve.data()})));const vr=await Oi(qn(At,"tareas"));P(vr.docs.map(Ve=>({id:Ve.id,...Ve.data()})))}catch(H){_("Error al cargar datos: "+H.message)}finally{N(!1)}}async function T(H){H.preventDefault();try{await py(qn(At,"cursos"),{...U,createdAt:new Date().toISOString(),activo:!0}),O("Curso creado exitosamente"),j({nombre:"",descripcion:""}),E()}catch(rt){_("Error al crear curso: "+rt.message)}}async function S(H){if(confirm("¿Estás seguro de eliminar este curso?"))try{await ix(Ys(At,"cursos",H)),O("Curso eliminado exitosamente"),E()}catch(rt){_("Error al eliminar curso: "+rt.message)}}async function k(H){H.preventDefault();try{await py(qn(At,"users"),{email:v.email,role:v.role,createdAt:new Date().toISOString(),activo:!0}),O("Usuario registrado exitosamente"),y({email:"",password:"",role:"student"}),E()}catch(rt){_("Error al crear usuario: "+rt.message)}}async function I(){t("/student")}return D?C.jsxs("div",{className:"loading",children:[C.jsx("div",{className:"spinner"}),C.jsx("p",{children:"Cargando panel de administrador..."})]}):C.jsxs("div",{className:"app-container",children:[C.jsxs("header",{className:"app-header",children:[C.jsx("h1",{children:"ModaLAB Escuela - Panel Admin"}),C.jsxs("nav",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[C.jsx("label",{style:{color:"white",fontSize:"0.9rem"},children:"Ver como:"}),C.jsxs("select",{value:s,onChange:H=>o(H.target.value),style:{padding:"0.3rem",borderRadius:"4px",border:"none"},children:[C.jsx("option",{value:"admin",children:"Administrador"}),C.jsx("option",{value:"student",children:"Estudiante"})]})]}),C.jsx("span",{style:{color:"white",marginRight:"1rem"},children:e==null?void 0:e.email}),C.jsx("button",{onClick:I,children:"Cerrar sesión"})]})]}),C.jsxs("main",{className:"app-main",children:[w&&C.jsx("div",{className:"alert alert-error",children:w}),R&&C.jsx("div",{className:"alert alert-success",children:R}),C.jsxs("div",{style:{marginBottom:"2rem",display:"flex",gap:"1rem"},children:[C.jsx("button",{className:`btn ${l==="cursos"?"btn-primary":"btn-secondary"}`,onClick:()=>u("cursos"),children:"Cursos"}),C.jsx("button",{className:`btn ${l==="usuarios"?"btn-primary":"btn-secondary"}`,onClick:()=>u("usuarios"),children:"Usuarios"}),C.jsx("button",{className:`btn ${l==="tareas"?"btn-primary":"btn-secondary"}`,onClick:()=>u("tareas"),children:"Tareas"})]}),l==="cursos"&&C.jsxs("div",{children:[C.jsxs("div",{className:"card",children:[C.jsx("h3",{children:"Crear Nuevo Curso"}),C.jsxs("form",{onSubmit:T,children:[C.jsxs("div",{className:"form-group",children:[C.jsx("label",{children:"Nombre del curso"}),C.jsx("input",{type:"text",value:U.nombre,onChange:H=>j({...U,nombre:H.target.value}),required:!0})]}),C.jsxs("div",{className:"form-group",children:[C.jsx("label",{children:"Descripción"}),C.jsx("textarea",{value:U.descripcion,onChange:H=>j({...U,descripcion:H.target.value}),rows:"3"})]}),C.jsx("button",{type:"submit",className:"btn btn-primary",children:"Crear Curso"})]})]}),C.jsxs("div",{className:"card",children:[C.jsx("h3",{children:"Cursos Existentes"}),h.length===0?C.jsx("p",{children:"No hay cursos registrados"}):C.jsxs("table",{className:"table",children:[C.jsx("thead",{children:C.jsxs("tr",{children:[C.jsx("th",{children:"Nombre"}),C.jsx("th",{children:"Descripción"}),C.jsx("th",{children:"Acciones"})]})}),C.jsx("tbody",{children:h.map(H=>C.jsxs("tr",{children:[C.jsx("td",{children:H.nombre}),C.jsx("td",{children:H.descripcion}),C.jsx("td",{children:C.jsx("button",{className:"btn btn-danger",onClick:()=>S(H.id),children:"Eliminar"})})]},H.id))})]})]})]}),l==="usuarios"&&C.jsxs("div",{children:[C.jsxs("div",{className:"card",children:[C.jsx("h3",{children:"Registrar Nuevo Usuario"}),C.jsxs("form",{onSubmit:k,children:[C.jsxs("div",{className:"form-group",children:[C.jsx("label",{children:"Email"}),C.jsx("input",{type:"email",value:v.email,onChange:H=>y({...v,email:H.target.value}),required:!0})]}),C.jsxs("div",{className:"form-group",children:[C.jsx("label",{children:"Contraseña temporal"}),C.jsx("input",{type:"password",value:v.password,onChange:H=>y({...v,password:H.target.value}),required:!0})]}),C.jsxs("div",{className:"form-group",children:[C.jsx("label",{children:"Rol"}),C.jsxs("select",{value:v.role,onChange:H=>y({...v,role:H.target.value}),children:[C.jsx("option",{value:"student",children:"Alumno"}),C.jsx("option",{value:"admin",children:"Administrador"})]})]}),C.jsx("button",{type:"submit",className:"btn btn-primary",children:"Crear Usuario"})]})]}),C.jsxs("div",{className:"card",children:[C.jsx("h3",{children:"Usuarios Registrados"}),p.length===0?C.jsx("p",{children:"No hay usuarios registrados"}):C.jsxs("table",{className:"table",children:[C.jsx("thead",{children:C.jsxs("tr",{children:[C.jsx("th",{children:"Email"}),C.jsx("th",{children:"Rol"}),C.jsx("th",{children:"Estado"})]})}),C.jsx("tbody",{children:p.map(H=>C.jsxs("tr",{children:[C.jsx("td",{children:H.email}),C.jsx("td",{children:H.role}),C.jsx("td",{children:H.activo?"Activo":"Inactivo"})]},H.id))})]})]})]}),l==="tareas"&&C.jsxs("div",{className:"card",children:[C.jsx("h3",{children:"Gestión de Tareas"}),A.length===0?C.jsx("p",{children:"No hay tareas registradas"}):C.jsxs("table",{className:"table",children:[C.jsx("thead",{children:C.jsxs("tr",{children:[C.jsx("th",{children:"Título"}),C.jsx("th",{children:"Curso"}),C.jsx("th",{children:"Fecha límite"})]})}),C.jsx("tbody",{children:A.map(H=>C.jsxs("tr",{children:[C.jsx("td",{children:H.titulo}),C.jsx("td",{children:H.cursoId||"Sin asignar"}),C.jsx("td",{children:H.fechaLimite||"Sin fecha"})]},H.id))})]})]})]})]})}function Bx(){const t=Hd(),[e,n]=b.useState({email:"estudiante@demo.com"}),[r,i]=b.useState("student"),[s,o]=b.useState([]),[l,u]=b.useState([]),[h,f]=b.useState([]),[p,g]=b.useState(!0),[A,P]=b.useState(""),[D,N]=b.useState(""),[w,_]=b.useState("student"),[R,O]=b.useState(null),[U,j]=b.useState(null);b.useEffect(()=>{if(r!=="student"){t("/admin");return}v()},[r,t]),b.useEffect(()=>{w==="admin"&&t("/admin")},[w,t]);async function v(){try{g(!0);const S=await Oi(qn(At,"cursos"));o(S.docs.map(H=>({id:H.id,...H.data()})));const k=await Oi(qn(At,"tareas"));u(k.docs.map(H=>({id:H.id,...H.data()})));const I=await Oi(qn(At,"materiales"));f(I.docs.map(H=>({id:H.id,...H.data()})))}catch(S){P("Error al cargar datos: "+S.message)}finally{g(!1)}}async function y(){t("/student")}async function E(S){try{window.open(S.url,"_blank"),N(`Descargando ${S.nombre}...`)}catch(k){P("Error al descargar material: "+k.message)}}async function T(S){if(S.preventDefault(),!R||!U){P("Selecciona una tarea y un archivo");return}try{N("Entrega subida exitosamente"),O(null),j(null)}catch(k){P("Error al subir entrega: "+k.message)}}return p?C.jsxs("div",{className:"loading",children:[C.jsx("div",{className:"spinner"}),C.jsx("p",{children:"Cargando panel de estudiante..."})]}):C.jsxs("div",{className:"app-container",children:[C.jsxs("header",{className:"app-header",children:[C.jsx("h1",{children:"ModaLAB Escuela - Panel Alumno"}),C.jsxs("nav",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[C.jsx("label",{style:{color:"white",fontSize:"0.9rem"},children:"Ver como:"}),C.jsxs("select",{value:w,onChange:S=>_(S.target.value),style:{padding:"0.3rem",borderRadius:"4px",border:"none"},children:[C.jsx("option",{value:"student",children:"Estudiante"}),C.jsx("option",{value:"admin",children:"Administrador"})]})]}),C.jsx("span",{style:{color:"white",marginRight:"1rem"},children:e==null?void 0:e.email}),C.jsx("button",{onClick:y,children:"Cerrar sesión"})]})]}),C.jsxs("main",{className:"app-main",children:[A&&C.jsx("div",{className:"alert alert-error",children:A}),D&&C.jsx("div",{className:"alert alert-success",children:D}),C.jsxs("section",{className:"card",style:{marginBottom:"2rem"},children:[C.jsx("h3",{children:"Mis Cursos"}),s.length===0?C.jsx("p",{children:"No tienes cursos asignados"}):C.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:"1rem"},children:s.map(S=>C.jsxs("div",{className:"card",style:{background:"#f9f9f9"},children:[C.jsx("h4",{children:S.nombre}),C.jsx("p",{children:S.descripcion})]},S.id))})]}),C.jsxs("section",{className:"card",style:{marginBottom:"2rem"},children:[C.jsx("h3",{children:"Tareas"}),l.length===0?C.jsx("p",{children:"No hay tareas pendientes"}):C.jsxs("table",{className:"table",children:[C.jsx("thead",{children:C.jsxs("tr",{children:[C.jsx("th",{children:"Título"}),C.jsx("th",{children:"Descripción"}),C.jsx("th",{children:"Fecha límite"}),C.jsx("th",{children:"Acción"})]})}),C.jsx("tbody",{children:l.map(S=>C.jsxs("tr",{children:[C.jsx("td",{children:S.titulo}),C.jsx("td",{children:S.descripcion}),C.jsx("td",{children:S.fechaLimite||"Sin fecha"}),C.jsx("td",{children:C.jsx("button",{className:"btn btn-primary",onClick:()=>j(S),children:"Entregar"})})]},S.id))})]})]}),U&&C.jsxs("section",{className:"card",style:{marginBottom:"2rem"},children:[C.jsxs("h3",{children:["Entregar: ",U.titulo]}),C.jsxs("form",{onSubmit:T,children:[C.jsxs("div",{className:"form-group",children:[C.jsx("label",{children:"Seleccionar archivo"}),C.jsx("input",{type:"file",onChange:S=>O(S.target.files[0]),required:!0})]}),C.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[C.jsx("button",{type:"submit",className:"btn btn-primary",children:"Subir entrega"}),C.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>{j(null),O(null)},children:"Cancelar"})]})]})]}),C.jsxs("section",{className:"card",children:[C.jsx("h3",{children:"Materiales de Clase"}),h.length===0?C.jsx("p",{children:"No hay materiales disponibles"}):C.jsxs("table",{className:"table",children:[C.jsx("thead",{children:C.jsxs("tr",{children:[C.jsx("th",{children:"Nombre"}),C.jsx("th",{children:"Tipo"}),C.jsx("th",{children:"Curso"}),C.jsx("th",{children:"Acción"})]})}),C.jsx("tbody",{children:h.map(S=>C.jsxs("tr",{children:[C.jsx("td",{children:S.nombre}),C.jsx("td",{children:S.tipo||"Archivo"}),C.jsx("td",{children:S.cursoId||"General"}),C.jsx("td",{children:C.jsx("button",{className:"btn btn-primary",onClick:()=>E(S),children:"Descargar"})})]},S.id))})]})]})]})]})}function zx(){return C.jsx(Ux,{children:C.jsx(mR,{children:C.jsxs(dR,{children:[C.jsx(si,{path:"/login",element:C.jsx(Fx,{})}),C.jsx(si,{path:"/admin",element:C.jsx(Ey,{requiredRole:"admin",children:C.jsx(jx,{})})}),C.jsx(si,{path:"/student",element:C.jsx(Ey,{requiredRole:"student",children:C.jsx(Bx,{})})}),C.jsx(si,{path:"/",element:C.jsx(wi,{to:"/login",replace:!0})}),C.jsx(si,{path:"*",element:C.jsx(wi,{to:"/login",replace:!0})})]})})})}xc.createRoot(document.getElementById("root")).render(C.jsx(xy.StrictMode,{children:C.jsx(zx,{})}));
