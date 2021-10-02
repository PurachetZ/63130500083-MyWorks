let square ={
    area: function(){
        return this.side * this.side;
    },
    side: 10
}
console.log(square.area());
square.name = 'test';
console.log(square);

let square2 ={
    area (){ return this.side * this.side;},
    side: 10
    };
console.log(square2.area());