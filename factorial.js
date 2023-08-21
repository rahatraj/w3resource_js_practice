function factorial(number){
    if(number===0){
        return 1;
    }
    if(number>0){
        return number * factorial(number-1);
    }
}
const result = factorial(5);
console.log(`factorial of a number ${result}`)