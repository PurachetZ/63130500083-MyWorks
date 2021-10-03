// let bill_500 = {name: '500 baht bill', amount: 0}
// let bill_100 = {name: '100 baht bill', amount: 0}
// let bill_50 = {name: '50 baht bill', amount: 0}
// let bill_20 = {name: '20 baht bill', amount: 0}
// let coin_10 = {name: '10 baht coin', amount: 0}

bill = ['500 baht bill', '100 baht bill', '50 baht bill', '20 baht bill'];
coin = ['10 baht coin', '5 baht coin', '2 baht coin', '1 baht coin'];

function Cal(price, received){
    let change = received - price;
    let x = [];
    let y = "";
    while(change >= 500){
        x.push(bill[0]);
        change -= 500;
    }
    while(change >= 100){
        x.push(bill[1]);
        change -= 100;
    }
    while(change >= 50){
        x.push(bill[2]);
        change -= 50;
    }
    while(change >= 20){
        x.push(bill[3]);
        change -= 20;
    }
    while(change >= 10){
        x.push(coin[0]);
        change -= 10;
    }
    while(change >= 5){
        x.push(coin[1]);
        change -= 5;
    }
    while(change >= 2){
        x.push(coin[2]);
        change -= 2;
    }
    while(change >= 1){
        x.push(coin[3]);
        change -= 1;
    }
    for(let i = 0; i<x.length; i++){
        y += `${x[i]} \n`
    }
    return `received: ${received} price: ${price} \n${y}`;
}
console.log(Cal(49,1000));
console.log("---------------\n");
console.log(Cal(63,100));
console.log("---------------\n");
console.log(Cal(199,1000));