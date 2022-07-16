//form

var cSelect = document.querySelectorAll('.select-current')
var cSelectItem = document.querySelectorAll('.select-item')

if(cSelect.length > 0) {
	cSelect.forEach(item => {
		item.addEventListener('click', () => {
			item.classList.toggle('isactive')
		})
	});

	cSelectItem.forEach(el => {
		el.addEventListener('click', ()=> {
			let thParent = el.closest('.select')
			let thItems = thParent.querySelectorAll('.select-item')
			let thCurrent = thParent.querySelector('.select-current')
			let thInput = thParent.querySelector('.select-input')
			thItems.forEach(el => { el.classList.remove('isactive') })

			el.classList.add('isactive')
			thCurrent.innerHTML = el.innerHTML
			thCurrent.classList.remove('isactive')
			thInput.value = el.dataset.value
		})
	})
};