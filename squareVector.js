function squareVector(arr){
    var sum =0;
    for(var i=0; i<arr.length;i++){
       sum += Math.pow(arr[i],2)
    }
    return sum;
}
console.log(squareVector([0,1,2,3,4]))