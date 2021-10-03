function changeCalculator(order, pay) {
    let billCoin = [{B500: 500},
                    {B100: 100},
                    {B50: 50},
                    {B20: 20},
                    {C10: 10},
                    {C5: 5},
                    {C2: 2},
                    {C1: 1},
    ]
    if (pay <= order) return -1;
    change = pay - order;
    let changeResult = {};
    for(let bc of billCoin){
        changeResult[Object.keys(bc)] = Math.floor(change / bc[Object.keys(bc)]);
        change %= (bc[Object.keys(bc)]);
        // changeResult[Object.keys(bc)] = Math.floor(change / bc[Object.keys(bc)]);
        // change -= (bc[Object.keys(bc)]) * Math.floor(change / bc[Object.keys(bc)]); 
    }
    return changeResult;
  }
console.log(changeCalculator(150, 1000));
console.log(changeCalculator(199, 1000));
console.log(changeCalculator(1500, 2000));
console.log(changeCalculator(3950, 4000));
console.log(changeCalculator(501, 1000));

