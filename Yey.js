const kue = document.querySelector('.kue');

for (let i = 1; i <= 18; i++) {
  const lilin = document.createElement('div');
  lilin.classList.add('lilin');

  // Posisi lilin
  const left = (10 + (i - 1) * 15) % 100;
  const top = Math.floor((i - 1) / 6) * 15 + 20;

  lilin.style.left = `${left}%`;
  lilin.style.top = `${top}%`;

  kue.appendChild(lilin);

  lilin.addEventListener('click', function() {
    lilin.style.opacity = 0;
  });
}
