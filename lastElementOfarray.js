function lastElementOfArray(arr,n){
    leng = arr.length
    if(arr==null){
        return void 0;
    }
    if(n==null){
        return arr[leng-1]

    }
    // if(n<0){
    //     return [];
    // }  
   return (arr.slice(Math.max(leng-n,0))); 
       
}
console.log(lastElementOfArray([7, 9, 0, -2]));
console.log(lastElementOfArray([7, 9, 0, -2],3));
console.log(lastElementOfArray([7, 9, 0, -2],6));