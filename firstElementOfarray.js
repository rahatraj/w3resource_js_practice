function firstElemnetOfArray(arr,n){
    if(arr==null)
        return void 0;
    if(n==null)
       return arr[0];
    if(n<0)
       return [];
  return arr.slice(0,n)
        

}
console.log(firstElemnetOfArray([1,2,3,4,5],2))
console.log(firstElemnetOfArray([1,2,-3],3))
console.log(firstElemnetOfArray([7, 9, 0, -2],-3));
console.log(firstElemnetOfArray([],3))
