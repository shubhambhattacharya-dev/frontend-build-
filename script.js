// Back to Top Button
const backToTop = document.createElement('div');
backToTop.className = 'back-to-top';
backToTop.innerHTML = '<i class="bi bi-arrow-up text-light"></i>';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
  backToTop.classList.toggle('show', window.scrollY > 300);
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Add animation delay to sections
document.querySelectorAll('.card, #home .row > *').forEach((el, i) => {
  el.style.animationDelay = `${i * 0.2}s`;
  el.classList.add('animate-fadeIn');
});