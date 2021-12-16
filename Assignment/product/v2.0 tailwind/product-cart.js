import {Cart} from './cart.js';
import {products} from './product.js';
const divShowCartEle = document.getElementById('show-cart-div');
const tbodyEle = document.getElementById('products-in-cart');
const showCartBtnEle = document.getElementById('show-cart');
showCartBtnEle.addEventListener('click', showCart);

function showCart(){
    // (divShowCartEle.hidden = true ? divShowCartEle.hidden = false : divShowCartEle.hidden = true)
    if(divShowCartEle.hidden = true) {
        divShowCartEle.hidden = false; 
        console.log('1');
    }
    else {
        divShowCartEle.hidden = true;
        console.log('2');
    }

    Cart.cart.sort((a,b) => a.productId.localeCompare(b.productId)) //เรียง id
    Cart.cart.forEach(ele => {
        const p = products.find(product => product.productId == ele.productId);
        
        const tableRow = document.createElement('tr');

        const imgCol = document.createElement('td');
        imgCol.setAttribute('class', 'px-3 py-4 whitespace-nowrap');
        const imgData = document.createElement('img');
        imgData.setAttribute('class', 'h-8 w-8 rounded-full');
        imgData.src = p.img
        imgCol.appendChild(imgData)

        const idCol = document.createElement('td');
        idCol.className = 'px-3 py-4 whitespace-nowrap text-sm text-gray-500';
        idCol.textContent = ele.productId;

        const nameCol = document.createElement('td');
        nameCol.className = 'px-3 py-4 whitespace-nowrap text-sm text-gray-500';
        nameCol.textContent = p.productName;

        const priceCol = document.createElement('td');
        priceCol.className = 'px-3 py-4 whitespace-nowrap text-sm text-gray-500';
        priceCol.textContent = p.productPrice;

        const stockCol = document.createElement('td');
        stockCol.className = 'px-3 py-4 whitespace-nowrap text-sm text-gray-500';
        stockCol.textContent = p.productStock;


        tableRow.appendChild(imgCol)
        tableRow.appendChild(idCol)
        tableRow.appendChild(nameCol)
        tableRow.appendChild(priceCol)


        tbodyEle.appendChild(tableRow)
    });
}