const productsContainer = document.querySelector('#products-container');

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
        const productHTML = `<div class="col-md-6">
						<div class="card mb-4 wrapper-card" data-id="${item.id}">
							<img class="product-img" src="../media/albums/${item.imgSrc}" alt="">
							<div class="card-details">
							    <h4 class="item-title">${item.artist}</h4>
								<h4 class="item-subtitle"><i>${item.title}</i></h4>

								<div class="details-wrapper">
								    //<!-- Счетчик -->
									<div class="items counter-wrapper" hidden>
										<div class="items__current" data-counter>1</div>
									</div>
									//<!--  Счетчик -->
									<div class="price">
										<div class="price__currency">${item.price} ₽</div>
									</div>
								</div>

								<button data-cart type="button" class="btn btn-block btn-outline-warning">
									+ в корзину
								</button>

							</div>
						</div>
					</div>`;
        productsContainer.insertAdjacentHTML('beforeend', productHTML);
    });
}