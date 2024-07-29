import{i as y,S as m}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function g(n){const t="https://pixabay.com/api/",a=new URLSearchParams({key:"45151719-ad1ed1cd151d376d4bdd12a44",q:n,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${t}?${a}`).then(l=>{if(!l.ok)throw new Error(l.status);return l.json()})}function p({hits:n}){const t=document.querySelector(".gallery"),a=n.map(({webformatURL:l,largeImageURL:e,tags:r,likes:s,views:o,comments:c,downloads:u})=>`<li class="gallery-item">
	    <a class="gallery-link" href="${e}">
		<img 
		class="gallery-image" 
		src="${l}" 
		alt="${r}"
		/>
	    </a>
        <ul class="gallery-inner-list">
        <li class="gallery-inner-item">
        <p class="gallery-inner-name">Likes</p>
        <p class="gallery-inner-value">${s}</p>
        </li>
        <li class="gallery-inner-item">
        <p class="gallery-inner-name">Views</p>
        <p class="gallery-inner-value">${o}</p>
        </li>
        <li class="gallery-inner-item">
        <p class="gallery-inner-name">Comments</p>
        <p class="gallery-inner-value">${c}</p>
        </li>
        <li class="gallery-inner-item">
        <p class="gallery-inner-name">Downloads</p>
        <p class="gallery-inner-value">${u}</p>
        </li>
        </ul>
   </li>`).join("");t.innerHTML=a}const d=document.querySelector(".form"),f=document.querySelector(".gallery"),i=document.querySelector(".loader");i.style.display="none";d.addEventListener("submit",h);function h(n){n.preventDefault(),f.innerHTML="";const t=n.currentTarget,a=t.elements.query.value.trim();a!==""&&(i.style.display="block",g(a).then(l=>{l.hits.length?(p(l),L.refresh()):y.error({message:"Sorry, there are no images matching your search query. Please try again!",class:"izi-toast",position:"topRight",backgroundColor:"#ef4040",messageColor:"white",messageSize:"16",theme:"dark"})}).catch(console.log).finally(()=>{i.style.display="none",t.reset()}))}let L=new m(".gallery .gallery-link",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
