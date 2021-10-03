function doSomeThing(x){
    x.name = 'unknown';
}

let item = { name: 'ABC'};
doSomeThing(item);
console.log(item.name);

function doSomeThing2(x){
    x = 100;
}

let num = true;
doSomeThing2(num);
console.log(num);