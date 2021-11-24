import {products} from './product.js';
const selectMenCheckBoxEle = document.getElementById('select-men');
const selcetWomenCheckBoxEle = document.getElementById('select-women');
selectMenCheckBoxEle.addEventListener('click', genderCheckBox);
selcetWomenCheckBoxEle.addEventListener('click', genderCheckBox);

function genderCheckBox(e){
    products.forEach(product =>{
        const pDivEle = document.getElementById(product.productId);
        if(product.productGender === e.target.value && e.target.checked){
            pDivEle.hidden = false;
        }
        else if(product.productGender === e.target.value && e.target.checked === false){
            pDivEle.hidden = true;
        }
    })
}