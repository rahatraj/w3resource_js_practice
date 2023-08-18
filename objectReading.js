var library=[
    {
        title:'Bill gates',
        author:'The road ahead',
        readingStatus :true
    },
    {
        title:'Steve Jobs',
        author:'walter jackson',
        readingStatus:true
    },
    {
        title:'Mockingjay : The final book of hunger',
        author: 'Suzzane Coilions',
        readingStatus:false
    }
];
for(var i=0;i<library.length;i++){
    var book = "'" + library[i].title + "' " + 'by ' + library[i].author +".";
    if(library[i].readingStatus){
        console.log('Already read '+book)
    }
    else{
        console.log('You still need to read '+book)
    }
}