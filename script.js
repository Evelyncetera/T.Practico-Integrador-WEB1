// TODO LO QUE ES CARRUSEL

const track = document.querySelector('.carrusel-track');

if (track) {
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


    function actualizarCarrusel() {

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

        }, 200);
    }


    nextBtn.addEventListener('click', () => {

        indice++;
        if (indice > destinos.length - 1) {
            indice = 0;
        }

        actualizarCarrusel();

    });

    prevBtn.addEventListener('click', () => {

        indice--;
        if (indice < 0) {
            indice = destinos.length - 1;
        }
        actualizarCarrusel();

    });

    actualizarCarrusel();
}



// VALIDACIONES FORMULARIO
function validarForm(e) {
    e.preventDefault();

    const form = e.target;
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const tel = document.getElementById('telefono');
    const consulta = document.getElementById('consulta');

    const mensajeAnterior = form.querySelector(".mensaje-error, .mensaje-exito");
    if (mensajeAnterior) {
        form.removeChild(mensajeAnterior);
    }

    let errores = [];

    if (nombre.value.length < 3 || nombre.value.length > 15) {
        errores.push('El campo "Nombre Completo" debe tener entre 3 y 15 caracteres.');
    }

    const emailRegex = /^[a-zA-Z0-9._-]+[@]{1}[a-zA-Z]+[.]{1}[a-zA-Z._-]{2,5}$/;
    if (!emailRegex.test(email.value)) {
        errores.push('Formato de email inválido.');
    }

    const telRegex = /^[0-9]{8,15}$/; //solo numeros y un min de 8 dig
    if (!telRegex.test(tel.value) || tel.value.length < 8) {
        errores.push('Ingrese sólo números en el campo "Teléfono" (mínimo 8 caracteres)');
    }


    if (consulta.value.length > 200 || consulta.value.length < 5) {
        errores.push('Ingrese una consulta (entre 5 y 200 caracteres).');
    }


    if (errores.length > 0) {
        const lista = document.createElement("ul");
        lista.className = "mensaje-error";
        lista.style.color = "red";
        lista.innerHTML = errores.map(e => `<li>${e}</li>`).join("");
        form.appendChild(lista);
    } else {
        const d = document.createElement("div");
        d.className = "mensaje-exito";
        d.style.backgroundColor = "#0056b3";
        d.style.padding = "10px";
        d.style.borderRadius = "5px";

        const p = document.createElement("p");
        p.style.fontSize = "1.2rem";
        p.style.margin = "0";
        p.style.color = "white";
        p.textContent = `${nombre.value}, gracias por tu consulta!! 
        En breve nos comunicaremos al número ${tel.value}.`;

        d.appendChild(p);
        form.appendChild(d);

    }

}


