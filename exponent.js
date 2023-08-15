function exponent(base,num){
    var result=1;
    for(var i=1; i<=
        num;i++){
        var result = result*base;
    }
    return result;
}
console.log(exponent(2,4))