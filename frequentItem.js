const array = [1,'a','a','a',3,4,5,6];
var pos=0;
var mf=1;
var m;
for(var i=0;i<array.length;i++){
    for(var j=i;j<array.length;j++){
    if(array[i]==array[j])
    m++;
    if(mf<m){
        mf=m;
        pos=array[i]
    }
  }
  m=0;
}
console.log(pos+" times "+mf);