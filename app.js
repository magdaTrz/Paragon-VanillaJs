window.addEventListener('load', () => {
    products =JSON.parse(localStorage.getItem('products')) || [];
    const newProductForm = document.querySelector('#new-product-form');
    // const newProductName = document.querySelector('#new-product-name-input');
    // const newProductQuantity = document.querySelector('#new-product-quantity-input');
    // const newProductPrice = document.querySelector('#new-product-price-input');

    newProductForm.addEventListener('submit', e => {
        e.preventDefault();

        let toSumQuantity = e.target.elements.quantityNewProduct.value;
        let toSumPrice = e.target.elements.priceNewProduct.value;
     const product = {
        id: 1,
        name: e.target.elements.nameNewProduct.value,
        quantity: e.target.elements.quantityNewProduct.value,
        price: e.target.elements.priceNewProduct.value,
        sum: (toSumPrice * toSumQuantity)
     }
    products.push(product);

    localStorage.setItem('products', JSON.stringify(products));

    e.target.reset();

    DisplayProducts();
    });
  DisplayProducts();
});

function DisplayProducts() {
    const productList = document.querySelector('#products');
    productList.innerHTML = '';

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product');

        const content = document.createElement('div');
        const actions = document.createElement('div');
        const editButton = document.createElement('button');
		const deleteButton = document.createElement('button');

        content.classList.add('content');
		actions.classList.add('actions');
		editButton.classList.add('edit');
		deleteButton.classList.add('delete');

		content.innerHTML = `
                            <input type="text" class ="idClass" value="${product.id}" readonly/>
                            <input type="text" class ="nameClass" value="${product.name}" readonly/>
                            <input type="text" class ="quantityClass" value="${product.quantity}" readonly/>
                            <input type="text" class ="priceClass" value="${product.price}" readonly/>
                            <input type="text" value="${product.sum}" readonly/>
                            `;
        editButton.innerHTML = 'Edytuj';
		deleteButton.innerHTML = 'Usuń';

		actions.appendChild(editButton);
		actions.appendChild(deleteButton);
		productItem.appendChild(content);
		productItem.appendChild(actions);

		productList.appendChild(productItem);

// EDYCJA PRODUKTU
        editButton.addEventListener('click', (e) => {
            // const idInput = content.querySelector('.idClass');
            const nameInput = content.querySelector('.nameClass');
            const quantityInput = content.querySelector('.quantityClass');
            const priceInput = content.querySelector('.priceClass');
            
            // idInput.removeAttribute('readonly');
            nameInput.removeAttribute('readonly');
            quantityInput.removeAttribute('readonly');
            priceInput.removeAttribute('readonly');

            // idInput.focus();
            nameInput.focus();
            quantityInput.focus();
            priceInput.focus();

            nameInput.addEventListener('blur', (e) => {
                nameInput.setAttribute('readonly', true);
                quantityInput.setAttribute('readonly', true);
                priceInput.setAttribute('readonly', true);

                product.name = e.target.value;
                localStorage.setItem('products', JSON.stringify(products));
                DisplayProducts();
            })
            quantityInput.addEventListener('blur', (e) => {
                nameInput.setAttribute('readonly', true);
                quantityInput.setAttribute('readonly', true);
                priceInput.setAttribute('readonly', true);

                product.quantity = e.target.value;
                product.sum = (e.target.value * product.price);
                localStorage.setItem('products', JSON.stringify(products));
                DisplayProducts();
            })
            priceInput.addEventListener('blur', (e) => {
                nameInput.setAttribute('readonly', true);
                quantityInput.setAttribute('readonly', true);
                priceInput.setAttribute('readonly', true);

                product.price = e.target.value;
                product.sum = (e.target.value * product.quantity);
                localStorage.setItem('products', JSON.stringify(products));
                DisplayProducts();
            })
        })

// USUWANIE PRODUKTU
        deleteButton.addEventListener('click', (e) => {
            products = products.filter(t => t != product);
            localStorage.setItem('products', JSON.stringify(products));
            DisplayProducts();
        })


    })
}