//Selectors
//adding new Product
const newDescriptionInput = document.querySelector('#input-newProductDescription');
const newQuantityInput = document.querySelector('#input-newProductQuantity');
const newPriceInput = document.querySelector('#input-newProductPrice');
const newProductButton = document.querySelector('.newProduct-button');
const receiptList = document.querySelector(".receipt-list");
var products = [];

//Event Listeners
document.addEventListener("DOMContentLoaded", getProducts);
newProductButton.addEventListener('click', addProduct);
receiptList.addEventListener('click', deleteEditProduct);

//Functions
function addProduct(event) {
  event.preventDefault(); //prevent form from submitting

  //div
  const productDiv = document.createElement('tr'); //toodoDiv
  productDiv.classList.add("product"); //toodo
  //create td's
  const idTd = document.createElement('td'); //newTodo
  const descriptionTd = document.createElement('td');
  const quantityTd = document.createElement('td');
  const priceTd = document.createElement('td');
  const totalTd = document.createElement('td');

  idTd.innerText = document.getElementsByTagName('tr').length; 
  descriptionTd.innerText = newDescriptionInput.value; 
  quantityTd.innerText = newQuantityInput.value; 
  priceTd.innerText = newPriceInput.value;
  const total = (newQuantityInput.value) * (newPriceInput.value);
  totalTd.innerText = total;

  //create a new product object
  let product = {
    id: document.getElementsByTagName('tr').length,
    description: newDescriptionInput.value,
    quantity: newQuantityInput.value,
    price: newPriceInput.value,
    total: total
  }
  products.push(product);

  idTd.classList.add("product-item"); //toodo-item
  descriptionTd.classList.add("product-item");
  quantityTd.classList.add("product-item");
  priceTd.classList.add("product-item");
  totalTd.classList.add("product-item");

  productDiv.appendChild(idTd);
  productDiv.appendChild(descriptionTd);
  productDiv.appendChild(quantityTd);
  productDiv.appendChild(priceTd);
  productDiv.appendChild(totalTd);

  //add to localStorage
  saveLocalReceipt(JSON.stringify(products));
  
  //Delete product
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "<td>Delete </td>";
  deleteButton.classList.add("delete-button");
  productDiv.appendChild(deleteButton);

  //Edit button
  const editButton = document.createElement("button");
  editButton.innerHTML = "<td>Edit</td>";
  editButton.classList.add("edit-button");
  productDiv.appendChild(editButton);

  //append to list
  receiptList.appendChild(productDiv);

  //clear imputs
  newDescriptionInput.value = "";
  newPriceInput.value = "";
  newQuantityInput.value = "";


}

function deleteEditProduct(event) {
  event.target.style.backgroundColor = "red";
  const item = event.target;
  //delete product
  if (item.classList[0] === "delete-button") {
    const element = item.parentElement;
    removeLocalStorageProduct(element);
    element.remove();
  }

  //edit product
  if (item.classList[0] === "edit-button") {

  }
}

// function editProduct(e) {
//     const product = receiptList.childNodes
//     console.log(product.length)
//     console.log(product);
//     for(let i = 2; i < product.length){

//     }
// }

function saveLocalReceipt(product) {
  //check if some product already exists
  let productsLS;
  if (localStorage.getItem("MyReceipt") === null) {
    productsLS = [];
    console.log("Brak produktów do odtworzenia paragonu.")
    var idNumer = 1;

  } else {
    productsLS = JSON.parse(localStorage.getItem('MyReceipt'));
    console.log("Odtworzono paragon z Local Storage");
    console.log(productsLS.length);
    var idNumber = productsLS.length + 1;
    
  }
  productsLS.push(product);
  localStorage.setItem("MyReceipt", JSON.stringify(products));
}

function getProducts() {
  let productsLS;
  //check if some product already exists
  if (localStorage.getItem('MyReceipt') === null) {
    productsLS = [];
  } else {
    productsLS = JSON.parse(localStorage.getItem('MyReceipt'));
  }
  productsLS.forEach(function(product) {
    //div
    const productDiv = document.createElement('tr'); //toodoDiv
    productDiv.classList.add("product"); //toodo
    //create td's
    const idTd = document.createElement('td'); //newTodo
    const descriptionTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td');
    const totalTd = document.createElement('td');

    idTd.innerText = product.id;
    descriptionTd.innerText = product.description;
    quantityTd.innerText = product.quantity;
    priceTd.innerText = product.price;
    const total = (product.quantity) * (product.price)
    totalTd.innerText = total

    idTd.classList.add("product-item"); //toodo-item
    descriptionTd.classList.add("product-item");
    quantityTd.classList.add("product-item");
    priceTd.classList.add("product-item");
    totalTd.classList.add("product-item");

    productDiv.appendChild(idTd);
    productDiv.appendChild(descriptionTd);
    productDiv.appendChild(quantityTd);
    productDiv.appendChild(priceTd);
    productDiv.appendChild(totalTd);

    //Delete product
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "<td>Delete </td>";
    deleteButton.classList.add("delete-button");
    productDiv.appendChild(deleteButton);

    //Edit button
    const editButton = document.createElement("button");
    editButton.innerHTML = "<td>Edit</td>";
    editButton.classList.add("edit-button");
    productDiv.appendChild(editButton);

    //append to list
    receiptList.appendChild(productDiv);
  });
}

function removeLocalStorageProduct(product) {
  let productsLS;
  //check if some product already exists
  if (localStorage.getItem('MyReceipt') === null) {
    productsLS = [];
  } else {
    productsLS = JSON.parse(localStorage.getItem('MyReceipt'));
  }
  const productsIndex = product.children[0].innerText;
  productsLS.splice(productsLS.indexOf(productsIndex), 1);
  //productsLS.splice(products.id, 1);
  console.log(product.id);
  localStorage.setItem("MyReceipt", JSON.stringify(products));

}
