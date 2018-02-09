/*
1.- Crea un fichero HTML con un fichero JS asociado
2.- Crea un div contenedor que tenag 3 divs dentro
3.- Pinta los 3 divs para que quepan los tes a la vez a la misma altura y tengan fondo rojo
4.- El primer div será arratrable, comprueba que se puede arrastrar
*/

function registrar(){
    console.log("registrado");
}
function empezando(event){
    /*
    6.- Dentro de la función empezando recuerda mandar un dato con el índice "iden" y con el valor del identificativo del primer div (setData)
    */
    console.log("Comenzando");
    //transfiriendo datos
    var data=event.target.id;
    console.log(data);
    event.dataTransfer.setData("iden", data);
}
function entrar(){
    console.log("entrado");
}
function sobrevolar(event){
    console.log("Sobrevolando");
    //evitando problemas al soltar
    event.preventDefault();
}
function salir(){
    console.log("salido");
}
function eliminando(event){
    event.target.parentElement.removeChild(event.target);
}
function soltar(event){
    console.log("Soltado");
    //evitando problemas al soltar
    event.preventDefault();
    /*
11.- En la función anterior saca por pantalla el identificativo del div que se haya mandado en el dragstart

*/
    //cogiendo datos
    var data = event.dataTransfer.getData("iden");
    console.log(data);
    
    var midiv=document.getElementById("c3");
    console.log(midiv);
    midiv.innerHTML+="<h1>Pilla esta caja</h1>";
    
}
function init(){
    console.log("Dom cargado");
    var c1=document.getElementById("c1");
    var c2=document.getElementById("c2");
    var c3=document.getElementById("c3");
    /*
    5.- asigna el evento dragstart al primer div, asócialo con una función llamada empezando
    */
    c1.addEventListener("dragstart",empezando);
    //bonus: elimina el div inicial
    c1.addEventListener("dragend",eliminando);
    
    /*
    7.- Haz que cuando se haya entrado en el segundo div saque un mensaje por consola (arrastrando)
8.- Haz que cuando se haya salido del segundo div saque un mensaje por consola
*/
    c2.addEventListener("dragenter",entrar);
    c2.addEventListener("dragleave",salir);
    /*
    9.- Haz que cuando se pasee sobre el tercer div anule el comportamiento por defecto (arrastrando)
10.- Haz cuando se suelte el arrastrable (drop) en el tercer párrafo, anula el comportamiento por defecto y saca un mensaje por pantalla
    */
    c3.addEventListener("dragover",sobrevolar);
    
    c3.addEventListener("drop",soltar);
}
document.addEventListener("DOMContentLoaded",init);
