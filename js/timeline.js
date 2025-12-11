// Archivo: js/timeline.js
// Descripción: Plugin jQuery para crear una línea de tiempo interactiva
    // Timeline jQuery Plugin
(function($) {
$.fn.timeline = function() {
    var selectors = {
    id: $(this),
    item: $(this).find(".timeline-item"),
    activeClass: "timeline-item--active",
    img: ".timeline__img"
    };

    // Activar el primer elemento por defecto
    selectors.item.eq(0).addClass(selectors.activeClass);
    
    // Establecer imagen de fondo inicial del primer elemento
    selectors.id.css(
    "background-image",
    "url(" +
        selectors.item
        .first()
        .find(selectors.img)
        .attr("src") +
        ")"
    );

    var itemLength = selectors.item.length;

    // Evento de scroll para activar elementos según posición
    $(window).scroll(function() {
    var max, min;
    var pos = $(this).scrollTop();
    
    selectors.item.each(function(i) {
        min = $(this).offset().top;
        max = $(this).height() + $(this).offset().top;
        var that = $(this);
        
        // Condición especial para el penúltimo elemento
        if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
        selectors.item.removeClass(selectors.activeClass);
        selectors.id.css(
            "background-image",
            "url(" +
            selectors.item
                .last()
                .find(selectors.img)
                .attr("src") +
            ")"
        );
        selectors.item.last().addClass(selectors.activeClass);
        } 
        // Condición normal para otros elementos
        else if (pos <= max - 40 && pos >= min) {
        selectors.id.css(
            "background-image",
            "url(" +
            $(this)
                .find(selectors.img)
                .attr("src") +
            ")"
        );
        selectors.item.removeClass(selectors.activeClass);
        $(this).addClass(selectors.activeClass);
        }
    });
    });
};
})(jQuery);

// Inicializar cuando el documento esté listo
$(document).ready(function() {
$("#timeline-1").timeline();
});

// ==============================
// CARRUSEL DE VIDEOS INTERACTIVO
// ==============================

function inicializarCarruselVideos() {
    // Selecciona todos los contenedores de videos y sus botones play
    const videos = document.querySelectorAll('.carousel-video');
    const botonesPlay = document.querySelectorAll('.play-button');

    // Agrega evento a cada botón de play
    botonesPlay.forEach((boton, indice) => {
        boton.addEventListener('click', () => {
            const video = videos[indice];

            // Pausa todos los demás videos y muestra su botón
            videos.forEach((v, i) => {
                if (i !== indice) {
                    v.pause();
                    v.currentTime = 0; // opcional: reinicia video
                    v.parentElement.querySelector('.play-button').style.display = 'block';
                }
            });

            // Reproduce o pausa el video clickeado
            if (video.paused) {
                video.play();
                boton.style.display = 'none'; // oculta botón de play
            } else {
                video.pause();
                boton.style.display = 'block'; // vuelve a mostrar botón
            }
        });
    });
}

// Inicializar carrusel de videos al cargar DOM
document.addEventListener('DOMContentLoaded', inicializarCarruselVideos);

