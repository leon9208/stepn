//about-slider
var aboutSlider = new Swiper(".about-slider", {
	slidesPerView: 3,
	spaceBetween: 30,
	navigation: true,
	navigation: {
		nextEl: ".swiper-button--next",
		prevEl: ".swiper-button--prev",
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		// when window width is >= 480px
		768: {
			slidesPerView: 2,
			spaceBetween: 30
		},
		// when window width is >= 640px
		1200: {
			slidesPerView: 3,
			spaceBetween: 30
		}
	}
});