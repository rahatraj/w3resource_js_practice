function paraSCV(csvString){
    debugger;
    const lines = csvString.trim().split('\n');
    const result = [];

    for(const line of lines){
        const values = line.split(',');
        result.push(values);
    }
    return result;
}

const csvString = `
raha, reza, 25
shah, alam, 30
aslam, anjum, 25
`
// console.log(paraSCV(csvString))
console.log(paraSCV('a,b\nc,d'));