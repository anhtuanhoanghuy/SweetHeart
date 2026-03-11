const fullMessage = `Gửi em bé cụa anh🧡,

Hôm nay là ngày 14/3, ngày Valentine trắng của chúng mình. Anh thật lòng xin lỗi em vì công việc cá nhân mà đã không bên cạnh em lúc này.

Em biết không, từ ngày đầu tiên gặp em, anh đã thấy tim mình đập rộn ràng lên, anh biết là anh đã thích em mất rùi.

Em là một cô gái xinh xắn, đáng yêu, trong trẻo, nụ cười và ánh mắt của em làm anh nhớ mãi.

Anh biết anh là một cậu trai không khéo ăn nói, có những lúc anh làm cho em phải phiền lòng. Nhưng em ơi, mọi điều anh dành cho em đều xuất phát từ tấm lòng chân thành của anh.

Anh không dám chắc anh sẽ mang lại cho em cuộc sống sung sướng, nhưng anh hứa sẽ luôn vì em mà mang đến hạnh phúc cho em và chúng mình. 

Tử tế, anh có. Tiết kiệm, anh sẽ làm được. Còn tinh tế thì bây giờ là lúc bắt đầu.

Anh xin chúc em có một ngày Valentine trắng ngọt ngào và ấm áp. Chúc em thật vui vẻ và hạnh phúc. Anh không cần điều gì quá lớn lao, chỉ cần em ở mãi bên anh và cùng nhau cố gắng cho tương lai nhé ! Những lời anh đã hứa với em, anh sẽ làm được. Cảm ơn em đã tin tưởng anh.

Mấy hôm nay em hỏi anh phải code à. Hihi, anh viết nên trang Web này để dành tặng cho em đấy. Em cũng hỏi anh là tại sao anh không viết note cho em, đây chính là bí mật mà anh nói từ trước để tạo bất ngờ cho em đó. Trai IT cũng không khô khan quá nhỉ😊. Đợi anh về anh sẽ đưa em đi chơi bù ạ !

Mến thương em !
					                                                                              Anh💕`;

// Chặn mobile
function checkDevice() {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (isMobile) {
    document.body.innerHTML = `
      <div style="
        position: fixed; inset: 0;
        background: #0a0008;
        display: flex; flex-direction: column;
        align-items: center; justify-content: center;
        text-align: center; padding: 2rem;
        font-family: 'Be Vietnam Pro', sans-serif;
      ">
        <svg width="60" height="60" viewBox="0 0 100 90" style="margin-bottom:1.5rem;filter:drop-shadow(0 0 10px rgba(232,84,122,0.6))">
          <path d="M50 83 C50 83 5 52 5 26 C5 12 16 3 29 3 C38 3 46 9 50 18 C54 9 62 3 71 3 C84 3 95 12 95 26 C95 52 50 83 50 83Z"
            fill="#e8547a"/>
        </svg>
        <p style="color:#fff;font-size:1.1rem;font-weight:500;margin-bottom:0.8rem;">
          Trang này chỉ dành cho laptop 💻
        </p>
        <p style="color:rgba(255,255,255,0.5);font-size:0.85rem;font-weight:300;">
          Hãy mở bằng laptop để có trải nghiệm tốt nhất nhé 🤍
        </p>
      </div>
    `;
  }
}

checkDevice();
window.addEventListener('resize', checkDevice);

/* ── Floating hearts ── */
const container = document.getElementById('heartsContainer');
const sizes  = [10,14,18,12,16,20,8];
const colors = ['#e8547a','#f06292','#f472b6','#ec4899','#be185d','#fda4af','#fce7f3'];

const dobEm = document.getElementById("dob-em");
const dobAnh = document.getElementById("dob-anh");
const btn = document.getElementById("btn-primary");
const dialog = document.getElementById("dialog");

function checkEnableButton() {
  const soundConfirmed = document.getElementById('sound-confirm').checked;
  const dobEmFilled = dobEm.value.length === 10;
  const dobAnhFilled = dobAnh.value.length === 10;

  if (dobEmFilled && dobAnhFilled && soundConfirmed) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}

dobEm.addEventListener("input", checkEnableButton);
dobAnh.addEventListener("input", checkEnableButton);

