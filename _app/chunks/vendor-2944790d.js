function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function i(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(t,n,e,o){if(t){const r=l(t,n,e,o);return t[0](r)}}function l(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function a(t,n,e,o,r,i,c){const s=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,i);if(s){const r=l(n,e,o,c);t.p(r,s)}}function u(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function f(n){return n&&i(n.destroy)?n.destroy:t}const d="undefined"!=typeof window;let m=d?()=>window.performance.now():()=>Date.now(),p=d?t=>requestAnimationFrame(t):t;const h=new Set;function _(t){h.forEach((n=>{n.c(t)||(h.delete(n),n.f())})),0!==h.size&&p(_)}let $,g=!1;function y(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function v(t,n){g?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const n=t.childNodes,e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const t=y(1,r+1,(t=>n[e[t]].claim_order),n[l].claim_order)-1;o[l]=e[t]+1;const i=t+1;e[i]=l,r=Math.max(i,r)}const i=[],c=[];let s=n.length-1;for(let l=e[r]+1;0!=l;l=o[l-1]){for(i.push(n[l-1]);s>=l;s--)c.push(n[s]);s--}for(;s>=0;s--)c.push(n[s]);i.reverse(),c.sort(((t,n)=>t.claim_order-n.claim_order));for(let l=0,a=0;l<c.length;l++){for(;a<i.length&&c[l].claim_order>=i[a].claim_order;)a++;const n=a<i.length?i[a]:null;t.insertBefore(c[l],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),n!==t.actual_end_child?t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling):n.parentNode!==t&&t.appendChild(n)}function b(t,n,e){g&&!e?v(t,n):(n.parentNode!==t||e&&n.nextSibling!==e)&&t.insertBefore(n,e||null)}function x(t){t.parentNode.removeChild(t)}function w(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function E(t){return document.createElement(t)}function L(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function T(){return S(" ")}function k(){return S("")}function O(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function A(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function I(t,n,e){t.setAttributeNS("http://www.w3.org/1999/xlink",n,e)}function N(t){return Array.from(t.childNodes)}function D(t,n,e,o,r=!1){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0});const i=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const i=t[o];if(n(i))return e(i),t.splice(o,1),r||(t.claim_info.last_index=o),i}for(let o=t.claim_info.last_index-1;o>=0;o--){const i=t[o];if(n(i))return e(i),t.splice(o,1),r?t.claim_info.last_index--:t.claim_info.last_index=o,i}return o()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function j(t,n,e,o){return D(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o?L(n):E(n)))}function C(t,n){return D(t,(t=>3===t.nodeType),(t=>{t.data=""+n}),(()=>S(n)),!0)}function M(t){return C(t," ")}function B(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function P(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function q(t,n,e){t.classList[e?"add":"remove"](n)}function z(t){$=t}function V(){if(!$)throw new Error("Function called outside component initialization");return $}function F(t){V().$$.on_mount.push(t)}function X(t){V().$$.after_update.push(t)}function Y(){const t=V();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);o.slice().forEach((n=>{n.call(t,r)}))}}}function H(t,n){V().$$.context.set(t,n)}const R=[],G=[],J=[],K=[],Q=Promise.resolve();let U=!1;function W(t){J.push(t)}function Z(t){K.push(t)}let tt=!1;const nt=new Set;function et(){if(!tt){tt=!0;do{for(let t=0;t<R.length;t+=1){const n=R[t];z(n),ot(n.$$)}for(z(null),R.length=0;G.length;)G.pop()();for(let t=0;t<J.length;t+=1){const n=J[t];nt.has(n)||(nt.add(n),n())}J.length=0}while(R.length);for(;K.length;)K.pop()();U=!1,tt=!1,nt.clear()}}function ot(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(W)}}const rt=new Set;let it;function ct(){it={r:0,c:[],p:it}}function st(){it.r||r(it.c),it=it.p}function lt(t,n){t&&t.i&&(rt.delete(t),t.i(n))}function at(t,n,e,o){if(t&&t.o){if(rt.has(t))return;rt.add(t),it.c.push((()=>{rt.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function ut(t,n){const e={},o={},r={$$scope:1};let i=t.length;for(;i--;){const c=t[i],s=n[i];if(s){for(const t in c)t in s||(o[t]=1);for(const t in s)r[t]||(e[t]=s[t],r[t]=1);t[i]=s}else for(const t in c)r[t]=1}for(const c in o)c in e||(e[c]=void 0);return e}function ft(t){return"object"==typeof t&&null!==t?t:{}}function dt(t,n,e){const o=t.$$.props[n];void 0!==o&&(t.$$.bound[o]=e,e(t.$$.ctx[o]))}function mt(t){t&&t.c()}function pt(t,n){t&&t.l(n)}function ht(t,n,o,c){const{fragment:s,on_mount:l,on_destroy:a,after_update:u}=t.$$;s&&s.m(n,o),c||W((()=>{const n=l.map(e).filter(i);a?a.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(W)}function _t(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function $t(t,n){-1===t.$$.dirty[0]&&(R.push(t),U||(U=!0,Q.then(et)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function gt(n,e,i,c,s,l,a=[-1]){const u=$;z(n);const f=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:e.context||[]),callbacks:o(),dirty:a,skip_bound:!1};let d=!1;if(f.ctx=i?i(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return f.ctx&&s(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),d&&$t(n,t)),e})):[],f.update(),d=!0,r(f.before_update),f.fragment=!!c&&c(f.ctx),e.target){if(e.hydrate){g=!0;const t=N(e.target);f.fragment&&f.fragment.l(t),t.forEach(x)}else f.fragment&&f.fragment.c();e.intro&&lt(n.$$.fragment),ht(n,e.target,e.anchor,e.customElement),g=!1,et()}z(u)}class yt{$destroy(){_t(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const vt=[];function bt(n,e=t){let o;const r=[];function i(t){if(c(n,t)&&(n=t,o)){const t=!vt.length;for(let e=0;e<r.length;e+=1){const t=r[e];t[1](),vt.push(t,n)}if(t){for(let t=0;t<vt.length;t+=2)vt[t][0](vt[t+1]);vt.length=0}}}return{set:i,update:function(t){i(t(n))},subscribe:function(c,s=t){const l=[c,s];return r.push(l),1===r.length&&(o=e(i)||t),c(n),()=>{const t=r.indexOf(l);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function xt(t){let n,e,o;const r=t[10].default,i=s(r,t,t[9],null);return{c(){n=E("div"),i&&i.c(),this.h()},l(t){n=j(t,"DIV",{style:!0});var e=N(n);i&&i.l(e),e.forEach(x),this.h()},h(){A(n,"style",e="animation: "+t[1]+"; "+t[3])},m(t,e){b(t,n,e),i&&i.m(n,null),o=!0},p(t,c){i&&i.p&&(!o||512&c)&&a(i,r,t,t[9],o?c:-1,null,null),(!o||10&c&&e!==(e="animation: "+t[1]+"; "+t[3]))&&A(n,"style",e)},i(t){o||(lt(i,t),o=!0)},o(t){at(i,t),o=!1},d(t){t&&x(n),i&&i.d(t)}}}function wt(t){let n,e,o;const r=t[10].default,i=s(r,t,t[9],null);return{c(){n=E("div"),i&&i.c(),this.h()},l(t){n=j(t,"DIV",{style:!0});var e=N(n);i&&i.l(e),e.forEach(x),this.h()},h(){A(n,"style",e="animation: "+t[0]+"; "+t[3])},m(t,e){b(t,n,e),i&&i.m(n,null),o=!0},p(t,c){i&&i.p&&(!o||512&c)&&a(i,r,t,t[9],o?c:-1,null,null),(!o||9&c&&e!==(e="animation: "+t[0]+"; "+t[3]))&&A(n,"style",e)},i(t){o||(lt(i,t),o=!0)},o(t){at(i,t),o=!1},d(t){t&&x(n),i&&i.d(t)}}}function Et(t){let n,e,o,r;const i=[wt,xt],c=[];function s(t,n){return t[4]?0:1}return e=s(t),o=c[e]=i[e](t),{c(){n=E("div"),o.c(),this.h()},l(t){n=j(t,"DIV",{id:!0,style:!0});var e=N(n);o.l(e),e.forEach(x),this.h()},h(){A(n,"id",t[5]),A(n,"style",t[2])},m(t,o){b(t,n,o),c[e].m(n,null),r=!0},p(t,[l]){let a=e;e=s(t),e===a?c[e].p(t,l):(ct(),at(c[a],1,1,(()=>{c[a]=null})),st(),o=c[e],o?o.p(t,l):(o=c[e]=i[e](t),o.c()),lt(o,1),o.m(n,null)),(!r||4&l)&&A(n,"style",t[2])},i(t){r||(lt(o),r=!0)},o(t){at(o),r=!1},d(t){t&&x(n),c[e].d()}}}function Lt(t,n,e){let{$$slots:o={},$$scope:r}=n,{animation:i="none"}=n,{animation_out:c="none; opacity: 0"}=n,{once:s=!1}=n,{top:l=0}=n,{bottom:a=0}=n,{css_observer:u=""}=n,{css_animation:f=""}=n;const d=Y();let m=!0;const p=`__saos-${Math.random()}__`;function h(t){const n=t.getBoundingClientRect();return e(4,m=n.top+l<window.innerHeight&&n.bottom-a>0),m&&s&&window.removeEventListener("scroll",verify),window.addEventListener("scroll",h),()=>window.removeEventListener("scroll",h)}return F((()=>{const t=document.getElementById(p);return IntersectionObserver?function(t){const n=new IntersectionObserver((o=>{e(4,m=o[0].isIntersecting),m&&s&&n.unobserve(t)}),{rootMargin:`${-a}px 0px ${-l}px 0px`});return n.observe(t),()=>n.unobserve(t)}(t):h(t)})),t.$$set=t=>{"animation"in t&&e(0,i=t.animation),"animation_out"in t&&e(1,c=t.animation_out),"once"in t&&e(6,s=t.once),"top"in t&&e(7,l=t.top),"bottom"in t&&e(8,a=t.bottom),"css_observer"in t&&e(2,u=t.css_observer),"css_animation"in t&&e(3,f=t.css_animation),"$$scope"in t&&e(9,r=t.$$scope)},t.$$.update=()=>{16&t.$$.dirty&&d("update",{observing:m})},[i,c,u,f,m,p,s,l,a,r,o]}class St extends yt{constructor(t){super(),gt(this,t,Lt,Et,c,{animation:0,animation_out:1,once:6,top:7,bottom:8,css_observer:2,css_animation:3})}}var Tt={$:t=>"string"==typeof t?document.querySelector(t):t,extend:(...t)=>Object.assign(...t),cumulativeOffset(t){let n=0,e=0;do{n+=t.offsetTop||0,e+=t.offsetLeft||0,t=t.offsetParent}while(t);return{top:n,left:e}},directScroll:t=>t&&t!==document&&t!==document.body,scrollTop(t,n){let e=void 0!==n;return this.directScroll(t)?e?t.scrollTop=n:t.scrollTop:e?document.documentElement.scrollTop=document.body.scrollTop=n:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},scrollLeft(t,n){let e=void 0!==n;return this.directScroll(t)?e?t.scrollLeft=n:t.scrollLeft:e?document.documentElement.scrollLeft=document.body.scrollLeft=n:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0}};const kt={container:"body",duration:500,delay:0,offset:0,easing:function(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1},onStart:t,onDone:t,onAborting:t,scrollX:!1,scrollY:!0},Ot=t=>{let{offset:n,duration:e,delay:o,easing:r,x:i=0,y:c=0,scrollX:s,scrollY:l,onStart:a,onDone:u,container:f,onAborting:d,element:$}=t;"function"==typeof n&&(n=n());var g=Tt.cumulativeOffset(f),y=$?Tt.cumulativeOffset($):{top:c,left:i},v=Tt.scrollLeft(f),b=Tt.scrollTop(f),x=y.left-g.left+n,w=y.top-g.top+n,E=x-v,L=w-b;let S=!0,T=!1,k=m()+o,O=k+e;function A(t){t||(T=!0,a($,{x:i,y:c}))}function I(t){var n,e,o;n=f,e=b+L*t,o=v+E*t,s&&Tt.scrollLeft(n,o),l&&Tt.scrollTop(n,e)}function N(){S=!1}return function(t){let n;0===h.size&&p(_),new Promise((e=>{h.add(n={c:t,f:e})}))}((t=>{if(!T&&t>=k&&A(!1),T&&t>=O&&(I(1),N(),u($,{x:i,y:c})),!S)return d($,{x:i,y:c}),!1;if(T){I(0+1*r((t-k)/e))}return!0})),A(o),I(0),N},At=(It=t=>Ot((t=>{let n=Tt.extend({},kt,t);return n.container=Tt.$(n.container),n.element=Tt.$(n.element),n})(t)),(t,n)=>{let e=n;const o=t=>{t.preventDefault(),It("string"==typeof e?{element:e}:e)};return t.addEventListener("click",o),t.addEventListener("touchstart",o),{update(t){e=t},destroy(){t.removeEventListener("click",o),t.removeEventListener("touchstart",o)}}});var It;export{F as A,n as B,bt as C,s as D,a as E,v as F,t as G,L as H,q as I,O as J,St as K,G as L,dt as M,Z as N,f as O,At as P,r as Q,u as R,yt as S,w as T,I as U,P as V,N as a,A as b,j as c,x as d,E as e,b as f,C as g,B as h,gt as i,mt as j,T as k,k as l,pt as m,M as n,ht as o,ut as p,ft as q,ct as r,c as s,S as t,at as u,_t as v,st as w,lt as x,H as y,X as z};
