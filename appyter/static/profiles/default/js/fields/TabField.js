!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}(self,(function(){return function(){"use strict";var t={d:function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r:function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},p:""},e={};return t.p=`${window._config.STATIC}/`,function(){function n(){}function o(t){return t()}function r(){return Object.create(null)}function i(t){t.forEach(o)}function c(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t){return 0===Object.keys(t).length}function a(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}t.r(e),t.d(e,{default:function(){return ht}}),new Set;let u,d=!1;function f(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function g(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function y(){return m(" ")}function v(){return m("")}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function w(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function x(t){u=t}new Map;const _=[],k=[],j=[],O=[],S=Promise.resolve();let T=!1;function A(t){j.push(t)}const E=new Set;let M=0;function C(){const t=u;do{for(;M<_.length;){const t=_[M];M++,x(t),q(t.$$)}for(x(null),_.length=0,M=0;k.length;)k.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];E.has(e)||(E.add(e),e())}j.length=0}while(_.length);for(;O.length;)O.pop()();T=!1,E.clear(),x(t)}function q(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const L=new Set;let N,P;function H(){N={r:0,c:[],p:N}}function I(){N.r||i(N.c),N=N.p}function B(t,e){t&&t.i&&(L.delete(t),t.i(e))}function R(t,e,n,o){if(t&&t.o){if(L.has(t))return;L.add(t),N.c.push((()=>{L.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function F(t){t&&t.c()}function G(t,e,n,r){const{fragment:s,on_mount:l,on_destroy:a,after_update:u}=t.$$;s&&s.m(e,n),r||A((()=>{const e=l.map(o).filter(c);a?a.push(...e):i(e),t.$$.on_mount=[]})),u.forEach(A)}function J(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function X(t,e,o,c,s,l,a,f=[-1]){const p=u;x(t);const g=t.$$={fragment:null,ctx:null,props:l,update:n,not_equal:s,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(p?p.$$.context:[])),callbacks:r(),dirty:f,skip_bound:!1,root:e.target||p.$$.root};a&&a(g.root);let h=!1;if(g.ctx=o?o(t,e.props||{},((e,n,...o)=>{const r=o.length?o[0]:n;return g.ctx&&s(g.ctx[e],g.ctx[e]=r)&&(!g.skip_bound&&g.bound[e]&&g.bound[e](r),h&&function(t,e){-1===t.$$.dirty[0]&&(_.push(t),T||(T=!0,S.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n})):[],g.update(),h=!0,i(g.before_update),g.fragment=!!c&&c(g.ctx),e.target){if(e.hydrate){d=!0;const t=(m=e.target,Array.from(m.childNodes));g.fragment&&g.fragment.l(t),t.forEach($)}else g.fragment&&g.fragment.c();e.intro&&B(t.$$.fragment),G(t,e.target,e.anchor,e.customElement),d=!1,C()}var m;x(p)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(P=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(o).filter(c);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){i(this.$$.on_disconnect)}$destroy(){J(this,1),this.$destroy=n}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!l(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class z{$destroy(){J(this,1),this.$destroy=n}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!l(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const D=t=>({tab:1&t}),K=t=>({tab:t[0].value});function Q(t,e,n){const o=t.slice();return o[4]=e[n],o}function U(t){let e,n,o,r;return{c(){e=h("sup"),n=h("i"),r=y(),b(n,"class","far fa-question-circle"),b(e,"data-toggle","tooltip"),b(e,"title",o=t[0].description)},m(t,o){p(t,e,o),f(e,n),p(t,r,o)},p(t,n){1&n&&o!==(o=t[0].description)&&b(e,"title",o)},d(t){t&&$(e),t&&$(r)}}}function V(t){let e,n,o,r,i,c,s,l=t[4]+"";function a(){return t[3](t[4])}return{c(){e=h("button"),n=m(l),o=y(),b(e,"type","button"),b(e,"class",r="nav-link"+(t[0].value===t[4]?" active":"")),b(e,"aria-controls",i="tab-content-"+t[0].name+"-"+t[4]),b(e,"role","tab")},m(t,r){var i,l,u,d;p(t,e,r),f(e,n),f(e,o),c||(l="click",u=a,(i=e).addEventListener(l,u,d),s=()=>i.removeEventListener(l,u,d),c=!0)},p(o,c){t=o,1&c&&l!==(l=t[4]+"")&&w(n,l),1&c&&r!==(r="nav-link"+(t[0].value===t[4]?" active":""))&&b(e,"class",r),1&c&&i!==(i="tab-content-"+t[0].name+"-"+t[4])&&b(e,"aria-controls",i)},d(t){t&&$(e),c=!1,s()}}}function W(t){let e,n,o,r,i,c,s,l,u,d,v,x,_,k=t[0].label+"",j=t[0].description&&U(t),O=Array.isArray(t[0].choices)?t[0].choices:Object.keys(t[0].choices),S=[];for(let e=0;e<O.length;e+=1)S[e]=V(Q(t,O,e));const T=t[2].default,A=function(t,e,n,o){if(t){const r=a(t,e,n,o);return t[0](r)}}(T,t,t[1],K);return{c(){e=h("div"),n=h("div"),o=m(k),r=y(),j&&j.c(),i=m(":"),c=y(),s=h("div"),l=h("div");for(let t=0;t<S.length;t+=1)S[t].c();u=y(),d=h("div"),v=h("div"),x=h("div"),A&&A.c(),b(n,"class","col-lg-2 bold text-lg-right my-auto"),b(l,"class","nav flex-column nav-pills nav-justified"),b(l,"aria-orientation","vertical"),b(l,"role","tablist"),b(s,"class","col-lg-2 pt-2 pt-lg-0"),b(x,"class","tab-pane show active"),b(x,"role","tabpanel"),b(v,"class","tab-content"),b(d,"class","col-lg-8 pt-2 pt-lg-0"),b(e,"class","row px-4 px-lg-3 pb-4")},m(t,a){p(t,e,a),f(e,n),f(n,o),f(n,r),j&&j.m(n,null),f(n,i),f(e,c),f(e,s),f(s,l);for(let t=0;t<S.length;t+=1)S[t].m(l,null);f(e,u),f(e,d),f(d,v),f(v,x),A&&A.m(x,null),_=!0},p(t,[e]){if((!_||1&e)&&k!==(k=t[0].label+"")&&w(o,k),t[0].description?j?j.p(t,e):(j=U(t),j.c(),j.m(n,i)):j&&(j.d(1),j=null),1&e){let n;for(O=Array.isArray(t[0].choices)?t[0].choices:Object.keys(t[0].choices),n=0;n<O.length;n+=1){const o=Q(t,O,n);S[n]?S[n].p(o,e):(S[n]=V(o),S[n].c(),S[n].m(l,null))}for(;n<S.length;n+=1)S[n].d(1);S.length=O.length}A&&A.p&&(!_||3&e)&&function(t,e,n,o,r,i){if(r){const c=a(e,n,o,i);t.p(c,r)}}(A,T,t,t[1],_?function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(T,t[1],e,D):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[1]),K)},i(t){_||(B(A,t),_=!0)},o(t){R(A,t),_=!1},d(t){t&&$(e),j&&j.d(),g(S,t),A&&A.d(t)}}}function Y(t,e,n){let{$$slots:o={},$$scope:r}=e,{args:i}=e;return t.$$set=t=>{"args"in t&&n(0,i=t.args),"$$scope"in t&&n(1,r=t.$$scope)},[i,r,o,t=>n(0,i.value=t,i)]}var Z=class extends z{constructor(t){super(),X(this,t,Y,W,s,{args:0})}};function tt(t){let e;return{c(){e=h("div"),b(e,"class",t[0])},m(n,o){p(n,e,o),e.innerHTML=t[1],t[3](e)},p(t,[n]){2&n&&(e.innerHTML=t[1]),1&n&&b(e,"class",t[0])},i:n,o:n,d(n){n&&$(e),t[3](null)}}}function et(t,e,n){let o,{classes:r=""}=e,{data:i=""}=e,c={};return t.$$set=t=>{"classes"in t&&n(0,r=t.classes),"data"in t&&n(1,i=t.data)},t.$$.update=()=>{4&t.$$.dirty&&o&&o.querySelectorAll("script").forEach((t=>{"application/json"!==t.type&&function(t){if(void 0===c[t]){c[t]=!0;try{new Function(t)()}catch(t){!function({type:t,error:e}){console.error(`[${t}]`,e),-1!==window._config.EXTRAS.indexOf("catalog-integration")&&(void 0!==window._config.report_error?window._config.report_error({type:t,error:e}):(console.warn("[catalog-integration:report_error]: attempting deprecated requirejs resolution"),function(t,e){return Array.isArray(e)?new Promise(((n,o)=>t.require(e,((...t)=>n(t)),o))):new Promise(((n,o)=>t.require([e],n,o)))}(window,"report_error").then((n=>{console.warn("[catalog-integration:report_error]: deprecated report_error"),n({appyter:((nb||{}).metadata||{}).appyter||null,url:window.location.href,type:t,error:e})})).catch((t=>{}))))}({type:"javascript-cell",error:t.toString()})}}}(t.innerHTML)}))},[r,i,o,function(t){k[t?"unshift":"push"]((()=>{o=t,n(2,o)}))}]}var nt=class extends z{constructor(t){super(),X(this,t,et,tt,s,{classes:0,data:1})}};function ot(t){let e;return{c(){e=h("div"),e.innerHTML="<div></div> \n  <div></div> \n  <div></div> \n  <div></div>",b(e,"class","lds-ellipsis")},m(t,n){p(t,e,n)},p:n,i:n,o:n,d(t){t&&$(e)}}}var rt=class extends z{constructor(t){super(),X(this,t,null,ot,s,{})}};function it(t){let e,n;return e=new nt({props:{classes:"ssr",data:t[0]}}),{c(){F(e.$$.fragment)},m(t,o){G(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.data=t[0]),e.$set(o)},i(t){n||(B(e.$$.fragment,t),n=!0)},o(t){R(e.$$.fragment,t),n=!1},d(t){J(e,t)}}}function ct(t){let e,o,r;return o=new rt({}),{c(){e=h("div"),F(o.$$.fragment),b(e,"class","text-center")},m(t,n){p(t,e,n),G(o,e,null),r=!0},p:n,i(t){r||(B(o.$$.fragment,t),r=!0)},o(t){R(o.$$.fragment,t),r=!1},d(t){t&&$(e),J(o)}}}function st(t){let e,n,o,r;const i=[ct,it],c=[];function s(t,e){return void 0===t[0]?0:1}return e=s(t),n=c[e]=i[e](t),{c(){n.c(),o=v()},m(t,n){c[e].m(t,n),p(t,o,n),r=!0},p(t,[r]){let l=e;e=s(t),e===l?c[e].p(t,r):(H(),R(c[l],1,1,(()=>{c[l]=null})),I(),n=c[e],n?n.p(t,r):(n=c[e]=i[e](t),n.c()),B(n,1),n.m(o.parentNode,o))},i(t){r||(B(n),r=!0)},o(t){R(n),r=!1},d(t){c[e].d(t),t&&$(o)}}}function lt(t,e,n){let o,{field:r}=e,{args:i}=e;return t.$$set=t=>{"field"in t&&n(1,r=t.field),"args"in t&&n(2,i=t.args)},t.$$.update=()=>{6&t.$$.dirty&&void 0!==r&&void 0!==i&&async function(){const t=await fetch(`${window._config.ORIGIN}/ssr/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({field:r,args:i})});try{n(0,o=await t.text())}catch(t){n(0,o=`<div class="alert alert-danger">Error: ${t.toString()}</div>`)}}()},[o,r,i]}var at=class extends z{constructor(t){super(),X(this,t,lt,st,s,{field:1,args:2})}};function ut(t,e,n){const o=t.slice();return o[3]=e[n],o}function dt(t){let e,n,o=Object.values(t[0].choices[t[2]]),r=[];for(let e=0;e<o.length;e+=1)r[e]=ft(ut(t,o,e));const i=t=>R(r[t],1,1,(()=>{r[t]=null}));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=v()},m(t,o){for(let e=0;e<r.length;e+=1)r[e].m(t,o);p(t,e,o),n=!0},p(t,n){if(5&n){let c;for(o=Object.values(t[0].choices[t[2]]),c=0;c<o.length;c+=1){const i=ut(t,o,c);r[c]?(r[c].p(i,n),B(r[c],1)):(r[c]=ft(i),r[c].c(),B(r[c],1),r[c].m(e.parentNode,e))}for(H(),c=o.length;c<r.length;c+=1)i(c);I()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)B(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)R(r[t]);n=!1},d(t){g(r,t),t&&$(e)}}}function ft(t){let e,n;return e=new at({props:{field:t[3].field,args:t[3].args}}),{c(){F(e.$$.fragment)},m(t,o){G(e,t,o),n=!0},p(t,n){const o={};5&n&&(o.field=t[3].field),5&n&&(o.args=t[3].args),e.$set(o)},i(t){n||(B(e.$$.fragment,t),n=!0)},o(t){R(e.$$.fragment,t),n=!1},d(t){J(e,t)}}}function pt(t){let e,n,o=void 0!==t[2]&&null!==t[2]&&dt(t);return{c(){o&&o.c(),e=v()},m(t,r){o&&o.m(t,r),p(t,e,r),n=!0},p(t,n){void 0!==t[2]&&null!==t[2]?o?(o.p(t,n),4&n&&B(o,1)):(o=dt(t),o.c(),B(o,1),o.m(e.parentNode,e)):o&&(H(),R(o,1,1,(()=>{o=null})),I())},i(t){n||(B(o),n=!0)},o(t){R(o),n=!1},d(t){o&&o.d(t),t&&$(e)}}}function $t(t){let e,n,o,r,i,c,s;function l(e){t[1](e)}let a={$$slots:{default:[pt,({tab:t})=>({2:t}),({tab:t})=>t?4:0]},$$scope:{ctx:t}};return void 0!==t[0]&&(a.args=t[0]),e=new Z({props:a}),k.push((()=>function(t,e,n){const o=t.$$.props.args;void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}(e,0,l))),{c(){F(e.$$.fragment),o=y(),r=h("input"),b(r,"type","text"),b(r,"class","hidden"),b(r,"name",i=t[0].name),r.value=c=t[0].value},m(t,n){G(e,t,n),p(t,o,n),p(t,r,n),s=!0},p(t,[o]){const l={};var a;69&o&&(l.$$scope={dirty:o,ctx:t}),!n&&1&o&&(n=!0,l.args=t[0],a=()=>n=!1,O.push(a)),e.$set(l),(!s||1&o&&i!==(i=t[0].name))&&b(r,"name",i),(!s||1&o&&c!==(c=t[0].value)&&r.value!==c)&&(r.value=c)},i(t){s||(B(e.$$.fragment,t),s=!0)},o(t){R(e.$$.fragment,t),s=!1},d(t){J(e,t),t&&$(o),t&&$(r)}}}function gt(t,e,n){let{args:o}=e;return t.$$set=t=>{"args"in t&&n(0,o=t.args)},[o,function(t){o=t,n(0,o)}]}var ht=class extends z{constructor(t){super(),X(this,t,gt,$t,s,{args:0})}}}(),e}()}));