Object.objsize = function(Myobj){
    var osize = 0, key;
    for(key in Myobj){
        if(Myobj.hasOwnProperty(key)) osize++;
    }
    return osize;
};
let student ={
    name : "rahat",
    classs : "vi",
    rollno:12
};
 var objsize = Object.objsize(student);
 console.log('Size of the boject : '+objsize);