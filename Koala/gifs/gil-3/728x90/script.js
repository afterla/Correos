const anuncio = document.querySelector('.contenedor-anuncio');
anuncio.style.opacity = 0;
setTimeout(() => {
  anuncio.style.transition = 'opacity 2s';
  anuncio.style.opacity = 1;
}, 1000);