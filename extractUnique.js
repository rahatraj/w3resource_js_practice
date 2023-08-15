function extractUnique(str){
      var str1 = str;
      var unique="";
      for(var i=0; i<str.length;i++){
        if(unique.indexOf(str.charAt(i))==-1){
            unique+=str[i]
        }
      }
      return unique;
}
console.log(extractUnique("rahat"))