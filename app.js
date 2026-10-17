const E=id=>document.getElementById(id),PAGE=document.body.dataset.page;
const nav=E('nav'),tog=E('tog'),list=E('list'),sheet=E('sheet'),row=E('lgRow'),ico=E('lgIco');
const MAIL='kimerchiwe1989@gmail.com';

/* ---------- translations ---------- */
const I={
en:{b1:'UX/UI Design',b2:'Service Design',b3:'Design Management',hello:'Hello, mate 👋🏻',idea:'Got an Idea? Let’s Make It Come Alive!',email:'Email me',hey:'Hey!',
 m_home:'Home',m_about:'About',m_case:'Case',m_c1:'Case 1',m_c2:'Case 2',m_c3:'Case 3',m_c4:'Case 4',m_contact:'Contact',lang:'Language',
 ring:'Welcome to my room. Click me! Welcome to my room. Click me!',ld_s:'Don’t be shy.<br>Feel free to say',ld_b:'“Hey!”',
 say:'Say “Hey!”',sub:'Send me a DM or reply on Email, okay?',arrow:'Write me an email',
 about_t:'About',about_b:'<p>Senior Product &amp; UI/UX Designer with eight years of experience in FinTech, Crypto and Web3. I take products from first research to launch and build the design systems that keep them consistent.</p>',
 c1_t:'Case 1: Crypto trading platform',c1_b:'<p>A trading interface built from scratch (order book, charts, portfolio) with one mode for beginners and another for pros. Blockbyte, 2025–2026.</p>',
 c2_t:'Case 2: Crypto academy',c2_b:'<p>Simpler onboarding with progressive disclosure, validated through usability tests with real users. Blockbyte, 2025–2026.</p>',
 c3_t:'Case 3: Web3 gaming platform',c3_b:'<p>Lobby, personal account, wallet and transaction views, plus an internal moderation dashboard. Gameless.one, 2022–2025.</p>',
 c4_t:'Case 4: B2B platform',c4_b:'<p>Redesign of a data-heavy product: clearer navigation, powerful tables and real-time dashboards. Roobinium, 2019–2021.</p>',
 mail_t:'Write me a message',ph_n:'Your name',ph_e:'Your email',ph_m:'Your message',send:'Send via email',copy:'Copy address',copied:'Copied',subj:'Hello from'},
ru:{b1:'UX/UI-дизайн',b2:'Сервис-дизайн',b3:'Управление дизайном',hello:'Привет, друг 👋🏻',idea:'Есть идея? Давай оживим её!',email:'Написать',hey:'Хей!',
 m_home:'Главная',m_about:'Обо мне',m_case:'Кейсы',m_c1:'Кейс 1',m_c2:'Кейс 2',m_c3:'Кейс 3',m_c4:'Кейс 4',m_contact:'Контакты',lang:'Язык',
 ring:'Добро пожаловать в мою комнату! Нажми на меня! Добро пожаловать в мою комнату! Нажми на меня!',ld_s:'Не стесняйся.<br>Просто скажи',ld_b:'«Хей!»',
 say:'Скажи «Хей!»',sub:'Напиши мне в личку или ответь по почте, окей?',arrow:'Написать мне письмо',
 about_t:'Обо мне',about_b:'<p>Senior Product- и UI/UX-дизайнер с восьмилетним опытом в FinTech, Crypto и Web3. Веду продукты от первых исследований до запуска и создаю дизайн-системы, которые сохраняют их целостность.</p>',
 c1_t:'Кейс 1: Криптотрейдинговая платформа',c1_b:'<p>Торговый интерфейс с нуля (книга ордеров, графики, портфель) с отдельными режимами для новичков и профессионалов. Blockbyte, 2025–2026.</p>',
 c2_t:'Кейс 2: Крипто-академия',c2_b:'<p>Более простой онбординг с постепенным раскрытием информации, проверенный юзабилити-тестами с реальными пользователями. Blockbyte, 2025–2026.</p>',
 c3_t:'Кейс 3: Web3-игровая платформа',c3_b:'<p>Лобби, личный кабинет, кошелёк и история транзакций, а также внутренняя панель модерации. Gameless.one, 2022–2025.</p>',
 c4_t:'Кейс 4: B2B-платформа',c4_b:'<p>Редизайн продукта с большим объёмом данных: понятная навигация, мощные таблицы и дашборды в реальном времени. Roobinium, 2019–2021.</p>',
 mail_t:'Напиши мне сообщение',ph_n:'Ваше имя',ph_e:'Ваша почта',ph_m:'Ваше сообщение',send:'Отправить по почте',copy:'Скопировать адрес',copied:'Скопировано',subj:'Привет от'},
de:{b1:'UX/UI-Design',b2:'Service Design',b3:'Design-Management',hello:'Hallo, Freund 👋🏻',idea:'Du hast eine Idee? Erwecken wir sie zum Leben!',email:'E-Mail',hey:'Hey!',
 m_home:'Start',m_about:'Über mich',m_case:'Cases',m_c1:'Case 1',m_c2:'Case 2',m_c3:'Case 3',m_c4:'Case 4',m_contact:'Kontakt',lang:'Sprache',
 ring:'Willkommen in meinem Zimmer. Klick mich! Willkommen in meinem Zimmer. Klick mich!',ld_s:'Sei nicht schüchtern.<br>Sag einfach',ld_b:'„Hey!“',
 say:'Sag „Hey!“',sub:'Schick mir eine DM oder antworte per E-Mail, okay?',arrow:'Schreib mir eine E-Mail',
 about_t:'Über mich',about_b:'<p>Senior Product- und UI/UX-Designer mit acht Jahren Erfahrung in FinTech, Crypto und Web3. Ich begleite Produkte von der ersten Recherche bis zum Launch und baue Designsysteme, die sie konsistent halten.</p>',
 c1_t:'Case 1: Krypto-Handelsplattform',c1_b:'<p>Eine von Grund auf entwickelte Trading-Oberfläche (Orderbuch, Charts, Portfolio) mit einem Modus für Einsteiger und einem für Profis. Blockbyte, 2025–2026.</p>',
 c2_t:'Case 2: Krypto-Akademie',c2_b:'<p>Einfacheres Onboarding mit schrittweiser Informationsdarstellung, überprüft durch Usability-Tests mit echten Nutzern. Blockbyte, 2025–2026.</p>',
 c3_t:'Case 3: Web3-Gaming-Plattform',c3_b:'<p>Lobby, persönliches Konto, Wallet- und Transaktionsansichten sowie ein internes Moderations-Dashboard. Gameless.one, 2022–2025.</p>',
 c4_t:'Case 4: B2B-Plattform',c4_b:'<p>Redesign eines datenintensiven Produkts: klarere Navigation, leistungsstarke Tabellen und Echtzeit-Dashboards. Roobinium, 2019–2021.</p>',
 mail_t:'Schreib mir eine Nachricht',ph_n:'Dein Name',ph_e:'Deine E-Mail',ph_m:'Deine Nachricht',send:'Per E-Mail senden',copy:'Adresse kopieren',copied:'Kopiert',subj:'Hallo von'},
zh:{b1:'UX/UI 设计',b2:'服务设计',b3:'设计管理',hello:'你好，朋友 👋🏻',idea:'有好点子？让我们把它变成现实！',email:'发邮件',hey:'嗨！',
 m_home:'首页',m_about:'关于我',m_case:'案例',m_c1:'案例 1',m_c2:'案例 2',m_c3:'案例 3',m_c4:'案例 4',m_contact:'联系',lang:'语言',
 ring:'欢迎来到我的房间。点我！欢迎来到我的房间。点我！欢迎来到我的房间。点我！',ld_s:'别害羞，<br>随时跟我说',ld_b:'“嗨！”',
 say:'说声“嗨！”',sub:'给我发私信或回邮件吧，好吗？',arrow:'给我写邮件',
 about_t:'关于我',about_b:'<p>资深产品与 UI/UX 设计师，在金融科技、加密货币和 Web3 领域拥有八年经验。我负责产品从最初调研到上线的全过程，并搭建设计系统，让产品始终保持一致。</p>',
 c1_t:'案例 1：加密货币交易平台',c1_b:'<p>从零设计的交易界面（订单簿、图表、投资组合），为新手和专业用户提供两种模式。Blockbyte，2025–2026。</p>',
 c2_t:'案例 2：加密学院',c2_b:'<p>采用渐进式信息展示的更简单的新手引导，并通过真实用户的可用性测试验证。Blockbyte，2025–2026。</p>',
 c3_t:'案例 3：Web3 游戏平台',c3_b:'<p>大厅、个人账户、钱包与交易视图，以及内部审核后台。Gameless.one，2022–2025。</p>',
 c4_t:'案例 4：B2B 平台',c4_b:'<p>为数据密集型产品重新设计：更清晰的导航、强大的表格和实时仪表盘。Roobinium，2019–2021。</p>',
 mail_t:'给我留言',ph_n:'你的名字',ph_e:'你的邮箱',ph_m:'你的留言',send:'通过邮件发送',copy:'复制地址',copied:'已复制',subj:'来自'}
};
let LANG='en';const t=k=>(I[LANG]&&I[LANG][k])||I.en[k]||'';
const store=(()=>{try{return localStorage.getItem('lang')}catch(e){return null}})();

