function uppercase(str){
    var array1 = str.split(' ')
    var newArray = [];

    for(let x=0;x<array1.length;x++){
         newArray.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
    }
    return newArray.join(' ')
    
}
console.log(uppercase("the lazy dog"));