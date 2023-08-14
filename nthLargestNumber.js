function nthLargestNumber(arr,n){
    arr.sort((a,b)=>a-b)
    console.log(arr)
    let greatest =arr[arr.length-n];
    return greatest;
}
console.log(nthLargestNumber([4,2,8,6,9,2,1],4))