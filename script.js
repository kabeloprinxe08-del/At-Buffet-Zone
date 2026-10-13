/* ===== EDIT ME ===== */
var CFG={wa:"27000000000",email:"info@example.com",phone:"+27 00 000 0000"};
var HOURS=[["Sunday","11:00","20:00"],["Monday","11:00","21:00"],["Tuesday","11:00","21:00"],["Wednesday","11:00","21:00"],["Thursday","11:00","21:00"],["Friday","11:00","22:00"],["Saturday","11:00","22:00"]];
var MENU=[
["Hot Buffet","Slow-Braised Beef","Rich red wine jus",0],["Hot Buffet","Butter Chicken","Creamy, mildly spiced",0],["Hot Buffet","Lamb Curry","Fragrant and tender",0],["Hot Buffet","Seasonal Vegetables","Garlic butter finish",0],
["Carvery & Grill","Roast Beef Carvery","Carved to order",0],["Carvery & Grill","Peri-Peri Chicken","Flame-grilled",0],["Carvery & Grill","Boerewors Rings","House-made",0],["Carvery & Grill","Pork Belly","Crackling and apple sauce",0],
["Salads & Sides","Garden Salad","Fresh market greens",0],["Salads & Sides","Creamy Potato Salad","Chive and egg",0],["Salads & Sides","Pap & Gravy","Traditional favourite",0],["Salads & Sides","Garlic Naan","Baked fresh",0],
["Desserts","Malva Pudding","Warm, with custard",0],["Desserts","Chocolate Fondant","Dark, molten centre",0],["Desserts","Fruit & Cream Platter","Light and fresh",0],
["Drinks","Signature Mocktail","Seasonal fruit and mint",0],["Drinks","Fresh Juice","Orange or mixed berry",0],["Drinks","Soft Drinks","Assorted",0],["Drinks","Coffee & Tea","Served hot or iced",0]
].map(function(a){return{c:a[0],n:a[1],d:a[2],p:a[3]}});
var STARS=[[5,77],[4,39],[3,18],[2,0],[1,5]],TOTAL=139,RATING=4.3;
/* Put your files in the images and videos folders. Any of these names work: food1.jpg, Food1.JPG, food1.png ... */
var LOGO="images/logo";
var MEDIA=[],mi;for(mi=1;mi<=8;mi++)MEDIA.push({type:"photo",base:"images/food"+mi,cap:"Food photo "+mi});for(mi=1;mi<=3;mi++)MEDIA.push({type:"video",base:"videos/video"+mi,cap:"Food video "+mi});
var TEAM={cap:"The Buffet Zone team",base:"images/team"};
var ABOUT=["Welcome to At Buffet Zone on WF Nkomo Street in the heart of Pretoria Central: an affordable, all-you-can-eat buffet with well-portioned dishes and a clean, inviting atmosphere.","Whether it is a casual lunch, a family meal or a group celebration, you can dine in, sit outside, take your food home or have it delivered. Add your own story here: who you are, how you started and what makes your food special."];
/* Social: put the full link in url. Empty url shows Coming soon. */
var SOCIAL=[{k:"WhatsApp",i:"wa",h:"Message us",url:"https://wa.me/"+CFG.wa},{k:"Instagram",i:"ig",h:"@atbuffetzone",url:"https://www.instagram.com/atbuffetzone"},{k:"Facebook",i:"fb",h:"",url:""},{k:"TikTok",i:"tt",h:"",url:""}];
var ICONS={ig:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".9" fill="currentColor"/></svg>',fb:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 21v-8h2.6l.4-3h-3V8.4c0-.9.3-1.4 1.5-1.4H17V4.2A15 15 0 0 0 14.9 4C12.7 4 11.2 5.3 11.2 7.7V10H8.5v3h2.7v8"/></svg>',wa:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.5 20.5l1.2-4.2A8.5 8.5 0 1 1 8 19.5l-4.5 1z"/><path d="M9.2 8.6c-.3.7-.1 1.7.8 2.9.9 1.2 2 1.900 3 2.200.7.2 1.400-.2 1.700-.9l-1.300-.9-.7.5c-.6-.3-1.200-.9-1.600-1.600l.5-.7-.9-1.300z"/></svg>',tt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3.5v10.2a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 3.5c.3 2.3 1.800 3.900 4 4.100"/></svg>'};
var AMEN=["All you can eat","Cozy","Casual","Coffee","Dine-in","Takeout","Delivery","Outdoor seating","Good for kids","Small plates","Accepts reservations","Credit cards","Wheelchair accessible entrance","Wheelchair accessible seating","Wheelchair accessible parking","Wheelchair accessible restroom"];
/* =================== */
function $(i){return document.getElementById(i)}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}

