function randomNumber(x){
    let number = Math.floor(Math.random() * 10)+1;
    let result = '';
    if(x > number) result = 'Too Low'; 
    else if(x < number) result = 'Too High';
    else if(x == number) return 'You Win';
    return `${result} \n Number is ${number}`
}
console.log(randomNumber(5))