function spawnHeart() {
  const el   = document.createElement('div');
  el.className = 'heart-float';
  const sz   = sizes[Math.floor(Math.random()*sizes.length)];
  const col  = colors[Math.floor(Math.random()*colors.length)];
  const dur  = 6 + Math.random()*8;
  const delay= Math.random()*4;
  el.style.cssText = `left:${Math.random()*100}%;animation-duration:${dur}s;animation-delay:${delay}s;`;
  el.innerHTML = `<svg width="${sz}" height="${sz}" viewBox="0 0 20 18"><path d="M10 17 C10 17 1 11 1 5.5A4.5 4.5 0 0 1 10 3.6 4.5 4.5 0 0 1 19 5.5C19 11 10 17 10 17Z" fill="${col}" opacity="0.7"/></svg>`;
  container.appendChild(el);
  setTimeout(() => el.remove(), (dur+delay)*1000);
}
setInterval(spawnHeart, 400);
for(let i=0;i<12;i++) spawnHeart();

function formatDate(input) {
  let value = input.value.replace(/\D/g, '');

  // DAY
  if (value.length >= 2) {
    let day = parseInt(value.substring(0,2));

    if (day > 31) {
      value = '31' + value.substring(2);
    }
  }

  // MONTH
  if (value.length >= 4) {
    let month = parseInt(value.substring(2,4));

    if (month > 12) {
      value = value.substring(0,2) + '12' + value.substring(4);
    }
  }

  // format DD/MM/YYYY
  if (value.length > 2) {
    value = value.substring(0,2) + '/' + value.substring(2);
  }

  if (value.length > 5) {
    value = value.substring(0,5) + '/' + value.substring(5,9);
  }

  input.value = value;
}

function checkDate(inputValue, ref) {
    const [d, m, y] = inputValue.split("/").map(Number);

    const inputDate = new Date(y, m - 1, d);
    var hardcoded;
    if (ref == 'em') {
        hardcoded = new Date(2004, 5, 25);
    } else if (ref == 'anh') {
        hardcoded = new Date(2002, 9, 30);
    }
  
    if (inputDate.getTime() === hardcoded.getTime()) {
        return true;
    } 
    return false;
}

