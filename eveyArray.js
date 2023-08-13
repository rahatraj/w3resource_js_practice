function everyArray(arr){
    for (n of arr){
        if(n == 1 || n > 2 && n%2 == 0)
        return false;

    }
    return true;
}
let num = [1,2,3,4]
console.log("Original Array : "+num)
console.log("In the said array check every numbers are prime or not ! "+everyArray(num));