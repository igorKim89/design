const E=id=>document.getElementById(id),PAGE=document.body.dataset.page;
const nav=E('nav'),tog=E('tog'),list=E('list'),sheet=E('sheet'),row=E('lgRow'),ico=E('lgIco');
const MAIL='kimerchiwe1989@gmail.com';

/* ---------- translations ---------- */
const I={
en:{ab_title:'About Me',ab_mq:'Hey, I’m here! ✨ Come say hi, get to know me, and let’s create something that makes people smile.',ab_hint:'Go on, click me! <span class="eyes">👀</span> Let’s see if you can figure out who Kim is.',vd:'Let’s See ↗',b1:'UI/UX Design',b2:'Mobile App',b3:'Web Design',hello:'Hello, mate <span class="wave">👋🏻</span>',idea:'Got an Idea? Let’s Make It Come Alive!',email:'Email me',hey:'Hi there!',
 m_home:'Home',m_about:'About',m_case:'Case',m_c1:'Tixxe App',m_c2:'Boost-Hero',m_c3:'Postavkin',m_c4:'Lotti App',m_contact:'Contact',lang:'Language',
 ring:'Moving pixels since 2016. Still not done. Moving pixels since 2016. Still not done.',ld_s:'Your idea +<br>my obsession =',ld_b:'“Magic”',
 say:'Don’t Ghost Me!',sub:'Send me a DM or reply on Email, okay?',arrow:'Write me an email',
 about_t:'About',about_b:'<p>Senior Product &amp; UI/UX Designer with eight years of experience in FinTech, Crypto and Web3. I take products from first research to launch and build the design systems that keep them consistent.</p>',
 c1_t:'Case 1: Crypto trading platform',c1_b:'<p>A trading interface built from scratch (order book, charts, portfolio) with one mode for beginners and another for pros. Blockbyte, 2025–2026.</p>',
 c2_t:'Case 2: Crypto academy',c2_b:'<p>Simpler onboarding with progressive disclosure, validated through usability tests with real users. Blockbyte, 2025–2026.</p>',
 c3_t:'Case 3: Web3 gaming platform',c3_b:'<p>Lobby, personal account, wallet and transaction views, plus an internal moderation dashboard. Gameless.one, 2022–2025.</p>',
 c4_t:'Case 4: Lotti App',c4_b:'<p>A laundry service with home pickup and delivery in Barcelona: a simple order flow, transparent pricing and order tracking.</p>',
 mail_t:'Write me a message',ph_n:'Your name',ph_e:'Your email',ph_m:'Your message',send:'Send via email',copy:'Copy address',copied:'Copied',subj:'Hello from'},
ru:{ab_title:'Обо мне',ab_mq:'Эй, я здесь! ✨ Заходи поздороваться, познакомимся и создадим что-нибудь, что заставит людей улыбаться.',ab_hint:'Ну же, нажми на меня! <span class="eyes">👀</span> Посмотрим, сможешь ли ты догадаться, кто такой Ким.',vd:'Смотри ↗',b1:'UI/UX-дизайн',b2:'Мобильные приложения',b3:'Веб-дизайн',hello:'Привет, друг <span class="wave">👋🏻</span>',idea:'Есть идея? Давай оживим её!',email:'Написать',hey:'Привет!',
 m_home:'Главная',m_about:'Обо мне',m_case:'Кейсы',m_c1:'Tixxe App',m_c2:'Boost-Hero',m_c3:'Postavkin',m_c4:'Lotti App',m_contact:'Контакты',lang:'Язык',
 ring:'Двигаю пиксели с 2016 года. Всё ещё не закончил. Двигаю пиксели с 2016 года. Всё ещё не закончил.',ld_s:'Твоя идея +<br>моя одержимость =',ld_b:'«Магия»',
 say:'Не пропадай!',sub:'Напиши мне в личку или ответь по почте, окей?',arrow:'Написать мне письмо',
 about_t:'Обо мне',about_b:'<p>Senior Product- и UI/UX-дизайнер с восьмилетним опытом в FinTech, Crypto и Web3. Веду продукты от первых исследований до запуска и создаю дизайн-системы, которые сохраняют их целостность.</p>',
 c1_t:'Кейс 1: Криптотрейдинговая платформа',c1_b:'<p>Торговый интерфейс с нуля (книга ордеров, графики, портфель) с отдельными режимами для новичков и профессионалов. Blockbyte, 2025–2026.</p>',
 c2_t:'Кейс 2: Крипто-академия',c2_b:'<p>Более простой онбординг с постепенным раскрытием информации, проверенный юзабилити-тестами с реальными пользователями. Blockbyte, 2025–2026.</p>',
 c3_t:'Кейс 3: Web3-игровая платформа',c3_b:'<p>Лобби, личный кабинет, кошелёк и история транзакций, а также внутренняя панель модерации. Gameless.one, 2022–2025.</p>',
 c4_t:'Кейс 4: B2B-платформа',c4_b:'<p>Редизайн продукта с большим объёмом данных: понятная навигация, мощные таблицы и дашборды в реальном времени. Roobinium, 2019–2021.</p>',
 mail_t:'Напиши мне сообщение',ph_n:'Ваше имя',ph_e:'Ваша почта',ph_m:'Ваше сообщение',send:'Отправить по почте',copy:'Скопировать адрес',copied:'Скопировано',subj:'Привет от'},
de:{ab_title:'Über mich',ab_mq:'Hey, ich bin hier! ✨ Sag Hallo, lerne mich kennen und lass uns etwas erschaffen, das Menschen zum Lächeln bringt.',ab_hint:'Los, klick mich! <span class="eyes">👀</span> Mal sehen, ob du herausfindest, wer Kim ist.',vd:'Mal sehen ↗',b1:'UI/UX-Design',b2:'Mobile App',b3:'Webdesign',hello:'Hallo, Freund <span class="wave">👋🏻</span>',idea:'Du hast eine Idee? Erwecken wir sie zum Leben!',email:'E-Mail',hey:'Hallo!',
 m_home:'Start',m_about:'Über mich',m_case:'Cases',m_c1:'Tixxe App',m_c2:'Boost-Hero',m_c3:'Postavkin',m_c4:'Lotti App',m_contact:'Kontakt',lang:'Sprache',
 ring:'Pixel bewegen seit 2016. Noch nicht fertig. Pixel bewegen seit 2016. Noch nicht fertig.',ld_s:'Deine Idee +<br>meine Besessenheit =',ld_b:'„Magie“',
 say:'Ghost mich nicht!',sub:'Schick mir eine DM oder antworte per E-Mail, okay?',arrow:'Schreib mir eine E-Mail',
 about_t:'Über mich',about_b:'<p>Senior Product- und UI/UX-Designer mit acht Jahren Erfahrung in FinTech, Crypto und Web3. Ich begleite Produkte von der ersten Recherche bis zum Launch und baue Designsysteme, die sie konsistent halten.</p>',
 c1_t:'Case 1: Krypto-Handelsplattform',c1_b:'<p>Eine von Grund auf entwickelte Trading-Oberfläche (Orderbuch, Charts, Portfolio) mit einem Modus für Einsteiger und einem für Profis. Blockbyte, 2025–2026.</p>',
 c2_t:'Case 2: Krypto-Akademie',c2_b:'<p>Einfacheres Onboarding mit schrittweiser Informationsdarstellung, überprüft durch Usability-Tests mit echten Nutzern. Blockbyte, 2025–2026.</p>',
 c3_t:'Case 3: Web3-Gaming-Plattform',c3_b:'<p>Lobby, persönliches Konto, Wallet- und Transaktionsansichten sowie ein internes Moderations-Dashboard. Gameless.one, 2022–2025.</p>',
 c4_t:'Case 4: B2B-Plattform',c4_b:'<p>Redesign eines datenintensiven Produkts: klarere Navigation, leistungsstarke Tabellen und Echtzeit-Dashboards. Roobinium, 2019–2021.</p>',
 mail_t:'Schreib mir eine Nachricht',ph_n:'Dein Name',ph_e:'Deine E-Mail',ph_m:'Deine Nachricht',send:'Per E-Mail senden',copy:'Adresse kopieren',copied:'Kopiert',subj:'Hallo von'},
ko:{ab_title:'소개',ab_mq:'안녕, 나 여기 있어요! ✨ 인사하러 와서 저를 알아가고, 사람들을 미소 짓게 만들 무언가를 함께 만들어요.',ab_hint:'어서, 눌러 보세요! <span class="eyes">👀</span> Kim이 누구인지 맞힐 수 있는지 볼까요?',vd:'보러 가기 ↗',
 b1:'UI/UX 디자인',b2:'모바일 앱',b3:'웹 디자인',hello:'안녕, 친구 <span class="wave">👋🏻</span>',idea:'아이디어가 있나요? 함께 현실로 만들어 봐요!',email:'메일 보내기',hey:'안녕!',
 m_home:'홈',m_about:'소개',m_case:'케이스',m_c1:'Tixxe App',m_c2:'Boost-Hero',m_c3:'Postavkin',m_c4:'Lotti App',m_contact:'연락처',lang:'언어',
 ring:'2016년부터 픽셀을 움직이는 중. 아직 끝나지 않았어요. 2016년부터 픽셀을 움직이는 중. 아직 끝나지 않았어요.',ld_s:'당신의 아이디어 +<br>나의 집념 =',ld_b:'“마법”',
 say:'잠수 타지 마요!',sub:'DM을 보내거나 이메일로 답장해 주세요, 알겠죠?',arrow:'이메일 쓰기',
 about_t:'소개',about_b:'<p>핀테크, 크립토, Web3 분야에서 8년의 경험을 가진 시니어 프로덕트·UI/UX 디자이너입니다. 첫 리서치부터 출시까지 제품을 이끌고, 일관성을 유지하는 디자인 시스템을 만듭니다.</p>',
 c1_t:'케이스 1: 암호화폐 트레이딩 플랫폼',c1_b:'<p>오더북, 차트, 포트폴리오를 포함한 트레이딩 인터페이스를 처음부터 설계했고, 초보자와 전문가를 위한 두 가지 모드를 제공합니다. Blockbyte, 2025–2026.</p>',
 c2_t:'케이스 2: 크립토 아카데미',c2_b:'<p>점진적 정보 공개를 적용한 더 쉬운 온보딩으로, 실제 사용자 대상 사용성 테스트로 검증했습니다. Blockbyte, 2025–2026.</p>',
 c3_t:'케이스 3: Web3 게임 플랫폼',c3_b:'<p>로비, 개인 계정, 지갑과 거래 내역 화면, 그리고 내부 모더레이션 대시보드. Gameless.one, 2022–2025.</p>',
 c4_t:'케이스 4: B2B 플랫폼',c4_b:'<p>데이터가 많은 제품의 리디자인: 더 명확한 내비게이션, 강력한 테이블, 실시간 대시보드. Roobinium, 2019–2021.</p>',
 mail_t:'메시지 보내기',ph_n:'이름',ph_e:'이메일',ph_m:'메시지',send:'이메일로 보내기',copy:'주소 복사',copied:'복사됨',subj:'안녕하세요! 보낸 사람:'}
};
let LANG='en';const t=k=>(I[LANG]&&I[LANG][k])||I.en[k]||'';
/* language memory: URL ?lang=  >  localStorage  >  sessionStorage  >  window.name  >  English. Works even when the browser isolates file:// pages. */
const VALID=['en','ru','de','ko'];
function readLang(){let l=null;
 try{l=new URLSearchParams(location.search).get('lang')}catch(e){}
 if(!VALID.includes(l)){try{l=localStorage.getItem('lang')}catch(e){l=null}}
 if(!VALID.includes(l)){try{l=sessionStorage.getItem('lang')}catch(e){l=null}}
 if(!VALID.includes(l)){const m=/(?:^|;)lang=(\w+)/.exec(window.name||'');l=m?m[1]:null}
 return VALID.includes(l)?l:'en'}
