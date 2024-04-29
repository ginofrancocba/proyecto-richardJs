document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const path = this.getAttribute('href').replace('.html', '');
        
        fetch(`${path}.html`)
            .then(response => response.text())
            .then(html => {
                document.querySelector('main').innerHTML = html;
            })
            .catch(error => console.error('Error loading the page: ', error));
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.mi-formulario');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        // Implementar lógica para enviar los datos del formulario, por ejemplo, usando fetch
        console.log('Form submitted', Object.fromEntries(formData.entries()));
        // Aquí podrías añadir la integración con emailjs u otra API de envío de correos
    });

    // Código para manejar la carga dinámica de páginas si decides implementarlo
});
