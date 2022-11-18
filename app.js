//Selectors
//adding new Product
const newDescriptionInput = document.querySelector('#input-newProductDescription');
const newQuantityInput = document.querySelector('#input-newProductQuantity');
const newPriceInput = document.querySelector('#input-newProductPrice');
const newProductButton = document.querySelector('.newProduct-button');
const receiptList = document.querySelector(".receipt-list");

//sum


//Event Listeners
newProductButton.addEventListener('click', addProduct);
//Functions
function addProduct(event){
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

    idTd.innerText = "43";
    descriptionTd.innerText = "bla"
    quantityTd.innerText = "blssssssssssssa"
    priceTd.innerText = "bla"
    totalTd.innerText = "bla" 

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
    deleteButton.classList.add("delete-btn");
    productDiv.appendChild(deleteButton);

    //append to list
    receiptList.appendChild(productDiv);
}