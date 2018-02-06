function planB(){
  var dtElem = document.createElement("dt"),
      ddElem = document.createElement("dd"),
      inputElem = document.createElement("input");
    dtElem.appendChild(document.createTextNode("Dynamically generated element"));
    $(inputElem).attr({
      type: 'datetime-local',
      name: 'generatedElement',
      value: '2000-07-01T12:00',
      min: '2000-01-03T00:00',
      max: '2000-12-29T23:59'
    });
    ddElem.appendChild(inputElem);
    $('dl').first().append(dtElem).append(ddElem);
    $(inputElem).inputDateTimeLocal();

}
function init(){
    if(!Modernizr.inputtypes['datetime-local']){
        console.log("No soportado");
        planB();
    }else{
        console.log("Soportado");
    }
}
document.addEventListener("DOMContentLoaded",init);