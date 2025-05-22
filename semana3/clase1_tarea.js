// 📝 Instrucciones:
// Crea un arreglo llamado alumnos.
//
// Usa un bucle while para permitir al usuario agregar objetos alumno al arreglo.
// Cada alumno debe tener:
//
// nombre
// edad
// calificacion
//
// Pregunta al usuario si desea seguir agregando más alumnos.
// Después de salir del ciclo, muestra:
// Cuántos alumnos tienen calificación aprobatoria (≥ 70).
// Cuántos pueden votar (edad ≥ 18).
// El promedio general de calificaciones.
// La calificación mayor.
// La calificación menor.

const { ask } = require('../helpers/input');

async function main() {
    let opcion = '';
    let Alumnos = [];

    while (opcion !== '2') {
        opcion = await ask('¿Qué deseas hacer?\n1. Agregar Alumno\n2. Salir\n');

        if (opcion === "1") {
            let nombre = await ask('Nombre del Alumno: ');
            let edad = await ask('Edad del Alumno: ');
            let calificacionStr = await ask('Calificación del Alumno: ');
            let calificacion = parseFloat(calificacionStr);

            if (!isNaN(calificacion)) {
                Alumnos.push({ nombre, edad, calificacion });
                console.log(`Alumno agregado: ${nombre}`);
            } else {
                console.log('Calificación inválida. Intenta de nuevo.');
            }
        }

        else if (opcion !== "2") {
            console.log('Opción inválida. Intenta de nuevo.');
        }
    }

    // Al salir
    console.log('\nSaliendo');
    if (Alumnos.length > 0) {
        console.log('\n Estadísticas Finales:');
        Estadisticas(Alumnos);
    } else {
        console.log('No se registraron alumnos.');
    }
}


// Función para calcular y mostrar estadísticas
function Estadisticas(alumnos) {
    const promedio = obtenerPromedio(alumnos);
    const mayor = obtenerMayor(alumnos);
    const menor = obtenerMenor(alumnos);
   
    calificacion(alumnos);
    edadVotar(alumnos);
    console.log(`Promedio General: ${promedio.toFixed(2)}`);
    console.log(`Calificación más alta: ${mayor}`);
    console.log(`Calificación más baja: ${menor}`);
   
}


//Funcion para mostrar la calificacion minima aprobatoria
function calificacion(alumnos){
    for (let alumno of alumnos){
    if (alumno.calificacion >= 70){
        console.log (` ${alumno.nombre} saco ${alumno.calificacion} Aprobo`);
        } else {
        console.log (` ${alumno.nombre} saco ${alumno.calificacion} Reprobo`);
        }
    }
}

//Funcion para la edad minima para votar
function edadVotar(alumnos){
    for (let alumno of alumnos){
     if (alumno.edad >= 18) {
        console.log(` ${alumno.nombre} tiene ${alumno.edad} Es mayor de edad, puede votar`);
      } else {
        console.log(` ${alumno.nombre} tiene ${alumno.edad} No es mayor de edad, No puede votar`);
      }
    }
}

function obtenerPromedio(alumnos) {
    let suma = 0;
    for (let alumno of alumnos) {
        suma += alumno.calificacion;
    }
    return suma / alumnos.length;
}

function obtenerMayor(alumnos) {
    return Math.max(...alumnos.map(a => a.calificacion));
}

function obtenerMenor(alumnos) {
    return Math.min(...alumnos.map(a => a.calificacion));
}


main();