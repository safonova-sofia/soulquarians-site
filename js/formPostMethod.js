/*function formPostMethod() {
    let priceElement = document.getElementsByClassName('total-price')[0].innerHTML;
    document.getElementsByName('price')[0].value = priceElement;


}*/

function formPostMethod() {
	const cartWrapper = document.querySelector('.cart-wrapper');
	//const priceElements = cartWrapper.querySelectorAll('.price__currency');
	//const totalPriceEl = document.querySelector('.total-price');
	//const deliveryCost = document.querySelector('.delivery-cost');
	//const cartDelivery = document.querySelector('[data-cart-delivery]');
    //console.log(priceElements);
	// Общая стоимость товаров
	//let priceTotal = 0;
    let array = document.getElementsByClassName('form-input')[0];
	// Обходим все блоки с ценами в корзине
    const inputWrapper =  document.querySelector('.form-input');
	for (let i=0; i< document.getElementsByClassName("cart-item__title").length; i++){
	    const cartItemHTML = `<p hidden="hidden"><input hidden="hidden" name="name" value="amount"></p>`;
        inputWrapper.insertAdjacentHTML('beforeend', cartItemHTML);

        //let valueElement = array.getElementsByTagName('input')[i].value;

        let amountElement = document.getElementsByClassName('cart-item__details')[i].getElementsByClassName('items__current')[0].textContent;
        //console.log(valueElement);
        console.log(amountElement);

	    let titleElement = document.getElementsByClassName("cart-item__title")[i];
	    let subtitleElement = document.getElementsByClassName("cart-item__subtitle")[i];
	    let priceElement = cartWrapper.querySelectorAll('.price__currency')[i].outerText;
        array.getElementsByTagName('input')[i].value = titleElement;
	    //console.log(titleElement);
	    //console.log(subtitleElement);
	    //console.log(priceElement);



	}

		// Находим количество товара
		//const amountEl = item.closest('.cart-item').querySelector('[data-counter]');
		//console.log(amountEl);
		// Добавляем стоимость товара в общую стоимость (кол-во * цену)
		//priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);


}
/*
const productsContainer = document.querySelector('#input-container');

// Запускаем getProducts
getProducts();

// Асинхронная функция получения данных из файла products.json
async function getProducts() {
	// Получаем данные из products.json
    const response = await fetch('../js/products.json');
    // Парсим данные из JSON формата в JS
    const productsArray = await response.json();
    // Запускаем ф-ю рендера (отображения товаров)
	renderProducts(productsArray);
}

function renderProducts(productsArray) {
    productsArray.forEach(function (item) {
        const productHTML = `<p hidden="hidden"><input hidden="hidden" name="CHECK" value="ANSWER"></p>`;
        productsContainer.insertAdjacentHTML('beforeend', productHTML);
    });
}
*/