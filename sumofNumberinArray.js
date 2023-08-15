function sumOfNumber(arr){
    var sum =0;
    for(var i=0; i<arr.length; i++){
        if(typeof arr[i]==="number"){
            sum +=arr[i];
        }
    }
    return sum;
}
let array = [1,2,3,'4','suraj'];
console.log("The original Array is : "+array);
console.log("The sum of the array is : "+(sumOfNumber(array)))