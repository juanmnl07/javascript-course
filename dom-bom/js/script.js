var estudiantes = {
                    "estudiantes":[
                        {"codigo":"1", "nombre":"Diego Soto", "nota": 70.0}
                    ]
                };

function limpiarMensajes(){
    var myNode = document.getElementById("message-box");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}

function registrarEstudiante(){
    limpiarMensajes();
    var fields = document.getElementsByClassName("form-group");  
    for (var i = 0; i < fields.length; i++) {
        for (var j = 0; j < fields[i].childNodes.length; j++){
            if(fields[i].childNodes[j].type == "text"){
                var inputText = fields[i].childNodes[j];                
                var etiqueta = obtenerEtiqueta(inputText);
                validarCampoVacio(inputText, etiqueta);
            }
        }
    }
}

function obtenerEtiqueta(elemento){
    var padre = elemento.parentElement;
    var etiqueta = '';
    for (var i = 0; i < padre.childNodes.length; i++) {
        if(padre.childNodes[i].tagName == "LABEL"){
            etiqueta = padre.childNodes[i].textContent;
        } 
    }
    return etiqueta;
}

function validarCampoVacio(elemento, etiqueta){
    var camposVacios = false;
    if(elemento.value == ""){
        camposVacios = true;
        insertarMensaje('El campo ' + etiqueta + ' se encuentra vacio, favor llenar el valor correspondiente.', 'danger');
        elemento.style.border = '1px solid red';
    } else {
        elemento.style.border = '1px solid #ddd';
    }
    return camposVacios;   
}

function insertarMensaje(texto, codigo){
    var div = document.createElement("div");
    div.textContent = texto;
    div.classList.add('alert');
    div.classList.add('alert-' + codigo);
    document.getElementById("message-box").appendChild(div);
}