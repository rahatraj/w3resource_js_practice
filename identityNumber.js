function identityMatrix(row){
    var identity= new Array(row);
    for(var j=0; j<row; j++){
        identity[j]= new Array(row)
    }
    for(var x=0; x<row; x++){
        for(var i=0; i<row; i++){
            if(x===i){
               identity[x][i]=1
            }
            else{
                identity[x][i]=0
            }
        }
    }
    console.log(identity)
}
identityMatrix(3);