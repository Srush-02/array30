alert("Hello ex 4")
let f4 =(a, b, l) => {
    let sum = 0;
    for(let i = 0; i < l.length; i++){
        if (l[i] % a === 0 || l[i] % b === 0) {
            sum += l[i];
        }
    }
    return sum;
        
};