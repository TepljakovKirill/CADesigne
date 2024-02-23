const form = document.querySelector('.response__form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Проверка полей формы
  const textInput = form.querySelector('#text');
  const nameInput = form.querySelector('#name');
  const telInput = form.querySelector('#tel');
  const emailInput = form.querySelector('#email');
  const educationInput = form.querySelector('#education');
  const addressInput = form.querySelector('#address');

  let isValid = true;

  if (textInput.value.trim() === '') {
    displayErrorMessage(textInput, 'Поле "Желаемая вакансия" не должно быть пустым');
    isValid = false;
  }

  if (nameInput.value.trim() === '') {
    displayErrorMessage(nameInput, 'Поле "Фамилия, имя, отчество" не должно быть пустым');
    isValid = false;
  }

  if (telInput.value.trim() === '') {
    displayErrorMessage(telInput, 'Поле "Мобильный телефон" не должно быть пустым');
    isValid = false;
  } else if (!isValidPhoneNumber(telInput.value)) {
    displayErrorMessage(telInput, 'Поле "Мобильный телефон" должно быть валидным номером');
    isValid = false;
  }

  if (emailInput.value.trim() === '') {
    isValid = true;
  } else if (!isValidEmail(emailInput.value)) {
    displayErrorMessage(emailInput, 'Поле "E-mail" должно быть валидным адресом электронной почты');
    isValid = false;
  }

  if (educationInput.value.trim() === '') {
    displayErrorMessage(educationInput, 'Поле "Образование" не должно быть пустым');
    isValid = false;
  }

  if (addressInput.value.trim() === '') {
    displayErrorMessage(addressInput, 'Поле "Адрес места жительства" не должно быть пустым');
    isValid = false;
  }

  if (isValid) {
    alert('Форма заполнена верно');
    // form.submit();
  }
});

function displayErrorMessage(inputElement, errorMessage) {
  const errorElement = document.createElement('div');
  errorElement.classList.add('error-message');
  errorElement.textContent = errorMessage;
  inputElement.parentNode.appendChild(errorElement);
}

function isValidPhoneNumber(phoneNumber) {
  // Регулярное выражение для проверки номера телефона
  const regex = /^(?:\+7|8)?\d{10,11}$/;
  return regex.test(phoneNumber);
}

function isValidEmail(email) {
  // Регулярное выражение для проверки адреса ппочты
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
