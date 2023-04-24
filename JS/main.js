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

