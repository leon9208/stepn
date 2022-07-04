"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//about-slider
var aboutSlider = new Swiper(".about-slider", _defineProperty({
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: true
}, "navigation", {
  nextEl: ".swiper-button--next",
  prevEl: ".swiper-button--prev"
})); //lang
//login
//btn
//pagination
//search