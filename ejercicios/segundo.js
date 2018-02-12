/*
1.- crea un html y asocia un fichero JS
2.- Descarga desde la URL: http://data.colorado.gov/resource/4ykn-tg5h.json?entitystatus=Good%20Standing&principalzipcode=80001 y colócalos en un variable llamada tiendas
*/

/*5.- Crea una función que sea capaz de filtrar los resultados de una búsqueda de tiendas mediante un texto. En los resultados que debe devolver la función sólo deberán estar aquellos que contengan dicho texto en el campo "agentfirstname"
*/
/*
                3.- Presenta los resultados en la petición ajax por pantalla en un formato de listado, donde debe parecer exclusivamente el dato "agentfirstname" en cada elementos visual
                */
function presentaDatos(filtrados){       
    $("#listado").html("");
    $.each(filtrados,function(indice,elemento){
                    var nombre=elemento.agentfirstname;
                    if(nombre!=undefined){
                        //console.log(elemento);
                       $("#listado").append("<li>"+nombre+"</li>");
                    }
                });
                         
}
function filtra(listado_original,patron){
    var listado_filtrado=[];
    for(var item of listado_original){
        //console.log(item);
        if(
                item.agentfirstname!=null && item.agentfirstname.includes(patron)
            ){
            listado_filtrado.push(item);   
        }
    }
    return listado_filtrado;
}

var tiendas;
function peticionGetJson() {
    //limpiaResultados();
    $.getJSON("http://data.colorado.gov/resource/4ykn-tg5h.json?entitystatus=Good%20Standing&principalzipcode=80001", 
            function (resultados) {
                tiendas=resultados;
                console.log(tiendas);
                presentaDatos(tiendas);
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log("error " + textStatus);
                console.log("incoming Text " + jqXHR.responseText);
                console.log("error " + errorThrown);
                }
            );
    
}
var criterio;
function init(){
    console.log("DOM Cargado");
    peticionGetJson();
    
    /*
    4.- Incluye un campo de texto de formulario llamado id:"texto" y haz que cada vez que se pulse una tecla almacene el valor del campo en la variable criterio
    */
    $("#texto").keyup(
        function(evento){
            criterio=$(this).val();
            console.log(criterio);
            /*
            6.- Aplicar a que se presenten sólo los resultados que contengan el texto de la variable criterio, según vaya cambiándose (tecla a tecla)
            */
            var filtrados=filtra(tiendas,criterio);
            presentaDatos(filtrados);
        }
    );
}
$(document).ready(init);