/* hero letters */
(function(){var n=0;$("t").innerHTML="At Buffet Zone".split(" ").map(function(w){return'<span style="white-space:nowrap">'+Array.from(w).map(function(c){return'<span class="ch" style="--i:'+(n++)+'">'+c+"</span>"}).join("")+"</span>"}).join(" ")})();
/* marquee */
var mqt=["All you can eat","Dine-in","Takeout","Delivery","Outdoor seating","Good for kids","Group reservations","Coffee"].map(function(x){return"<span>"+x+"</span><span>&#10022;</span>"}).join("");
$("mq").innerHTML=mqt+mqt;
/* chips + bars */
$("chips").innerHTML=AMEN.map(function(a){return'<span class="chip">'+a+"</span>"}).join("");
$("bars").innerHTML=STARS.map(function(s){return'<div class="bar"><span>'+s[0]+'</span><i><b data-w="'+(s[1]/TOTAL*100)+'"></b></i><span>'+s[1]+"</span></div>"}).join("");
function count(el,to,dec,ms){var t0=performance.now();(function f(t){var k=Math.min((t-t0)/ms,1);el.textContent=(to*(1-Math.pow(1-k,3))).toFixed(dec);if(k<1)requestAnimationFrame(f)})(t0)}

/* gallery + chef */
var IMG=["jpg","jpeg","png","webp","JPG","JPEG","PNG"],VID=["mp4","mov","webm","MP4","MOV"];
function cands(path, exts) {
  var o = [], p = path.split("/"), f = p.pop();
  var names = [
    f,
    f.charAt(0).toUpperCase() + f.slice(1),
    f.toUpperCase()
  ];

  names.forEach(function(n) {
    exts.forEach(function(x) {
      o.push(p.join("/") + "/" + n + "." + x);
    });
  });

  return o;
}
function load(el,list,fail){var i=0;function next(){if(i<list.length)el.src=list[i++];else fail()}el.addEventListener("error",next);next()}
var vio=new IntersectionObserver(function(es){es.forEach(function(e){var v=e.target;if(e.isIntersecting){var p=v.play();if(p&&p.catch)p.catch(function(){})}else v.pause()})},{threshold:.35});
function slot(box,tag,list,cap,first){var el=document.createElement(tag);
  if(tag==="video"){el.muted=true;el.loop=true;el.playsInline=true;el.setAttribute("playsinline","");el.preload="metadata";el.disablePictureInPicture=true;el.addEventListener("loadeddata",function(){box.classList.add("rdy")});vio.observe(el)}
  else{el.alt=cap;el.decoding="async";if(!first)el.loading="lazy";el.addEventListener("load",function(){box.classList.add("rdy")})}
  box.appendChild(el);load(el,list,function(){vio.unobserve(el);box.innerHTML=cap+'<br><small style="letter-spacing:0;text-transform:none;opacity:.7">Not found: '+list[0].replace(/\.[^.]+$/,"")+'.(jpg/png/mp4)</small>'})}
var PH=MEDIA.filter(function(m){return m.type==="photo"}),VD=MEDIA.filter(function(m){return m.type==="video"});
$("gal").innerHTML=PH.map(function(){return'<div class="ph" tabindex="0" role="button" aria-label="Open photo"></div>'}).join("");
$("reels").innerHTML=VD.map(function(){return'<div class="ph reel" tabindex="0" role="button" aria-label="Play video"></div>'}).join("");
document.querySelectorAll("#gal .ph").forEach(function(b,k){slot(b,"img",cands(PH[k].base,IMG),PH[k].cap,k<2)});
document.querySelectorAll("#reels .ph").forEach(function(b,k){slot(b,"video",cands(VD[k].base,VID),"\u25B6 "+VD[k].cap)});
slot($("tgrid"),"img",cands(TEAM.base,IMG),"Team photo");$("tcap").textContent=TEAM.cap;


