//id 
idNumer = 2;

//Selectors
//adding new Product
const newDescriptionInput = document.querySelector('#input-newProductDescription');
const newQuantityInput = document.querySelector('#input-newProductQuantity');
const newPriceInput = document.querySelector('#input-newProductPrice');
const newProductButton = document.querySelector('.newProduct-button');
const receiptList = document.querySelector(".receipt-list");

//Event Listeners
newProductButton.addEventListener('click', addProduct);
receiptList.addEventListener('click', deleteEditProduct);

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

    idTd.innerText = idNumer;
    descriptionTd.innerText = newDescriptionInput.value;
    quantityTd.innerText = newQuantityInput.value;
    priceTd.innerText = newPriceInput.value;
    const total = (newQuantityInput.value) * (newPriceInput.value)
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
    
    //clear imputs
    newDescriptionInput.value = "";
    newPriceInput.value = "";
    newQuantityInput.value = "";
    //increase id number
    idNumer++;

}

function deleteEditProduct(event) {
    console.log(event.target);
    event.target.style.backgroundColor = "red";
}