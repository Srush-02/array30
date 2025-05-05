alert("Hello exp 6");

let f6 = (a, l) => {
    let sum = 0;
    for (let i = 0; i < l.length; i++) {
      for (let j = 0; j < a.length; j++) {
        if (l[i] % a[j] === 0) {
          sum += l[i];
        }
      }
    }
    return sum;
  };