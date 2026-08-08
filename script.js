
const bookGrid = document.querySelector('.book-grid');
if (bookGrid) {
  const shuffledCards = [...bookGrid.querySelectorAll('.book-card')];

  for (let i = shuffledCards.length - 1; i > 0; i--) {
    const randomBytes = new Uint32Array(1);
    crypto.getRandomValues(randomBytes);
    const j = randomBytes[0] % (i + 1);
    [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
  }

  shuffledCards.forEach(card => bookGrid.appendChild(card));
}


const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('#site-nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const search = document.querySelector('#book-search');
const cards = [...document.querySelectorAll('.book-card')];
search?.addEventListener('input', () => {
  const q = search.value.trim().toLowerCase();
  cards.forEach(card => {
    const haystack = `${card.dataset.title} ${card.dataset.label}`;
    card.classList.toggle('hidden', q && !haystack.includes(q));
  });
});
