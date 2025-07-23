const display=document.getElementById("display");

function addtod(x){
    display.value +=x;
}
function cleard(){
    display.value="";
}
function calcu(){
    display.value=eval(display.value);
}