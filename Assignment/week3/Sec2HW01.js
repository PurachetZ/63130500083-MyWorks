function select(x, txt){
    let text = txt;
    let ans = '';
    let ans3 = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    switch(x) {   
        case 1:
            for(i = text.length; i>=0; i--){
                ans += text.charAt(i);
            }
            console.log(ans);
            break;
        case 2:
            for(i = 0; i <= text.length; i++){
                for(j = 0; j <= vowels.length; j++){
                    if(j == 10) ans += text.charAt(i);
                    else if(text.charAt(i) == vowels[j]){
                        ans += '*';
                        j = 10;
                    }
                }
            }
            console.log(ans);
            break;
        case 3:
            for(i = 0; i <= text.length; i++){
                for(j = 0; j <= vowels.length; j++){
                    if(text.charAt(i) == vowels[j]){
                        ans3 += 1;
                    }
                }
            }
            console.log(ans3);
            break;
    }
}
console.log();      //เว้นบน
let t1 = "Client side Web Programming";
select(1, t1);
select(2, t1);
select(3, t1);
console.log("---------------");
let t2 = "Mikhail Gorbachyov";
select(1, t2);
select(2, t2);
select(3, t2);
console.log("---------------");
let t3 = "Big brave birds with big beaks";
select(1, t3);
select(2, t3);
select(3, t3);