$("abt").innerHTML=ABOUT.map(function(p){return'<p style="margin-bottom:12px">'+esc(p)+"</p>"}).join("");
$("soc").innerHTML=SOCIAL.map(function(s){return'<a class="soc'+(s.url?"":" off")+'" '+(s.url?'href="'+esc(s.url)+'" target="_blank" rel="noopener"':"")+'><i>'+ICONS[s.i]+"</i><span>"+esc(s.k)+"<small>"+esc(s.h||"Coming soon")+"</small></span></a>"}).join("");

/* menu */
var cat="All",q=$("q"),list=$("list"),tabs=$("tabs");
var cats=["All"].concat(MENU.map(function(i){return i.c}).filter(function(v,i,a){return a.indexOf(v)===i}));
function draw(){
  tabs.innerHTML=cats.map(function(c){return'<button class="tab'+(c===cat?" on":"")+'" data-c="'+esc(c)+'">'+esc(c)+"</button>"}).join("");
  var t=q.value.toLowerCase();
  var r=MENU.filter(function(i){return(cat==="All"||i.c===cat)&&(i.n+" "+i.d+" "+i.c).toLowerCase().indexOf(t)>-1});
  list.innerHTML=r.length?r.map(function(i,k){return'<div class="item" style="animation-delay:'+k*35+'ms"><div>'+esc(i.n)+"<small>"+esc(i.d)+"</small></div><span>R "+(i.p?i.p:"00")+"</span></div>"}).join(""):'<p style="color:var(--mute)">No dishes found.</p>';
}
tabs.addEventListener("click",function(e){var c=e.target.getAttribute("data-c");if(c){cat=c;draw()}});
q.addEventListener("input",draw);draw();

/* spontaneous pick */
var last=-1;
function pick(){
  var i;do{i=Math.floor(Math.random()*MENU.length)}while(i===last&&MENU.length>1);last=i;
  var el=$("pick");el.classList.add("sw");
  setTimeout(function(){$("pn").textContent=MENU[i].n;$("pd").textContent=MENU[i].c+" - "+MENU[i].d;el.classList.remove("sw")},350);
}
$("sur").addEventListener("click",pick);pick();

/* hours */
function jhb(){
  var o={};new Intl.DateTimeFormat("en-US",{timeZone:"Africa/Johannesburg",weekday:"long",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).formatToParts(new Date()).forEach(function(x){o[x.type]=x.value});
  return{day:o.weekday,min:(+o.hour%24)*60+ +o.minute};
}
function mins(s){var a=s.split(":");return+a[0]*60+ +a[1]}
function hours(){
  var n=jhb(),open=false;
  $("hrs").innerHTML=HOURS.map(function(h){var t=h[0]===n.day;if(t)open=n.min>=mins(h[1])&&n.min<mins(h[2]);return'<div class="'+(t?"today":"")+'"><span>'+h[0]+"</span><span>"+h[1]+" - "+h[2]+"</span></div>"}).join("");
  var b=$("badge");b.textContent=open?"Open now":"Closed";b.className="badge "+(open?"open":"closed");
}
hours();setInterval(hours,60000);
$("call").href="tel:"+CFG.phone.replace(/\s/g,"");$("wa").href="https://wa.me/"+CFG.wa;$("yr").textContent=new Date().getFullYear();

/* form */
function msg(){var d=new FormData($("f"));return"Reservation / event enquiry - At Buffet Zone\nName: "+d.get("name")+"\nPhone: "+d.get("phone")+"\nDate: "+d.get("date")+"\nGuests: "+d.get("guests")+"\nType: "+d.get("type")+"\nNotes: "+(d.get("msg")||"-")}
$("f").addEventListener("submit",function(e){e.preventDefault();window.open("https://wa.me/"+CFG.wa+"?text="+encodeURIComponent(msg()),"_blank")});
$("mail").addEventListener("click",function(){if(!$("f").reportValidity())return;location.href="mailto:"+CFG.email+"?subject="+encodeURIComponent("Reservation enquiry")+"&body="+encodeURIComponent(msg())});

/* tilt, glow, reveal */
document.querySelectorAll(".tilt").forEach(function(el){
  el.addEventListener("pointermove",function(e){var r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform="perspective(700px) rotateY("+x*14+"deg) rotateX("+-y*14+"deg) translateZ(6px)"});
  el.addEventListener("pointerleave",function(){el.style.transform=""});
});
var mx=0,my=0;
addEventListener("pointermove",function(e){mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5;var g=$("glow");g.style.left=e.clientX+"px";g.style.top=e.clientY+"px"});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var t=e.target;t.classList.add("in");io.unobserve(t);
  if(t.id==="reviews"){count($("num"),RATING,1,1600);count($("cnt"),TOTAL,0,1600);t.querySelectorAll("[data-w]").forEach(function(b){b.style.width=b.getAttribute("data-w")+"%"})}})},{threshold:.15});
