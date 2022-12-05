let i = 0;
let sum = 0;

window.addEventListener('load', () => {
  products =JSON.parse(localStorage.getItem('products')) || [];
  const newProductForm = document.querySelector('#new-product-form');
  // const newProductName = document.querySelector('#new-product-name-input');
  // const newProductQuantity = document.querySelector('#new-product-quantity-input');
  // const newProductPrice = document.querySelector('#new-product-price-input');
    i = products.length;

  newProductForm.addEventListener('submit', e => {
      e.preventDefault();

      if(products.map(product => product.id).includes(i)){
        i = i+1;
    }

      let toSumQuantity = e.target.elements.quantityNewProduct.value;
      let toSumPrice = e.target.elements.priceNewProduct.value;
   const product = {
      id: i,
      name: e.target.elements.nameNewProduct.value,
      quantity: e.target.elements.quantityNewProduct.value,
      price: e.target.elements.priceNewProduct.value,
      sum: (toSumPrice * toSumQuantity)
   }

   if(validateFormNum(e.target.elements.quantityNewProduct.value) && validateFormNum(e.target.elements.priceNewProduct.value)){
    products.push(product);

    localStorage.setItem('products', JSON.stringify(products));
    i++;
   }

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
  const deleteButton = document.createElement('button');

  content.classList.add('content');
  actions.classList.add('actions');
  deleteButton.classList.add('delete');
  let sumProduct = 0;
  sumProduct = product.quantity * product.price;

  content.innerHTML = `
                          <input type="text" class ="idClass" value="${product.id}" readonly/>
                          <input type="text" class ="nameClass" value="${product.name}"/>
                          <input type="text" class ="quantityClass" value="${product.quantity}"/>
                          <input type="text" class ="priceClass" value="${product.price}"/>
                          <input type="text" value="${sumProduct}" readonly/>
                          `;
  deleteButton.innerHTML = 'Usuń';



  actions.appendChild(deleteButton);
  productItem.appendChild(content);
  productItem.appendChild(actions);

  productList.appendChild(productItem);

// EDYCJA PRODUKTU
     
          const nameInput = content.querySelector('.nameClass');
          const quantityInput = content.querySelector('.quantityClass');
          const priceInput = content.querySelector('.priceClass');
    

          nameInput.addEventListener('blur', (e) => {
            nameInput.focus();
              product.name = e.target.value;
              localStorage.setItem('products', JSON.stringify(products));
              DisplayProducts();
          })
          quantityInput.addEventListener('blur', (e) => {
            quantityInput.focus();
              product.quantity = e.target.value;
              product.sum = (e.target.value * product.price);
              localStorage.setItem('products', JSON.stringify(products));
              DisplayProducts();
          })
          priceInput.addEventListener('blur', (e) => {
            priceInput.focus();
              product.price = e.target.value;
              product.sum = (e.target.value * product.quantity);
              localStorage.setItem('products', JSON.stringify(products));
              DisplayProducts();
          })
          

// USUWANIE PRODUKTU
      deleteButton.addEventListener('click', (e) => {
          products = products.filter(t => t != product);
          localStorage.setItem('products', JSON.stringify(products));
          i--;
          DisplayProducts();
      })

      
      const sortButton = document.getElementById("btn")
      // SORTOWANIE PRODUKTU
      
      sortButton.addEventListener('click', (e) => {
    products = products.sort((a,b) => (a.name > b.name));
    localStorage.setItem('products', JSON.stringify(products));
    DisplayProducts();
})

  })

  sum = products.map(product => product.sum).reduce((partialSum, a) => partialSum + a, 0);

  const sum_all = document.getElementById("sum");

sum_all.value = `Razem: ${sum}`

}


function validateFormNum(inputToValidate) {
    if(isNaN(inputToValidate)){
        alert("Możesz wpisać tylko:1-999");
        return false;
      }
    console.log("poprawnie");
    return true;
}