function saveLang(l){try{localStorage.setItem('lang',l)}catch(e){}try{sessionStorage.setItem('lang',l)}catch(e){}window.name='lang='+l;
 try{const u=new URL(location.href);u.searchParams.set('lang',l);history.replaceState(null,'',u.href)}catch(e){}}

/* ---------- kid-style icons: globe + round flags ---------- */
let uid=0;
const star=(cx,cy,r,rot=0)=>{const p=[];for(let i=0;i<10;i++){const a=Math.PI/5*i-Math.PI/2+rot,R=i%2?r*.4:r;p.push((cx+R*Math.cos(a)).toFixed(1)+','+(cy+R*Math.sin(a)).toFixed(1))}return '<polygon points="'+p.join(' ')+'"/>'};
const badge=inner=>{const id='cp'+(uid++);return '<svg viewBox="0 0 36 36" width="100%" height="100%"><defs><clipPath id="'+id+'"><circle cx="18" cy="18" r="16"/></clipPath></defs><g clip-path="url(#'+id+')">'+inner+'<ellipse cx="12" cy="9" rx="9" ry="5" fill="#fff" opacity=".22"/></g><circle cx="18" cy="18" r="16" fill="none" stroke="#fff" stroke-width="2.5"/></svg>'};
const tri=(cx,cy,r)=>'<g transform="rotate('+r+' '+cx+' '+cy+')" fill="#222"><rect x="'+(cx-4)+'" y="'+(cy-3)+'" width="8" height="1.4"/><rect x="'+(cx-4)+'" y="'+(cy-.7)+'" width="8" height="1.4"/><rect x="'+(cx-4)+'" y="'+(cy+1.6)+'" width="8" height="1.4"/></g>';
const FLAG={
 ru:()=>badge('<rect width="36" height="12" fill="#fff"/><rect y="12" width="36" height="12" fill="#3a68d4"/><rect y="24" width="36" height="12" fill="#e0413a"/>'),
 de:()=>badge('<rect width="36" height="12" fill="#33302b"/><rect y="12" width="36" height="12" fill="#e0413a"/><rect y="24" width="36" height="12" fill="#ffc928"/>'),
 en:()=>badge('<rect width="36" height="36" fill="#2f4aa8"/><path d="M0 0L36 36M36 0L0 36" stroke="#fff" stroke-width="7"/><path d="M0 0L36 36M36 0L0 36" stroke="#e0413a" stroke-width="3"/><path d="M18 0V36M0 18H36" stroke="#fff" stroke-width="10"/><path d="M18 0V36M0 18H36" stroke="#e0413a" stroke-width="6"/>'),
 ko:()=>badge('<rect width="36" height="36" fill="#fff"/><circle cx="18" cy="18" r="7" fill="#0047a0"/><path d="M11 18a7 7 0 0 1 14 0z" fill="#cd2e3a"/><circle cx="14.5" cy="18" r="3.5" fill="#cd2e3a"/><circle cx="21.5" cy="18" r="3.5" fill="#0047a0"/>'+tri(7,7,-45)+tri(29,7,45)+tri(7,29,45)+tri(29,29,-45))
};
const GLOBE='<svg viewBox="0 0 36 36" width="100%" height="100%"><circle cx="18" cy="18" r="16" fill="#fff"/><circle cx="18" cy="19" r="11.5" fill="#fea831"/><ellipse cx="18" cy="19" rx="5" ry="11.5" fill="none" stroke="#fff" stroke-width="1.5" opacity=".35"/><circle cx="14" cy="17" r="1.6" fill="#3b3224"/><circle cx="22" cy="17" r="1.6" fill="#3b3224"/><path d="M15 21.2q3 2.6 6 0" fill="none" stroke="#3b3224" stroke-width="1.6" stroke-linecap="round"/><circle cx="11.2" cy="20.6" r="1.7" fill="#ff7b6b" opacity=".6"/><circle cx="24.8" cy="20.6" r="1.7" fill="#ff7b6b" opacity=".6"/><path class="sp" d="M30 3l1.1 2.9L34 7l-2.9 1.1L30 11l-1.1-2.9L26 7l2.9-1.1z" fill="#ffc83d"/></svg>';
const NAMES={ru:'Русский',en:'English',de:'Deutsch',ko:'한국어'};
row.innerHTML=['ru','en','de','ko'].map((l,n)=>'<button class="lc" data-l="'+l+'" style="--n:'+n+'" aria-label="'+NAMES[l]+'" title="'+NAMES[l]+'">'+FLAG[l]()+'</button>').join('');
function burst(el){const c=['#fff','#ffe27a','#ffd0a0'];for(let k=0;k<7;k++){const d=document.createElement('i');d.className='bst';d.style.background=c[k%3];el.appendChild(d);const a=k/7*Math.PI*2,r=24+Math.random()*10;
 d.animate([{transform:'translate(0,0) scale(1)',opacity:1},{transform:'translate('+Math.cos(a)*r+'px,'+Math.sin(a)*r+'px) scale(.2)',opacity:0}],{duration:650,easing:'cubic-bezier(.2,.8,.3,1)'}).onfinish=()=>d.remove()}}
