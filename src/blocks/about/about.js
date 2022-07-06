//about-slider
var aboutSlider = new Swiper(".about-slider .swiper", {
	// slidesPerView: 3,
	spaceBetween: 30,
	navigation: true,
	navigation: {
		nextEl: ".swiper-button--next",
		prevEl: ".swiper-button--prev",
	},
	breakpoints: {
		// when window width is >= 320px
		300: {
			slidesPerView: 1,
			spaceBetween: 10
		},
		// when window width is >= 480px
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
		// when window width is >= 640px
		1200: {
			slidesPerView: 3,
			spaceBetween: 30
		}
	}
});