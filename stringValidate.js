function stringValidate(str){
    if(str.length === 0){
        throw new Error ('Sorry the string is empty ');
    }
    console.log("you entered stirng : ",str);
}

try{
    const str1 = 'My world';
    stringValidate(str1);

    const str2 = "";
    stringValidate(str2);
}catch(error){
    console.log('error',error.message);
}