function setIcon(l,anim){ico.innerHTML=l?FLAG[l]():GLOBE;ico.classList.toggle('globe',!l);
 row.querySelectorAll('.lc').forEach(b=>b.classList.toggle('sel',b.dataset.l===l));
 if(anim){ico.classList.remove('pop');void ico.offsetWidth;ico.classList.add('pop');burst(ico)}}

/* ring text: font size is fitted to the circle so the text is never squeezed or stretched */
function fitRing(){const rt=E('rt');if(!rt)return;const tx=rt.parentNode;rt.removeAttribute('textLength');tx.style.fontSize='20px';tx.style.letterSpacing='0';
 let w=0;try{w=rt.getComputedTextLength()}catch(e){}if(!w)return;
 tx.style.fontSize=Math.min(26,20*868*.95/w).toFixed(2)+'px';rt.setAttribute('textLength','868');rt.setAttribute('lengthAdjust','spacing')}
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>fitRing());
/* ---------- apply language ---------- */
function applyLang(l,anim){LANG=l;document.documentElement.lang=l;
 document.querySelectorAll('[data-i]').forEach((el,n)=>{el.innerHTML=t(el.dataset.i);
  if(anim&&!el.classList.contains('hi')){el.classList.remove('sw');el.style.setProperty('--d',n%14);void el.offsetWidth;el.classList.add('sw')}});
 const rt=E('rt');if(rt){rt.textContent=t('ring');fitRing()}
 const ar=document.querySelector('.arrow');if(ar)ar.setAttribute('aria-label',t('arrow'));
 if(window.buildHeading)window.buildHeading(anim);if(typeof fit==='function')fit()}
