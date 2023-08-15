function findInsideArray(arr){
    for(item in arr){
        if(typeof item !=="object")
          return false;
    }
    return true;
}
console.log(findInsideArray([1,2,3,[4,5],6]))