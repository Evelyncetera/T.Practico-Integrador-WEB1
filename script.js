const track = document.querySelector('.carrusel-track');
const cards = document.querySelectorAll('.card');
const nextBtn = document.getElementById('btn-next');
const prevBtn = document.getElementById('btn-prev');
const cardLink = document.getElementById('card-link');
const cardImg = document.getElementById('card-img');
const cardTitulo = document.getElementById('card-titulo');
const cardSubtitulo = document.getElementById('card-subtitulo');
const cardPrecio = document.getElementById('card-precio');
const currentCard = document.getElementById('current-card');


let indice = 0; 


const destinos = [
        {
            href: 'destino-iguazu.html',
            img: './img/cataratas-scaled.jpg', 
            titulo: 'Cataratas del Iguazú, Misiones',
            subtitulo: 'Maravilla Natural.',
            precio: '$ 328.900'
        },
        {   
            href: 'destino-merlo.html',
            img: './img/merloMirador.webp',
            titulo: 'Merlo, San Luis',
            subtitulo: 'El microclima ideal.',
            precio: '$ 249.900'
        },
        {
            href: 'destino-bariloche.html',
            img: './img/bariloche.jpg',
            titulo: 'Bariloche, Río Negro',
            subtitulo: 'Patagonia y Aventura.',
            precio: '$ 449.900'
        },
        {
            href: 'destino-ushuaia.html',
            img: 'img/ushuaia.jpg',
            titulo: 'Ushuaia, Tierra del Fuego',
            subtitulo: 'Patagonia Extrema.',
            precio: '$ 547.900'
        }
    ];


function actualizarCarrusel(){

    currentCard.classList.add('hidden');

    setTimeout(() => {
        const destino = destinos[indice];

        cardLink.href = destino.href;
        cardImg.src = destino.img;
        cardImg.alt = destino.imgAlt;
        cardTitulo.textContent = destino.titulo;
        cardSubtitulo.textContent = destino.subtitulo;
        cardPrecio.textContent = destino.precio;

        currentCard.classList.remove('hidden');

    }, 300);
}


nextBtn.addEventListener('click', () => {
   
    indice++;
    if(indice > destinos.length - 1){
        indice = 0;
    }
    
    actualizarCarrusel();

});

prevBtn.addEventListener('click', () => {
  
    indice--;
    if(indice < 0){
        indice = destinos.length -1;
    }
    actualizarCarrusel();

});

actualizarCarrusel();
