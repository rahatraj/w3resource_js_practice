function atmCardCheckar(str){
    regExp = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/
    if(regExp.test(str)){
        return true
    }
    else{
        return false
    }
}
console.log(atmCardCheckar("421323434546"))