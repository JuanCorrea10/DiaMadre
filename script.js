/* =========================================================
   1. ANIMACIONES AL SCROLL — IntersectionObserver
   =========================================================
   Un IntersectionObserver vigila elementos y avisa cuando
   entran o salen de la pantalla. Lo usamos para añadir la
   clase .visible a cada .fade-in cuando aparece, y así el
   CSS dispare la transición suave.
   ========================================================= */

// 1) Buscamos todos los elementos con la clase .fade-in.
const elementosAnimados = document.querySelectorAll('.fade-in');

// 2) Creamos el observador. Le pasamos:
//    a) Una función que se ejecuta cada vez que un elemento
//       cambia su estado (entra o sale de pantalla).
//    b) Opciones — threshold: 0.15 = "avísame cuando el 15%
//       del elemento esté visible".
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {           // ¿está en pantalla?
            entrada.target.classList.add('visible');
            observador.unobserve(entrada.target); // dejar de vigilarlo (animación de una sola vez)
        }
    });
}, {
    threshold: 0.15
});

// 3) Le decimos al observador qué elementos vigilar.
elementosAnimados.forEach((elemento) => observador.observe(elemento));


/* =========================================================
   2. BOTÓN DE MÚSICA — play / pause
   =========================================================
   getElementById busca un elemento por su atributo id.
   addEventListener escucha un evento (click, scroll, etc).
   ========================================================= */

const cancion       = document.getElementById('cancion');
const botonMusica   = document.getElementById('boton-musica');
const iconoPlay     = botonMusica.querySelector('.icono-play');
const iconoPausa    = botonMusica.querySelector('.icono-pausa');

botonMusica.addEventListener('click', () => {
    if (cancion.paused) {
        cancion.play();
        iconoPlay.hidden  = true;
        iconoPausa.hidden = false;
    } else {
        cancion.pause();
        iconoPlay.hidden  = false;
        iconoPausa.hidden = true;
    }
});
