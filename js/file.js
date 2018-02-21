var ficheros;
var dropbox;

function dragenter(e) {
    e.stopPropagation();
    e.preventDefault();
}

function dragover(e) {
    e.stopPropagation();
    e.preventDefault();
}

function uploadFile(file) {
    var url = 'file.php';
    var xhr = new XMLHttpRequest();
    var fd = new FormData();
    xhr.open("POST", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Every thing ok, file uploaded
            console.log(xhr.responseText); // handle response.
            document.getElementById("images").innerHTML += "<img src='" + xhr.responseText + "'/>"
        }
    };
    fd.append("upload_file", file);
    xhr.send(fd);
}

function previsualizaImagen(file) {
    if (!file.type.startsWith('image/')) {
        return;
    }

    var img = document.createElement("img");
    img.classList.add("obj");
    img.file = file;
    dropbox.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.

    var reader = new FileReader();
    reader.onload = (function (aImg) {
        return function (e) {
            aImg.src = e.target.result;
        };
    })(img);
    reader.readAsDataURL(file);
}

function handleFiles(files) {
    console.log(files);
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        previsualizaImagen(file);
        //subida del fichero al servidor
        uploadFile(file);
    }
}

function drop(evento) {
    evento.stopPropagation();
    evento.preventDefault();

    var dt = evento.dataTransfer;
    var files = dt.files;

    handleFiles(files);
}

function cambia(event) {
    ficheros = event.target.files;
    console.log(ficheros);
    handleFiles(ficheros);
}

function init() {
    console.log("init");
    var fichero = document.getElementById('fichero');
    console.log(fichero);
    fichero.addEventListener("change", cambia);
    dropbox = document.getElementById("dropbox");
    //dropbox.addEventListener("dragenter", dragenter, false);
    dropbox.addEventListener("dragover", dragover, false);
    dropbox.addEventListener("drop", drop, false);
}
document.addEventListener("DOMContentLoaded", init);
