function registrar(){
    console.log("registrado");
}
function comenzar(event){
    console.log("Comenzando");
    //transfiriendo datos
    event.dataTransfer.setData("text", event.target.id);
}
function entrar(){
    console.log("entrado");
}
function sobrevolar(event){
    console.log("Sobrevolando");
    //evitando problemas al soltar
    event.preventDefault()
}
function salir(){
    console.log("salido");
}
function soltar(event){
    console.log("Sobrevolando");
    //evitando problemas al soltar
    event.preventDefault()
    //cogiendo datos
    var data = event.dataTransfer.getData("text");
    var midiv=document.getElementById(event.target.id);
    console.log(midiv);
    midiv.innerHTML+="<p>cogidos datos:"+data+"</p>";
}
function init(){
    console.log("Dom cargado");
    var c1=document.getElementById("c1");
    var c2=document.getElementById("c2");
    var c3=document.getElementById("c3");
    c1.addEventListener("dragstart",comenzar);
    c2.addEventListener("dragenter",entrar);
    c2.addEventListener("dragover",sobrevolar);
    c2.addEventListener("dragleave",salir);
    c2.addEventListener("drop",soltar);
}
document.addEventListener("DOMContentLoaded",init);