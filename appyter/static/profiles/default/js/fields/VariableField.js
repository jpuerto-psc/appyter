!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(self,(function(){return function(){"use strict";var t={d:function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r:function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},p:""},e={};return t.p=`${window._config.STATIC}/`,function(){function n(){}function r(t){return t()}function o(){return Object.create(null)}function i(t){t.forEach(r)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t){return 0===Object.keys(t).length}t.r(e),t.d(e,{default:function(){return at}}),new Set;let l,d=!1;function u(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode&&t.parentNode.removeChild(t)}function $(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function h(){return g(" ")}function m(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t,e,n,r){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function w(t,e,n){t.classList[n?"add":"remove"](e)}function v(t){l=t}new Map;const x=[],_=[],k=[],S=[],j=Promise.resolve();let O=!1;function T(t){k.push(t)}const M=new Set;let E=0;function P(){if(0!==E)return;const t=l;do{try{for(;E<x.length;){const t=x[E];E++,v(t),A(t.$$)}}catch(t){throw x.length=0,E=0,t}for(v(null),x.length=0,E=0;_.length;)_.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];M.has(e)||(M.add(e),e())}k.length=0}while(x.length);for(;S.length;)S.pop()();O=!1,M.clear(),v(t)}function A(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const C=new Set;let L,q;function N(){L={r:0,c:[],p:L}}function H(){L.r||i(L.c),L=L.p}function I(t,e){t&&t.i&&(C.delete(t),t.i(e))}function J(t,e,n,r){if(t&&t.o){if(C.has(t))return;C.add(t),L.c.push((()=>{C.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}else r&&r()}function R(t,e){J(t,1,1,(()=>{e.delete(t.key)}))}function B(t){t&&t.c()}function F(t,e,n,o){const{fragment:a,after_update:c}=t.$$;a&&a.m(e,n),o||T((()=>{const e=t.$$.on_mount.map(r).filter(s);t.$$.on_destroy?t.$$.on_destroy.push(...e):i(e),t.$$.on_mount=[]})),c.forEach(T)}function G(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function X(t,e,r,s,a,c,u,f=[-1]){const $=l;v(t);const g=t.$$={fragment:null,ctx:[],props:c,update:n,not_equal:a,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||($?$.$$.context:[])),callbacks:o(),dirty:f,skip_bound:!1,root:e.target||$.$$.root};u&&u(g.root);let h=!1;if(g.ctx=r?r(t,e.props||{},((e,n,...r)=>{const o=r.length?r[0]:n;return g.ctx&&a(g.ctx[e],g.ctx[e]=o)&&(!g.skip_bound&&g.bound[e]&&g.bound[e](o),h&&function(t,e){-1===t.$$.dirty[0]&&(x.push(t),O||(O=!0,j.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n})):[],g.update(),h=!0,i(g.before_update),g.fragment=!!s&&s(g.ctx),e.target){if(e.hydrate){d=!0;const t=(m=e.target,Array.from(m.childNodes));g.fragment&&g.fragment.l(t),t.forEach(p)}else g.fragment&&g.fragment.c();e.intro&&I(t.$$.fragment),F(t,e.target,e.anchor,e.customElement),d=!1,P()}var m;v($)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(q=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(r).filter(s);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){i(this.$$.on_disconnect)}$destroy(){G(this,1),this.$destroy=n}$on(t,e){if(!s(e))return n;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),()=>{const t=r.indexOf(e);-1!==t&&r.splice(t,1)}}$set(t){this.$$set&&!c(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class z{$destroy(){G(this,1),this.$destroy=n}$on(t,e){if(!s(e))return n;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),()=>{const t=r.indexOf(e);-1!==t&&r.splice(t,1)}}$set(t){this.$$set&&!c(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function D(t){let e;return{c(){e=$("div"),y(e,"class",t[0])},m(n,r){f(n,e,r),e.innerHTML=t[1],t[3](e)},p(t,[n]){2&n&&(e.innerHTML=t[1]),1&n&&y(e,"class",t[0])},i:n,o:n,d(n){n&&p(e),t[3](null)}}}function K(t,e,n){let r,{classes:o=""}=e,{data:i=""}=e,s={};return t.$$set=t=>{"classes"in t&&n(0,o=t.classes),"data"in t&&n(1,i=t.data)},t.$$.update=()=>{4&t.$$.dirty&&r&&r.querySelectorAll("script").forEach((t=>{"application/json"!==t.type&&function(t){if(void 0===s[t]){s[t]=!0;try{new Function(t)()}catch(t){!function({nb:t,type:e,error:n}){if(console.error(`[${e}]`,n),-1!==window._config.EXTRAS.indexOf("catalog-integration"))if(void 0!==window._config.report_error)try{window._config.report_error({appyter:((window._config.nb||{}).metadata||{}).appyter||null,url:window.location.href,type:e,error:n})}catch(t){console.error(t)}else console.warn("[catalog-integration:report_error]: attempting deprecated requirejs resolution"),function(t,e){return Array.isArray(e)?new Promise(((n,r)=>t.require(e,((...t)=>n(t)),r))):new Promise(((n,r)=>t.require([e],n,r)))}(window,"report_error").then((t=>{console.warn("[catalog-integration:report_error]: deprecated report_error"),t({appyter:((window._config.nb||{}).metadata||{}).appyter||null,url:window.location.href,type:e,error:n})})).catch((t=>{}))}({type:"javascript-cell",error:t.toString()})}}}(t.innerHTML)}))},[o,i,r,function(t){_[t?"unshift":"push"]((()=>{r=t,n(2,r)}))}]}var Q=class extends z{constructor(t){super(),X(this,t,K,D,a,{classes:0,data:1})}};function U(t){let e;return{c(){e=$("div"),e.innerHTML="<div></div> \n  <div></div> \n  <div></div> \n  <div></div>",y(e,"class","lds-ellipsis")},m(t,n){f(t,e,n)},p:n,i:n,o:n,d(t){t&&p(e)}}}var V=class extends z{constructor(t){super(),X(this,t,null,U,a,{})}};function W(t){let e,n;return e=new Q({props:{classes:"ssr",data:t[0]}}),{c(){B(e.$$.fragment)},m(t,r){F(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.data=t[0]),e.$set(r)},i(t){n||(I(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function Y(t){let e,r,o;return r=new V({}),{c(){e=$("div"),B(r.$$.fragment),y(e,"class","text-center")},m(t,n){f(t,e,n),F(r,e,null),o=!0},p:n,i(t){o||(I(r.$$.fragment,t),o=!0)},o(t){J(r.$$.fragment,t),o=!1},d(t){t&&p(e),G(r)}}}function Z(t){let e,n,r,o;const i=[Y,W],s=[];function a(t,e){return void 0===t[0]?0:1}return e=a(t),n=s[e]=i[e](t),{c(){n.c(),r=g("")},m(t,n){s[e].m(t,n),f(t,r,n),o=!0},p(t,[o]){let c=e;e=a(t),e===c?s[e].p(t,o):(N(),J(s[c],1,1,(()=>{s[c]=null})),H(),n=s[e],n?n.p(t,o):(n=s[e]=i[e](t),n.c()),I(n,1),n.m(r.parentNode,r))},i(t){o||(I(n),o=!0)},o(t){J(n),o=!1},d(t){s[e].d(t),t&&p(r)}}}function tt(t,e,n){let r,{field:o}=e,{args:i}=e;return t.$$set=t=>{"field"in t&&n(1,o=t.field),"args"in t&&n(2,i=t.args)},t.$$.update=()=>{6&t.$$.dirty&&void 0!==o&&void 0!==i&&async function(){const t=await fetch(`${window._config.ORIGIN}/ssr/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({field:o,args:i})});try{n(0,r=await t.text())}catch(t){n(0,r=`<div class="alert alert-danger">Error: ${t.toString()}</div>`)}}()},[r,o,i]}var et=class extends z{constructor(t){super(),X(this,t,tt,Z,a,{field:1,args:2})}};function nt(t,e,n){const r=t.slice();return r[5]=e[n],r}function rt(t){let e,n,r,o;return{c(){e=$("sup"),n=$("i"),o=h(),y(n,"class","far fa-question-circle"),y(e,"data-toggle","tooltip"),y(e,"title",r=t[0].description)},m(t,r){f(t,e,r),u(e,n),f(t,o,r)},p(t,n){1&n&&r!==(r=t[0].description)&&y(e,"title",r)},d(t){t&&p(e),t&&p(o)}}}function ot(t,e){let n,r,o,i,s,a,c,l;function d(){return e[3](e[5])}return s=new et({props:{field:e[1][e[5]].field,args:e[1][e[5]].args}}),{key:t,first:null,c(){n=$("button"),r=$("i"),i=h(),B(s.$$.fragment),y(r,"class","fas fa-trash text-white"),y(n,"type","button"),y(n,"class","btn btn-sm btn-danger"),b(n,"float","right"),y(n,"data-target",o=e[5]),this.first=n},m(t,e){f(t,n,e),u(n,r),f(t,i,e),F(s,t,e),a=!0,c||(l=m(n,"click",d),c=!0)},p(t,r){e=t,(!a||2&r&&o!==(o=e[5]))&&y(n,"data-target",o);const i={};2&r&&(i.field=e[1][e[5]].field),2&r&&(i.args=e[1][e[5]].args),s.$set(i)},i(t){a||(I(s.$$.fragment,t),a=!0)},o(t){J(s.$$.fragment,t),a=!1},d(t){t&&p(n),t&&p(i),G(s,t),c=!1,l()}}}function it(t){let e,n,r,o,i,s,a,c,l,d,v,x,_,k,S,j,O,T,M=t[0].label+"",E=[],P=new Map,A=t[0].description&&rt(t),C=Object.keys(t[1]);const L=t=>t[5];for(let e=0;e<C.length;e+=1){let n=nt(t,C,e),r=L(n);P.set(r,E[e]=ot(r,n))}return{c(){e=$("div"),n=$("div"),r=g(M),o=h(),A&&A.c(),i=g(":"),s=h(),a=$("div");for(let t=0;t<E.length;t+=1)E[t].c();c=h(),l=$("button"),d=$("i"),x=h(),_=$("input"),y(n,"class","col-lg-3 bold text-lg-right my-auto"),y(d,"class","fas fa-plus text-white"),y(l,"type","button"),y(l,"class","btn btn-sm btn-success"),b(l,"float","right"),l.disabled=v=t[0].max&&t[1].length>t[0].max,w(l,"disabled",t[0].max&&t[1].length>t[0].max),y(a,"class","col-lg-6 pt-2 pt-lg-0"),y(e,"class","row px-3 pb-3"),y(_,"type","text"),y(_,"class","hidden"),y(_,"name",k=t[0].name),_.value=S=t[0].value},m(p,$){f(p,e,$),u(e,n),u(n,r),u(n,o),A&&A.m(n,null),u(n,i),u(e,s),u(e,a);for(let t=0;t<E.length;t+=1)E[t].m(a,null);u(a,c),u(a,l),u(l,d),f(p,x,$),f(p,_,$),j=!0,O||(T=m(l,"click",t[4]),O=!0)},p(t,[e]){var o,s;(!j||1&e)&&M!==(M=t[0].label+"")&&(s=""+(s=M),(o=r).wholeText!==s&&(o.data=s)),t[0].description?A?A.p(t,e):(A=rt(t),A.c(),A.m(n,i)):A&&(A.d(1),A=null),2&e&&(C=Object.keys(t[1]),N(),E=function(t,e,n,r,o,i,s,a,c,l,d,u){let f=t.length,p=i.length,$=f;const g={};for(;$--;)g[t[$].key]=$;const h=[],m=new Map,y=new Map;for($=p;$--;){const t=u(o,i,$),r=n(t);let a=s.get(r);a?a.p(t,e):(a=l(r,t),a.c()),m.set(r,h[$]=a),r in g&&y.set(r,Math.abs($-g[r]))}const b=new Set,w=new Set;function v(t){I(t,1),t.m(a,d),s.set(t.key,t),d=t.first,p--}for(;f&&p;){const e=h[p-1],n=t[f-1],r=e.key,o=n.key;e===n?(d=e.first,f--,p--):m.has(o)?!s.has(r)||b.has(r)?v(e):w.has(o)?f--:y.get(r)>y.get(o)?(w.add(r),v(e)):(b.add(o),f--):(c(n,s),f--)}for(;f--;){const e=t[f];m.has(e.key)||c(e,s)}for(;p;)v(h[p-1]);return h}(E,e,L,0,t,C,P,a,R,ot,c,nt),H()),(!j||3&e&&v!==(v=t[0].max&&t[1].length>t[0].max))&&(l.disabled=v),(!j||3&e)&&w(l,"disabled",t[0].max&&t[1].length>t[0].max),(!j||1&e&&k!==(k=t[0].name))&&y(_,"name",k),(!j||1&e&&S!==(S=t[0].value)&&_.value!==S)&&(_.value=S)},i(t){if(!j){for(let t=0;t<C.length;t+=1)I(E[t]);j=!0}},o(t){for(let t=0;t<E.length;t+=1)J(E[t]);j=!1},d(t){t&&p(e),A&&A.d();for(let t=0;t<E.length;t+=1)E[t].d();t&&p(x),t&&p(_),O=!1,T()}}}function st(t,e,n){let{args:r}=e,o={},i=0;for(const t of r.default||[])o[i++]={...r.field,args:{...r.field.args,name:`${r.field.args.name}${i}`,default:t}};return t.$$set=t=>{"args"in t&&n(0,r=t.args)},t.$$.update=()=>{2&t.$$.dirty&&n(0,r.value=JSON.stringify(Object.values(o).map((t=>({$ref:`#/${t.args.name}`})))),r)},[r,o,i,t=>{delete o[t],n(1,o)},()=>{r.max&&o.length>r.max||n(1,o[n(2,i++,i)]={...r.field,args:{...r.field.args,name:`${r.field.args.name}${i}`}},o)}]}var at=class extends z{constructor(t){super(),X(this,t,st,it,a,{args:0})}}}(),e}()}));