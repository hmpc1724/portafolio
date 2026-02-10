// Toggle menú navigation en mobile
document.getElementById('nav-toggle')?.addEventListener('click', () => {
  const nav = document.getElementById('main-nav');
  if (!nav) return;
  nav.classList.toggle('active');
});

// Cerrar menú al hacer click en un link
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.getElementById('main-nav');
    nav?.classList.remove('active');
  });
});

// Manejar envío del formulario
document.getElementById('contact-form')?.addEventListener('submit', e => {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('[name="name"]').value;
  alert(`Gracias ${name}! Mensaje recibido.\n\nEn una aplicación real, se enviaría a tu servidor.`);
  form.reset();
});

// Smooth scroll para links de anclaje
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  });
});
