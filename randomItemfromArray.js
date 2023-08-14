function randomItem(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}
console.log(randomItem([10,20,30,40,50]))