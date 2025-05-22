//📘 Tarea: Análisis de calificaciones
//🎯 Objetivo:
//Aplicar funciones, bucles y lógica condicional para procesar un arreglo de números.
//
//📝 Instrucciones:
//Crea una función llamada analizarCalificaciones que reciba un arreglo de números (enteros del 0 al 100) que representan calificaciones de estudiantes. La función debe devolver un objeto con la siguiente información:
//
//Cantidad de aprobados (calificaciones ≥ 70)
//
//Cantidad de reprobados (calificaciones < 70)
//
//Promedio general
//
//La calificación más alta y la más baja

const { ask } = require('../helpers/input');

function obtenerPromedio(numeros) {
  let total = 0;
  for (let i = 0; i < numeros.length; i++) {
    total = total + numeros[i];
  }
  const promedio = total / numeros.length;

  return promedio;
}

function obtenerMayor(numeros) {
  let mayor = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }
  return mayor;
}

function obtenerMenor(numeros) {
  let menor = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }
  return menor;
}


async function main() {

  const calificaciones = [70, 80, 90, 100, 85, 50, 35, 25, 20, 15, 1, 60, 20, 30, 40, 75];

  for (let i = 0; i < calificaciones.length; i++) {
    if (calificaciones[i] >= 70) {
      console.log(`La Calificación ${calificaciones[i]}: es Aprobatoria`);
    } else {
      console.log(`La Calificación ${calificaciones[i]}: es Reprobatoria`);
    }
  }

  console.log(`Promedio General= ${obtenerPromedio(calificaciones)}`);
  console.log(`La califiación mas alta es: ${obtenerMayor(calificaciones)}`);
  console.log(`La calificación mas baja es: ${obtenerMenor(calificaciones)}`);
}

main();