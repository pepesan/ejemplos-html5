var id;

function gestionaGeo(position) {
    console.log(position);
    console.log("Latitud:"+position.coords.latitude);
    console.log("Longitud:"+position.coords.longitude);
    console.log("Puntería:"+position.coords.accuracy);
    console.log("Altitud:"+position.coords.altitude);
    console.log("Puntería de Altitud:"+position.coords.altitudeAccuracy);
    console.log("Dirección de Avance:"+position.coords.heading);
    console.log("Velocidad:"+position.coords.speed);
    console.log("Fecha y hora:"+position.timestamp);
}

function pillaGeo() {
    navigator.geolocation
        .getCurrentPosition(gestionaGeo);
}

function empiezaGeo() {
    if (navigator.geolocation) {
        id = navigator.geolocation.watchPosition(gestionaGeo,null, {timeout:1000});
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function finalizaGeo() {
    if (navigator.geolocation) {
        navigator.geolocation.clearWatch(id);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function init() {
    console.log("init");
    if (navigator.geolocation) {
        console.log("La Geo-Localizacion HTML5 está soportada en este navegador.");
        document.getElementById("pilla").addEventListener("click", pillaGeo);
        document.getElementById("empieza").addEventListener("click", empiezaGeo);
        document.getElementById("finaliza").addEventListener("click", finalizaGeo);
    }


}
document.addEventListener("DOMContentLoaded", init);
