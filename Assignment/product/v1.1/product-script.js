// import { products } from './product.js';
let products = [
    {
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-air-force-1-07-WrLlWX.png",
      productId: "S001",
      productName: "Nike Air Force 1 '07",
      productPrice: "3,500",
      productStock: 2,
      productGender: "M"
    },
    {
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/17c8856c-ae39-4cbe-8f52-df6d992c5451/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-air-force-1-fontanka-LtBCnn.png",
      productId: "S002",
      productName: "Nike Air Force 1 Fontanka",
      productPrice: "4,200",
      productStock: 4,
      productGender: "F"
    },
    {
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6122e8f2-b92d-4bb8-98de-92d5e4be1cd2/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-air-force-1-shadow-mN8Glx.png",
      productId: "S003",
      productName: "Nike Air Force 1 Shadow",
      productPrice: "4,200",
      productStock: 1,
      productGender: "F"
    },
    {
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d3504f3d-8803-412d-aa61-0e0fae61cec4/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-dunk-high-1985-sp-Kwc210.png",
      productId: "S004",
      productName: "Nike Dunk High 1985 SP",
      productPrice: "5,000",
      productStock: 4,
      productGender: "M"
    },
    {
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3e6a764-6468-4862-947f-75a04a1f0d8a/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-air-force-1-07-60-zk5Tch.png",
      productId: "S005",
      productName: "Nike Air Force 1 '07 LX",
      productPrice: "3,800",
      productStock: 0,
      productGender: "M"
    },
    {
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/655df0df-823c-4b61-8b60-87dd8c999a1e/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B8%AA%E0%B9%89%E0%B8%99%E0%B8%9C%E0%B8%B9%E0%B9%89-court-legacy-KL9hwr.png",
      productId: "S006",
      productName: "Nike Court Legacy",
      productPrice: "1,900",
      productStock: 0,
      productGender: "F"
    },
    {
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/14c94550-ca1f-4de6-90cf-e7a1e2e49df0/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-air-jordan-1-mid-se-hHltxp.png",
      productId: "S007",
      productName: "Air Jordan 1 Mid SE",
      productPrice: "4,600",
      productStock: 3,
      productGender: "M"
    },
    {
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ad53194c-947e-4d94-973a-43bca241f2a1/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-dunk-high-up-kMksLT.png",
      productId: "S008",
      productName: "Nike Dunk High Up",
      productPrice: "4,600",
      productStock: 0,
      productGender: "F"
    },
    {
      img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/00b457c8-e740-4150-b18c-8c163cc0d350/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B9%88%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%A5%E0%B8%9C%E0%B8%B9%E0%B9%89-air-zoom-terra-kiger-7-nm2pqh.png",
      productId: "S009",
      productName: "Nike Air Zoom Terra Kiger 7",
      productPrice: "5,200",
      productStock: 0,
      productGender: "F"
    },
    // {
    //   img: "",
    //   productId: "S0010",
    //   productName: "Nike Court Legacy",
    //   productPrice: "1,900",
    //   productStock: 0,
    //   productGender: "F"
    // },
  
  ];

const divProductsEle = document.querySelector('#products');
divProductsEle.setAttribute('class', 'container row mx-auto')
// divProductsEle.setAttribute('class', 'container row justify-content-center mx-auto');
var attr = document.createAttribute('style');
attr.value = 'color: red';
genProductList();


const toAllShoeEle = document.querySelector('#toAllShoe');
toAllShoeEle.onclick = function() {removeProductList(); genProductList(); changeColorButton(toAllShoeEle);}
const toMenShoeEle = document.querySelector('#toMenShoe');
toMenShoeEle.onclick = function() {removeProductList(); genProductList('M'); changeColorButton(toMenShoeEle);}

const toWomenShoeEle = document.querySelector('#toWomenShoe');
toWomenShoeEle.onclick = function() {removeProductList(); genProductList('F'); changeColorButton(toWomenShoeEle);}




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
