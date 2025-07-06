const noBtn = document.getElementById('no');
const yesBtn = document.getElementById('yes');
const form = document.getElementById('hiddenForm');
let evasive = true;

noBtn.addEventListener('mouseover', () => {
  if (evasive) {
    const i = Math.floor(Math.random() * 300);
    const j = Math.floor(Math.random() * 300);
    noBtn.style.position = 'absolute';
    noBtn.style.top = `${i}px`;
    noBtn.style.left = `${j}px`;
  }
});

noBtn.addEventListener('click', () => {
  noBtn.innerText = 'Yes 💕';
  noBtn.style.backgroundColor = '#ff4081';
  noBtn.style.color = 'white';
  evasive = false;
});

yesBtn.addEventListener('click', () => {
  alert("You said YES? 🥹 That just made my whole day. 💖");
  form.submit();
});

// Try to unmute after user interacts (for browsers that block autoplay with sound)
document.body.addEventListener('click', function unmuteMusic() {
  const audio = document.getElementById('bg-music');
  audio.muted = false;
  audio.play();
  document.body.removeEventListener('click', unmuteMusic);
});
