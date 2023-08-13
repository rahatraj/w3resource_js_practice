function fillArray(start,end,value){
    var result = []
    if(typeof start == "undefined" || typeof end =="undefined" || typeof start != typeof end || value == 0 )
       return false;
    if(typeof start == "number" && typeof end == "number"){
       for(var i=start; i<end; i+=value){
           result.push(i)
       }
    }
    else if(typeof start == "string" && typeof end == "string"){
        for(var i=start.charCodeAt(0); i<end.charCodeAt(0); i+=value){
            result.push(String.fromCharCode(i));
        }
    }   
    return result;
}
// console.log(fillArray(2,20,3))
console.log(fillArray('a','z',2))
console.log(fillArray(0,0,2))