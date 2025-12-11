//carrusel del header//

const images = document.querySelectorAll('.carousel img');
let current = 0;

function carousel() {
images[current].classList.remove('active');
current = (current + 1) % images.length;
images[current].classList.add('active');
}

setInterval(carousel, 5000); // Cambia cada 5 segundos


// Galeria de videos 

const videos = [
{
src: "vid/saludoinicial.MOV",
title: "Tncl. Franklin Yacelga",
description: "Hoy, al conmemorar el 36° aniversario de la Unidad Nacional Canina, rendimos homenaje a la historia, disciplina y compromiso que han forjado nuestro camino. Son más de tres décadas de entrega incondicional, en las que nuestros canes y guías han trabajado hombro a hombro en la protección de la ciudadanía, la lucha contra el narcotráfico, el rescate y la seguridad en el territorio nacional.",
position: "left" // video a la izquierda
},

{
src: "vid/2015.mp4",
title: "🎉 27º Aniversario del Centro Regional de Adiestramiento Canino.",
description: "En el año 2015, el Centro Regional de Adiestramiento Canino (CRAC) celebra con orgullo su 27º aniversario, reafirmando su compromiso con la seguridad ciudadana y la formación especializada de binomios caninos al servicio de la Policía Nacional. Durante más de dos décadas, esta unidad ha sido pilar fundamental en la lucha contra el narcotráfico, el rescate y la protección de la comunidad, dejando huellas imborrables de disciplina, entrega y lealtad.",
position: "right"
},
{
src: "vid/2016.mp4",
title: "🐾 En el año 2016, 33 Honorables canes culminan su servicio en la Policía Nacional.",
description: "En un acto lleno de gratitud y reconocimiento, la Policía Nacional despidió a 33 canes policiales que se jubilaron tras años de entrega y lealtad al servicio del país. Estos valientes compañeros de cuatro patas dejan una huella imborrable en la seguridad ciudadana, la detección de drogas, el rescate y múltiples misiones donde demostraron disciplina y nobleza.",
position: "left"
},

{
src: "vid/2018.mp4",
title: "61 Héroes de cuatro patas se despiden con honores.",
description: "En el año 2018, con una emotiva ceremonia, la Policía Nacional rindió homenaje a 61 canes que culminaron su servicio activo. Estos valientes compañeros, que durante años contribuyeron en la seguridad ciudadana, el rescate y la lucha contra el narcotráfico, recibieron la baja con honores como muestra de gratitud por su entrega y lealtad inquebrantable.",
position: "right" // video a la derecha
},

{
src: "vid/XVCURSO.mp4",
title: "🎓 Clausura del XV Curso de Capacitación Ciudadana en Adiestramiento Básico de Canes",
description: "Con éxito se llevó a cabo la clausura del 15º Curso de capacitación dirigido a la ciudadanía en adiestramiento básico de canes, en el que participaron alrededor de 100 personas. Esta iniciativa refuerza el vínculo entre la comunidad y la Policía Nacional, promoviendo el cuidado responsable, la disciplina y el respeto hacia los canes, al tiempo que fortalece la convivencia armónica entre la sociedad y sus compañeros de cuatro patas.",
position: "left"
},
{
src: "vid/XXCURSO.mp4",
title: "🎓 Clausura del XX Curso de Capacitación Ciudadana en Adiestramiento Básico de Canes",
description: "La Policía Nacional llevó a cabo la clausura del XX Curso de capacitación ciudadana en adiestramiento básico de canes, con la participación de 102 personas. Esta actividad, que fortalece el vínculo entre la comunidad y la institución, fomenta la tenencia responsable, el respeto y la disciplina hacia los canes, promoviendo así una convivencia armónica y segura entre la ciudadanía y sus fieles compañeros de cuatro patas.",
position: "right"
},
{
src: "vid/2020.mp4",
title: "💻 Primer Curso Virtual de Capacitación Ciudadana en Adiestramiento Canino.",
description: "En 2020, a raíz de la pandemia del COVID-19, el Centro Regional de Adiestramiento Canino (CRAC) de la Policía Nacional realizó su primer curso virtual de capacitación ciudadana en adiestramiento básico de canes. Este acontecimiento marcó un hito en la historia del CRAC, al innovar en la formación y mantener el vínculo con la comunidad en tiempos de crisis.",
position: "left"
},


];

let currentVideoIndex = 0;
const videoElement = document.getElementById('mainVideo');
const titleElement = document.getElementById('videoTitle');
const descriptionElement = document.getElementById('videoDescription');
const containerElement = document.getElementById('videoContainer');

