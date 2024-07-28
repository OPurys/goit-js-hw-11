import{i as m,S as g}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function p(a){const t="https://pixabay.com/api/",n=new URLSearchParams({key:"45151719-ad1ed1cd151d376d4bdd12a44",q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${t}?${n}`).then(l=>{if(!l.ok)throw new Error(l.status);return l.json()})}function d({hits:a}){const t=document.querySelector(".gallery"),n=a.map(({webformatURL:l,largeImageURL:e,tags:r,likes:s,views:c,comments:u,downloads:y})=>`<li class="gallery-item">
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
        <p class="gallery-inner-value">${c}</p>
        </li>
        <li class="gallery-inner-item">
        <p class="gallery-inner-name">Comments</p>
        <p class="gallery-inner-value">${u}</p>
        </li>
        <li class="gallery-inner-item">
        <p class="gallery-inner-name">Downloads</p>
        <p class="gallery-inner-value">${y}</p>
        </li>
        </ul>
   </li>`).join("");t.innerHTML=n}const f=document.querySelector(".form"),o=document.querySelector(".gallery"),i=document.querySelector(".loader");i.style.display="none";f.addEventListener("submit",h);function h(a){a.preventDefault();const t=a.currentTarget,n=t.elements.query.value.trim();if(n===""){o.innerHTML="";return}i.style.display="block",p(n).then(l=>{l.hits.length?(d(l),L.refresh()):(o.innerHTML="",m.error({message:"Sorry, there are no images matching your search query. Please try again!",class:"izi-toast",position:"topRight",backgroundColor:"#ef4040",messageColor:"white",messageSize:"16",theme:"dark"}))}).catch(console.log).finally(()=>{i.style.display="none",t.reset()})}let L=new g(".gallery .gallery-link",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
