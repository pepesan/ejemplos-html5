var id;

function gestionaGeo(position) {
    console.log(position);
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    console.log(position.coords.accuracy);
    console.log(position.coords.altitude);
    console.log(position.coords.altitudeAccuracy);
    console.log(position.coords.heading);
    console.log(position.coords.speed);
    console.log(position.timestamp);
}

function pillaGeo() {
    navigator.geolocation.getCurrentPosition(gestionaGeo);
}

function empiezaGeo() {
    if (navigator.geolocation) {
        id = navigator.geolocation.watchPosition(gestionaGeo);
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
