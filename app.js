const releases=[{title:'Mapesa',artist:'Dogo Son ft Baddie 257 & Sefoboy'},{title:'Today',artist:'Dogo Son'},{title:'Attention',artist:'Mbili Mbaya'},{title:'Tugono Ting’eyo',artist:'Sefoboy ft Kushman'}];
const artists=['Dogo Son','Sefoboy','Mbili Mbaya','Baddie 257','Kushman'];
document.querySelector('#tracks').innerHTML=releases.map((t,i)=>`<article class="track"><div class="cover">2B$</div><h3>${t.title}</h3><div class="meta">${t.artist}</div><button class="play" data-i="${i}">▶ Play</button></article>`).join('');
document.querySelector('#trackCount').textContent=`${releases.length} releases`;
document.querySelector('#artistsGrid').innerHTML=artists.map(a=>`<div class="artist"><strong>${a}</strong><p>2Billion Dollar Music</p></div>`).join('');
document.querySelectorAll('.play').forEach(b=>b.onclick=()=>alert('Audio player ready — connect the release audio URL in app.js.'));
document.querySelector('#menu').onclick=()=>document.querySelector('.nav').classList.toggle('open');


// Install button support
let deferredPrompt;
window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferredPrompt = e; const b=document.createElement('button'); b.className='btn primary install-btn'; b.textContent='Install App'; b.onclick=async()=>{deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt=null; b.remove();}; document.querySelector('.actions')?.appendChild(b); });
