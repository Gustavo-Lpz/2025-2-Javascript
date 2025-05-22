// 🏠 Práctica para casa:
// Contar cuántos de una lista de edades pueden votar
//
// Instrucciones:
// Crea un arreglo de edades (pedirlo al usuario).
//
// Recorre el arreglo.
//
// Cuenta cuántos tienen 18 años o más.
//
// Muestra el total.

const { ask } = require('../helpers/input');

async function main() {
    const age = []; //Arreglo que almacena todas las edades ingresadas

    while (true) { //Aqui inicia el bucle y se utiliza el break para detenerlo
        let newAge = await ask('¿Ingresa tu edad? (Deja vacío para terminar): ');
        
        if (newAge === '') { //Con solo dejar vacio al ingresar informacion se ejecuta el break 
            break;  // Salir del ciclo
        }

        const edad = Number(newAge); //convierte el valor ingresado en número
        
        if (!isNaN(edad)) { //devuelve true si el valor es "NaN Not a Number"
            age.push(edad); //si es un numero se agrega al arreglo age
        } else {
            console.log('Por favor, ingresa un número válido.');
        }
    }

    let votantes = 0; //este contador se incrementa cada vez que se encuentre una edad igual o mayor a 18

    for (let i = 0; i < age.length; i++) { //recorre el arreglo
        if (age[i] >= 18) {
            votantes++;
        }
    }

    console.log(`Pueden votar: ${votantes}`); // se utiliza la interpolacion para mostrar el total de votantes
}

main();