function setLang(l){saveLang(l);applyLang(l,true);setIcon(l,true);setTimeout(()=>toggleRow(false),650)}
function toggleRow(o){const open=o===undefined?!row.classList.contains('open'):o;row.classList.toggle('open',open);E('lgBtn').setAttribute('aria-expanded',open);setMenu(nav.classList.contains('open'))}

/* ---------- menu + sheets ---------- */
function setMenu(o){nav.classList.toggle('open',o);tog.setAttribute('aria-expanded',o);tog.setAttribute('aria-label',o?'Close menu':'Open menu');nav.style.height=o?menuH()+'px':'56px';if(!o)row.classList.remove('open')}
function contentH(){const w=Math.min(212,innerWidth-28);list.style.height='auto';list.style.width=w+'px';const h=list.offsetHeight;list.style.height='';list.style.width='';return h}
function menuH(){const top=nav.getBoundingClientRect().top;return Math.min(contentH(),Math.max(160,innerHeight-top-14))}
function fit(){if(nav.classList.contains('open'))nav.style.height=menuH()+'px'}
addEventListener('resize',fit);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fit)
tog.addEventListener('click',()=>setMenu(!nav.classList.contains('open')));
function openSheet(k){E('sh').textContent=t(k+'_t');
 E('sb').innerHTML=k==='mail'?'<input id="mn" placeholder="'+t('ph_n')+'" autocomplete="name"><input id="mf" type="email" placeholder="'+t('ph_e')+'" autocomplete="email"><textarea id="mm" rows="4" placeholder="'+t('ph_m')+'"></textarea><div class="row2"><button class="go" id="send">'+t('send')+'</button><button class="go ghost" id="copy">'+t('copy')+'</button></div>':t(k+'_b');
 sheet.classList.add('on');setMenu(false);setTimeout(()=>{const f=E('mm')||E('cl');f&&f.focus()},50)}
