const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const switchWas = document.querySelector(".demo__before");
const switchWill = document.querySelector(".demo__after");
const cover =  document.querySelector(".example-change__screen-container--one");
const handle = document.querySelector(".demo__handle");

navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

switchWas.addEventListener("click", function (evt) {
  evt.preventDefault();
  cover.classList.add("example-change__screen-container--opened");
  cover.classList.remove("example-change__screen-container--closed");
  handle.classList.add("demo__handle--on");
  handle.classList.remove("demo__handle--off");
});

switchWill.addEventListener("click", function (evt) {
    evt.preventDefault();
    cover.classList.remove("example-change__screen-container--opened");
    cover.classList.add("example-change__screen-container--closed");
    handle.classList.add("demo__handle--off");
    handle.classList.remove("demo__handle--on");
});
