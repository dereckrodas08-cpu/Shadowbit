document.addEventListener('DOMContentLoaded', () => {
    // Desplazamiento suave entre secciones
    document.querySelectorAll('[data-target]').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = document.querySelector(btn.getAttribute('data-target'));
        if(target){
          target.scrollIntoView({behavior:'smooth', block:'start'});
        }
      });
    });
  
    // Animaciones de entrada al hacer scroll
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if(e.isIntersecting){
          e.target.classList.add('show');
        }
      });
    }, {threshold:0.2});
  
    document.querySelectorAll('.section, .card, .gallery-item').forEach(el => observer.observe(el));
  });
  