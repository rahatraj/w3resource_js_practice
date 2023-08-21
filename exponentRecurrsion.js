function exponentFind(base,power){
    if(power === 1){
        return base;
    }
    else{
        return base * exponentFind(base,power-1);
    }
}
console.log(exponentFind(5,2))