// Mostrar/Ocultar sección "Inicio"
document.getElementById('inicio-link').addEventListener('click', function(event) {
    event.preventDefault();
    const inicioSection = document.getElementById('inicio');
    inicioSection.style.display = inicioSection.style.display === 'none' ? 'block' : 'none';
});

// Mostrar/Ocultar sección "Productos"
document.getElementById('productos-link').addEventListener('click', function(event) {
    event.preventDefault();
    const productosSection = document.getElementById('productos');
    productosSection.style.display = productosSection.style.display === 'none' || productosSection.style.display === '' ? 'block' : 'none';
});

// Mostrar/Ocultar sección "Ofertas"
document.getElementById('ofertas-link').addEventListener('click', function(event) {
    event.preventDefault();
    const ofertasSection = document.getElementById('ofertas');
    ofertasSection.style.display = ofertasSection.style.display === 'none' || ofertasSection.style.display === '' ? 'block' : 'none';
});

// Mostrar/Ocultar sección "Contacto"
document.getElementById('contacto-link').addEventListener('click', function(event) {
    event.preventDefault();
    const contactoSection = document.getElementById('contacto');
    contactoSection.style.display = contactoSection.style.display === 'none' || contactoSection.style.display === '' ? 'block' : 'none';
});
