function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},l=n.parcelRequire94c2;function s(e){let t,n,r=e.length;for(;0!==r;)n=Math.floor(Math.random()*r),r-=1,t=e[r],e[r]=e[n],e[n]=t;return e}null==l&&((l=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},n.parcelRequire94c2=l),l.register("27Lyk",(function(t,n){var r,o;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>o),(e=>o=e));var l={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)l[t[n]]=e[t[n]]},o=function(e){var t=l[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),l("27Lyk").register(JSON.parse('{"9vqfN":"index.42984c7d.js","kkacW":"25-pikachu.9b1d8215.svg","1TbxJ":"94-gengar.aa73851d.svg","8WavD":"101-electrode.913c04b0.svg","fbOWL":"143-snorlax.9844c055.svg","aiXix":"149-dragonite.59e1e629.svg","jVXFP":"150-mewtwo.054e76c6.svg","hByRc":"175-togepi.77f6b592.svg","idJF6":"202-wobbuffet.f58911bd.svg"}'));let a=0,c=0;const i=()=>{let e="";e=c<10?"0":"",document.getElementById("ms").innerHTML=e+c,c++,c>=60&&(c=0,a++,e=a<10?"0":"",document.getElementById("mm").innerHTML=e+a)},d=()=>{document.querySelector(".reload-btn").addEventListener("click",(()=>location.reload()));const e=document.getElementById("stats-modal");e.style.display="block",window.onclick=t=>{t.target==e&&(e.style.display="none")}};var u;u=new URL(l("27Lyk").resolve("kkacW"),import.meta.url).toString();var m;m=new URL(l("27Lyk").resolve("1TbxJ"),import.meta.url).toString();var p;p=new URL(l("27Lyk").resolve("8WavD"),import.meta.url).toString();var f;f=new URL(l("27Lyk").resolve("fbOWL"),import.meta.url).toString();var v;v=new URL(l("27Lyk").resolve("aiXix"),import.meta.url).toString();var g;g=new URL(l("27Lyk").resolve("jVXFP"),import.meta.url).toString();var y;y=new URL(l("27Lyk").resolve("hByRc"),import.meta.url).toString();var L;let b;L=new URL(l("27Lyk").resolve("idJF6"),import.meta.url).toString();let E=0;const S=()=>{16===document.querySelectorAll(".flip").length&&(clearInterval(b),(()=>{const e=document.querySelector(".modal-content"),t=document.getElementById("mm"),n=document.getElementById("ms"),r=`<p class='stats'>Time to complete: <span>${t.innerText} Minutes and ${n.innerText} Seconds</span></p>\n                 <p class='stats'> Moves Taken: <span>${E}</span</p>\n                `;e.insertAdjacentHTML("beforeend",r)})(),d())},k=()=>{const e=document.querySelector(".move-counter");E++,e.innerHTML=E},h=e=>{2===e.length&&(document.body.style.pointerEvents="none",e[0].firstElementChild.src===e[1].firstElementChild.src?(e=>{e.forEach((e=>{e.classList.remove("flipped"),e.style.pointerEvents="none"})),document.body.style.pointerEvents="auto",k(),S()})(e):(e=>{e.forEach((e=>{setTimeout((()=>{e.classList.remove("flipped"),e.classList.remove("flip"),document.body.style.pointerEvents="auto"}),1e3)})),k()})(e))};(()=>{let e=!1;const n=[t(p),t(p),t(f),t(f),t(v),t(v),t(g),t(g),t(y),t(y),t(L),t(L),t(u),t(u),t(m),t(m)],r=document.querySelector(".board"),o=(document.querySelectorAll(".pkm-card"),document.querySelector(".reset-btn"));((e,t)=>{e.forEach((e=>{const n=document.createElement("div");n.classList.add("pkm-card");const r=document.createElement("img");r.setAttribute("src",`${e}`),r.classList.add("face"),n.appendChild(r);const o=document.createElement("div");o.classList.add("back"),n.appendChild(o),t.appendChild(n)}))})(s(n),r),o.addEventListener("click",(()=>location.reload())),r.addEventListener("click",(t=>{t.target.classList.contains("pkm-card")&&(!1===e&&(e=!0,b=setInterval(i,1e3)),(()=>{const e=event.target;e.classList.add("flip"),e.classList.add("flipped");const t=document.querySelectorAll(".flipped");h(t)})())}))})();
//# sourceMappingURL=index.42984c7d.js.map
