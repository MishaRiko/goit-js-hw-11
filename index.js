import{a as c,S as u,i as l}from"./assets/vendor-5YrzWRhu.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="51572255-4a923f4e22b79815f5c68f565",f="https://pixabay.com/api/";async function p(n){const s={key:d,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await c.get(f,{params:s})).data}function y(){document.querySelector(".loader").style.display="block"}function m(){document.querySelector(".loader").style.display="none"}let a;function g(n){const s=document.querySelector(".gallery"),r=n.map(o=>`
    <a href="${o.largeImageURL}" class="gallery-item">
      <img src="${o.webformatURL}" alt="${o.tags}" />
      <div class="info">
        <p>Likes: ${o.likes}</p>
        <p>Views: ${o.views}</p>
        <p>Comments: ${o.comments}</p>
        <p>Downloads: ${o.downloads}</p>
      </div>
    </a>
  `).join("");s.insertAdjacentHTML("beforeend",r),a?a.refresh():a=new u(".gallery a")}function h(){document.querySelector(".gallery").innerHTML=""}const L=document.querySelector(".form");L.addEventListener("submit",async n=>{n.preventDefault();const s=n.target.elements["search-text"].value.trim();y(),h();try{const r=await p(s);if(console.log("Full API response:",r),!r.hits||r.hits.length===0){l.error({title:"Error",message:"No images found. Try another query!",position:"topRight"});return}g(r.hits)}catch(r){console.error("API Error:",r),l.error({title:"Error",message:"Failed to load images. Try again later!",position:"topRight"})}finally{m()}});
//# sourceMappingURL=index.js.map
