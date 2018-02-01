function cambia(event){
    console.log(event.target.files[0]);
}
function init(){
    console.log("init");
    var fichero=document.getElementById('fichero');
    console.log(fichero);
    fichero.addEventListener("change",cambia);
}
document.addEventListener("DOMContentLoaded",init);