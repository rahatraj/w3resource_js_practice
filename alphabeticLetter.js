function reverseLetter(word){
    let reverse;
    word = word.split()
    for(let i=0;i<word.length;i++){
        if(word[i]<word[i+1])
        {
           reverse = word[i];  
        }
        else{
            reverse = word[i+1]
        }
    }
    return reverse;
}
console.log("reverse word : "+reverseLetter(("rahat")));