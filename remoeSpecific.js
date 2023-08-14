function removeSpecific(array, n){
    var index = array.indexOf(n)
    if(index > -1){
        array.splice(index,1)
    }
    return array;
}
console.log(removeSpecific([1,2,3,4,5,6],5))
