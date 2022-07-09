"use strict";

var _Swiper;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//about-slider
var aboutSlider = new Swiper(".about-slider .swiper", (_Swiper = {
  spaceBetween: 30,
  navigation: true
}, _defineProperty(_Swiper, "navigation", {
  nextEl: ".swiper-button--next",
  prevEl: ".swiper-button--prev"
}), _defineProperty(_Swiper, "breakpoints", {
  300: {
    slidesPerView: 1,
    spaceBetween: 10
  },
  480: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  972: {
    slidesPerView: 2,
    spaceBetween: 30
  },
  1100: {
    slidesPerView: 3,
    spaceBetween: 30
  },
  1200: {
    slidesPerView: 3,
    spaceBetween: 30
  }
}), _Swiper)); //faq
//informer
//lang
//btn
//login
//pagination
//search