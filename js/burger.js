const burgerBtn = document.querySelector('[data-burger]');
const burgerMenu = document.querySelector('[data-nav]');
const body = document.body;
const navLink = document.querySelectorAll('.burger-menu_link');

burgerBtn.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  burgerBtn.classList.toggle('burger-menu_button--acitve');
  burgerMenu.classList.toggle('burger-menu-body--visible');
});

navLink.forEach((el) => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
    burgerBtn.classList.remove('burger-menu_button--acitve');
    burgerMenu.classList.remove('burger-menu-body--visible');
  });
});
