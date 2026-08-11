/* Sparkles */
for(let i=0;i<40;i++){
  const s=document.createElement('div');
  s.className='sparkle';
  s.style.top=Math.random()*100+'%';
  s.style.left=Math.random()*100+'%';
  document.querySelector('.hero').appendChild(s);
}

/* Confetti burst */
setInterval(()=>{
  const c=document.createElement('div');
  c.className='confetti';
  c.style.left=Math.random()*100+'%';
  c.style.animationDuration=(3+Math.random()*3)+'s';
  document.body.appendChild(c);
  setTimeout(()=>c.remove(),6000);
},500);

/* Lightbox */
const lb=document.getElementById('lightbox');
const lbVideo=document.getElementById('lightboxVideo');
document.querySelectorAll('.gallery-video').forEach(video=>{
  video.onclick=()=>{
    const source = video.querySelector('source');
    lb.style.display='flex';
    lbVideo.src = source ? source.src : video.src;
    lbVideo.poster = video.poster;
    lbVideo.currentTime = 0;
    lbVideo.play();
  };
});
lb.onclick=()=>{
  lb.style.display='none';
  lbVideo.pause();
};

/* Music toggle */
const music=document.getElementById('music');
const btn=document.getElementById('muteBtn');
const clickHint = document.querySelector('.click-hint');

if (music && btn) {
  // Set initial button state
  const updateButtonState = () => {
    if (music.paused) {
      btn.textContent='▶';
    } else {
      btn.textContent='⏸';
    }
  };

  btn.onclick=()=>{
    if(music.paused){
      music.play();
      btn.textContent='⏸';
    } else {
      music.pause();
      btn.textContent='▶';
    }
    // Hide the click hint after first interaction
    if (clickHint) {
      clickHint.style.display = 'none';
    }
  };

  // Handle autoplay success/failure
  music.addEventListener('play', () => {
    btn.textContent='⏸';
    // Hide hint if music starts playing automatically
    if (clickHint) {
      clickHint.style.display = 'none';
    }
  });

  music.addEventListener('pause', () => {
    btn.textContent='▶';
  });

  // If autoplay is blocked, show play button
  music.addEventListener('error', () => {
    btn.textContent='▶';
  });

  // Check initial state after page load
  window.addEventListener('load', () => {
    setTimeout(updateButtonState, 100);
  });
}

/* Guestbook */
const sendWishButton = document.getElementById('sendWish');
if (sendWishButton) {
  sendWishButton.onclick=()=>{
    const input=document.getElementById('wishInput');
    const val=input.value.trim();
    if(!val) return;
    const div=document.createElement('div');
    div.className='wish';
    div.textContent=val;
    document.getElementById('wishes').prepend(div);
    input.value='';
  };
}
