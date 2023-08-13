function filterNullUndefined(arr){
    arr = arr.filter(isEligible)
    return arr;
}


function isEligible(value){
     if(value !== null|| value !== 0|| value!=="" || value!==false){
            return value;
     }
}
console.log(filterNullUndefined([1,2,3,"",0,false,null]))