import {Cart} from './cart.js'
const divShowCartEle = document.getElementById('show-cart-div');
const tbodyEle = document.getElementById('products-in-cart');
const showCartBtnEle = document.getElementById('show-cart');
showCartBtnEle.addEventListener('click', showCart);

function showCart(){
    divShowCartEle.hidden = false;
    Cart.cart.forEach(ele => {
        const tableRow = document.createElement('tr');

        const imgCol = document.createElement('td');
        imgCol.setAttribute('class', 'px-3 py-4 whitespace-nowrap');
        const imgData = document.createElement('img');
        imgData.setAttribute('class', 'h-8 w-8 rounded-full');
        imgData.src = ele.productImg
        imgCol.appendChild(imgData)

        const idCol = document.createElement('td');
        idCol.className = 'px-3 py-4 whitespace-nowrap text-sm text-gray-500';
        idCol.textContent = ele.productId;

        const nameCol = document.createElement('td');
        nameCol.className = 'px-3 py-4 whitespace-nowrap text-sm text-gray-500';
        nameCol.textContent = ele.productName;

        const priceCol = document.createElement('td');
        priceCol.className = 'px-3 py-4 whitespace-nowrap text-sm text-gray-500';
        priceCol.textContent = ele.productPrice;



        tableRow.appendChild(imgCol)
        tableRow.appendChild(idCol)
        tableRow.appendChild(nameCol)
        tableRow.appendChild(priceCol)


        tbodyEle.appendChild(tableRow)
    });
}