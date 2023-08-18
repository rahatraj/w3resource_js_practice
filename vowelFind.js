function findVowel(str){
    var vowell = 'aeiouAEIOU'
    var vcount = 0
    for(var x=0; x<str.length; x++){
         if(vowell.indexOf(str[x])!==-1){
            vcount++;
         }
    }
    return vcount
}
console.log(findVowel("rahat"))