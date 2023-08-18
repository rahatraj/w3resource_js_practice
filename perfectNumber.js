function perfectNumber(num){
    var sum =0;
    var n = num;
    for(i=1;i<num;i++){
        if(num%i===0){
           sum = sum +i;
           console.log(sum)
        }
    }

    if(sum == n){
        return true;
    }
    else{
        return false;
    }
}
console.log(perfectNumber(496))