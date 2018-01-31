function guardaLocal(){
    localStorage.setItem("nombre", "Pepe");
}
function recuperaLocal(){
    var bar=localStorage.getItem("nombre");
    console.log(bar);
}
function guardaSesion(){
    console.log("guarda");
    window.sessionStorage.setItem("clave", "valor");
}
function recuperaSesion(){
    //console.log("recupera");
    var bar=window.sessionStorage.getItem("clave");
    console.log(bar);
}
function init(){
    //console.log("init");
    document.getElementById("lguarda").addEventListener("click",guardaLocal);
    document.getElementById("lrecupera").addEventListener("click",recuperaLocal);
    document.getElementById("sguarda").addEventListener("click",guardaSesion);
    document.getElementById("srecupera").addEventListener("click",recuperaSesion);
}
document.addEventListener("DOMContentLoaded",init);