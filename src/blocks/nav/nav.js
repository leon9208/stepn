document.querySelector('.mobile-btn').addEventListener('click', function() {
	if(this.classList.contains('active')) {
		this.classList.remove('active')
		document.querySelector('.mobile-nav').classList.remove('active')
	} else {
		this.classList.add('active')
		document.querySelector('.mobile-nav').classList.add('active')
	}
});

// .nav-js

var nav = priorityNav.init({
	initClass: "nav-js",
	mainNavWrapper: ".nav-wrapper",
	breakPoint: 0,
	navDropdownClassName: "nav-dropdown",
	navDropdownLabel: "...",
	throttleDelay: '50'
	// breakPoint: 1160,
	// initClass: "nav-js",
	// mainNavWrapper: "nav-wrapper",
	// mainNav: "ul",
	// navDropdownToggleClassName: "nav__dropdown-toggle",
	// navDropdownBreakpointLabel: "menu",
	// throttleDelay: 50,
	// offsetPixels: 0,
	// count: true,
});