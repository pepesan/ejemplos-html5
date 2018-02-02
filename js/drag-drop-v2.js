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
    console.log(data);
    var mili=document.getElementById(data);
    //mili.style="display:none;";
    //mili.className="oculta";
    var todomili=mili.outerHTML;
    mili.parentNode.removeChild(mili);
    console.log(mili.innerHTML);
    console.log(event.target.id);
    var miselector="#"+event.target.id+ " ul";
    console.log(miselector);
    var miul=document.querySelector(miselector);
    console.log(miul);
    console.log(miul.innerHTML);
    miul.innerHTML+=todomili;
    var mislis=document.querySelectorAll("#"+event.target.id+ " li");
    var ultimoLi=mislis[mislis.length-1];
    ultimoLi.addEventListener("dragstart",comenzar);
}
function init(){
    console.log("Dom cargado");
    var listadoLi=document.querySelectorAll("#origen li");
    console.log(listadoLi);
    for ( var item of listadoLi){
        item.addEventListener("dragstart",comenzar);
    }
    /*
    var l1=document.getElementById("l1");
    l1.addEventListener("dragstart",comenzar);
    var l2=document.getElementById("l2");
    l2.addEventListener("dragstart",comenzar);
    var l3=document.getElementById("l3");
    l3.addEventListener("dragstart",comenzar);
    var c2=document.getElementById("c2");
    */
    //c2.addEventListener("dragenter",entrar);
    c2.addEventListener("dragover",sobrevolar);
    //c2.addEventListener("dragleave",salir);
    c2.addEventListener("drop",soltar);
    //c2.addEventListener("dragenter",entrar);
    c1.addEventListener("dragover",sobrevolar);
    //c2.addEventListener("dragleave",salir);
    c1.addEventListener("drop",soltar);
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