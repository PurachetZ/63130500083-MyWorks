function changeCalculator(order, pay) {
    let billCoin = [{name: "B500", price: 500}, {name: "B100", price: 100}, {name: "B50", price: 50}, 
    {name: "B20", price: 20}, {name: "C10", price: 10}, {name: "C5", price: 5}, 
    {name: "C2", price: 2}, {name: "C1", price: 1}]
    if (pay <= order) return -1;
    change = pay - order;
    let changeResult = {};
    // changeResult.B500 = Math.floor(change / 500);
    // changeResult.B100 = Math.floor((change % 500) / 100);
    // changeResult.B50 = Math.floor(((change % 500) % 100) / 50);
    // changeResult.B20 = Math.floor((((change % 500) % 100) % 50) / 20);
    // changeResult.B5 = Math.floor(((((change % 500) % 100) % 50) % 20) / 5);
    // changeResult.B2 = Math.floor((((((change % 500) % 100) % 50) % 20) % 5) / 2);
    // changeResult.B1 = Math.floor((((((change % 500) % 100) % 50) % 20) % 5) % 2);
    for(let bc of billCoin){
        changeResult[bc.name] = Math.floor(change / bc.price);
        change -= (bc.price) * Math.floor(change / bc.price); 
    }
    return changeResult;
  }
  console.log(changeCalculator(222, 1000));

