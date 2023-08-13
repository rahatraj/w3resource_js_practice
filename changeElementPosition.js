function changePosition(arr,first,second){
    if(first > -1 || second > -1){
        var temp = arr[first];
        arr[first]=arr[second]
        arr[second]=temp;
    }
    return arr;
}
console.log(changePosition([12,3,4,5,6],0,2))