const wipe=document.createElement('div');wipe.className='wipe';document.body.appendChild(wipe);
function go(u){wipe.classList.add('on');setTimeout(()=>{location.href=u+(u.includes('?')?'&':'?')+'lang='+LANG},900)}
addEventListener('pageshow',e=>{if(e.persisted){wipe.classList.remove('on');const l=readLang();if(l!==LANG){applyLang(l,false);setIcon(l,false)}}});
addEventListener('storage',e=>{if(e.key==='lang'&&VALID.includes(e.newValue)&&e.newValue!==LANG){applyLang(e.newValue,true);setIcon(e.newValue,true)}});
function route(k){
 if(k==='home'){PAGE==='home'?setMenu(false):go('index.html');return}
 if(k==='contact'){PAGE==='contact'?setMenu(false):go('contact.html');return}
 if(k==='about'){PAGE==='about'?setMenu(false):go('about.html');return}
 if(k==='c1'){PAGE==='c1'?setMenu(false):go('case1.html');return}
 if(k==='c2'){PAGE==='c2'?setMenu(false):go('case2.html');return}
 if(k==='c3'){PAGE==='c3'?setMenu(false):go('case3.html');return}
 if(k==='c4'){PAGE==='c4'?setMenu(false):go('case4.html');return}
 openSheet(k)}
