let products = [
    {id: 1, price: 10},
    {id: 2, price: 5}
];
console.log(products);
let newProduct = {id: 3, price: 20};
// products = [...products, {...newProduct}];
products.push({id:newProduct.id, price:newProduct.price});

// products = [...products, {id: newProduct.id,price: newProduct.price}]


// products[products.length].id = newProduct.id;
// products[products.length].price = newProduct.price;
newProduct.price = 100;
console.log(products);
