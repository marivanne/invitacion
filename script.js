const card = document.querySelector('.card');
const texto = document.querySelector('.texto');

card.addEventListener('click', () => {
  card.classList.toggle('is-open');
  texto.classList.toggle('is-open');
});
