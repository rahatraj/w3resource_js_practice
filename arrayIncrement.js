function array_range(first,last){
    let array = []
    var j = first;
    for(var i = 0; i<last; i++){
        array.push(j);
        j++;
    }
    return array;
}
console.log(array_range(1,4))
console.log(array_range(-6,4))