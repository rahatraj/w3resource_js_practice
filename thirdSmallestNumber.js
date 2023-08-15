function thirdSmallestNumber(arr){
    arr = arr.sort((a,b)=>a-b)
    return arr[2];
}
console.log(thirdSmallestNumber([2,3,4,5,1,0,-2,-4]))