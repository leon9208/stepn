document.querySelector('.mobile-btn').addEventListener('click', function() {
	if(this.classList.contains('active')) {
		this.classList.remove('active')
		document.querySelector('.mobile-nav').classList.remove('active')
	} else {
		this.classList.add('active')
		document.querySelector('.mobile-nav').classList.add('active')
	}
})