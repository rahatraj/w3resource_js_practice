function arrayProduct(arr){
    var pro=1;
    for(var i=0;i<arr.length;i++){
        pro *= arr[i];
    }
    return pro;
}
function arraySum(arr){
    var sum=0;
    for(var i=0;i<arr.length; i++){
        sum +=arr[i]
    }
    return sum;
}
console.log(arrayProduct([1,2,3,4,5,6]))
console.log(arraySum([1,2,3,4,5,6]))