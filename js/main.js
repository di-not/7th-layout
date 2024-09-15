const itemList = document.querySelectorAll('.menu__item')
const cartList = document.querySelectorAll('.menu__cart-item')
const list = document.querySelector('.menu__cart-list')

itemList.forEach(function (item) {
	item.addEventListener('click', event => {
		list.classList.add('menu__cart-list--open')
		const curItem = event.currentTarget
		const curItemClass = curItem.dataset.text
		cartList.forEach(function (item) {
			item.classList.remove('menu__cart-item--open')
		})
		const a = '.' + `${curItemClass}`
		document.querySelector(`${a}`).classList.add('menu__cart-item--open')
		const b = document
			.querySelector(`${a}`)
			.childNodes[1].addEventListener('click', () => {
				cartList.forEach(function (item) {
					item.classList.remove('menu__cart-item--open')
				})
                list.classList.remove('menu__cart-list--open');
			})
	})
})

// list.addEventListener('click',()=>{
//     list.classList.remove('menu__cart-list--open')
// })