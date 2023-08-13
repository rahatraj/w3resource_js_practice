function findSpecificElement(arr, n){
    for(var i=0; i<arr.length; i++){
        if(n==arr[i]){
            return true;
        }
    }
    return false;
}
console.log(findSpecificElement([1,2,3,4,,5,6,7],2))