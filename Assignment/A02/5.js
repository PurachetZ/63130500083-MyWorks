function rng(){
    return Math.floor(Math.random() * 100)+1;
}

function menu(choose){
    let number = [];
    let result = 0;
    let text = ""
    for(let i = 0; i < 3; i++){
        number[i] = rng();
    }
    switch(choose){
        case 1:
            text = "Find Sum";
            number.forEach((number) => result += number);
            break;
        case 2:
            text = "Find Minimum Value"
            result = 100
            for(let i=0; i < 3; i++){
                if(number[i] < result){
                    result = number[i];
                }
            }
            break;
        case 3:
            text = "Find Maximum Value"
            for(let i=0; i < 3; i++){
                if(number[i] > result){
                    result = number[i];
                }
            }
            break;
    }
    
    return `${number} \nchoose: ${text} \nresult: ${result}`;
}

console.log(menu(1));
console.log(menu(2));
console.log(menu(3));
