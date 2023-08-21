function validateInteger(number){
    if(!Number.isInteger(number)){
        throw new Error('Invalid number . please input an integer');
    }
    console.log('Number is valid : ', number);
}

try{
    // validateInteger(9.5);
    validateInteger(9);
}catch (error){
    console.log('Error ', error.message);
}