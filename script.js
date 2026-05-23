const body = document.querySelector('body');
const rata = document.querySelector('.tracker');

let isMouseDown = false;

// Evento para detectar cuando se presiona el mouse
body.addEventListener('mousedown', () => {
  isMouseDown = true;
});

// Evento para detectar cuando se suelta el mouse
body.addEventListener('mouseup', () => {
  isMouseDown = false;
});

// Evento para mover la imagen solo si se está presionando el mouse
body.addEventListener('mousemove', (e) => {
  if (isMouseDown) {
    rata.style.top = e.clientY + 'px';
    rata.style.left = e.clientX + 'px';
  }
});