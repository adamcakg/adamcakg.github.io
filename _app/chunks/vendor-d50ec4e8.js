function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function l(t,n,e,o){if(t){const r=s(t,n,e,o);return t[0](r)}}function s(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function u(t,n,e,o,r,c,i){const l=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,c);if(l){const r=s(n,e,o,i);t.p(r,l)}}function a(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function f(n){return n&&c(n.destroy)?n.destroy:t}const d="undefined"!=typeof window;let m=d?()=>window.performance.now():()=>Date.now(),h=d?t=>requestAnimationFrame(t):t;const p=new Set;function _(t){p.forEach((n=>{n.c(t)||(p.delete(n),n.f())})),0!==p.size&&h(_)}let g,y=!1;function $(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function b(t,n){y?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const n=t.childNodes,e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let s=0;s<n.length;s++){const t=$(1,r+1,(t=>n[e[t]].claim_order),n[s].claim_order)-1;o[s]=e[t]+1;const c=t+1;e[c]=s,r=Math.max(c,r)}const c=[],i=[];let l=n.length-1;for(let s=e[r]+1;0!=s;s=o[s-1]){for(c.push(n[s-1]);l>=s;l--)i.push(n[l]);l--}for(;l>=0;l--)i.push(n[l]);c.reverse(),i.sort(((t,n)=>t.claim_order-n.claim_order));for(let s=0,u=0;s<i.length;s++){for(;u<c.length&&i[s].claim_order>=c[u].claim_order;)u++;const n=u<c.length?c[u]:null;t.insertBefore(i[s],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),n!==t.actual_end_child?t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling):n.parentNode!==t&&t.appendChild(n)}function x(t,n,e){y&&!e?b(t,n):(n.parentNode!==t||e&&n.nextSibling!==e)&&t.insertBefore(n,e||null)}function v(t){t.parentNode.removeChild(t)}function w(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function E(t){return document.createElement(t)}function L(t){return document.createTextNode(t)}function S(){return L(" ")}function T(){return L("")}function k(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function A(t){return Array.from(t.childNodes)}function O(t,n,e,o,r=!1){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0});const c=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const c=t[o];if(n(c))return e(c),t.splice(o,1),r||(t.claim_info.last_index=o),c}for(let o=t.claim_info.last_index-1;o>=0;o--){const c=t[o];if(n(c))return e(c),t.splice(o,1),r?t.claim_info.last_index--:t.claim_info.last_index=o,c}return o()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function N(t,n,e,o){return O(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):E(n)))}function j(t,n){return O(t,(t=>3===t.nodeType),(t=>{t.data=""+n}),(()=>L(n)),!0)}function D(t){return j(t," ")}function q(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function z(t){g=t}function B(){if(!g)throw new Error("Function called outside component initialization");return g}function C(t){B().$$.on_mount.push(t)}function M(t){B().$$.after_update.push(t)}function F(t,n){B().$$.context.set(t,n)}const I=[],P=[],X=[],Y=[],G=Promise.resolve();let H=!1;function J(t){X.push(t)}let K=!1;const Q=new Set;function R(){if(!K){K=!0;do{for(let t=0;t<I.length;t+=1){const n=I[t];z(n),U(n.$$)}for(z(null),I.length=0;P.length;)P.pop()();for(let t=0;t<X.length;t+=1){const n=X[t];Q.has(n)||(Q.add(n),n())}X.length=0}while(I.length);for(;Y.length;)Y.pop()();H=!1,K=!1,Q.clear()}}function U(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(J)}}const V=new Set;let W;function Z(){W={r:0,c:[],p:W}}function tt(){W.r||r(W.c),W=W.p}function nt(t,n){t&&t.i&&(V.delete(t),t.i(n))}function et(t,n,e,o){if(t&&t.o){if(V.has(t))return;V.add(t),W.c.push((()=>{V.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function ot(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const i=t[c],l=n[c];if(l){for(const t in i)t in l||(o[t]=1);for(const t in l)r[t]||(e[t]=l[t],r[t]=1);t[c]=l}else for(const t in i)r[t]=1}for(const i in o)i in e||(e[i]=void 0);return e}function rt(t){return"object"==typeof t&&null!==t?t:{}}function ct(t){t&&t.c()}function it(t,n){t&&t.l(n)}function lt(t,n,o,i){const{fragment:l,on_mount:s,on_destroy:u,after_update:a}=t.$$;l&&l.m(n,o),i||J((()=>{const n=s.map(e).filter(c);u?u.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(J)}function st(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){-1===t.$$.dirty[0]&&(I.push(t),H||(H=!0,G.then(R)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function at(n,e,c,i,l,s,u=[-1]){const a=g;z(n);const f=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:l,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:e.context||[]),callbacks:o(),dirty:u,skip_bound:!1};let d=!1;if(f.ctx=c?c(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return f.ctx&&l(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),d&&ut(n,t)),e})):[],f.update(),d=!0,r(f.before_update),f.fragment=!!i&&i(f.ctx),e.target){if(e.hydrate){y=!0;const t=A(e.target);f.fragment&&f.fragment.l(t),t.forEach(v)}else f.fragment&&f.fragment.c();e.intro&&nt(n.$$.fragment),lt(n,e.target,e.anchor,e.customElement),y=!1,R()}z(a)}class ft{$destroy(){st(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const dt=[];function mt(n,e=t){let o;const r=[];function c(t){if(i(n,t)&&(n=t,o)){const t=!dt.length;for(let e=0;e<r.length;e+=1){const t=r[e];t[1](),dt.push(t,n)}if(t){for(let t=0;t<dt.length;t+=2)dt[t][0](dt[t+1]);dt.length=0}}}return{set:c,update:function(t){c(t(n))},subscribe:function(i,l=t){const s=[i,l];return r.push(s),1===r.length&&(o=e(c)||t),i(n),()=>{const t=r.indexOf(s);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}var ht={$:t=>"string"==typeof t?document.querySelector(t):t,extend:(...t)=>Object.assign(...t),cumulativeOffset(t){let n=0,e=0;do{n+=t.offsetTop||0,e+=t.offsetLeft||0,t=t.offsetParent}while(t);return{top:n,left:e}},directScroll:t=>t&&t!==document&&t!==document.body,scrollTop(t,n){let e=void 0!==n;return this.directScroll(t)?e?t.scrollTop=n:t.scrollTop:e?document.documentElement.scrollTop=document.body.scrollTop=n:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},scrollLeft(t,n){let e=void 0!==n;return this.directScroll(t)?e?t.scrollLeft=n:t.scrollLeft:e?document.documentElement.scrollLeft=document.body.scrollLeft=n:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0}};const pt={container:"body",duration:500,delay:0,offset:0,easing:function(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1},onStart:t,onDone:t,onAborting:t,scrollX:!1,scrollY:!0},_t=t=>{let{offset:n,duration:e,delay:o,easing:r,x:c=0,y:i=0,scrollX:l,scrollY:s,onStart:u,onDone:a,container:f,onAborting:d,element:g}=t;"function"==typeof n&&(n=n());var y=ht.cumulativeOffset(f),$=g?ht.cumulativeOffset(g):{top:i,left:c},b=ht.scrollLeft(f),x=ht.scrollTop(f),v=$.left-y.left+n,w=$.top-y.top+n,E=v-b,L=w-x;let S=!0,T=!1,k=m()+o,A=k+e;function O(t){t||(T=!0,u(g,{x:c,y:i}))}function N(t){var n,e,o;n=f,e=x+L*t,o=b+E*t,l&&ht.scrollLeft(n,o),s&&ht.scrollTop(n,e)}function j(){S=!1}return function(t){let n;0===p.size&&h(_),new Promise((e=>{p.add(n={c:t,f:e})}))}((t=>{if(!T&&t>=k&&O(!1),T&&t>=A&&(N(1),j(),a(g,{x:c,y:i})),!S)return d(g,{x:c,y:i}),!1;if(T){N(0+1*r((t-k)/e))}return!0})),O(o),N(0),j},gt=(yt=t=>_t((t=>{let n=ht.extend({},pt,t);return n.container=ht.$(n.container),n.element=ht.$(n.element),n})(t)),(t,n)=>{let e=n;const o=t=>{t.preventDefault(),yt("string"==typeof e?{element:e}:e)};return t.addEventListener("click",o),t.addEventListener("touchstart",o),{update(t){e=t},destroy(){t.removeEventListener("click",o),t.removeEventListener("touchstart",o)}}});var yt;export{C as A,n as B,mt as C,l as D,u as E,b as F,t as G,f as H,gt as I,r as J,a as K,w as L,ft as S,A as a,k as b,N as c,v as d,E as e,x as f,j as g,q as h,at as i,ct as j,S as k,T as l,it as m,D as n,lt as o,ot as p,rt as q,Z as r,i as s,L as t,et as u,st as v,tt as w,nt as x,F as y,M as z};
