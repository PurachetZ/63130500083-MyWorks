

let c = 0;
const num = [9,1,8,2,7,3,6,4,5];
  let find2 = num.find((element, index) => {
    if(index >0){
        console.log(`element: ${element} index: ${index}`)
        return element >5;
    }
  })
  console.log(find2)