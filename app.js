const E=id=>document.getElementById(id),PAGE=document.body.dataset.page;
const nav=E('nav'),tog=E('tog'),list=E('list'),sheet=E('sheet');
const MAIL='kimerchiwe1989@gmail.com';
const C={
 about:['About','<p>Senior Product &amp; UI/UX Designer with eight years of experience in FinTech, Crypto and Web3. I take products from first research to launch and build the design systems that keep them consistent.</p>'],
 c1:['Case 1: Crypto trading platform','<p>A trading interface built from scratch (order book, charts, portfolio) with one mode for beginners and another for pros. Blockbyte, 2025–2026.</p>'],
 c2:['Case 2: Crypto academy','<p>Simpler onboarding with progressive disclosure, validated through usability tests with real users. Blockbyte, 2025–2026.</p>'],
 c3:['Case 3: Web3 gaming platform','<p>Lobby, personal account, wallet and transaction views, plus an internal moderation dashboard. Gameless.one, 2022–2025.</p>'],
 c4:['Case 4: B2B platform','<p>Redesign of a data-heavy product: clearer navigation, powerful tables and real-time dashboards. Roobinium, 2019–2021.</p>'],
 mail:['Write me a message','<input id="mn" placeholder="Your name" autocomplete="name"><input id="mf" type="email" placeholder="Your email" autocomplete="email"><textarea id="mm" rows="4" placeholder="Your message"></textarea><div class="row2"><button class="go" id="send">Send via email</button><button class="go ghost" id="copy">Copy address</button></div>']
};
function setMenu(o){nav.classList.toggle('open',o);tog.setAttribute('aria-expanded',o);tog.setAttribute('aria-label',o?'Close menu':'Open menu');nav.style.height=o?(list.scrollHeight+4)+'px':'56px'}
tog.addEventListener('click',()=>setMenu(!nav.classList.contains('open')));
function openSheet(k){E('sh').textContent=C[k][0];E('sb').innerHTML=C[k][1];sheet.classList.add('on');setMenu(false);setTimeout(()=>{const f=E('mm')||E('cl');f&&f.focus()},50)}
const wipe=document.createElement('div');wipe.className='wipe';document.body.appendChild(wipe);
function go(u){wipe.classList.add('on');setTimeout(()=>{location.href=u},900)}
addEventListener('pageshow',e=>{if(e.persisted)wipe.classList.remove('on')});
function route(k){
 if(k==='home'){PAGE==='home'?setMenu(false):go('index.html');return}
 if(k==='contact'){PAGE==='contact'?setMenu(false):go('contact.html');return}
 openSheet(k)}
const cur=list.querySelector('[data-k="'+PAGE+'"]');cur&&cur.classList.add('dim');
document.addEventListener('click',e=>{
 const g=e.target.closest('[data-go]');if(g){e.preventDefault();go(g.getAttribute('href'));return}
 const k=e.target.closest('[data-k]');if(k){route(k.dataset.k);return}
 if(e.target.id==='send'){const m=E('mm').value.trim();if(!m){E('mm').focus();return}const n=E('mn').value.trim(),f=E('mf').value.trim();
  location.href='mailto:'+MAIL+'?subject='+encodeURIComponent('Hello from '+(n||'your website'))+'&body='+encodeURIComponent(m+'\n\n'+n+(f?' ('+f+')':''));return}
 if(e.target.id==='copy'){const b=e.target;(navigator.clipboard?navigator.clipboard.writeText(MAIL):Promise.reject()).then(()=>b.textContent='Copied',()=>b.textContent=MAIL);return}
 if(e.target.id==='cl'||e.target===sheet)sheet.classList.remove('on')});
addEventListener('keydown',e=>{if(e.key==='Escape'){sheet.classList.remove('on');setMenu(false)}});
setTimeout(()=>{const l=E('loader');l&&l.remove()},5100);
