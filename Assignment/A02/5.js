function rng(){
    return Math.floor(Math.random() * 100)+1;
}
let number = [];
for(let i = 0; i < 3; i++){
    number[i] = rng();
}
function menu(choose){

    let result = 0;
    let text = ""

    switch(choose){
        case 1:
            text = "Find Sum";
            number.forEach((number) => result += number);
            break;
        case 2:
            text = "Find Minimum Value"
            result = 100
            for(let num of number){
                if(num < result) result = num;
            }

            break;
        case 3:
            text = "Find Maximum Value"
            for(let num of number){
                if(num > result) result = num;
            }
            break;
    }
    
    return `${number} \nchoose: ${text} \nresult: ${result}`;
}

console.log(menu(1));
console.log(menu(2));
console.log(menu(3));