const cur=list.querySelector('[data-k="'+PAGE+'"]');cur&&cur.classList.add('dim');
document.addEventListener('click',e=>{
 const g=e.target.closest('[data-go]');if(g){e.preventDefault();go(g.getAttribute('href'));return}
 if(e.target.closest('#lgBtn')){toggleRow();return}
 const lc=e.target.closest('[data-l]');if(lc){setLang(lc.dataset.l);return}
 const k=e.target.closest('[data-k]');if(k){route(k.dataset.k);return}
 if(e.target.id==='send'){const m=E('mm').value.trim();if(!m){E('mm').focus();return}const n=E('mn').value.trim(),f=E('mf').value.trim();
  location.href='mailto:'+MAIL+'?subject='+encodeURIComponent(t('subj')+' '+(n||'website'))+'&body='+encodeURIComponent(m+'\n\n'+n+(f?' ('+f+')':''));return}
 if(e.target.id==='copy'){const b=e.target;(navigator.clipboard?navigator.clipboard.writeText(MAIL):Promise.reject()).then(()=>b.textContent=t('copied'),()=>b.textContent=MAIL);return}
 if(e.target.id==='cl'||e.target===sheet)sheet.classList.remove('on')});
addEventListener('keydown',e=>{if(e.key==='Escape'){sheet.classList.remove('on');setMenu(false)}});
setTimeout(()=>{const l=E('loader');l&&l.remove()},/^c\d/.test(PAGE||'')?4300:5100);

/* start */
const START=readLang();applyLang(START,false);setIcon(START,false);saveLang(START);