function validate(){
    const isEmValid = checkDate(dobEm.value,'em');
    const isAnhValid = checkDate(dobAnh.value,'anh');

    if(isEmValid && isAnhValid) {
        dialog.innerHTML = "Đúng là em rùi";
        dialog.style.color = "green";
        dialog.style.background = "#bcf8cb50";
        dialog.style.display = "block";
        setTimeout(() => {
            goToScreen2();
        }, 1000);
    } else {
        dialog.innerHTML = "Không phải bạn rùi";
        dialog.style.display = "block";
        const modal = document.querySelector('.modal');
        modal.style.animation = 'none';
        modal.offsetHeight; // reflow
        modal.style.animation = 'shake 0.5s ease';
        const style = document.createElement('style');
        style.textContent = `@keyframes shake{0%,100%{transform:translateX(0)}20%{transform:translateX(-8px)}40%{transform:translateX(8px)}60%{transform:translateX(-5px)}80%{transform:translateX(5px)}}`;
        document.head.appendChild(style);
    }
}
/* ── Screen transitions ── */
function goToScreen2() {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed; inset: 0;
    background: #000;
    z-index: 9999;
    opacity: 0;
    transition: opacity 0.8s ease;
    pointer-events: none;
  `;
  document.body.appendChild(overlay);

  setTimeout(() => {
    overlay.style.opacity = '1';

    setTimeout(() => {
      document.querySelector('.bg').style.display = 'none';
      document.querySelector('.hearts-container').style.display = 'none';

      document.getElementById('screen1').style.display = 'none';
      document.getElementById('screen2').style.display = 'flex';
  
      setTimeout(() => {
        document.body.classList.add('show-heart');

        // ← THÊM VÀO ĐÂY: sau 3s tim đập thì chuyển sang màn thông điệp
        setTimeout(() => {
          showMessage();
        }, 10000);

      }, 1500);

      overlay.style.opacity = '0';
      setTimeout(() => overlay.remove(), 800);

    }, 800);

  }, 1000);
}
/* ── Dodge button ── */
function dodge(e, btn) {
  const rect = btn.getBoundingClientRect();
  const cx = rect.left + rect.width/2;
  const cy = rect.top  + rect.height/2;
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
  const dx = clientX - cx;
  const dy = clientY - cy;
  const dist = Math.sqrt(dx*dx + dy*dy);
  if(dist < 80) {
    const angle = Math.atan2(dy, dx);
    const push  = 120;
    const nx = -Math.cos(angle)*push;
    const ny = -Math.sin(angle)*push;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const newLeft = Math.max(0, Math.min(vw - rect.width,  rect.left + nx));
    const newTop  = Math.max(0, Math.min(vh - rect.height, rect.top  + ny));
    btn.style.position = 'fixed';
    btn.style.left = newLeft + 'px';
    btn.style.top  = newTop  + 'px';
    btn.style.transform = 'none';
  }
}

/* ── Say Yes ── */
function sayYes() {
  const cel = document.getElementById('celebration');
  cel.style.display = 'flex';
  // burst confetti hearts
  for(let i=0;i<30;i++) spawnHeart();
}
document.getElementById('celebration').addEventListener('click', e => {
  if(e.target === e.currentTarget) e.currentTarget.style.display='none';
});




// ----------------------------------------------------------------------------HEART--------------------------------------------------------------------




/* ───── Settings ───── */
var settings = {
  particles: { length: 2200, duration: 2, velocity: 145, effect: -0.38, size: 16 },
};
var BEAT_PERIOD = 1.8;   // seconds – slower beat

/* ───── RAF polyfill ───── */
(function(){var b=0,c=["ms","moz","webkit","o"];for(var a=0;a<c.length&&!window.requestAnimationFrame;++a){window.requestAnimationFrame=window[c[a]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[c[a]+"CancelAnimationFrame"]||window[c[a]+"CancelRequestAnimationFrame"];}if(!window.requestAnimationFrame)window.requestAnimationFrame=function(h){var d=new Date().getTime(),f=Math.max(0,16-(d-b)),g=window.setTimeout(function(){h(d+f)},f);b=d+f;return g};if(!window.cancelAnimationFrame)window.cancelAnimationFrame=function(d){clearTimeout(d);};}());

/* ───── Classes ───── */
var Point=(function(){function Point(x,y){this.x=x||0;this.y=y||0;}Point.prototype.clone=function(){return new Point(this.x,this.y);};Point.prototype.length=function(l){if(l===undefined)return Math.sqrt(this.x*this.x+this.y*this.y);this.normalize();this.x*=l;this.y*=l;return this;};Point.prototype.normalize=function(){var l=this.length();this.x/=l;this.y/=l;return this;};return Point;})();

var Particle=(function(){function Particle(){this.position=new Point();this.velocity=new Point();this.acceleration=new Point();this.age=0;}Particle.prototype.initialize=function(x,y,dx,dy){this.position.x=x;this.position.y=y;this.velocity.x=dx;this.velocity.y=dy;this.acceleration.x=dx*settings.particles.effect;this.acceleration.y=dy*settings.particles.effect;this.age=0;};Particle.prototype.update=function(dt){this.position.x+=this.velocity.x*dt;this.position.y+=this.velocity.y*dt;this.velocity.x+=this.acceleration.x*dt;this.velocity.y+=this.acceleration.y*dt;this.age+=dt;};Particle.prototype.draw=function(ctx,img){function ease(t){return(--t)*t*t+1;}var size=img.width*ease(this.age/settings.particles.duration);ctx.globalAlpha=1-this.age/settings.particles.duration;ctx.drawImage(img,this.position.x-size/2,this.position.y-size/2,size,size);};return Particle;})();

var ParticlePool=(function(){var particles,firstActive=0,firstFree=0,duration=settings.particles.duration;function ParticlePool(len){particles=new Array(len);for(var i=0;i<particles.length;i++)particles[i]=new Particle();}ParticlePool.prototype.add=function(x,y,dx,dy){particles[firstFree].initialize(x,y,dx,dy);firstFree++;if(firstFree==particles.length)firstFree=0;if(firstActive==firstFree)firstActive++;if(firstActive==particles.length)firstActive=0;};ParticlePool.prototype.update=function(dt){var i;if(firstActive<firstFree){for(i=firstActive;i<firstFree;i++)particles[i].update(dt);}if(firstFree<firstActive){for(i=firstActive;i<particles.length;i++)particles[i].update(dt);for(i=0;i<firstFree;i++)particles[i].update(dt);}while(particles[firstActive].age>=duration&&firstActive!=firstFree){firstActive++;if(firstActive==particles.length)firstActive=0;}};ParticlePool.prototype.draw=function(ctx,img){var i;if(firstActive<firstFree){for(i=firstActive;i<firstFree;i++)particles[i].draw(ctx,img);}if(firstFree<firstActive){for(i=firstActive;i<particles.length;i++)particles[i].draw(ctx,img);for(i=0;i<firstFree;i++)particles[i].draw(ctx,img);}};return ParticlePool;})();

/* ───── Heartbeat curve ───── */
// Two-bump: big at 15%, small at 42% of beat period
function heartbeatScale(phase) {
  var b1 = Math.exp(-Math.pow((phase - 0.15) / 0.07, 2));
  var b2 = 0.55 * Math.exp(-Math.pow((phase - 0.42) / 0.07, 2));
  return 1 + 0.26 * b1 + 0.14 * b2;
}

/* ───── DOM refs ───── */
var heartWrap = document.getElementById('heartWrap');
var glowEl    = document.getElementById('glow');
var ripples   = [document.getElementById('r1'), document.getElementById('r2'), document.getElementById('r3')];
var ripplePhaseOffsets = [0, 0.25, 0.5]; // staggered ripple launches
var rippleActive = [false, false, false];

/* ───── Main canvas setup ───── */
(function(canvas){
  var context = canvas.getContext('2d'),
      pool = new ParticlePool(settings.particles.length),
      particleRate = settings.particles.length / settings.particles.duration,
      time;

  function pointOnHeart(t){
    return new Point(
      160 * Math.pow(Math.sin(t), 3),
      130 * Math.cos(t) - 50 * Math.cos(2*t) - 20 * Math.cos(3*t) - 10 * Math.cos(4*t) + 25
    );
  }

  var image = (function(){
    var c = document.createElement('canvas'), ctx = c.getContext('2d');
    c.width = settings.particles.size; c.height = settings.particles.size;
    function to(t){
      var p = pointOnHeart(t);
      p.x = settings.particles.size/3 + p.x*settings.particles.size/550;
      p.y = settings.particles.size/3 - p.y*settings.particles.size/550;
      return p;
    }
    ctx.beginPath();
    var t = -Math.PI, p = to(t); ctx.moveTo(p.x, p.y);
    while(t < Math.PI){ t += 0.01; p = to(t); ctx.lineTo(p.x, p.y); }
    ctx.closePath();
    var g = ctx.createRadialGradient(
      settings.particles.size*0.38, settings.particles.size*0.32, 0,
      settings.particles.size*0.5,  settings.particles.size*0.5,  settings.particles.size*0.6
    );
    g.addColorStop(0,   '#ffcce0');
    g.addColorStop(0.4, '#e8547a');
    g.addColorStop(1,   '#8b0f3a');
    ctx.fillStyle = g; ctx.fill();
    var img = new Image(); img.src = c.toDataURL(); return img;
  })();

  /* Ripple animation state */
  var rippleStates = [{p:0,active:false},{p:0,active:false},{p:0,active:false}];
  var lastPhase = 0;

  function render(){
    requestAnimationFrame(render);
    var newTime = new Date().getTime() / 1000, dt = newTime - (time || newTime);
    time = newTime;

    var phase = (time % BEAT_PERIOD) / BEAT_PERIOD;
    var scale = heartbeatScale(phase);

    /* Detect beat peak (phase crosses ~0.15) → fire ripple */
    if(lastPhase > 0.9 && phase < 0.1) {
      // new beat started – launch a ripple
      for(var ri = 0; ri < 3; ri++){
        if(!rippleStates[ri].active){
          rippleStates[ri].active = true;
          rippleStates[ri].delay  = ri * 0.22; // stagger
          rippleStates[ri].born   = time;
          break;
        }
      }
    }
    lastPhase = phase;

    /* Update ripples */
    for(var ri = 0; ri < 3; ri++){
      var rs = rippleStates[ri];
      var el = ripples[ri];
      if(rs.active){
        var elapsed = time - rs.born - rs.delay;
        if(elapsed < 0){ el.style.opacity = 0; continue; }
        var progress = elapsed / 1.8; // ripple duration 1.8s
        if(progress >= 1){ rs.active = false; el.style.opacity = 0; continue; }
        var s = 0.8 + progress * 3.8;
        var op = (1 - progress) * 0.65;
        el.style.transform = 'translate(-50%,-50%) scale(' + s + ')';
        el.style.opacity = op;
      } else {
        el.style.opacity = 0;
      }
    }

    /* Sync center heart + glow scale with beat */
    var glowScale = 1 + (scale - 1) * 2.2;
    heartWrap.style.transform = 'translate(-50%,-50%) scale(' + scale + ')';
    heartWrap.style.filter =
      'drop-shadow(0 0 ' + (10 + (scale-1)*60) + 'px rgba(255,120,170,' + (0.7 + (scale-1)*2) + ')) ' +
      'drop-shadow(0 0 ' + (30 + (scale-1)*120) + 'px rgba(220,50,110,0.6))';
    glowEl.style.transform = 'translate(-50%,-50%) scale(' + glowScale + ')';
    glowEl.style.opacity = 0.4 + (scale - 1) * 4;

    /* Trail clear */
    context.fillStyle = 'rgba(10,0,8,0.15)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    /* Scale canvas context from center */
    var cx = canvas.width / 2;
    var cy = canvas.height / 2;
    context.save();
    context.translate(cx, cy);
    context.scale(scale, scale);
    context.translate(-cx, -cy);

    /* Spawn particles */
    var amount = particleRate * dt;
    for(var i = 0; i < amount; i++){
      var pos = pointOnHeart(Math.PI - 2 * Math.PI * Math.random());
      var dir = pos.clone().length(settings.particles.velocity);
      pool.add(cx + pos.x, cy - pos.y, dir.x, -dir.y);
    }
    pool.update(dt);
    pool.draw(context, image);
    context.restore();
  }

  function onResize(){ canvas.width = canvas.clientWidth; canvas.height = canvas.clientHeight; }
  window.onresize = onResize;
  setTimeout(function(){ onResize(); render(); }, 10);

})(document.getElementById('pinkboard'));



// ---------------------------------------------------------------------MESSAGE-------------------------------------------------------------

function showMessage() {
  // Fade overlay đen
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed; inset: 0;
    background: #000;
    z-index: 9999;
    opacity: 0;
    transition: opacity 0.8s ease;
  `;
  document.body.appendChild(overlay);

  // Fade tối
  setTimeout(() => {
    overlay.style.opacity = '1';

    setTimeout(() => {
      // Ẩn canvas/tim
      document.body.classList.remove('show-heart');
      document.getElementById('screen2').style.display = 'none';

      // Hiện lại background screen 1
      document.querySelector('.bg').style.display = '';
      document.querySelector('.hearts-container').style.display = '';

      // Hiện screen 3
      document.getElementById('screen3').style.display = 'flex';

      // Fade sáng
      overlay.style.opacity = '0';
      setTimeout(() => overlay.remove(), 800);

      // Bắt đầu gõ chữ
      setTimeout(() => typeMessage(), 2000);

    }, 800);
  }, 100);
}

const bgSound = new Audio('assets/sound_anca.mp3');
bgSound.volume = 0.2;
bgSound.loop = true;

function typeMessage() {
  const cursor = document.getElementById('cursor-span');
  const screen3 = document.getElementById('screen3');
  let i = 0;

  // Phát nhạc nền ngay khi bắt đầu
  bgSound.play().catch(err => console.log('Audio error:', err));

  function type() {
    if (i < fullMessage.length) {
      cursor.insertAdjacentText('beforebegin', fullMessage[i]);
      i++;

      const cursorBottom = cursor.getBoundingClientRect().bottom;
      const screenBottom = screen3.getBoundingClientRect().bottom;
      if (screenBottom - cursorBottom < 200) {
        screen3.scrollTop += 20;
      }

      setTimeout(type, 50);
    } else {
      setTimeout(() => {
        cursor.style.display = 'none';
        const btn = document.getElementById('btn-yes');
        btn.style.opacity = '1';
        btn.style.pointerEvents = 'all';
      }, 2000);
    }
  }
  type();
}