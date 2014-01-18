
// Declaramos un array global con los datos de 
var tablas = new Array(
        Array("Antonio", "Cucho", "23", "vago"),
        Array("Carlos", "....", "20", "..."),
        Array("Miguel", "...", "22", "..."),
        Array("Cesar", "...", "21", "..."),
        Array("Jorge", "...", "35", "..."),
        Array("Lucho", "...", "40", "..."),
        Array("Julio", "...", "18", "..."),
        Array("Juan", "...", "12", "..."),
        Array("Patricia", "...", "56", "...")
        );

// Declaramos una funcion CrearTabla
function crearTabla() {

    var mayor = 0;
    var menor = 10000;

    var personaMayor = new Array();
    var personaMenor = new Array();


    // Imprimimos todo el html
    document.write('<style type="text/css">\n\
                                .par{ background: #c4d3d1;}\n\
                                .impar{ background: #ffffff;} \n\
                                td{padding:3px;}\n\\n\
                                </style>')

    document.write("<form>");
    document.write("<table>");
    document.write("<tr><td>Nombre</td>");
    document.write("<td>Apellido</td>");
    document.write("<td>Edad</td>");
    document.write("<td>Profesion</td></tr>");

    // Comenzamos el recorrido del array previamente Declarado
    for (i = 0; i < tablas.length; i++) {

        // Validamos la fila par o impar
        if (i % 2 == 0) {
            document.write("<tr class='par'>");
        } else {
            document.write("<tr class='impar'>");
        }

        // obtenemos la edad
        var edad = tablas[i][2];

        // Obtenemos los datos de la lista
        for (x = 0; x < tablas[i].length; x++) {
            var dato = tablas[i][x];
            document.write('<td><input type="text" name="nombre_' + i + '_' + x + '"\n\
                                        value="' + dato + '"></td>');
        }

        // Validamos al mayor o menor
        if (edad > mayor) {
            mayor = edad;
            personaMayor = tablas[i];
        }
        if (edad < menor) {
            menor = edad;
            personaMenor = tablas[i];
        }
        document.write("</tr>");
    }
    document.write("</table></form>");

    document.write("<br />La persona mayor es:" + personaMayor[0] + " \n\
                            y su edad es: " + personaMayor[2] + "<br/>");

    document.write("La persona menor es:" + personaMenor[0] + " \n\
                            y su edad es: " + personaMenor[2] + "<br/>");

    document.write('<a href="#" onclick="agregarDato()">Crear tabla</a>');

    document.write('<br /><br /> \n\
                                nombre: <input type="text" id="nombre"><br />\n\
                                apellido: <input type="text" id="apellido"><br />\n\
                                edad: <input type="text" id="edad"><br />\n\
                                profesion: <input type="text" id="profesion">\n\
                                <br />');


}


// Declaramos funcion agregarDato(), nos permitira agregar datos a traves
// de un formulario HTML 
function agregarDato() {

    // Usamos el atributo getElementById('iddelelemento')
    // nos retorna con objeto html el cual podremos acceder a sus atributos
    // un de ellos es .value con el cual obtendremos el valor que ingresamos

    //  Una vez obtenido el valor lo pasamos a una variable para cada tipo
    nombre = document.getElementById('nombre').value;
    apellido = document.getElementById('apellido').value;
    edad = document.getElementById('edad').value;
    profesion = document.getElementById('profesion').value;

    // Limpiamos el documento html
    document.body.innerHTML = '';

    // Creamos un array con los datos previamente obtenidos
    var newDato = new Array(nombre, apellido, edad, profesion);
    
    // Agregamos los datos obtenidos al array que declaramos de manera global
    tablas.push(newDato);

    // Llamamos a la funcion crearTabla() para que imprima 
    // la tabla con los datos actualizados
    crearTabla();
}