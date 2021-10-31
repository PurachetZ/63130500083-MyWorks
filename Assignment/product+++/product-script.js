import { products } from "./product.js";
const divProductsEle = document.querySelector("#products");
divProductsEle.setAttribute('class', 'container row mx-auto')
// divProductsEle.setAttribute("class", "container row justify-content-center mx-auto");
var attr = document.createAttribute("style");
attr.value = "color: red";
genProductList();
const toAllShoeEle = document.querySelector("#toAllShoe");
toAllShoeEle.onclick = function() {removeProductList(); genProductList(); changeColorButton(toAllShoeEle);}
const toMenShoeEle = document.querySelector("#toMenShoe");
toMenShoeEle.onclick = function() {removeProductList(); genProductList("M"); changeColorButton(toMenShoeEle);}

const toWomenShoeEle = document.querySelector("#toWomenShoe");
toWomenShoeEle.onclick = function() {removeProductList(); genProductList("F"); changeColorButton(toWomenShoeEle);}

function changeColorButton(type){
    toAllShoeEle.setAttribute("class", "btn btn-primary")
    toMenShoeEle.setAttribute("class", "btn btn-primary")
    toWomenShoeEle.setAttribute("class", "btn btn-primary")
    type.setAttribute("class", "btn btn-secondary")
}



function toMenButton(){
    removeProductList(); 
    genProductList("M");
}

function genProductList(gender = "U"){
    for (let product of products) {
        if(gender == product.productGender || gender === "U"){
            const divProductEle = document.createElement("div");
            divProductEle.setAttribute("id", product.productId);
            divProductEle.setAttribute("class", "col-4");
            divProductEle.setAttribute("style", "margin-bottom: 50px; text-align: center;")
          
            const pProductImgEle = document.createElement("img");
            pProductImgEle.setAttribute("src", product.img);
            pProductImgEle.setAttribute("height", 200);
            divProductEle.appendChild(pProductImgEle);
          
            const pProductIdEle = document.createElement("p");
            pProductIdEle.textContent = product.productId;
            divProductEle.appendChild(pProductIdEle);
          
            const pProductNameEle = document.createElement("p");
            pProductNameEle.textContent = product.productName;
            divProductEle.appendChild(pProductNameEle);
          
            const pProductPriceEle = document.createElement("p");
            pProductPriceEle.textContent = product.productPrice + " Baht";
            divProductEle.appendChild(pProductPriceEle);
            
            const pProductStockEle = document.createElement('p');
            pProductStockEle.textContent = "Available : " + product.productStock;
            divProductEle.appendChild(pProductStockEle);
          
            const pProductBuyEle = document.createElement("button");
            pProductBuyEle.setAttribute("type", "button");
            pProductBuyEle.setAttribute("class", "btn btn-primary");
            pProductBuyEle.textContent = "Buy Now";
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