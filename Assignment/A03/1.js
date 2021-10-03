function changeCalculator(order, pay) {
    let billCoin = [{name: "B500", price: 500}, {name: "B100", price: 100}, {name: "B50", price: 50}, {name: "B20", price: 20}, {name: "C10", price: 10}, {name: "C5", price: 5}, {name: "C2", price: 2}, {name: "C1", price: 1}]
    if (pay <= order) return -1;
    change = pay - order;
    let changeResult = {};
    for(let bc of billCoin){
        changeResult[bc.name] = Math.floor(change / bc.price);
        change -= (bc.price) * Math.floor(change / bc.price); 
    }
    return changeResult;
  }
console.log(changeCalculator(222, 1000));

