const basket = {
    apple : 10,
    orange : 5,
    banana : 2
};
 const price = {
     apple : 5.5,
     banana : 2.5,
     orange : 1.2,
     graps : 2
 };

 let f7 = (basket, price) => {
    let total = 0;
     for(let a in basket){
         if(price[a]){
             total +=  basket[a] * price[a];
         }
     }
     return total;
     
   
}
const totalCst = f7(basket, price);
   console.log("totalcst -"+totalCst);