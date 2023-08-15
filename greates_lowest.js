function greates_lowest(arr){
    arr = arr.sort((a,b)=>a-b)
    console.log(arr)
    var result = [];
    result.push(arr[1],arr[arr.length-2])
    return result;
}
console.log(greates_lowest([4,2,5,6,4,7,5,9,1]))