document.querySelectorAll(".rv").forEach(function(el){io.observe(el)});

/* WebGL gold scene */
function cssCoin(){}
function spinLogo(){
  var d=$("logo3d");
  d.innerHTML='<div class="in"><img alt="At Buffet Zone logo"><img class="b" alt=""></div>';
  var im=d.querySelectorAll("img"),list=cands(LOGO,IMG),i=0;
  function fallback(){
    d.innerHTML='<div class="in"><div class="coin"><small>AT</small><b>BUFFET</b><span>ZONE</span></div><div class="coin b"><small>AT</small><b>BUFFET</b><span>ZONE</span></div></div>';
    var n=document.createElement("div");n.id="lognote";n.textContent="Your logo was not found. Save it as images/logo.png (inside the at-buffet-zone folder).";document.body.appendChild(n);setTimeout(function(){n.remove()},12000);
  }
  function next(){if(i<list.length)im[0].src=list[i++];else fallback()}
  im[0].addEventListener("error",next);
  im[0].addEventListener("load",function(){im[1].src=im[0].src});
  next();
}
function initGL(){
  var RM=matchMedia("(prefers-reduced-motion:reduce)").matches;
  var R;try{R=new THREE.WebGLRenderer({canvas:$("gl"),alpha:true,antialias:true})}catch(e){cssCoin();return}
  R.setPixelRatio(Math.min(devicePixelRatio,1.5));
  var S=new THREE.Scene(),C=new THREE.PerspectiveCamera(55,1,.1,100);C.position.z=9;
  S.add(new THREE.AmbientLight(0xffffff,.4));
  var L1=new THREE.PointLight(0xffd36b,2.2,60);L1.position.set(5,5,8);S.add(L1);
  var L2=new THREE.PointLight(0xffffff,1.2,60);L2.position.set(-6,-3,6);S.add(L2);
  var gold=new THREE.MeshStandardMaterial({color:0xd4af37,metalness:.9,roughness:.25});
  var knot=new THREE.Group();S.add(knot);
  var rs=[],i;
  for(i=0;i<14;i++){var m=new THREE.Mesh(new THREE.TorusGeometry(.35+Math.random()*.5,.05,12,48),gold);m.position.set((Math.random()-.5)*18,2-Math.random()*20,-4+Math.random()*6);m.userData.s=Math.random()*.02+.005;S.add(m);rs.push(m)}
  var N=700,a=new Float32Array(N*3);for(i=0;i<N*3;i+=3){a[i]=(Math.random()-.5)*30;a[i+1]=6-Math.random()*34;a[i+2]=-8+Math.random()*12}
  var pg=new THREE.BufferGeometry();pg.setAttribute("position",new THREE.BufferAttribute(a,3));
  var pts=new THREE.Points(pg,new THREE.PointsMaterial({color:0xf3d98b,size:.07,transparent:true,opacity:.85}));S.add(pts);
  function size(){R.setSize(innerWidth,innerHeight,false);C.aspect=innerWidth/innerHeight;C.updateProjectionMatrix();var m=innerWidth<700;knot.scale.setScalar(m?.7:1.05);knot.position.x=m?0:3.8;knot.userData.oy=m?2.1:0}
  size();addEventListener("resize",size);
  var t=0;
  (function loop(){
    requestAnimationFrame(loop);if(document.hidden)return;t+=.01;
    var sy=scrollY;
    C.position.x+=(mx*1.6-C.position.x)*.05;
    C.position.y+=((-sy*.0035-my*1.2)-C.position.y)*.06;
    knot.position.y=C.position.y+(knot.userData.oy||0)+Math.sin(t)*.2;knot.rotation.x+=(my*.4-knot.rotation.x)*.05;knot.rotation.y+=RM?.006:.014;
    rs.forEach(function(m){m.rotation.x+=m.userData.s;m.rotation.y+=m.userData.s*1.3});
    pts.rotation.y=t*.03;
    L1.position.x=5+Math.sin(t*.8)*4;
    try{R.render(S,C)}catch(e){}
  })();
}
spinLogo();
if(window.THREE){try{initGL()}catch(e){cssCoin()}}
else{var sc=document.createElement("script");sc.src="https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.min.js";sc.onload=function(){try{initGL()}catch(e){cssCoin()}};sc.onerror=cssCoin;document.head.appendChild(sc)}

