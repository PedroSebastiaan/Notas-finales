
    
    //Inicio del Script
    document.write('<div class="container">');

    //Título de la app
    document.write('<nav class="navbar px-0">');
    document.write('<h1 class="my-5 d-inline">Notas finales</h1>');
    document.write('<img class="text-right" src="./assets/img/logo-academia-bla-790873cdf66b0e681dfbe640ace8a602f5330bec301c409744c358330e823ae3.png" alt="">');
    document.write('</nav>');


    //Ingreso del nombre del usuario
    let nombre = prompt("Estimado estudiante, ingrese su nombre porfavor", "Ingrese su nombre aquí...");

    let apellido = prompt("Ingrese su apellido porfavor", "Ingrese su apellido aquí...");

    document.write('<dl class="row">');
    document.write('<dt class="col-sm-3">Nombre: </dt><dd class="col-sm-9">' + nombre + ' ' + apellido + '</dd>');
    document.write('</dl>');

    //Ingreso de la carrera del usuario
    let carrera = prompt("Ingrese porfavor su carrera", "Ingrese su carrera aquí");

    document.write('<dl class="row">');
    document.write('<dt class="col-sm-3">Carrera: </dt><dd class="col-sm-9">' + carrera + '</dd>');
    document.write('</dl>');

    //Encabezado de la tabla
    document.write('<table class="table">');
    document.write('<thead class="thead-dark">');
    document.write('<tr>');
    document.write('<th scope="col">Materia</th>');
    document.write('<th scope="col">Nota 1</th>');
    document.write('<th scope="col">Nota 2</th>');
    document.write('<th scope="col">Nota 3</th>');
    document.write('<th scope="col">Promedio</th>');
    document.write('</tr>');
    document.write('</thead>');

    //Ingreso de la información de la primera materia del usuario
    let ramo_1 = prompt("Ingrese la primera materia porfavor", "Ingrese la materia aquí...");

    let nota_1_ramo_1 = prompt("Ingrese la primera nota de la materia" + " " + ramo_1, "Ingrese la nota aquí...");
    let nota_2_ramo_1 = prompt("Ingrese la segunda nota de la materia" + " " + ramo_1, "Ingrese la nota aquí...");
    let nota_3_ramo_1 = prompt("Ingrese la tercera nota de la materia" + " " + ramo_1, "Ingrese la nota aquí...");

    let promedio_1 = ((parseFloat(nota_1_ramo_1) + parseFloat(nota_2_ramo_1) + parseFloat(nota_3_ramo_1))/3).toFixed(2);

    //Ingreso de la información de la segunda materia del usuario
    let ramo_2 = prompt("Ingrese la segunda materia porfavor", "Ingrese la materia aquí...");

    let nota_1_ramo_2 = prompt("Ingrese la primera nota de la materia" + " " + ramo_2, "Ingrese la nota aquí...");
    let nota_2_ramo_2 = prompt("Ingrese la segunda nota de la materia" + " " + ramo_2, "Ingrese la nota aquí...");
    let nota_3_ramo_2 = prompt("Ingrese la tercera nota de la materia" + " " + ramo_2, "Ingrese la nota aquí...");

    let promedio_2 = ((parseFloat(nota_1_ramo_2) + parseFloat(nota_2_ramo_2) + parseFloat(nota_3_ramo_2))/3).toFixed(2);

    //Ingreso de la información de la tercera materia del usuario
    let ramo_3 = prompt("Ingrese la tercera materia porfavor", "Ingrese la materia aquí...");

    let nota_1_ramo_3 = prompt("Ingrese la primera nota de la materia" + " " + ramo_3, "Ingrese la nota aquí...");
    let nota_2_ramo_3 = prompt("Ingrese la segunda nota de la materia" + " " + ramo_3, "Ingrese la nota aquí...");

    //Ingreso de la nota aprobatoria
    let nota_aprobatoria = prompt("Ingrese la nota indicada para aprobar la materia" + ramo_3, "Ingrese la nota aquí...");

    //Calculo de la tercera nota
    let nota_3_ramo_3 = ((parseFloat(nota_aprobatoria)*3) - parseFloat(nota_1_ramo_3) - parseFloat(nota_2_ramo_3));

    //Cuerpo de la tabla
    document.write('<tbody>');
    //Notas del primer ramo
    document.write('<tr>');
    document.write('<th scope="row">'+ ramo_1 +'</th>');
    document.write('<td>'+ nota_1_ramo_1 +'</td>');
    document.write('<td>'+ nota_2_ramo_1 +'</td>');
    document.write('<td>'+ nota_3_ramo_1 +'</td>');
    document.write('<td>'+ promedio_1 +'</td>');
    document.write('</tr>');
    //Notas del segundo ramo
    document.write('<tr>');
    document.write('<th scope="row">'+ ramo_2 +'</th>');
    document.write('<td>'+ nota_1_ramo_2 +'</td>');
    document.write('<td>'+ nota_2_ramo_2 +'</td>');
    document.write('<td>'+ nota_3_ramo_2 +'</td>');
    document.write('<td>'+ promedio_2 +'</td>');
    document.write('</tr>');
    //Notas del tercer ramo
    document.write('<tr>');
    document.write('<th scope="row">'+ ramo_3 +'</th>');
    document.write('<td>'+ nota_1_ramo_3 +'</td>');
    document.write('<td>'+ nota_2_ramo_3 +'</td>');
    document.write('<td>-</td>');
    document.write('<td>-</td>');
    document.write('</tr>');
    document.write('</tbody>');
    document.write('</table>');

    //Instrucción final
    document.write('<p>Para aprobar el ramo '+ ramo_3 +' con nota '+ nota_aprobatoria +', necesitas obtener un ' + parseFloat(nota_3_ramo_3).toFixed(2) + ' en la nota 3.</p>')

    document.write('<div>');
