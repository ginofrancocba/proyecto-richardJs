document.addEventListener('DOMContentLoaded', function() {
    // Manejo de clics en enlaces para cargar contenido dinámicamente
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const path = this.getAttribute('href');
            fetch(path)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(html => {
                document.querySelector('main').innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading the page: ', error);
                alert('Failed to load page: ' + error.message);  // Informar al usuario
            });
        });
    });

    // Manejo de formulario
    const form = document.querySelector('.mi-formulario');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        console.log('Form submitted', Object.fromEntries(formData.entries()));
        // Aquí podrías implementar el envío de datos por AJAX o usando una API como emailjs
    });

    // Inicialización de Glider.js
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.dots',
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        },
        autoplay: 3000,  // Autoplay para todas las vistas
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