/* ---------- kid-style icons: globe + round flags ---------- */
let uid=0;
const star=(cx,cy,r,rot=0)=>{const p=[];for(let i=0;i<10;i++){const a=Math.PI/5*i-Math.PI/2+rot,R=i%2?r*.4:r;p.push((cx+R*Math.cos(a)).toFixed(1)+','+(cy+R*Math.sin(a)).toFixed(1))}return '<polygon points="'+p.join(' ')+'"/>'};
const badge=inner=>{const id='cp'+(uid++);return '<svg viewBox="0 0 36 36" width="100%" height="100%"><defs><clipPath id="'+id+'"><circle cx="18" cy="18" r="16"/></clipPath></defs><g clip-path="url(#'+id+')">'+inner+'<ellipse cx="12" cy="9" rx="9" ry="5" fill="#fff" opacity=".22"/></g><circle cx="18" cy="18" r="16" fill="none" stroke="#fff" stroke-width="2.5"/></svg>'};
const FLAG={
 ru:()=>badge('<rect width="36" height="12" fill="#fff"/><rect y="12" width="36" height="12" fill="#3a68d4"/><rect y="24" width="36" height="12" fill="#e0413a"/>'),
 de:()=>badge('<rect width="36" height="12" fill="#33302b"/><rect y="12" width="36" height="12" fill="#e0413a"/><rect y="24" width="36" height="12" fill="#ffc928"/>'),
 en:()=>badge('<rect width="36" height="36" fill="#2f4aa8"/><path d="M0 0L36 36M36 0L0 36" stroke="#fff" stroke-width="7"/><path d="M0 0L36 36M36 0L0 36" stroke="#e0413a" stroke-width="3"/><path d="M18 0V36M0 18H36" stroke="#fff" stroke-width="10"/><path d="M18 0V36M0 18H36" stroke="#e0413a" stroke-width="6"/>'),
 zh:()=>badge('<rect width="36" height="36" fill="#e0413a"/><g fill="#ffd23f">'+star(12,13,6.5)+star(22,5.5,2.2,.3)+star(26,10.5,2.2,.6)+star(26,17,2.2)+star(22,22,2.2,.4)+'</g>')
};
const GLOBE='<svg viewBox="0 0 36 36" width="100%" height="100%"><circle cx="18" cy="18" r="16" fill="#fff"/><circle cx="18" cy="19" r="11.5" fill="#fea831"/><ellipse cx="18" cy="19" rx="5" ry="11.5" fill="none" stroke="#fff" stroke-width="1.5" opacity=".35"/><circle cx="14" cy="17" r="1.6" fill="#3b3224"/><circle cx="22" cy="17" r="1.6" fill="#3b3224"/><path d="M15 21.2q3 2.6 6 0" fill="none" stroke="#3b3224" stroke-width="1.6" stroke-linecap="round"/><circle cx="11.2" cy="20.6" r="1.7" fill="#ff7b6b" opacity=".6"/><circle cx="24.8" cy="20.6" r="1.7" fill="#ff7b6b" opacity=".6"/><path class="sp" d="M30 3l1.1 2.9L34 7l-2.9 1.1L30 11l-1.1-2.9L26 7l2.9-1.1z" fill="#ffc83d"/></svg>';
const NAMES={ru:'Русский',en:'English',de:'Deutsch',zh:'中文'};
row.innerHTML=['ru','en','de','zh'].map((l,n)=>'<button class="lc" data-l="'+l+'" style="--n:'+n+'" aria-label="'+NAMES[l]+'" title="'+NAMES[l]+'">'+FLAG[l]()+'</button>').join('');
function burst(el){const c=['#fff','#ffe27a','#ffd0a0'];for(let k=0;k<7;k++){const d=document.createElement('i');d.className='bst';d.style.background=c[k%3];el.appendChild(d);const a=k/7*Math.PI*2,r=24+Math.random()*10;
 d.animate([{transform:'translate(0,0) scale(1)',opacity:1},{transform:'translate('+Math.cos(a)*r+'px,'+Math.sin(a)*r+'px) scale(.2)',opacity:0}],{duration:650,easing:'cubic-bezier(.2,.8,.3,1)'}).onfinish=()=>d.remove()}}
