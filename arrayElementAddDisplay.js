var i=0;
var array =[];
function add_element_to_array(){
    array[i]= document.getElementById("text1").value;
    alert("Element : "+array[i]+" Added at index " +i);
    i++;
    document.getElementById("text1").value=" ";
}
 function display_array(){
    var e = "<hr/>";
    for(var y=0; y<array.length; y++){
        e += "Element " + y+ " = " + array[y] + "<br/>";

    }
    document.getElementById("Result").innerHTML = e;
 }