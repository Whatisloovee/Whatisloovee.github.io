function byfilmas(){
  const showFormButtons = document.querySelectorAll('.buyticket');
const ticketForm = document.getElementById('ticket-form');
const closeButton = document.querySelector('.close-button');
const overlay = document.getElementById('overlay');

showFormButtons.forEach((button) => {
  button.addEventListener('click', () => {
    ticketForm.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
});

const buyButton = document.getElementById('buy');

buyButton.addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const cinema = document.getElementById('cinema').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const row = document.getElementById('row').value;
  const seat = document.getElementById('seat').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const payment = document.querySelector('input[name="payment"]:checked').value;
  
  document.getElementById('name').value = '';
  document.getElementById('cinema').selectedIndex = 0;
  document.getElementById('date').value = '';
  document.getElementById('time').selectedIndex = 0;
  document.getElementById('row').selectedIndex = 0;
  document.getElementById('seat').selectedIndex = 0;
  document.getElementById('phone').value = '';
  document.getElementById('email').value = '';
  document.getElementById('card').checked = false;
  document.getElementById('cash').checked = false;
  ticketForm.classList.add('hidden'); // скрываем окно с формой
  overlay.classList.add('hidden');
  // здесь можно добавить логику для обработки покупки билета
});

// добавляем обработчик события для кнопки закрытия
closeButton.addEventListener('click', () => {
  ticketForm.classList.add('hidden');
  overlay.classList.add('hidden');
});
overlay.addEventListener('click', () => {
  ticketForm.classList.add('hidden');
  overlay.classList.add('hidden');
});

// добавляем обработчик события для скрытия формы при клике за ее пределами
document.addEventListener('click', (event) => {
  if (!event.target.closest('#ticket-form') && !event.target.classList.contains('buyticket')) {
    ticketForm.classList.add('hidden');
  }
});
}



//XML
let table = (arr_tag, arr) => {
    let i = 0;
    for (const elem_arr of arr_tag) {
      arr[i++] = elem_arr.textContent;
    }
    return arr;
  }
  
  let parse = (xmlString => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    const names = xmlDoc.getElementsByTagName('name');
    const images = xmlDoc.getElementsByTagName('image');
    const types = xmlDoc.getElementsByTagName('type');
    const times = xmlDoc.getElementsByTagName('time');
    const countrys_ages = xmlDoc.getElementsByTagName('country_age');
    const genres = xmlDoc.getElementsByTagName('genre');
    const dates = xmlDoc.getElementsByTagName('date');
  
    let names_arr = [], images_arr = [], types_arr = [],
      times_arr = [], countrys_ages_arr = [], genres_arr = [], dates_arr = [];
    names_arr = table(names, names_arr);
    images_arr = table(images, images_arr);
    types_arr = table(types, types_arr);
    times_arr = table(times, times_arr);
    countrys_ages_arr = table(countrys_ages, countrys_ages_arr);
    genres_arr = table(genres, genres_arr);
    dates_arr = table(dates, dates_arr);
  
    for (let i = 0; i < names_arr.length; i++) {
  
      document.querySelector('.films').insertAdjacentHTML("beforeend",
  
        `<div class="film">
        <p>${names_arr[i]}</p>
        <div class="img_film">
            <div class="on_img">
                <p class="type">${types_arr[i]}</p>
                <p class="time">${times_arr[i]}</p>
                <p class="country_age">${countrys_ages_arr[i]}</p>
                <p class="genre">${genres_arr[i]}</p>
                <p class="date">${dates_arr[i]}</p>   
                <button class="buyticket">Купить билет</button>
            </div> 
        </div>
          </div>`
  
      );
  
      document.querySelectorAll('.img_film')[i].style.background = `url(${images_arr[i]})`;
    }
    byfilmas()
  }
  
  )
  
  async function parseXML() {//async ключевое слово которое обозначает что наша функция становиться асинхронной
    let a = await fetch('../parsexml1.xml') // await ключевое слово которое грубо говорят останавливает наш весь следующий код, пока запрос не выполнится
    let xmlString = await a.text();//та же песня как только мы приобразуем наши данные в текст мы можем их использовать
    parse(xmlString);//вызываем функции которая все парсит, ее реализация сверху
  }
  
  parseXML();
  