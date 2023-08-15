function findFactor(num){
    var array =[];
    for(var i=1; i<=num;i++){
        if(num%i==0){
            array.push(i);
        }
    }
    return array;
}
console.log(findFactor(17))