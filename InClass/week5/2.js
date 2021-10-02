//define our own class and
//constructor functions
class Rectangle{
    constructor(width, height){
    this._width=width;
    this._height=height;
    }
    area(){
    return this._width*this._height;
    }
    }
    let rec1=new Rectangle (2, 3);
    console.log(rec1.area()); //6

//create object with Object.create()
let square = Object.create(rec1);
square.perimeter = function() {
return 4 * this.width;
}
console.log(square.width); //2
console.log(square.height);//3
console.log(square.area());//6
console.log(square.perimeter());//8
console.log(Object.prototype.isPrototypeOf(rec1));//true
console.log(Rectangle.prototype.isPrototypeOf(square));//true
console.log(Object.prototype.isPrototypeOf(square));//true