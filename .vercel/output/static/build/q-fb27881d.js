import{R as p,b as _,q as b,j as P,L as u,E as k,h as f,_ as h}from"./q-0b4f0b7d.js";import{u as A,a as g,g as L,b as R}from"./q-97f4086f.js";const C=async(a,e)=>{const[t,o,r,n]=p();e.hasAttribute("preventdefault:click")&&(e.hasAttribute("q:nbs")?await t(location.href,{type:"popstate"}):e.href&&(e.setAttribute("aria-pressed","true"),await t(e.href,{forceReload:o,replaceState:r,scroll:n}),e.removeAttribute("aria-pressed")))},D=a=>{const e=A(),t=g(),{onClick$:o,reload:r,replaceState:n,scroll:v,...s}=(()=>a)(),i=_(()=>L({...s,reload:r},t)),l=_(()=>R(a,i,t));s["preventdefault:click"]=!!i,s.href=i||a.href;const c=l!=null?u(f(()=>h(()=>import("./q-0fc65a1f.js"),["build/q-0fc65a1f.js","build/q-97f4086f.js","build/q-0b4f0b7d.js"]),"s_eBQ0vFsFKsk")):void 0,d=u(f(()=>h(()=>Promise.resolve().then(()=>E),void 0),"s_i1Cv0pYJNR0",[e,r,n,v]));return b("a",{...s,children:P(k,null,3,"AD_0"),"data-prefetch":l,onClick$:[o,d],onFocus$:c,onMouseOver$:c,onQVisible$:c},null,0,"AD_1")},E=Object.freeze(Object.defineProperty({__proto__:null,s_8gdLBszqbaM:D,s_i1Cv0pYJNR0:C},Symbol.toStringTag,{value:"Module"}));export{D as s_8gdLBszqbaM,C as s_i1Cv0pYJNR0};