/* ===== Premium extras: photo backdrop, scroll progress, active nav ===== */
(function(){
  var bg=$("bg"),layers=[],k=0;
  MEDIA.filter(function(m){return m.type==="photo"}).forEach(function(m){
    var l=document.createElement("div");l.className="bgl";bg.appendChild(l);
    var list=cands(m.base,IMG),i=0,im=new Image();
    im.onload=function(){l.style.backgroundImage='url("'+im.src+'")';layers.push(l);if(layers.length===1)l.classList.add("on")};
    im.onerror=function(){if(i<list.length)im.src=list[i++]};
    im.src=list[i++];
  });
  setInterval(function(){if(layers.length<2)return;var o=layers[k%layers.length];o.classList.remove("on");o.classList.add("prev");setTimeout(function(){o.classList.remove("prev")},2600);k++;layers[k%layers.length].classList.add("on")},7000);
  var pr=$("prog");
  function prog(){var h=document.documentElement.scrollHeight-innerHeight;pr.style.width=(h>0?scrollY/h*100:0)+"%"}
  addEventListener("scroll",prog,{passive:true});prog();
  var links={};document.querySelectorAll("nav div a").forEach(function(a){links[a.getAttribute("href").slice(1)]=a});
  var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)Object.keys(links).forEach(function(n){links[n].classList.toggle("on",n===e.target.id)})})},{rootMargin:"-45% 0px -50% 0px"});
  Object.keys(links).forEach(function(n){var s=$(n);if(s)o.observe(s)});
})();


