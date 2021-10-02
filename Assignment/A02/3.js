function BMI(x, y){
    let weight = x * 0.453592;
    let height = y * 0.0254;
    return weight/(height * height);
}
console.log(BMI(36.5, 39));