function updateVideoCounter() {
const currentNumber = document.getElementById('currentVideoNumber');
const totalNumber = document.getElementById('totalVideos');

if (currentNumber && totalNumber) {
currentNumber.textContent = currentVideoIndex + 1;
totalNumber.textContent = videos.length;
}
}

function updateDots() {
document.querySelectorAll('.dot').forEach((dot, i) => {
if (i === currentVideoIndex) {
    dot.classList.add('active');
} else {
    dot.classList.remove('active');
}
});
}

function updateNavigationButtons() {
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

if (prevBtn && nextBtn) {
prevBtn.disabled = currentVideoIndex === 0;
nextBtn.disabled = currentVideoIndex === videos.length - 1;
}
}

function changeVideo(index) {
if (index === currentVideoIndex || index < 0 || index >= videos.length) return;

// Actualizar índice actual inmediatamente
currentVideoIndex = index;

// Actualizar indicadores inmediatamente
updateVideoCounter();
updateDots();
updateNavigationButtons();

// Aplicar animación de salida
containerElement.classList.add('fade-out');

setTimeout(() => {
// Cambiar el contenido
const selectedVideo = videos[index];

videoElement.src = selectedVideo.src;
titleElement.textContent = selectedVideo.title;
descriptionElement.textContent = selectedVideo.description;

// Cambiar posición del video
if (selectedVideo.position === 'right') {
    containerElement.classList.add('reverse');
} else {
    containerElement.classList.remove('reverse');
}

// Aplicar animación de entrada
containerElement.classList.remove('fade-out');
containerElement.classList.add('fade-in');

// Reproducir video automáticamente (opcional)
videoElement.load();

}, 300);
}

// FUNCIONES QUE FALTABAN:
function nextVideo() {
if (currentVideoIndex < videos.length - 1) {
changeVideo(currentVideoIndex + 1);
}
}

function previousVideo() {
if (currentVideoIndex > 0) {
changeVideo(currentVideoIndex - 1);
}
}

// Navegación con teclado
document.addEventListener('keydown', function(e) {
if (e.key === 'ArrowLeft') {
previousVideo();
} else if (e.key === 'ArrowRight') {
nextVideo();
}
});

// Inicializar la primera carga
document.addEventListener('DOMContentLoaded', function() {
containerElement.classList.add('fade-in');
updateVideoCounter();
updateDots();
updateNavigationButtons();
});

// Pausa todos los videos cuando se cambia
videoElement.addEventListener('loadstart', function() {
videoElement.pause();
});


// ESTAS SON LAS FUNCIONES QUE FALTAN:
function nextVideo() {
    if (currentVideoIndex < videos.length - 1) {
        changeVideo(currentVideoIndex + 1);
    }
}

function previousVideo() {
    if (currentVideoIndex > 0) {
        changeVideo(currentVideoIndex - 1);
    }
}

// Navegación con teclado
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        previousVideo();
    } else if (e.key === 'ArrowRight') {
        nextVideo();
    }
});

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar elementos del DOM
    videoElement = document.getElementById('mainVideo');
    titleElement = document.getElementById('videoTitle');
    descriptionElement = document.getElementById('videoDescription');
    containerElement = document.getElementById('videoContainer');
    
    // Verificar que todos los elementos existen
    if (videoElement && titleElement && descriptionElement && containerElement) {
        // Inicializar con el primer video
        containerElement.classList.add('fade-in');
        updateVideoCounter();
        updateDots();
        updateNavigationButtons();
        
        // Configurar el evento de pausa
        videoElement.addEventListener('loadstart', function() {
            videoElement.pause();
        });
        
        console.log('Galería de videos inicializada correctamente');
    } else {
        console.error('Error: No se encontraron todos los elementos necesarios para la galería de videos');
    }
});

function generateDots() {
    const dotsContainer = document.querySelector('.video-dots');
    if (dotsContainer) {
        dotsContainer.innerHTML = ''; // Limpiar puntos existentes
        
        videos.forEach((video, index) => {
            const dot = document.createElement('span');
            dot.className = 'dot';
            if (index === 0) dot.classList.add('active');
            dot.onclick = () => changeVideo(index);
            dotsContainer.appendChild(dot);
        });
    }
}

// Llama a esta función en el DOMContentLoaded:
document.addEventListener('DOMContentLoaded', function() {
    // ... código existente ...
    
    generateDots(); // Agregar esta línea
    
    // ... resto del código ...
});

// cierre del script de los videos