function setIcon(l,anim){ico.innerHTML=l?FLAG[l]():GLOBE;ico.classList.toggle('globe',!l);
 row.querySelectorAll('.lc').forEach(b=>b.classList.toggle('sel',b.dataset.l===l));
 if(anim){ico.classList.remove('pop');void ico.offsetWidth;ico.classList.add('pop');burst(ico)}}

/* ---------- apply language ---------- */
function applyLang(l,anim){LANG=l;document.documentElement.lang=l;
 document.querySelectorAll('[data-i]').forEach((el,n)=>{el.innerHTML=t(el.dataset.i);
  if(anim&&!el.classList.contains('hi')){el.classList.remove('sw');el.style.setProperty('--d',n%14);void el.offsetWidth;el.classList.add('sw');el.addEventListener('animationend',()=>el.classList.remove('sw'),{once:true})}});
 const rt=E('rt');if(rt)rt.textContent=t('ring');
 const ar=document.querySelector('.arrow');if(ar)ar.setAttribute('aria-label',t('arrow'));
 if(window.buildHeading)window.buildHeading(anim);if(typeof fit==='function')fit()}
function setLang(l){try{localStorage.setItem('lang',l)}catch(e){}applyLang(l,true);setIcon(l,true);setTimeout(()=>toggleRow(false),650)}
function toggleRow(o){const open=o===undefined?!row.classList.contains('open'):o;row.classList.toggle('open',open);E('lgBtn').setAttribute('aria-expanded',open);setMenu(nav.classList.contains('open'))}

