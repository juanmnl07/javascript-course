var estudiantes = {
                    "estudiantes":[
                        {"codigo":"1", "nombre":"Diego Soto", "nota": 70.0}
                    ]
                };

function limpiar(selector){
    var myNode = document.getElementById(selector);
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}

function registrarEstudiante(){
    limpiar("message-box");
    var camposVacios = false;
    var fields = document.getElementsByClassName("form-group");  
    for (var i = 0; i < fields.length; i++) {
        for (var j = 0; j < fields[i].childNodes.length; j++){
            if(fields[i].childNodes[j].type == "text"){
                var inputText = fields[i].childNodes[j];                
                var etiqueta = obtenerEtiqueta(inputText);
                if(validarCampoVacio(inputText, etiqueta)){
                    camposVacios = true;
                }
            }
        }
    }

    if(camposVacios == false){
        //registrar estudiante
        estudiantes.estudiantes[estudiantes.estudiantes.length] = {"codigo" : document.getElementById("codigo").value, "nombre" : document.getElementById("nombre-completo").value, "nota" : document.getElementById("nota").value};
    }
    limpiar("cuadro");
    obtenerListadoEstudiantes();
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
    var campoVacio = false;
    if(elemento.value == ""){
        campoVacio = true;
        insertarMensaje('El campo ' + etiqueta + ' se encuentra vacio, favor llenar el valor correspondiente.', 'danger');
        elemento.style.border = '1px solid red';
    } else {
        elemento.style.border = '1px solid #ddd';
    }
    return campoVacio;   
}

function insertarMensaje(texto, codigo){
    var div = document.createElement("div");
    div.textContent = texto;
    div.classList.add('alert');
    div.classList.add('alert-' + codigo);
    document.getElementById("message-box").appendChild(div);
}

function obtenerListadoEstudiantes(){
    var tabla = document.createElement("table");
    tabla.classList.add("table-hover");
    tabla.classList.add("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
    var filaEncabezado = document.createElement("tr");
    var columnaEncabezadoCodigo = document.createElement("th");
    var columnaEncabezadoNombre = document.createElement("th");
    var columnaEncabezadoNota = document.createElement("th");
    columnaEncabezadoCodigo.textContent = "Codigo";
    columnaEncabezadoNombre.textContent = "Nombre Completo";
    columnaEncabezadoNota.textContent = "Nota";
    filaEncabezado.appendChild(columnaEncabezadoCodigo);
    filaEncabezado.appendChild(columnaEncabezadoNombre);
    filaEncabezado.appendChild(columnaEncabezadoNota);
    for (var i = 0; i < estudiantes.estudiantes.length; i++) {
        var fila = document.createElement("tr");
        var columnaCodigo = document.createElement("td");
        var columnaNombre = document.createElement("td");
        var columnaNota = document.createElement("td");
        columnaCodigo.textContent = estudiantes.estudiantes[i].codigo;
        columnaNombre.textContent = estudiantes.estudiantes[i].nombre;
        columnaNota.textContent = estudiantes.estudiantes[i].nota;
        fila.appendChild(columnaCodigo);
        fila.appendChild(columnaNombre);
        fila.appendChild(columnaNota);
        tbody.appendChild(fila);
    }
    thead.appendChild(filaEncabezado);
    tabla.appendChild(thead);
    tabla.appendChild(tbody);
    document.getElementById("cuadro").appendChild(tabla);
}