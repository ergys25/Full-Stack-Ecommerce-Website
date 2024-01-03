import{s as L,c as J,n as K}from"../chunks/scheduler.20e5b616.js";import{S as Q,i as W,g as d,s as C,m as E,h as u,j as b,f as m,c as T,n as D,y as X,k as r,a as Y,x as t,A as Z,o as G}from"../chunks/index.314d0a10.js";import{a as tt}from"../chunks/cart.54eca98a.js";async function et({fetch:o,params:e}){return await(await o(`/api/products/${e.id}`,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}})).json()}const nt=Object.freeze(Object.defineProperty({__proto__:null,load:et},Symbol.toStringTag,{value:"Module"}));function at(o){let e,i,a,v,h,F,s,_,x=o[0].product.name+"",S,V,p,k,j=parseFloat(o[0].product.price).toFixed(2)+"",w,O,P,U,$,g,y=o[0].product.description+"",I,q,f,H="Add to cart",z,M;return{c(){e=d("div"),i=d("div"),a=d("img"),F=C(),s=d("div"),_=d("h1"),S=E(x),V=C(),p=d("div"),k=E("$"),w=E(j),O=E(" USD"),P=C(),U=d("hr"),$=C(),g=d("p"),I=E(y),q=C(),f=d("button"),f.textContent=H,this.h()},l(n){e=u(n,"DIV",{class:!0});var l=b(e);i=u(l,"DIV",{class:!0});var B=b(i);a=u(B,"IMG",{src:!0,alt:!0,class:!0}),B.forEach(m),F=T(l),s=u(l,"DIV",{class:!0});var c=b(s);_=u(c,"H1",{class:!0});var N=b(_);S=D(N,x),N.forEach(m),V=T(c),p=u(c,"DIV",{class:!0});var A=b(p);k=D(A,"$"),w=D(A,j),O=D(A," USD"),A.forEach(m),P=T(c),U=u(c,"HR",{}),$=T(c),g=u(c,"P",{class:!0});var R=b(g);I=D(R,y),R.forEach(m),q=T(c),f=u(c,"BUTTON",{class:!0,"data-svelte-h":!0}),X(f)!=="svelte-jxgwvz"&&(f.textContent=H),c.forEach(m),l.forEach(m),this.h()},h(){J(a.src,v=o[0].product.image)||r(a,"src",v),r(a,"alt",h=o[0].product.name),r(a,"class","h-[500px] group-hover:h-[620px] duration-500"),r(i,"class","col-span-2 h-full flex items-center justify-center"),r(_,"class","text-5xl bold"),r(p,"class","bg-blue-500 w-fit py-1.5 px-2.5 rounded-full"),r(g,"class","text-neutral-400"),r(f,"class","bg-blue-600 rounded-full px-6 py-4 hover:bg-blue-500 duration-300"),r(s,"class","flex flex-col space-y-4"),r(e,"class","text-white group grid grid-cols-3 gap-6 mt-6 bg-black rounded-md h-[720px] border border-neutral-800 p-10")},m(n,l){Y(n,e,l),t(e,i),t(i,a),t(e,F),t(e,s),t(s,_),t(_,S),t(s,V),t(s,p),t(p,k),t(p,w),t(p,O),t(s,P),t(s,U),t(s,$),t(s,g),t(g,I),t(s,q),t(s,f),z||(M=Z(f,"click",o[1]),z=!0)},p(n,[l]){l&1&&!J(a.src,v=n[0].product.image)&&r(a,"src",v),l&1&&h!==(h=n[0].product.name)&&r(a,"alt",h),l&1&&x!==(x=n[0].product.name+"")&&G(S,x),l&1&&j!==(j=parseFloat(n[0].product.price).toFixed(2)+"")&&G(w,j),l&1&&y!==(y=n[0].product.description+"")&&G(I,y)},i:K,o:K,d(n){n&&m(e),z=!1,M()}}}function st(o,e,i){let{data:a}=e;const v=()=>tt(a.product);return o.$$set=h=>{"data"in h&&i(0,a=h.data)},[a,v]}class ct extends Q{constructor(e){super(),W(this,e,st,at,L,{data:0})}}export{ct as component,nt as universal};