/* ---------- menu + sheets ---------- */
const scrim=document.createElement('div');scrim.className='scrim';document.body.appendChild(scrim);
[...list.children].forEach((el,i)=>el.style.setProperty('--k',i));
function setMenu(o){nav.classList.toggle('open',o);scrim.classList.toggle('on',o);tog.setAttribute('aria-expanded',o);tog.setAttribute('aria-label',o?'Close menu':'Open menu');nav.style.height=o?list.offsetHeight+'px':'56px';if(!o)row.classList.remove('open')}
function fit(){if(nav.classList.contains('open'))nav.style.height=list.offsetHeight+'px'}
addEventListener('resize',fit);addEventListener('orientationchange',()=>setTimeout(fit,250));if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fit)
tog.addEventListener('click',()=>setMenu(!nav.classList.contains('open')));
const box=sheet.querySelector('.box'),grab=document.createElement('span');grab.className='grab';box.prepend(grab);box.setAttribute('tabindex','-1');
/* bottom sheet on phones: drag the handle down to dismiss */
let dragY=null,dragD=0;
grab.addEventListener('pointerdown',e=>{dragY=e.clientY;dragD=0;box.classList.add('drag');grab.setPointerCapture(e.pointerId)});
grab.addEventListener('pointermove',e=>{if(dragY===null)return;dragD=Math.max(0,e.clientY-dragY);box.style.setProperty('--dy',dragD+'px')});
function dragEnd(){if(dragY===null)return;const close=dragD>90;dragY=null;box.classList.remove('drag');box.style.removeProperty('--dy');if(close)sheet.classList.remove('on')}
grab.addEventListener('pointerup',dragEnd);grab.addEventListener('pointercancel',dragEnd);
/* lift the sheet above the on-screen keyboard (iOS keeps the layout viewport under it) */
if(window.visualViewport){const vv=visualViewport,upd=()=>document.documentElement.style.setProperty('--kb',Math.max(0,Math.round(innerHeight-vv.height-vv.offsetTop))+'px');vv.addEventListener('resize',upd);vv.addEventListener('scroll',upd)}
function openSheet(k){E('sh').textContent=t(k+'_t');
 E('sb').innerHTML=k==='mail'?'<input id="mn" placeholder="'+t('ph_n')+'" autocomplete="name"><input id="mf" type="email" placeholder="'+t('ph_e')+'" autocomplete="email"><textarea id="mm" rows="4" placeholder="'+t('ph_m')+'"></textarea><div class="row2"><button class="go" id="send">'+t('send')+'</button><button class="go ghost" id="copy">'+t('copy')+'</button></div>':t(k+'_b');
 sheet.classList.add('on');setMenu(false);
 setTimeout(()=>{const fine=matchMedia('(hover:hover) and (pointer:fine)').matches,f=fine?(E('mm')||E('cl')):box;f&&f.focus({preventScroll:true})},50)}
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
 if(e.target.closest('#lgBtn')){toggleRow();return}
 if(e.target===scrim){setMenu(false);return}
 const lc=e.target.closest('[data-l]');if(lc){setLang(lc.dataset.l);return}
 const k=e.target.closest('[data-k]');if(k){route(k.dataset.k);return}
 if(e.target.id==='send'){const m=E('mm').value.trim();if(!m){E('mm').focus();return}const n=E('mn').value.trim(),f=E('mf').value.trim();
  location.href='mailto:'+MAIL+'?subject='+encodeURIComponent(t('subj')+' '+(n||'website'))+'&body='+encodeURIComponent(m+'\n\n'+n+(f?' ('+f+')':''));return}
 if(e.target.id==='copy'){const b=e.target;(navigator.clipboard?navigator.clipboard.writeText(MAIL):Promise.reject()).then(()=>b.textContent=t('copied'),()=>b.textContent=MAIL);return}
 if(e.target.id==='cl'||e.target===sheet)sheet.classList.remove('on')});
addEventListener('keydown',e=>{if(e.key==='Escape'){sheet.classList.remove('on');setMenu(false)}});
setTimeout(()=>{const l=E('loader');l&&l.remove()},5100);

/* start */
applyLang(store&&I[store]?store:'en',false);setIcon(store&&I[store]?store:null,false);
