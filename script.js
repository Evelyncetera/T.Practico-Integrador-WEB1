// 1. Obtener elementos
const track = document.querySelector('.carrusel-track');
const cards = document.querySelectorAll('.card');
const nextBtn = document.getElementById('btn-next');
const prevBtn = document.getElementById('btn-prev');

// 2. Variables de estado
let currentIndex = 0; // Índice de la tarjeta actualmente visible
const cardWidth = cards[0].offsetWidth + 20; // Ancho de la tarjeta + su margen (10px a cada lado = 20px)
const totalCards = cards.length;

console.log(totalCards);

// 3. Función para mover el carrusel
function updateCarousel() {
    // Calcula cuánto se debe desplazar el track.
    // El desplazamiento es el índice actual * el ancho de una tarjeta.
    const offset = -currentIndex * cardWidth;
    
    // Aplica el desplazamiento usando transform: translateX
    track.style.transform = `translateX(${offset}px)`;

    // Opcional: Desactivar botones en los límites
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= totalCards - 1; // Ajustar si quieres mostrar varias tarjetas
}

// 4. Manejadores de eventos
nextBtn.addEventListener('click', () => {
    if (currentIndex < totalCards - 1) { // Asegura no ir más allá del final
        currentIndex++;
        updateCarousel();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) { // Asegura no ir antes del inicio
        currentIndex--;
        updateCarousel();
    }
});

// 5. Inicializar el estado (desactiva el botón 'Anterior' al inicio)
updateCarousel();