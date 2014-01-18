var data = new Array(
        Array("Antonio", "Cucho", "46890994", "San Miguel"),
        Array("Antonio", "Cucho", "46890994", "San Miguel"),
        Array("Antonio", "Cucho", "46890994", "San Miguel"),
        Array("Antonio", "Cucho", "46890994", "San Miguel"),
        Array("Antonio", "Cucho", "46890994", "San Miguel"),
        Array("Antonio", "Cucho", "46890994", "San Miguel"),
        Array("Antonio", "Cucho", "46890994", "San Miguel"),
        Array("Antonio", "Cucho", "46890994", "San Miguel"),
        Array("Antonio", "Cucho", "46890994", "San Miguel"),
        Array("Antonio", "Cucho", "46890994", "San Miguel"),
        Array("Antonio", "Cucho", "46890994", "San Miguel"),
        Array("Antonio", "Cucho", "46890994", "San Miguel"),
        Array("Antonio", "Cucho", "46890994", "San Miguel"),
        Array("Antonio", "Cucho", "46890994", "San Miguel")
        );

function loadData() {
    for (i in data) {
        addRow(data[i], i);
    }

}

function addRow(dataRow, index) {

// variable global de la tabla
    var tabla = document.getElementById("dataset");

    // En estecaso creamos una fila de tabla (tr)
    var fila = document.createElement("tr");

    // Realizamos el recorrido de los datos recojidos del formulario
    for (i = 0; i < dataRow.length; i++) {

        // creamos un elemento de tipo columna de tabla (td)
        var columna = document.createElement("td");

        // Añadimos los datos html a columna, 
        // cada dato del formulario recojido
        columna.innerHTML = dataRow[i];

        // appendChild anida un elemento hijo a un elemento padre
        // en este caso el elemento hijo es td y el elemento padre
        // es tr, lo añade al final 

        // Añadimos columna a la fila previamente declarada.
        fila.appendChild(columna);

    }

    var editRow = document.createElement("td");
    editRow.innerHTML = '<a href="#" onclick="editRow(' + index + ')">Editar</a>';

    var deleteRow = document.createElement("td");
    deleteRow.innerHTML = '<a href="#" onclick="deleteRow(' + index + ')">Eliminar</a>';

    fila.appendChild(editRow);
    fila.appendChild(deleteRow);

    fila.setAttribute("id", "row_" + index)

    //alert(console.log(fila));

    // Finalmente agregamos la fila a la tabla 
    // obtenida al comienzo del programa
    tabla.appendChild(fila);
}

function updateRow(row, index) {

    data[index] = row;

    // variable global de la tabla
    var tabla = document.getElementById("dataset");

    // variable global de la tabla
    var fila = document.getElementById("row_" + index);

    for (var i in row) {

        fila.childNodes[i].innerHTML = row[i];

    }

}

function saveRow() {

    var form = document.getElementById("form-data");
    var row = new Array();

    if (condiciones) {
        var index = data.length;

        row.push(form[0].value);
        row.push(form[1].value);
        row.push(form[2].value);
        row.push(form[3].value);

        if (form[5].value == "Add row") {
            // agregamos los nuevos datos a nuestra coleccion
            data.push(row);

            // llamamos a la funcion addRow
            addRow(row, index);

        } else if (form[5].value == "Edit row") {
            var index = form[4].value;
            updateRow(row, index);
        }

    } else {

        alert("escribe bien carajo!")

    }


}

function editRow(index) {

    var form = document.getElementById("form-data");

    var dataRow = data[index];

    for (var i = 0; i < dataRow.length; i++)
        form[i].value = dataRow[i];

    form[4].value = index;
    form[5].value = "Edit row";

}

function deleteRow(index) {

    data.splice(index, 1);

    // variable global de la tabla
    var tabla = document.getElementById("dataset");

    // variable global de la tabla
    var fila = document.getElementById("row_" + index);


    tabla.removeChild(fila);

}