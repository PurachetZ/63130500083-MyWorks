const countCartEle = document.getElementById('cart-count');

let cart = [];

export let addCart = (event) => {
    let x = cart.filter(cart => cart.productId == event.target.id);
    if(x == false){
        alert(`${event.target.id} added in your cart`);
        cart.push({
            productId: event.target.id,
            // productName: product.productName,
            // productPrice: product.productPrice,
            qty: 1
        })
    }
    else{
        cart[cart.findIndex(ele => {return ele.productId === event.target.id})].qty++;
    }
    countCartEle.textContent = countCart();
}

export let removeCart = () => {
    cart = [];
    countCartEle.textContent = countCart();
}

export let countCart = () => {
    let sum = 0;
    cart.forEach(product => {sum += product.qty;})
    return sum;
}
