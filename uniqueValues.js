function uniqueValues(arr){
    let len = arr.length;
    let result = {}
    let result_array = []
    while(len--){
        var item = arr[len]
        if(!result[item]){
            result_array.unshift(item)
            result[item]=true;
        }
    }
    result_array = result_array.sort((a,b)=>a-b)
    return result_array;
}
console.log(uniqueValues([1,2,3,4,2,4,5,6]))