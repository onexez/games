const btns = document.querySelectorAll('.popup-btn');
const popupOverlay = document.querySelector('.popup-form__overlay');
const tnxOverlay = document.querySelector('.popup-tnx-overlay');
const popupBody = document.querySelector('.popup-form__body');
const tnxBody = document.querySelector('.popup-tnx__body');

btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    let path = e.currentTarget.getAttribute('data-path');
    if (path === 'form') {
      document.querySelector(`[data-target='${path}']`).classList.add('body--visible');
      popupOverlay.classList.add('overlay--visible');
      document.body.classList.add('stop-scroll');
    } else {
      popupOverlay.classList.remove('overlay--visible');
      popupBody.classList.remove('body--visible');
      document.querySelector(`[data-target='${path}']`).classList.add('body--visible');
      tnxOverlay.classList.add('overlay--visible');
      document.body.classList.add('stop-scroll');
    }
  });
});

popupOverlay.addEventListener('click', (e) => {
  if (e.target == popupOverlay) {
    popupOverlay.classList.remove('overlay--visible');
    popupBody.classList.remove('body--visible');
    document.body.classList.remove('stop-scroll');
  }
});
tnxOverlay.addEventListener('click', (e) => {
  if (e.target == tnxOverlay) {
    tnxOverlay.classList.remove('overlay--visible');
    tnxBody.classList.remove('body--visible');
    document.body.classList.remove('stop-scroll');
  }
});
