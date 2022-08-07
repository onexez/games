document.querySelectorAll('.body__form__dropdown').forEach(function (dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
  const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
  const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
  const dropDownInputHidden = dropDownWrapper.querySelector('.dropdown__input-hidden');

  // Клик по кнопке, Открыть/Закрыть select
  dropDownBtn.addEventListener('click', (e) => {
    e.preventDefault();
    dropDownList.classList.toggle('dropdown__list--visible');
  });
  // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener('click', (e) => {
      e.stopPropagation();
      dropDownBtn.innerText = listItem.innerText;
      dropDownInputHidden.value = listItem.dataset.value;
      dropDownList.classList.remove('dropdown__list--visible');
    });
  });
  // Клик снаружи дропдауна, закрыть дропдаун
  document.addEventListener('click', (e) => {
    if (e.target !== dropDownBtn) {
      dropDownList.classList.remove('dropdown__list--visible');
    }
  });
  // Нажатие на Tab/Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' || e.key === 'Escape') {
      dropDownList.classList.remove('dropdown__list--visible');
    }
  });
});
