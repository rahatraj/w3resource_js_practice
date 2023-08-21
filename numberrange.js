function rangeOfNumber(firstNumber,lastNumber){
    debugger;
    if(lastNumber-firstNumber === 2){
        return [firstNumber + 1];
    }
    else{
        var list = rangeOfNumber(firstNumber, lastNumber-1);
        list.push(lastNumber-1);
        return list;
    }
}
console.log(rangeOfNumber(2,9))