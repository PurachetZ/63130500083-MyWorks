let data = ["monkey", "rooster", "dog", "pig", "rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "sheep"];
function x(year){
    return data[year%12];
}
console.log(x(1900));