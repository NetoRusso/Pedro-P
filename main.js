const circulo = document.querySelector('.circulo');
const audio = document.getElementById('audio');

circulo.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

