import{S as F,i as Q,s as W,k as w,l as E,m as B,h as k,n as b,b as q,J as j,H as C,q as L,a as y,r as N,c as z,G as g,K as D,u as U,g as O,f as X,d as S,L as Y,M as x,v as Z,N as ee,w as te,O as le,y as ne,z as re,A as ae,P as se,B as oe}from"../chunks/index.6cd0e8bf.js";const ce=!0,ge=Object.freeze(Object.defineProperty({__proto__:null,prerender:ce},Symbol.toStringTag,{value:"Module"}));function ue(n){let t,l,r,i;return{c(){t=w("td"),this.h()},l(e){t=E(e,"TD",{class:!0});var u=B(t);u.forEach(k),this.h()},h(){b(t,"class",l="cell "+(n[0]==0?"black":"")+" "+(n[0]==2?"green":"")+" svelte-rpclt")},m(e,u){q(e,t,u),r||(i=j(t,"click",n[1]),r=!0)},p(e,[u]){u&1&&l!==(l="cell "+(e[0]==0?"black":"")+" "+(e[0]==2?"green":"")+" svelte-rpclt")&&b(t,"class",l)},i:C,o:C,d(e){e&&k(t),r=!1,i()}}}function ie(n,t,l){let{val:r}=t;const i=()=>l(0,r=Math.abs(r-1));return n.$$set=e=>{"val"in e&&l(0,r=e.val)},[r,i]}class fe extends F{constructor(t){super(),Q(this,t,ie,ue,W,{val:0})}}function G(n,t,l){const r=n.slice();return r[0]=t[l],r[8]=t,r[9]=l,r}function H(n,t,l){const r=n.slice();return r[1]=t[l],r[10]=t,r[11]=l,r}function J(n){let t,l,r;function i(u){n[5](u,n[9],n[11])}let e={};return n[2][n[9]][n[11]]!==void 0&&(e.val=n[2][n[9]][n[11]]),t=new fe({props:e}),te.push(()=>le(t,"val",i)),{c(){ne(t.$$.fragment)},l(u){re(t.$$.fragment,u)},m(u,a){ae(t,u,a),r=!0},p(u,a){n=u;const s={};!l&&a&4&&(l=!0,s.val=n[2][n[9]][n[11]],se(()=>l=!1)),t.$set(s)},i(u){r||(O(t.$$.fragment,u),r=!0)},o(u){S(t.$$.fragment,u),r=!1},d(u){oe(t,u)}}}function K(n){let t,l,r,i=n[0],e=[];for(let a=0;a<i.length;a+=1)e[a]=J(H(n,i,a));const u=a=>S(e[a],1,1,()=>{e[a]=null});return{c(){t=w("tr");for(let a=0;a<e.length;a+=1)e[a].c();l=y()},l(a){t=E(a,"TR",{});var s=B(t);for(let o=0;o<e.length;o+=1)e[o].l(s);l=z(s),s.forEach(k)},m(a,s){q(a,t,s);for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(t,null);g(t,l),r=!0},p(a,s){if(s&4){i=a[0];let o;for(o=0;o<i.length;o+=1){const d=H(a,i,o);e[o]?(e[o].p(d,s),O(e[o],1)):(e[o]=J(d),e[o].c(),O(e[o],1),e[o].m(t,l))}for(Z(),o=i.length;o<e.length;o+=1)u(o);X()}},i(a){if(!r){for(let s=0;s<i.length;s+=1)O(e[s]);r=!0}},o(a){e=e.filter(Boolean);for(let s=0;s<e.length;s+=1)S(e[s]);r=!1},d(a){a&&k(t),Y(e,a)}}}function _e(n){let t,l,r,i,e,u,a,s,o,d,p,m,v,A,P,R,T=n[2],_=[];for(let f=0;f<T.length;f+=1)_[f]=K(G(n,T,f));const $=f=>S(_[f],1,1,()=>{_[f]=null});return{c(){t=w("main"),l=w("div"),r=L("LABIRINTO "),i=L(n[0]),e=L(" x "),u=L(n[1]),a=y(),s=w("input"),o=y(),d=w("button"),p=L("SOLVE"),m=y(),v=w("table");for(let f=0;f<_.length;f+=1)_[f].c();this.h()},l(f){t=E(f,"MAIN",{class:!0});var h=B(t);l=E(h,"DIV",{class:!0});var c=B(l);r=N(c,"LABIRINTO "),i=N(c,n[0]),e=N(c," x "),u=N(c,n[1]),a=z(c),s=E(c,"INPUT",{type:!0,min:!0,max:!0,class:!0,id:!0}),o=z(c),d=E(c,"BUTTON",{});var I=B(d);p=N(I,"SOLVE"),I.forEach(k),c.forEach(k),m=z(h),v=E(h,"TABLE",{class:!0,border:!0});var V=B(v);for(let M=0;M<_.length;M+=1)_[M].l(V);V.forEach(k),h.forEach(k),this.h()},h(){b(s,"type","range"),b(s,"min","4"),b(s,"max","20"),b(s,"class","slider"),b(s,"id","row"),b(l,"class","config svelte-uvx4jt"),b(v,"class","maze svelte-uvx4jt"),b(v,"border","1"),b(t,"class","svelte-uvx4jt")},m(f,h){q(f,t,h),g(t,l),g(l,r),g(l,i),g(l,e),g(l,u),g(l,a),g(l,s),D(s,n[0]),g(l,o),g(l,d),g(d,p),g(t,m),g(t,v);for(let c=0;c<_.length;c+=1)_[c]&&_[c].m(v,null);A=!0,P||(R=[j(s,"change",n[4]),j(s,"input",n[4]),j(d,"click",n[3])],P=!0)},p(f,[h]){if((!A||h&1)&&U(i,f[0]),(!A||h&2)&&U(u,f[1]),h&1&&D(s,f[0]),h&4){T=f[2];let c;for(c=0;c<T.length;c+=1){const I=G(f,T,c);_[c]?(_[c].p(I,h),O(_[c],1)):(_[c]=K(I),_[c].c(),O(_[c],1),_[c].m(v,null))}for(Z(),c=T.length;c<_.length;c+=1)$(c);X()}},i(f){if(!A){for(let h=0;h<T.length;h+=1)O(_[h]);A=!0}},o(f){_=_.filter(Boolean);for(let h=0;h<_.length;h+=1)S(_[h]);A=!1},d(f){f&&k(t),Y(_,f),P=!1,x(R)}}}function he(n){return new Promise(t=>setTimeout(t,n))}function pe(n,t,l){let r=3,i=r,e=[];const u=(p,m)=>p>=0&&m>=0&&p<r&&m<i&&e[p][m]!=0,a=async(p,m)=>(await he(200),p==r-1&&m==i-1?(l(2,e[p][m]=2,e),l(2,e=[...e]),!0):u(p,m)?(l(2,e[p][m]=2,e),l(2,e=[...e]),await a(p+1,m)||await a(p,m+1)?!0:(l(2,e[p][m]=1,e),l(2,e=[...e]),!1)):!1),s=async()=>{await a(0,0)};function o(){r=ee(this.value),l(0,r)}function d(p,m,v){n.$$.not_equal(e[m][v],p)&&(e[m][v]=p,l(2,e),l(0,r),l(1,i))}return n.$$.update=()=>{n.$$.dirty&3&&(l(1,i=r),l(2,e=Array(r).fill(1).map(p=>Array(i).fill(1))))},[r,i,e,s,o,d]}class de extends F{constructor(t){super(),Q(this,t,pe,_e,W,{})}}export{de as component,ge as universal};
