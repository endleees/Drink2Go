let navMain = document.querySelector('.main-nav--mobile');
let navToggle = document.querySelector('.main-header-wrapper__toggle');
let listIcon = document.querySelector('.main-header-wrapper__list-icon');
const START_LAT = 59.968402;
const START_LNG = 30.317632;
const mapPinIcon =  L.icon({
  iconUrl: 'img/map-pin.svg',
  iconSize: [38, 50],
  
})
const mainMarker = L.marker(
  {
    lat: START_LAT,
    lng: START_LNG,
  },
  {
    icon:mapPinIcon,
  },
);
let map = L.map('map',{
  scrollWheelZoom:false,
}).setView([START_LAT, START_LNG], 18);

navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('main-header-wrapper__toggle--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
  if (navToggle.classList.contains('main-header-wrapper__toggle--closed')) {
    navToggle.classList.remove('main-header-wrapper__toggle--closed');
    navToggle.classList.add('main-header-wrapper__toggle--opened');
  } else {
    navToggle.classList.add('main-header-wrapper__toggle--closed');
    navToggle.classList.remove('main-header-wrapper__toggle--opened');
  }
});

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
mainMarker.addTo(map)
