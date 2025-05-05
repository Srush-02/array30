alert("Hello Exp 5")
let f5 = (a, l) => {
    let sum = 0;
    for (let i = 0; i < l.length; i++) {
        if (l[i] % a[0] === 0 || l[i] % a[1] === 0) {
            sum += l[i];
        }
    }
    return sum;
};