const array = [4,2,5,4,6,8,0];
// const str = array.toString();
// let result = [str[0]];
let result = [array[0]]
for(let i=1;i<array.length; i++){
   
    if(array[i-1]%2===0 && array[i]%2===0){
        result.push('-',array[i])
    }else{
        result.push(array[i]);
    }
}
console.log(result.join(''))

