const carousel = document.querySelector('.carousel');
const pauseButton = document.getElementById('pause-button');

let isPaused = false;

pauseButton.addEventListener('click', () => {
  if (isPaused) {
    carousel.classList.remove('paused');
    pauseButton.textContent = 'Pause';
  } else {
    carousel.classList.add('paused');
    pauseButton.textContent = 'Resume';
  }
  isPaused = !isPaused;
});