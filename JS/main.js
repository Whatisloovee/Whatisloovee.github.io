const filmBlocks = document.querySelectorAll('.film-block');

filmBlocks.forEach(filmBlock => {
  const img = filmBlock.querySelector('.film-img img');
  const filmInfo = filmBlock.querySelector('.film-info');
  const buyTicketBtn = filmBlock.querySelector('.buy-ticket-btn');

  img.addEventListener('mouseover', () => {
    img.style.transform = 'rotateY(180deg)';
    filmInfo.style.bottom = '-100px';
  });

  img.addEventListener('mouseout', () => {
    img.style.transform = 'rotateY(0)';
    filmInfo.style.bottom = '0';
  });

  buyTicketBtn.addEventListener('click', () => {
    const cinemaSelection = prompt('Выберите кинотеатр');
    const calendarSelection = prompt('Выберите дату');
    const seatSelection = prompt('Выберите место');
    const nameInput = prompt('Введите ваше ФИО');
    const emailInput = prompt('Введите ваш e-mail');
    const phoneInput = prompt('Введите ваш телефон');
    const paymentSelection = prompt('Выберите способ оплаты');
});
});


filmBlocks.forEach(filmBlock => {
const img = filmBlock.querySelector('.film-img img');
const filmInfo = filmBlock.querySelector('.film-info');
const buyTicketBtn = filmBlock.querySelector('.buy-ticket-btn');

img.addEventListener('mouseover', () => {
img.style.transform = 'rotateY(180deg)';
filmInfo.style.bottom = '-100px';
});

img.addEventListener('mouseout', () => {
img.style.transform = 'rotateY(0)';
filmInfo.style.bottom = '0';
});

buyTicketBtn.addEventListener('click', () => {
const popup = document.createElement('div');
popup.classList.add('popup');
const cinemaSelection = prompt('Выберите кинотеатр');
const calendarSelection = prompt('Выберите дату');
const seatSelection = prompt('Выберите место');

const form = document.createElement('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameInput = form.querySelector('#name').value;
  const emailInput = form.querySelector('#email').value;
  const phoneInput = form.querySelector('#phone').value;
  const paymentSelection = form.querySelector('#payment').value;
  console.log(nameInput, emailInput, phoneInput, paymentSelection);
  popup.style.display = 'none';
});

const nameLabel = document.createElement('label');
nameLabel.textContent = 'ФИО:';
const nameInput = document.createElement('input');
nameInput.setAttribute('id', 'name');
nameInput.setAttribute('required', true);

const emailLabel = document.createElement('label');
emailLabel.textContent = 'E-mail:';
const emailInput = document.createElement('input');
emailInput.setAttribute('id', 'email');
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('required', true);

const phoneLabel = document.createElement('label');
phoneLabel.textContent = 'Телефон:';
const phoneInput = document.createElement('input');
phoneInput.setAttribute('id', 'phone');
phoneInput.setAttribute('type', 'tel');
phoneInput.setAttribute('required', true);

const paymentLabel = document.createElement('label');
paymentLabel.textContent = 'Способ оплаты:';
const paymentSelect = document.createElement('select');
paymentSelect.setAttribute('id', 'payment');
const option1 = document.createElement('option');
option1.setAttribute('value', 'card');
option1.textContent = 'Карта';
const option2 = document.createElement('option');
option2.setAttribute('value', 'cash');
option2.textContent = 'Наличные';

const submitBtn = document.createElement('button');
submitBtn.setAttribute('type', 'submit');
submitBtn.textContent = 'Оплатить';

form.appendChild(nameLabel);
form.appendChild(nameInput);
form.appendChild(emailLabel);
form.appendChild(emailInput);
form.appendChild(phoneLabel);
form.appendChild(phoneInput);
form.appendChild(paymentLabel);
paymentSelect.appendChild(option1);
paymentSelect.appendChild(option2);
form.appendChild(paymentSelection);
popup.appendChild(form);
popup.appendChild(submitBtn);
filmBlock.appendChild(popup);
});
});
