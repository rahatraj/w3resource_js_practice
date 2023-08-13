const compactObject = val =>{
    const data = Array.isArray(val) ? val.filter(Boolean) : val;
    return data;
}
console.log(compactObject([1,2,3,'','','',6,7,8]))