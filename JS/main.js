//slider
const slides = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slideWidth = slides.clientWidth / 2.95;
let currentPosition = 0;

prevButton.addEventListener('click', () => {
  currentPosition += slideWidth;
  if (currentPosition > 0) {
    currentPosition = -(slideWidth * 2);
  }
  slides.style.transform = `translateX(${currentPosition}px)`;
});

nextButton.addEventListener('click', () => {
  currentPosition -= slideWidth;
  if (currentPosition < -(slideWidth * 2)) {
    currentPosition = 0;
  }
  slides.style.transform = `translateX(${currentPosition}px)`;
});






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
    
}

)

async function parseXML() {//async ключевое слово которое обозначает что наша функция становиться асинхронной
  let a = await fetch('../mainxml.xml') // await ключевое слово которое грубо говорят останавливает наш весь следующий код, пока запрос не выполнится
  let xmlString = await a.text();//та же песня как только мы приобразуем наши данные в текст мы можем их использовать
  parse(xmlString);//вызываем функции которая все парсит, ее реализация сверху
}

parseXML();
