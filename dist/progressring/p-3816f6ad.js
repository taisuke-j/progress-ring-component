let e,t,n=!1,l=!1;const o="undefined"!=typeof window?window:{},s=o.document||{head:{}},c={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},r=e=>Promise.resolve(e),i=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),a=new WeakMap,u=e=>"sc-"+e.o,f={},$=e=>"object"==(e=typeof e)||"function"===e,d=(e,t,...n)=>{let l=null,o=!1,s=!1,c=[];const r=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?r(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof e&&!$(l))&&(l+=""),o&&s?c[c.length-1].i+=l:c.push(o?p(null,l):l),s=o)};if(r(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}const i=p(e,null);return i.u=t,c.length>0&&(i.$=c),i},p=(e,t)=>({t:0,p:e,i:t,h:null,$:null,u:null}),h={},y=(e,t,n,l,o,s)=>{if(n!==l){let c=_(e,t);if(t.toLowerCase(),"class"===t){const t=e.classList,o=m(n),s=m(l);t.remove(...o.filter((e=>e&&!s.includes(e)))),t.add(...s.filter((e=>e&&!o.includes(e))))}else if("ref"===t)l&&l(e);else{const r=$(l);if((c||r&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let o=null==l?"":l;"list"===t?c=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(e){}null==l||!1===l?!1===l&&""!==e.getAttribute(t)||e.removeAttribute(t):(!c||4&s||o)&&!r&&e.setAttribute(t,l=!0===l?"":l)}}},w=/\s/,m=e=>e?e.split(w):[],b=(e,t,n,l)=>{const o=11===t.h.nodeType&&t.h.host?t.h.host:t.h,s=e&&e.u||f,c=t.u||f;for(l in s)l in c||y(o,l,s[l],void 0,n,t.t);for(l in c)y(o,l,s[l],c[l],n,t.t)},g=(t,l,o)=>{let c,r,i=l.$[o],a=0;if(null!==i.i)c=i.h=s.createTextNode(i.i);else{if(n||(n="svg"===i.p),c=i.h=s.createElementNS(n?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",i.p),n&&"foreignObject"===i.p&&(n=!1),b(null,i,n),null!=e&&c["s-si"]!==e&&c.classList.add(c["s-si"]=e),i.$)for(a=0;a<i.$.length;++a)r=g(t,i,a),r&&c.appendChild(r);"svg"===i.p?n=!1:"foreignObject"===c.tagName&&(n=!0)}return c},S=(e,n,l,o,s,c)=>{let r,i=e;for(i.shadowRoot&&i.tagName===t&&(i=i.shadowRoot);s<=c;++s)o[s]&&(r=g(null,l,s),r&&(o[s].h=r,i.insertBefore(r,n)))},j=(e,t,n,l,o)=>{for(;t<=n;++t)(l=e[t])&&(o=l.h,k(l),o.remove())},v=(e,t)=>e.p===t.p,O=(e,t)=>{const l=t.h=e.h,o=e.$,s=t.$,c=t.p,r=t.i;null===r?(n="svg"===c||"foreignObject"!==c&&n,b(e,t,n),null!==o&&null!==s?((e,t,n,l)=>{let o,s=0,c=0,r=t.length-1,i=t[0],a=t[r],u=l.length-1,f=l[0],$=l[u];for(;s<=r&&c<=u;)null==i?i=t[++s]:null==a?a=t[--r]:null==f?f=l[++c]:null==$?$=l[--u]:v(i,f)?(O(i,f),i=t[++s],f=l[++c]):v(a,$)?(O(a,$),a=t[--r],$=l[--u]):v(i,$)?(O(i,$),e.insertBefore(i.h,a.h.nextSibling),i=t[++s],$=l[--u]):v(a,f)?(O(a,f),e.insertBefore(a.h,i.h),a=t[--r],f=l[++c]):(o=g(t&&t[c],n,c),f=l[++c],o&&i.h.parentNode.insertBefore(o,i.h));s>r?S(e,null==l[u+1]?null:l[u+1].h,n,l,c,u):c>u&&j(t,s,r)})(l,o,t,s):null!==s?(null!==e.i&&(l.textContent=""),S(l,null,t,s,0,s.length-1)):null!==o&&j(o,0,o.length-1),n&&"svg"===c&&(n=!1)):e.i!==r&&(l.data=r)},k=e=>{e.u&&e.u.ref&&e.u.ref(null),e.$&&e.$.map(k)},C=(e,t)=>{t&&!e.m&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.m=t)))},M=(e,t)=>{if(e.t|=16,!(4&e.t))return C(e,e.g),ee((()=>x(e,t)));e.t|=512},x=(e,t)=>{const n=e.S;let l;return t&&(l=W(n,"componentWillLoad")),A(l,(()=>L(e,n,t)))},L=async(e,t,n)=>{const l=e.j,o=l["s-rc"];n&&(e=>{const t=e.v,n=e.j,l=t.t,o=((e,t)=>{let n=u(t),l=I.get(n);if(e=11===e.nodeType?e:s,l)if("string"==typeof l){let t,o=a.get(e=e.head||e);o||a.set(e,o=new Set),o.has(n)||(t=s.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(e);P(e,t),o&&(o.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>E(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},P=(n,l)=>{try{l=l.render(),n.t&=-17,n.t|=2,((n,l)=>{const o=n.j,s=n.v,c=n.O||p(null,null),r=(e=>e&&e.p===h)(l)?l:d(null,null,l);t=o.tagName,s.k&&(r.u=r.u||{},s.k.map((([e,t])=>r.u[t]=o[e]))),r.p=null,r.t|=4,n.O=r,r.h=c.h=o.shadowRoot||o,e=o["s-sc"],O(c,r)})(n,l)}catch(e){z(e,n.j)}return null},E=e=>{const t=e.j,n=e.S,l=e.g;64&e.t||(e.t|=64,F(t),W(n,"componentDidLoad"),e.C(t),l||T()),e.m&&(e.m(),e.m=void 0),512&e.t&&Z((()=>M(e,!1))),e.t&=-517},T=()=>{F(s.documentElement),Z((()=>(e=>{const t=c.ce("appload",{detail:{namespace:"progressring"}});return e.dispatchEvent(t),t})(o)))},W=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){z(e)}},A=(e,t)=>e&&e.then?e.then(t):t(),F=e=>e.classList.add("hydrated"),R=(e,t,n)=>{if(t.M){e.watchers&&(t.L=e.watchers);const l=Object.entries(t.M),o=e.prototype;if(l.map((([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,e,{get(){return((e,t)=>H(this).P.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=H(e),s=o.j,c=o.P.get(t),r=o.t,i=o.S;if(n=((e,t)=>null==e||$(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.M[t][0]),!(8&r&&void 0!==c||n===c)&&(o.P.set(t,n),i)){if(l.L&&128&r){const e=l.L[t];e&&e.map((e=>{try{i[e](n,c,t)}catch(e){z(e,s)}}))}2==(18&r)&&M(o,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,l){c.jmp((()=>{const t=n.get(e);this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,l])=>{const o=l[1]||e;return n.set(o,e),512&l[0]&&t.k.push([e,o]),o}))}}return e},U=e=>{W(e,"connectedCallback")},q=(e,t={})=>{const n=[],l=t.exclude||[],r=o.customElements,a=s.head,f=a.querySelector("meta[charset]"),$=s.createElement("style"),d=[];let p,h=!0;Object.assign(c,t),c.l=new URL(t.resourcesUrl||"./",s.baseURI).href,e.map((e=>e[1].map((t=>{const o={t:t[0],o:t[1],M:t[2],T:t[3]};o.M=t[2],o.k=[],o.L={};const s=o.o,a=class extends HTMLElement{constructor(e){super(e),V(e=this,o),1&o.t&&e.attachShadow({mode:"open"})}connectedCallback(){p&&(clearTimeout(p),p=null),h?d.push(this):c.jmp((()=>(e=>{if(0==(1&c.t)){const t=H(e),n=t.v,l=()=>{};if(1&t.t)U(t.S);else{t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){C(t,t.g=n);break}}n.M&&Object.entries(n.M).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,o)=>{if(0==(32&t.t)){{if(t.t|=32,(o=G(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(n.L=o.watchers,R(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(e){z(e)}t.t&=-9,t.t|=128,e(),U(t.S)}if(o.style){let e=o.style;const t=u(n);if(!I.has(t)){const l=()=>{};((e,t,n)=>{let l=I.get(e);i&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,I.set(e,l)})(t,e,!!(1&n.t)),l()}}}const s=t.g,c=()=>M(t,!0);s&&s["s-rc"]?s["s-rc"].push(c):c()})(0,t,n)}l()}})(this)))}disconnectedCallback(){c.jmp((()=>(()=>{0==(1&c.t)&&W(H(this).S,"disconnectedCallback")})()))}componentOnReady(){return H(this).W}};o.A=e[0],l.includes(s)||r.get(s)||(n.push(s),r.define(s,R(a,o,1)))})))),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),a.insertBefore($,f?f.nextSibling:a.firstChild),h=!1,d.length?d.map((e=>e.connectedCallback())):c.jmp((()=>p=setTimeout(T,30)))},D=new WeakMap,H=e=>D.get(e),N=(e,t)=>D.set(t.S=e,t),V=(e,t)=>{const n={t:0,j:e,v:t,P:new Map};return n.W=new Promise((e=>n.C=e)),e["s-p"]=[],e["s-rc"]=[],D.set(e,n)},_=(e,t)=>t in e,z=(e,t)=>(0,console.error)(e,t),B=new Map,G=e=>{const t=e.o.replace(/-/g,"_"),n=e.A,l=B.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(B.set(n,e),e[t])),z)},I=new Map,J=[],K=[],Q=(e,t)=>n=>{e.push(n),l||(l=!0,t&&4&c.t?Z(Y):c.raf(Y))},X=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){z(e)}e.length=0},Y=()=>{X(J),X(K),(l=J.length>0)&&c.raf(Y)},Z=e=>r().then(e),ee=Q(K,!0);export{q as b,d as h,r as p,N as r}