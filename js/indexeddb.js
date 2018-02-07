var db;

function lee() {
    var transaction = db.transaction(["employee"]);
    var objectStore = transaction.objectStore("employee");
    var request = objectStore.get("01");

    request.onerror = function (event) {
        alert("Unable to retrieve daa from database!");
    };

    request.onsuccess = function (event) {
        if (request.result) {
            alert("Name: " + request.result.name + ", Age: " + request.result.age + ", Email: " + request.result.email);
        } else {
            alert("Kenny couldn't be found in your database!");
        }
    };
}

function escribe() {
    var request = db.transaction(["employee"], "readwrite")
        .objectStore("employee")
        .add({
            id: "01",
            name: "prasad",
            age: 24,
            email: "prasad@tutorialspoint.com"
        });

    request.onsuccess = function (event) {
        alert("Prasad has been added to your database.");
    };

    request.onerror = function (event) {
        alert("Unable to add data\r\nPrasad is already exist in your database! ");
    }
}

function conectaDB() {
    console.log("conecta DDBB");
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
    var request = window.indexedDB.open("newDatabase", 1);

    request.onerror = function (event) {
        console.log("error: ");
    };

    request.onsuccess = function (event) {
        db = request.result;
        console.log("success: " + db);
    };

    request.onupgradeneeded = function (event) {
        var db = event.target.result;
        var objectStore = db.createObjectStore("employee", {
            keyPath: "id"
        });
        /*
        for (var i in employeeData) {
            objectStore.add(employeeData[i]);
        }
        */
    }
}

function init() {
    console.log("init");
    

    if (!window.indexedDB) {
        console.log("Your browser doesn't support a stable version of IndexedDB.")
    } else {
        console.log("IndexedDB HTML5 está soportada en este navegador.");
        conectaDB(); document.getElementById("escribeDB").addEventListener("click", escribe);
        document.getElementById("leeDB").addEventListener("click", lee);
    }



}
document.addEventListener("DOMContentLoaded", init);
