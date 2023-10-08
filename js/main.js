const swiper0 = new Swiper('.mainscreen__swiper', {
  // Optional parameters
  direction: 'vertical',
  // loop: true,

  // If we need pagination
  pagination: {
    el: '.mainscreen__swiper--pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.mainscreen__swiper--btnnext',
    prevEl: '.mainscreen__swiper--btnprev',
  },
});


const swiper1 = new Swiper(".menu__swiper", {
  slidesPerView: 5,
  freeMode: true,
  pagination: {
    el: ".menu__swiper--pag",
    clickable: true,
  },
  navigation: {
    nextEl: '.menu__swiper--btnnext',
    prevEl: '.menu__swiper--btnprev',
  },
  breakpoints: {
    1000: {
       direction: 'horizontal',
    },
    100: {
     
      direction: 'vertical',
        navigation: {
        nextEl: null,
        prevEl: null,
      }
    }

  }
});





swiper1.slides.forEach(slide => {
  slide.style.width = '312px'; // Ваши собственные стили для слайдов
});

document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const mainscreen = document.querySelector('.body__wrapper');
  

    burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
      mainscreen.classList.toggle('active'); 
   
  });
});
const titleBtns = document.querySelectorAll('.title--btn');
const hoverContents = document.querySelectorAll('.inner__item--hover');
const imgButtons = document.querySelectorAll('.swiper__inner--item');
const svgButtons = document.querySelectorAll('.title--svg');

titleBtns.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Добавляем или убираем класс 'active' у соответствующего элемента при клике
    hoverContents[index].classList.toggle('active');
    imgButtons[index].classList.toggle('active');
    svgButtons[index].classList.toggle('active');
  });
});
document.addEventListener('DOMContentLoaded', function() {
const secondTitleBtn = document.querySelector('.title--btn-second');
const secondHoverContent = document.querySelector('.inner__item--hover-second');
const secondImgButton = document.querySelector('.swiper__inner--itemsecond');
const secondSvgButton = document.querySelector('.title__svg--second');

secondTitleBtn.addEventListener('click', () => {
  secondHoverContent.classList.toggle('active');
  secondImgButton.classList.toggle('active');
  secondSvgButton.classList.toggle('active');

  const firstImgButton = document.querySelector('.swiper__inner--item');
  firstImgButton.classList.toggle('width');

  // Сейчас, поправим переменную thirdImgButton и применим класс 'width' к ней
  const thirdImgButton = document.querySelector('.swiper__inner--itemthird');
  thirdImgButton.classList.toggle('width');
});


const thirdTitleBtn = document.querySelector('.title--btn-third');
const thirdHoverContent = document.querySelector('.inner__item--hover-third');
const thirdImgButton = document.querySelector('.swiper__inner--itemthird');
const thirdSvgButton = document.querySelector('.title__svg--third');

// Добавьте или уберите класс 'width' у .swiper__inner--item и .swiper__inner--itemsecond и .swiper__inner--itemthird при клике
thirdTitleBtn.addEventListener('click', () => {
  thirdHoverContent.classList.toggle('active');
  thirdImgButton.classList.toggle('active');
  thirdSvgButton.classList.toggle('active');

  const firstImgButton = document.querySelector('.swiper__inner--item');
  firstImgButton.classList.toggle('width');

  const secondImgButton = document.querySelector('.swiper__inner--itemsecond');
  secondImgButton.classList.toggle('width');

  thirdImgButton.classList.toggle('width');
});

  });




document.addEventListener('DOMContentLoaded', function () {
const buttoninner = document.querySelector('.elemnt4__btn--inner');
const elementToActivate = document.querySelector('.overlay__element4--inner');
const elementToheadline = document.querySelector('.overlay__element4--headline');
const elementTotitle = document.querySelector('.element4__btn');
const elementTostep = document.querySelector('.overlay__step--inner');
const elementoverlay = document.querySelector('.overlay__element--box2');


buttoninner.addEventListener('click', () => {
  elementToActivate.classList.toggle('active');
  elementToheadline.classList.toggle('active');
  elementTotitle.classList.toggle('active');
  elementTostep.classList.toggle('active');
  elementoverlay.classList.toggle('active');
});

elementTotitle.addEventListener('click', () => {
  // Удаляем класс "active" у элементов
  elementToActivate.classList.remove('active');
  elementToheadline.classList.remove('active');
  elementTotitle.classList.remove('active');
  elementTostep.classList.remove('active');
  elementoverlay.classList.remove('active');
});
  });

const swiper3 = new Swiper('.swiper__elite', {
  // Optional parameters
  direction: 'horizontal',
 
  // If we need pagination
  pagination: {
    el: '.swiper__pagination--elite',
    clickable: true,
      type:'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper__elite--btnnext',
    prevEl: '.swiper__elite--btnprev',
  },
});
const swiper4 = new Swiper('.vip__swiper', {
  // Optional parameters
  direction: 'horizontal',
 
  // If we need pagination
  pagination: {
    el: '.vip__swiper--pagination',
    clickable: true,
      type:'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.vip__swiper--nextprev',
    prevEl: '.vip__swiper--btnprev',
  },
});
const swiper5 = new Swiper('.swiper__extra', {
  // Optional parameters
  direction: 'horizontal',
 
  // If we need pagination
  pagination: {
    el: '.swiper__extra--pagination',
    clickable: true,
      type:'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper__extra--btnnext',
    prevEl: '.swiper__extra--btnprev',
  },
});


document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelector('.slides__container');
  const elitebtn = document.querySelector('.slides__inner--title');
  
  

    elitebtn .addEventListener('click', function () {
    elitebtn .classList.toggle('active');
      slides.classList.toggle('active');

  });
});
document.addEventListener('DOMContentLoaded', function () {
  const slides2 = document.querySelector('.slides__container2');
  const elitebtn = document.querySelector('.slides__inner--title2');
  

    elitebtn .addEventListener('click', function () {
    elitebtn .classList.toggle('active'); 
    slides2.classList.toggle('active');
   
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const slides2 = document.querySelector('.slides__container3');
  const elitebtn = document.querySelector('.slides__inner--title3');
  

    elitebtn .addEventListener('click', function () {
    elitebtn .classList.toggle('active'); 
    slides2.classList.toggle('active');
   
  });
});















