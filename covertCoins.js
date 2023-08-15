function converToAmount(amount,coins){
   if(amount === 0){
    return [];
   }
   else if(amount >= coins[0]){
        left = amount - coins[0];
        return [coins[0]].concat(converToAmount(left,coins));
   }
   else{
    coins.shift();
    return converToAmount(amount,coins);
   }
}
console.log(converToAmount(46,[25,10,5,2,1]))