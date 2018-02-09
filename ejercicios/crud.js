function showAddForm(){
    //presentar el formulario
    $("#listado").toggleClass("oculta");
    $("#form-add").toggleClass("oculta");
    if($("#add").html()=="Listado"){
        $("#add").html("Añadir");    
    }else{
        $("#add").html("Listado");    
    }
    
}
function init(){
    $("#add").click(showAddForm);
}
$(document).ready(init);