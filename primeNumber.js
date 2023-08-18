function primeNumber(num){
    var count=0;
    for(var i=2;i<num/2; i++){
        if(num%i==0){
            count++
            break;
        }
    }
    if(count){
        console.log("This is not prime number ")
    }
    else{
        console.log("This is prime number ")
    }
}
primeNumber(8)