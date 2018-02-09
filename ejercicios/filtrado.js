/*
*/
var texto_a_buscar;
var lista_articulos;

function pintaResultados(listado_filtrado){
    $.each(listado_filtrado, function (i, resultado) {
                    $("#sugerencias").append("<li>" + resultado.titulo +" de "+resultado.autor+"</li>");
                });
}

function recoge() {
        //texto_a_buscar=document.getElementById("busqueda").value;
    
    setTimeout(function(){
        texto_a_buscar=$("#busqueda").val();
        var listado_filtrado=filtra(lista_articulos,texto_a_buscar);
        $("#sugerencias").html("");
        pintaResultados(listado_filtrado);
    }   , 800);
    
    
    //console.log(texto_a_buscar);
}
function filtra(listado_original,patron){
    var listado_filtrado=[];
    for(var item of listado_original){
        //console.log(item);
        if( 
            (item.titulo!=null && item.titulo.includes(patron)) 
            || 
            (item.autor!=null && item.autor.includes(patron))
        ){
            listado_filtrado.push(item);   
        }
    }
    return listado_filtrado;
}
function peticionGetJson() {
    //limpiaResultados();
    $.getJSON("http://www.mocky.io/v2/5a54ae822d00005f235b1cd2", 
            function (resultados) {
                lista_articulos=resultados;
                console.log(lista_articulos);
                var listado_filtrado=filtra(lista_articulos,$("#busqueda").val());
                //console.log(listado_filtrado)
            
            console.log("entro en success");
            //limpiaResultados();
            console.log(resultados);
                /*
                for (i in resultados){
                    var resultado=resultados[i];
                }
                */
                pintaResultados(listado_filtrado);
                
            })

            .fail(function (jqXHR, textStatus, errorThrown) {
                console.log("error " + textStatus);
                console.log("incoming Text " + jqXHR.responseText);
                console.log("error " + errorThrown);
                }
            );
    
}

function init(){
    console.log("DOM Cargado");
    $( "#busqueda" ).keyup(recoge);
    peticionGetJson();
}
$(document).ready(init);