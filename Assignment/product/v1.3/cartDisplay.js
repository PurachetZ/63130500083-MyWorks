import {removeCart} from './cart.js';
const divCartDisplay = document.querySelector('#cartDisplay');
divCartDisplay.setAttribute('class', 'container row mx-auto justify-content-end px-0')
divCartDisplay.setAttribute('style', '');

const cartIconEle = document.createElement('i');
cartIconEle.setAttribute('class', 'col-auto fa fa-cart-plus fa-2x px-1 pt-1');
divCartDisplay.appendChild(cartIconEle);

const cartTextEle = document.createElement('p');
cartTextEle.setAttribute('class', 'col-auto px-0 pt-2 h5');
cartTextEle.textContent = 'Cart::';
divCartDisplay.appendChild(cartTextEle);

const countCartEle = document.createElement('p');
countCartEle.setAttribute('id', 'cart-count');
countCartEle.setAttribute('class', 'col-auto px-0 pt-2 h5');
countCartEle.textContent = '0';
divCartDisplay.appendChild(countCartEle);

const deleteBtnEle = document.createElement('i');
deleteBtnEle.setAttribute('class', 'col-auto fa fa-trash fa-2x text-danger pt-1');
deleteBtnEle.onclick = function() {};
deleteBtnEle.addEventListener("click",removeCart);
divCartDisplay.appendChild(deleteBtnEle);

