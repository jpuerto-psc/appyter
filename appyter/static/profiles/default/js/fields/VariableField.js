!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}(self,(function(){return function(){"use strict";var t={d:function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r:function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},p:""},e={};return t.p=`${window._config.STATIC}/`,function(){function n(){}function o(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(o)}function i(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t){return 0===Object.keys(t).length}t.r(e),t.d(e,{default:function(){return at}}),new Set;let c,d=!1;function u(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function $(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function h(){return g(" ")}function m(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function v(t,e,n){t.classList[n?"add":"remove"](e)}function w(t){c=t}new Map;const x=[],_=[],k=[],S=[],T=Promise.resolve();let j=!1;function O(t){k.push(t)}const M=new Set;let E=0;function P(){const t=c;do{for(;E<x.length;){const t=x[E];E++,w(t),A(t.$$)}for(w(null),x.length=0,E=0;_.length;)_.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];M.has(e)||(M.add(e),e())}k.length=0}while(x.length);for(;S.length;)S.pop()();j=!1,M.clear(),w(t)}function A(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const C=new Set;let L,q;function H(){L={r:0,c:[],p:L}}function N(){L.r||s(L.c),L=L.p}function J(t,e){t&&t.i&&(C.delete(t),t.i(e))}function B(t,e,n,o){if(t&&t.o){if(C.has(t))return;C.add(t),L.c.push((()=>{C.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function F(t,e){B(t,1,1,(()=>{e.delete(t.key)}))}function I(t){t&&t.c()}function R(t,e,n,r){const{fragment:a,on_mount:l,on_destroy:c,after_update:d}=t.$$;a&&a.m(e,n),r||O((()=>{const e=l.map(o).filter(i);c?c.push(...e):s(e),t.$$.on_mount=[]})),d.forEach(O)}function X(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function z(t,e,o,i,a,l,u,f=[-1]){const $=c;w(t);const g=t.$$={fragment:null,ctx:null,props:l,update:n,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||($?$.$$.context:[])),callbacks:r(),dirty:f,skip_bound:!1,root:e.target||$.$$.root};u&&u(g.root);let h=!1;if(g.ctx=o?o(t,e.props||{},((e,n,...o)=>{const r=o.length?o[0]:n;return g.ctx&&a(g.ctx[e],g.ctx[e]=r)&&(!g.skip_bound&&g.bound[e]&&g.bound[e](r),h&&function(t,e){-1===t.$$.dirty[0]&&(x.push(t),j||(j=!0,T.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n})):[],g.update(),h=!0,s(g.before_update),g.fragment=!!i&&i(g.ctx),e.target){if(e.hydrate){d=!0;const t=(m=e.target,Array.from(m.childNodes));g.fragment&&g.fragment.l(t),t.forEach(p)}else g.fragment&&g.fragment.c();e.intro&&J(t.$$.fragment),R(t,e.target,e.anchor,e.customElement),d=!1,P()}var m;w($)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(q=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(o).filter(i);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){s(this.$$.on_disconnect)}$destroy(){X(this,1),this.$destroy=n}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!l(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class D{$destroy(){X(this,1),this.$destroy=n}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!l(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function G(t){let e;return{c(){e=$("div"),y(e,"class",t[0])},m(n,o){f(n,e,o),e.innerHTML=t[1],t[3](e)},p(t,[n]){2&n&&(e.innerHTML=t[1]),1&n&&y(e,"class",t[0])},i:n,o:n,d(n){n&&p(e),t[3](null)}}}function K(t,e,n){let o,{classes:r=""}=e,{data:s=""}=e,i={};return t.$$set=t=>{"classes"in t&&n(0,r=t.classes),"data"in t&&n(1,s=t.data)},t.$$.update=()=>{4&t.$$.dirty&&o&&o.querySelectorAll("script").forEach((t=>{"application/json"!==t.type&&function(t){if(void 0===i[t]){i[t]=!0;try{new Function(t)()}catch(t){!function({type:t,error:e}){console.error(`[${t}]`,e),-1!==window._config.EXTRAS.indexOf("catalog-integration")&&function(t,e){return Array.isArray(e)?new Promise(((n,o)=>t.require(e,((...t)=>n(t)),o))):new Promise(((n,o)=>t.require([e],n,o)))}(window,"report_error").then((n=>n({appyter:((nb||{}).metadata||{}).appyter||null,url:window.location.href,type:t,error:e}))).catch((t=>console.error("catalog-integration: failed to locate report_error handler")))}({type:"javascript-cell",error:t.toString()})}}}(t.innerHTML)}))},[r,s,o,function(t){_[t?"unshift":"push"]((()=>{o=t,n(2,o)}))}]}var Q=class extends D{constructor(t){super(),z(this,t,K,G,a,{classes:0,data:1})}};function U(t){let e;return{c(){e=$("div"),e.innerHTML="<div></div> \n  <div></div> \n  <div></div> \n  <div></div>",y(e,"class","lds-ellipsis")},m(t,n){f(t,e,n)},p:n,i:n,o:n,d(t){t&&p(e)}}}var V=class extends D{constructor(t){super(),z(this,t,null,U,a,{})}};function W(t){let e,n;return e=new Q({props:{classes:"ssr",data:t[0]}}),{c(){I(e.$$.fragment)},m(t,o){R(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.data=t[0]),e.$set(o)},i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){B(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function Y(t){let e,o,r;return o=new V({}),{c(){e=$("div"),I(o.$$.fragment),y(e,"class","text-center")},m(t,n){f(t,e,n),R(o,e,null),r=!0},p:n,i(t){r||(J(o.$$.fragment,t),r=!0)},o(t){B(o.$$.fragment,t),r=!1},d(t){t&&p(e),X(o)}}}function Z(t){let e,n,o,r;const s=[Y,W],i=[];function a(t,e){return void 0===t[0]?0:1}return e=a(t),n=i[e]=s[e](t),{c(){n.c(),o=g("")},m(t,n){i[e].m(t,n),f(t,o,n),r=!0},p(t,[r]){let l=e;e=a(t),e===l?i[e].p(t,r):(H(),B(i[l],1,1,(()=>{i[l]=null})),N(),n=i[e],n?n.p(t,r):(n=i[e]=s[e](t),n.c()),J(n,1),n.m(o.parentNode,o))},i(t){r||(J(n),r=!0)},o(t){B(n),r=!1},d(t){i[e].d(t),t&&p(o)}}}function tt(t,e,n){let o,{field:r}=e,{args:s}=e;return t.$$set=t=>{"field"in t&&n(1,r=t.field),"args"in t&&n(2,s=t.args)},t.$$.update=()=>{6&t.$$.dirty&&void 0!==r&&void 0!==s&&async function(){const t=await fetch(`${window.location.href.replace(/\/$/,"")}/ssr/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({field:r,args:s})});try{n(0,o=await t.text())}catch(t){n(0,o=`<div class="alert alert-danger">Error: ${t.toString()}</div>`)}}()},[o,r,s]}var et=class extends D{constructor(t){super(),z(this,t,tt,Z,a,{field:1,args:2})}};function nt(t,e,n){const o=t.slice();return o[5]=e[n],o}function ot(t){let e,n,o,r;return{c(){e=$("sup"),n=$("i"),r=h(),y(n,"class","far fa-question-circle"),y(e,"data-toggle","tooltip"),y(e,"title",o=t[0].description)},m(t,o){f(t,e,o),u(e,n),f(t,r,o)},p(t,n){1&n&&o!==(o=t[0].description)&&y(e,"title",o)},d(t){t&&p(e),t&&p(r)}}}function rt(t,e){let n,o,r,s,i,a,l,c;function d(){return e[3](e[5])}return i=new et({props:{field:e[1][e[5]].field,args:e[1][e[5]].args}}),{key:t,first:null,c(){n=$("button"),o=$("i"),s=h(),I(i.$$.fragment),y(o,"class","fas fa-trash text-white"),y(n,"type","button"),y(n,"class","btn btn-sm btn-danger"),b(n,"float","right"),y(n,"data-target",r=e[5]),this.first=n},m(t,e){f(t,n,e),u(n,o),f(t,s,e),R(i,t,e),a=!0,l||(c=m(n,"click",d),l=!0)},p(t,o){e=t,(!a||2&o&&r!==(r=e[5]))&&y(n,"data-target",r);const s={};2&o&&(s.field=e[1][e[5]].field),2&o&&(s.args=e[1][e[5]].args),i.$set(s)},i(t){a||(J(i.$$.fragment,t),a=!0)},o(t){B(i.$$.fragment,t),a=!1},d(t){t&&p(n),t&&p(s),X(i,t),l=!1,c()}}}function st(t){let e,n,o,r,s,i,a,l,c,d,w,x,_,k,S,T,j,O,M,E=t[0].label+"",P=[],A=new Map,C=t[0].description&&ot(t),L=Object.keys(t[1]);const q=t=>t[5];for(let e=0;e<L.length;e+=1){let n=nt(t,L,e),o=q(n);A.set(o,P[e]=rt(o,n))}return{c(){e=$("div"),n=$("div"),o=g(E),r=h(),C&&C.c(),s=g(":"),i=h(),a=$("div");for(let t=0;t<P.length;t+=1)P[t].c();l=h(),c=$("button"),d=$("i"),x=h(),_=$("div"),k=$("input"),y(n,"class","col-lg-3 bold text-lg-right my-auto"),y(d,"class","fas fa-plus text-white"),y(c,"class","btn btn-sm btn-success"),b(c,"float","right"),c.disabled=w=t[0].max&&t[1].length>t[0].max,v(c,"disabled",t[0].max&&t[1].length>t[0].max),y(a,"class","col-lg-6 pt-2 pt-lg-0"),y(e,"class","row px-3 pb-3"),y(k,"type","text"),y(k,"class","hidden"),y(k,"name",S=t[0].name),k.value=T=t[0].value,b(_,"display","none")},m(p,$){f(p,e,$),u(e,n),u(n,o),u(n,r),C&&C.m(n,null),u(n,s),u(e,i),u(e,a);for(let t=0;t<P.length;t+=1)P[t].m(a,null);u(a,l),u(a,c),u(c,d),f(p,x,$),f(p,_,$),u(_,k),j=!0,O||(M=m(c,"click",t[4]),O=!0)},p(t,[e]){var r,i;(!j||1&e)&&E!==(E=t[0].label+"")&&(i=""+(i=E),(r=o).wholeText!==i&&(r.data=i)),t[0].description?C?C.p(t,e):(C=ot(t),C.c(),C.m(n,s)):C&&(C.d(1),C=null),2&e&&(L=Object.keys(t[1]),H(),P=function(t,e,n,o,r,s,i,a,l,c,d,u){let f=t.length,p=s.length,$=f;const g={};for(;$--;)g[t[$].key]=$;const h=[],m=new Map,y=new Map;for($=p;$--;){const t=u(r,s,$),o=n(t);let a=i.get(o);a?a.p(t,e):(a=c(o,t),a.c()),m.set(o,h[$]=a),o in g&&y.set(o,Math.abs($-g[o]))}const b=new Set,v=new Set;function w(t){J(t,1),t.m(a,d),i.set(t.key,t),d=t.first,p--}for(;f&&p;){const e=h[p-1],n=t[f-1],o=e.key,r=n.key;e===n?(d=e.first,f--,p--):m.has(r)?!i.has(o)||b.has(o)?w(e):v.has(r)?f--:y.get(o)>y.get(r)?(v.add(o),w(e)):(b.add(r),f--):(l(n,i),f--)}for(;f--;){const e=t[f];m.has(e.key)||l(e,i)}for(;p;)w(h[p-1]);return h}(P,e,q,0,t,L,A,a,F,rt,l,nt),N()),(!j||3&e&&w!==(w=t[0].max&&t[1].length>t[0].max))&&(c.disabled=w),3&e&&v(c,"disabled",t[0].max&&t[1].length>t[0].max),(!j||1&e&&S!==(S=t[0].name))&&y(k,"name",S),(!j||1&e&&T!==(T=t[0].value)&&k.value!==T)&&(k.value=T)},i(t){if(!j){for(let t=0;t<L.length;t+=1)J(P[t]);j=!0}},o(t){for(let t=0;t<P.length;t+=1)B(P[t]);j=!1},d(t){t&&p(e),C&&C.d();for(let t=0;t<P.length;t+=1)P[t].d();t&&p(x),t&&p(_),O=!1,M()}}}function it(t,e,n){let{args:o}=e,r={},s=0;for(const t of o.default||[])r[s++]={...o.field,args:{...o.field.args,name:`${o.field.args.name}${s}`,default:t}};return t.$$set=t=>{"args"in t&&n(0,o=t.args)},t.$$.update=()=>{2&t.$$.dirty&&n(0,o.value=JSON.stringify(Object.values(r).map((t=>({$ref:`#/${t.args.name}`})))),o)},[o,r,s,t=>{delete r[t],n(1,r)},()=>{o.max&&r.length>o.max||n(1,r[n(2,s++,s)]={...o.field,args:{...o.field.args,name:`${o.field.args.name}${s}`}},r)}]}var at=class extends D{constructor(t){super(),z(this,t,it,st,a,{args:0})}}}(),e}()}));