import { products } from './product.js';
const divProductsEle = document.querySelector('#products');
divProductsEle.setAttribute('class', 'container row mx-auto')
// divProductsEle.setAttribute('class', 'container row justify-content-center mx-auto');
var attr = document.createAttribute('style');
attr.value = 'color: red';
genProductList();

const basketButton = document.querySelector('#showCart');
basketButton.onclick = function() {showCartMenu();};

const toAllShoeEle = document.querySelector('#toAllShoe');
toAllShoeEle.onclick = function() {removeProductList(); genProductList(); changeColorButton(toAllShoeEle);}
const toMenShoeEle = document.querySelector('#toMenShoe');
toMenShoeEle.onclick = function() {removeProductList(); genProductList('M'); changeColorButton(toMenShoeEle);}

const toWomenShoeEle = document.querySelector('#toWomenShoe');
toWomenShoeEle.onclick = function() {removeProductList(); genProductList('F'); changeColorButton(toWomenShoeEle);}

const bodyEle = document.querySelector('body');
function showCartMenu(){
    const cartMenu = document.createElement('div');
    cartMenu.setAttribute('id', 'cartMenu')
    cartMenu.setAttribute('style', `position:fixed;
    width:400px;
    height:660px;
    top:30px;
    right:0px;
    background-color: rgba(204, 255, 204, 0.8);`)

    const closeButton = document.createElement('i');
    closeButton.setAttribute('class', 'fa fa-times-circle text-danger');
    closeButton.setAttribute('style', `position:fixed; top:30px; right:0px; font-size: 2em; cursor: pointer;`)
    closeButton.onclick = function() {bodyEle.removeChild(document.querySelector('#cartMenu')); showBasketButton()};
    cartMenu.appendChild(closeButton);


    for(let product of cart){
        const divProductEle = document.createElement('div');
            divProductEle.setAttribute('id', product.productId);

            const textEle = document.createElement('p');
            textEle.textContent = `${product.productId} ${product.productName} ${product.productPrice} Baht`;
            divProductEle.appendChild(textEle);

            cartMenu.appendChild(divProductEle);
    }
    const firstBodyEle = bodyEle.firstElementChild;
    bodyEle.insertBefore(cartMenu, firstBodyEle);
    bodyEle.removeChild(document.querySelector('#showCart'))
}



function genProductCart(){
    for(let product of cart){
        const divProductEle = document.createElement('div');
            divProductEle.setAttribute('id', product.productId);

            const pProductIdEle = document.createElement('p');
            pProductIdEle.textContent = product.productId;
            divProductEle.appendChild(pProductIdEle);
          
            const pProductNameEle = document.createElement('p');
            pProductNameEle.textContent = product.productName;
            divProductEle.appendChild(pProductNameEle);
          
            const pProductPriceEle = document.createElement('p');
            pProductPriceEle.textContent = product.productPrice + ' Baht';
            divProductEle.appendChild(pProductPriceEle);

            cartMenu.appendChild(divProductEle);
    }
}

// const bodyEle = document.querySelector('body');
// const ButtonEle = document.createElement('button');
// ButtonEle.setAttribute('type', 'button');
// ButtonEle.setAttribute('class', 'btn btn-primary');
// ButtonEle.textContent = 'Buy Now';

// const firstBodyEle = bodyEle.firstElementChild;
// console.log(bodyEle.firstElementChild)
// bodyEle.insertBefore(ButtonEle, firstBodyEle);

function showBasketButton(){
    const basketButton = document.createElement('div');
    basketButton.setAttribute('id', 'showCart')
    basketButton.innerHTML = `<i class="fa fa-shopping-basket float"></i>`;
    basketButton.setAttribute('style', `position:fixed;
    width:60px;
    height:60px;
    bottom:40px;
    right:40px;
    background-color:#0C9;
    color:#FFF;
    border-radius:50px;
    text-align:center;
    box-shadow: 2px 2px 3px #999;
    cursor: pointer;`)
    basketButton.onclick = function() {showCartMenu();};
    bodyEle.appendChild(basketButton);
}



function changeColorButton(type){
    toAllShoeEle.setAttribute('class', 'btn btn-primary')
    toMenShoeEle.setAttribute('class', 'btn btn-primary')
    toWomenShoeEle.setAttribute('class', 'btn btn-primary')
    type.setAttribute('class', 'btn btn-secondary')
}

function genProductList(gender = 'U'){
    for (let product of products) {
        if(gender == product.productGender || gender === 'U'){
            const divProductEle = document.createElement('div');
            divProductEle.setAttribute('id', product.productId);
            divProductEle.setAttribute('class', 'col-4');
            divProductEle.setAttribute('style', 'margin-bottom: 50px; text-align: center;')
          
            const pProductImgEle = document.createElement('img');
            pProductImgEle.setAttribute('src', product.img);
            pProductImgEle.setAttribute('height', 200);
            divProductEle.appendChild(pProductImgEle);
          
            const pProductIdEle = document.createElement('p');
            pProductIdEle.textContent = product.productId;
            divProductEle.appendChild(pProductIdEle);
          
            const pProductNameEle = document.createElement('p');
            pProductNameEle.textContent = product.productName;
            divProductEle.appendChild(pProductNameEle);
          
            const pProductPriceEle = document.createElement('p');
            pProductPriceEle.textContent = product.productPrice + ' Baht';
            divProductEle.appendChild(pProductPriceEle);
            
            const pProductStockEle = document.createElement('p');
            pProductStockEle.textContent = 'Available : ' + product.productStock;
            divProductEle.appendChild(pProductStockEle);
          
            const pProductBuyEle = document.createElement('button');
            pProductBuyEle.setAttribute('type', 'button');
            pProductBuyEle.setAttribute('class', 'btn btn-primary');
            pProductBuyEle.textContent = 'Buy Now';
            pProductBuyEle.onclick = function() {addToCart(product)}
            divProductEle.appendChild(pProductBuyEle);
          
            divProductsEle.appendChild(divProductEle);
        }
    }
}

function removeProductList(){
    let size = divProductsEle.childNodes.length;
    for(let i = 0; i < size; i++){
      divProductsEle.removeChild(divProductsEle.childNodes[0]);
    }
    // for(let product of divProductsEle.childNodes){
    //     console.log(product)
    //     divProductsEle.removeChild(product);
    // }
}

let cart = [];

function addToCart(product){
    const indexId = (element) => element == product;
    console.log(products.findIndex(indexId))
    cart.push({
        productId: product.productId,
        productName: product.productName,
        productPrice: product.productPrice,
        amount: 1
    })
}

