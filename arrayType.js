function findArray(arr){
    if(Array.isArray(arr))
        return true
    return false;    
}
console.log(findArray([1,2,3,4,5]))
console.log(findArray('rahat'))