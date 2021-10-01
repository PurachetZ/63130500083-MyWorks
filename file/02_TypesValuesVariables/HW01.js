
function X (num, text){
    const str = 'text';
    let Vowals = /[aeiou]/gi;
    let Ans = "";
    switch (num){
        case 1 :
            Ans = str.split("") .reverse()  .join("");
            break;
        case 2 :
            Ans = str.replace(Vowals,'*');
            break;
        case 3 :
            Ans = str.match(Vowals).length;
            break;
        }
    return Ans;
    }

const readline = require('readline');

const readInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
let num;
readInterface.question('Enter Choice 1-3: ', number, String => {
        num = parseInt(number);
        String = pars
        console.log(X(num));
        readInterface.close();    
    });


