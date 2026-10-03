const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

function wireDemoForm(formId, messageId, message) {
  const form = document.getElementById(formId);
  const output = document.getElementById(messageId);
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    output.textContent = message;
    output.classList.add('show');
  });
}

wireDemoForm(
  'trial-form',
  'form-message',
  'Formulář je připravený. V další fázi ho napojíme na automatické založení 30denního účtu ve Falconixu.'
);

wireDemoForm(
  'contact-form',
  'contact-message',
  'Kontaktní formulář je připravený. Před spuštěním doplníme skutečné odesílání e-mailu.'
);
