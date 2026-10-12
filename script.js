const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('quoteForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const data = new FormData(this);
  const subject = `Quote Request - ${data.get('service')} - ${data.get('name')}`;

  const body =
`Hi Auscote Maintenance Group,

I would like to request a quote.

Name: ${data.get('name')}
Phone: ${data.get('phone')}
Email: ${data.get('email')}
Service: ${data.get('service')}
Property suburb: ${data.get('suburb') || ''}

Job details:
${data.get('message')}

Thank you.`;

  window.location.href =
    `mailto:auscotemb@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