// SECCÒN REVISTAS

class CarouselRevistas {
    constructor() {
        this.carousel = document.getElementById('revista-carousel');
        this.items = document.querySelectorAll('.carousel-item');
        this.prevButton = document.getElementById('revista-prev');
        this.nextButton = document.getElementById('revista-next');
        this.indicators = document.querySelectorAll('.indicator');
        
        this.currentIndex = 0;
        this.itemWidth = 350 + 40; // ancho de la tarjeta + gap más amplio
        this.visibleItems = this.getVisibleItems();
        this.maxIndex = Math.max(0, this.items.length - this.visibleItems);
        
        this.init();
    }
    
    init() {
        this.updateCarousel();
        this.bindEvents();
        this.handleResize();
    }
    
    getVisibleItems() {
        const containerWidth = document.querySelector('.carousel-container').offsetWidth - 120; // menos padding de botones
        return Math.floor(containerWidth / this.itemWidth) || 1;
    }
    
    updateCarousel() {
        const translateX = -this.currentIndex * this.itemWidth;
        this.carousel.style.transform = `translateX(${translateX}px)`;
        
        // Actualizar botones
        this.prevButton.style.opacity = this.currentIndex === 0 ? '0.5' : '1';
        this.nextButton.style.opacity = this.currentIndex >= this.maxIndex ? '0.5' : '1';
        
        // Actualizar indicadores
        this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });
    }
    
    next() {
        if (this.currentIndex < this.maxIndex) {
            this.currentIndex++;
            this.updateCarousel();
        }
    }
    
    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateCarousel();
        }
    }
    
    goToSlide(index) {
        if (index >= 0 && index <= this.maxIndex) {
            this.currentIndex = index;
            this.updateCarousel();
        }
    }
    
    bindEvents() {
        this.nextButton.addEventListener('click', () => this.next());
        this.prevButton.addEventListener('click', () => this.prev());
        
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Navegación con teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });
        
        // Touch/swipe para dispositivos móviles
        let startX = 0;
        let endX = 0;
        
        this.carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        this.carousel.addEventListener('touchmove', (e) => {
            e.preventDefault();
        });
        
        this.carousel.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            const diffX = startX - endX;
            
            if (Math.abs(diffX) > 50) { // umbral mínimo para swipe
                if (diffX > 0) {
                    this.next();
                } else {
                    this.prev();
                }
            }
        });
    }
    
    handleResize() {
        window.addEventListener('resize', () => {
            this.visibleItems = this.getVisibleItems();
            this.maxIndex = Math.max(0, this.items.length - this.visibleItems);
            this.currentIndex = Math.min(this.currentIndex, this.maxIndex);
            this.updateCarousel();
        });
    }
}

// Inicializar el carrusel cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new CarouselRevistas();
});

// Auto-play opcional (descomentarlo si se desea)
/*
setInterval(() => {
    const carousel = window.carouselInstance;
    if (carousel && carousel.currentIndex < carousel.maxIndex) {
        carousel.next();
    } else if (carousel) {
        carousel.currentIndex = 0;
        carousel.updateCarousel();
    }
}, 5000);
*/


// FIN DE LA SECCIÒN DE REVISTAS

// BOTÓN PARA REGRESAR AL INICIO

// JavaScript para el botón scroll to top
(function() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    // Mostrar/ocultar el botón basado en el scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
    
    // Función para hacer scroll suave al inicio
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
})();

// FIN DEL BOTÓN PARA REGRESAR AL INICIO

// estadisticas 

function animateNumbers() {
            const numbers = document.querySelectorAll('.stat-number');
            
            numbers.forEach(number => {
                const targetText = number.textContent;
                const target = parseInt(targetText.replace(/,/g, ''));
                const duration = 2500;
                const increment = target / (duration / 16);
                let current = 0;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                        number.textContent = target.toLocaleString();
                    } else {
                        number.textContent = Math.floor(current).toLocaleString();
                    }
                }, 16);
            });
        }

        // Animaciones de entrada
        function observeCards() {
            const cards = document.querySelectorAll('.card');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                    }
                });
            }, { threshold: 0.1 });

            cards.forEach(card => observer.observe(card));
        }

        window.addEventListener('load', () => {
            observeCards();
            setTimeout(animateNumbers, 1000);
        });

        // Efectos adicionales
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.querySelector('.card-icon').style.transform = 'scale(1.1) rotate(5deg)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.querySelector('.card-icon').style.transform = 'scale(1) rotate(0deg)';
            });
        });

// fin de las estadisticas