function registrar(){
    console.log("registrado");
}
function comenzar(event){
    console.log("Comenzando");
    //transfiriendo datos
    var data=event.target.id;
    event.dataTransfer.setData("text", data);
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
function soltar(event){
    console.log("Soltado");
    //evitando problemas al soltar
    event.preventDefault();
    //cogiendo datos
    var data = event.dataTransfer.getData("text");
    var midiv=document.getElementById("c2");
    console.log(midiv);
    midiv.innerHTML+="<p>cogidos datos:"+data+"</p>";
}
function init(){
    console.log("Dom cargado");
    var c1=document.getElementById("c1");
    var c2=document.getElementById("c2");
    c1.addEventListener("dragstart",comenzar);
    //c2.addEventListener("dragenter",entrar);
    c2.addEventListener("dragover",sobrevolar);
    //c2.addEventListener("dragleave",salir);
    c2.addEventListener("drop",soltar);
    var boton=document.getElementById("boton");
    boton.addEventListener("click",
        function(evento){
            console.log(evento);
            console.log(evento.target);
            console.log(evento.target.id);
        }
    );
}
document.addEventListener("DOMContentLoaded",init);