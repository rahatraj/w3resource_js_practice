function factorChain(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i+1]%arr[i]!=0){
            return true; 
        }
    }
    return false;
}
console.log(factorChain([2,4,8,16,32]))