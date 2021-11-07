import { products } from './product.js';
const divProductsEle = document.querySelector('#products');
divProductsEle.setAttribute('class', 'container row mx-auto')
// divProductsEle.setAttribute('class', 'container row justify-content-center mx-auto');


// shoeName.addEventListener('input', function(){
//     console.log(shoeName.value)
//     // removeProductList()
//     // createProductByName(shoeName.value);
// })





{/* <h2 style="text-align: center"><i class="fa fa-shopping-cart"></i> */}
const bodyEle = document.querySelector('body')
// const firstBodyEle = bodyEle.firstElementChild;

// {
//     const divSearchEle = document.createElement('div');
//     divSearchEle.setAttribute('id', 'searchPanel');
//     divSearchEle.setAttribute('class', 'p-2');
//     divSearchEle.setAttribute('style', `border: 1px solid red; `)


//     const sIconEle = document.createElement('i');
//     sIconEle.setAttribute('class', 'fa fa-search p-1');
//     // sIconEle.setAttribute('style', 'margin-left: 20px')
//     sIconEle.setAttribute('style', `border: 1px solid red; cursor: pointer;`);
//     sIconEle.onclick = function() {SearchIconBtn()};
//     divSearchEle.appendChild(sIconEle);

//     {/* <input type="text" id="fname" name="fname" value="John"> */}
//     const sFormEle = document.createElement('input');
//     sFormEle.setAttribute('class', '');
//     sFormEle.setAttribute('type', 'text');
//     sFormEle.setAttribute('id', '');
//     sFormEle.setAttribute('name', '');
//     sFormEle.setAttribute('value', '');
//     // sFormEle.setAttribute('style', `visibility: hidden;`);
//     divSearchEle.appendChild(sFormEle);
//     const sButtonEle = document.createElement('button');
//     sButtonEle.setAttribute('class', ' btn btn-primary');
//     // sButtonEle.setAttribute('style', `margin: 0px 0px 0px 10px;`)
//     sButtonEle.textContent = 'Search';
//     // sButtonEle.setAttribute('style', `visibility: hidden;`);

//     divSearchEle.appendChild(sButtonEle);

//     bodyEle.insertBefore(divSearchEle, bodyEle.firstChild);



//     // const firstBodyEle = bodyEle.firstElementChild;
//     //     bodyEle.insertBefore(cartMenu, firstBodyEle);
//     //     bodyEle.removeChild(document.querySelector('#showCart'))

// function SearchIconBtn(){
//     if(sFormEle.style.visibility == 'hidden'){
//         sFormEle.style.visibility = 'visible';
//         sButtonEle.style.visibility = 'visible';
//     }
//     else{
//         sFormEle.style.visibility = 'hidden';
//         sButtonEle.style.visibility = 'hidden';
//     }
// }


// }

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



products.forEach(product => {
    const divProductEle = document.createElement('div');
    divProductEle.setAttribute('id', product.productId);
    divProductEle.setAttribute('class', 'col-4 card border-0 mb-4 mx-2 p-0');
    divProductEle.setAttribute('style', 'cursor: pointer; width: 25em;')

    const pProductImgEle = document.createElement('img');
    pProductImgEle.setAttribute('src', product.img);
    pProductImgEle.setAttribute('class', 'card-img-top');
    divProductEle.appendChild(pProductImgEle);
    
    const pProductIdEle = document.createElement('h5');
    pProductIdEle.textContent = product.productId;
    pProductIdEle.setAttribute('class', 'card-title text-center');
    // pProductIdEle.setAttribute('style', 'margin: -40px 0px 30px;');
    pProductIdEle.setAttribute('style', 'margin: -380px 0px 370px;');
    divProductEle.appendChild(pProductIdEle);
    
    const pProductNameEle = document.createElement('h5');
    pProductNameEle.textContent = product.productName;
    pProductNameEle.setAttribute('class', 'card-title');
    divProductEle.appendChild(pProductNameEle);
    
    const pProductPriceEle = document.createElement('h6');
    pProductPriceEle.textContent = product.productPrice + ' Baht';
    pProductPriceEle.setAttribute('class', 'card-text text-secondary');
    divProductEle.appendChild(pProductPriceEle);
    
    const pProductStockEle = document.createElement('h6');
    pProductStockEle.textContent = 'Available : ' + product.productStock;
    pProductStockEle.setAttribute('class', 'card-text text-secondary');
    divProductEle.appendChild(pProductStockEle);
    
    // const pProductBuyEle = document.createElement('button');
    // pProductBuyEle.setAttribute('type', 'button');
    // pProductBuyEle.setAttribute('class', 'btn btn-primary');
    // pProductBuyEle.textContent = 'Buy Now';
    // pProductBuyEle.onclick = function() {}
    // divProductEle.appendChild(pProductBuyEle);
    
    divProductsEle.appendChild(divProductEle);
}
);

