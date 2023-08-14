const array1 = [1,2,3,9];
const array2 = [2,3,5,8];
let array3 = [...array1,...array2];
let result = {}
let len = array3.length;
let result_array = []

console.log(array3)
while(len--){
    var item = array3[len];
    if(!result[item]){
        result_array.unshift(item)
        result[item]=true;
    }
}
console.log(result_array)