/* ===== Cinematic layer: footer, reveals, cursor, lightbox ===== */
(function(){
  $("fsoc").innerHTML=SOCIAL.map(function(s){return'<a class="fs'+(s.url?"":" off")+'" aria-label="'+esc(s.k)+'" title="'+esc(s.k)+(s.url?"":" (coming soon)")+'" '+(s.url?'href="'+esc(s.url)+'" target="_blank" rel="noopener"':"")+">"+ICONS[s.i]+"</a>"}).join("");
  var fc=$("fcall");fc.textContent=CFG.phone;fc.href="tel:"+CFG.phone.replace(/\s/g,"");
  var fm=$("fmail");fm.textContent=CFG.email;fm.href="mailto:"+CFG.email;
  var g=[];[1,2,3,4,5,6,0].forEach(function(d){var h=HOURS[d],t=h[1]+" - "+h[2],l=g[g.length-1];if(l&&l.t===t)l.e=h[0];else g.push({s:h[0],e:h[0],t:t})});
  $("fhrs").innerHTML=g.map(function(x){return"<div><span>"+(x.s===x.e?x.s.slice(0,3):x.s.slice(0,3)+" - "+x.e.slice(0,3))+"</span><span>"+x.t+"</span></div>"}).join("");
  $("top").addEventListener("click",function(e){e.preventDefault();scrollTo({top:0,behavior:"smooth"})});

  document.querySelectorAll(".rv .grid,.rv .chips,.rv .socs,.rv .tabs,.rv .hrs,.rv form").forEach(function(c){Array.prototype.forEach.call(c.children,function(k,i){k.style.setProperty("--d",i)})});
  var dn=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var t=e.target;setTimeout(function(){t.classList.add("done")},2800);dn.unobserve(t)}})},{threshold:.15});
  document.querySelectorAll(".rv").forEach(function(el){dn.observe(el)});
  var po=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");po.unobserve(e.target)}})},{threshold:.15,rootMargin:"0px 0px -6% 0px"});
  document.querySelectorAll(".ph,.tph").forEach(function(t,i){t.style.transitionDelay=(i%4)*90+"ms";po.observe(t)});

  var bg=$("bg"),tk=false;
  addEventListener("scroll",function(){if(!tk){tk=true;requestAnimationFrame(function(){tk=false;bg.style.setProperty("--py",(-scrollY*.05)+"px")})}},{passive:true});

  document.querySelectorAll(".card,.soc").forEach(function(el){el.addEventListener("pointermove",function(e){var r=el.getBoundingClientRect();el.style.setProperty("--mx",(e.clientX-r.left)+"px");el.style.setProperty("--my",(e.clientY-r.top)+"px")})});

  if(matchMedia("(hover:hover) and (pointer:fine)").matches){
    document.querySelectorAll(".btn,nav div a:last-child").forEach(function(b){
      b.addEventListener("pointermove",function(e){var r=b.getBoundingClientRect();b.style.transform="translate("+((e.clientX-r.left)/r.width-.5)*10+"px,"+((e.clientY-r.top)/r.height-.5)*8+"px)"});
      b.addEventListener("pointerleave",function(){b.style.transform=""})});
    var c=document.createElement("div");c.id="cur";document.body.appendChild(c);
    var x=-100,y=-100,tx=-100,ty=-100;
    addEventListener("pointermove",function(e){tx=e.clientX;ty=e.clientY});
    (function f(){x+=(tx-x)*.18;y+=(ty-y)*.18;c.style.transform="translate3d("+x+"px,"+y+"px,0)";requestAnimationFrame(f)})();
    document.addEventListener("mouseover",function(e){var t=e.target,ph=t.closest&&t.closest("#gal .ph,#reels .ph");
      if(ph&&ph.querySelector("img,video")){c.className="big";c.textContent=ph.classList.contains("reel")?"Play":"View"}
      else if(t.closest&&t.closest("a,button,.tab,.chip,input,select,textarea")){c.className="link";c.textContent=""}
      else{c.className="";c.textContent=""}});
    document.documentElement.addEventListener("mouseleave",function(){c.style.opacity=0});
    document.documentElement.addEventListener("mouseenter",function(){c.style.opacity=1});
  }

  var lb=$("lb"),lc=$("lbc");
  function open(box){var m=box.querySelector("img,video");if(!m)return;lc.innerHTML="";var el;
    if(m.tagName==="VIDEO"){el=document.createElement("video");el.src=m.currentSrc||m.src;el.controls=true;el.autoplay=true;el.loop=true;el.playsInline=true;m.pause()}
    else{el=document.createElement("img");el.src=m.currentSrc||m.src;el.alt=m.alt||""}
    lc.appendChild(el);lb.classList.add("on");lb.setAttribute("aria-hidden","false");document.body.style.overflow="hidden"}
  function close(){if(!lb.classList.contains("on"))return;lb.classList.remove("on");lb.setAttribute("aria-hidden","true");document.body.style.overflow="";
    var v=lc.querySelector("video");if(v)v.pause();
    setTimeout(function(){lc.innerHTML=""},600);
    document.querySelectorAll("#reels video").forEach(function(v){var r=v.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0){var p=v.play();if(p&&p.catch)p.catch(function(){})}})}
  document.addEventListener("click",function(e){var b=e.target.closest&&e.target.closest("#gal .ph,#reels .ph");if(b&&b.querySelector("img,video"))open(b)});
  document.addEventListener("keydown",function(e){var a=document.activeElement;
    if(e.key==="Escape")close();
    if((e.key==="Enter"||e.key===" ")&&a&&a.classList&&a.classList.contains("ph")){e.preventDefault();open(a)}});
  lb.addEventListener("click",function(e){if(e.target===lb||e.target.id==="lbx")close()});
})();

/* fade the spinning logo after the hero so text stays easy to read */
(function(){var lg=$("logo3d"),t=false;function u(){t=false;lg.style.opacity=Math.max(.16,1-scrollY/(innerHeight*.75))}
addEventListener("scroll",function(){if(!t){t=true;requestAnimationFrame(u)}},{passive:true});u()})();