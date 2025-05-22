// 🏠 Práctica para casa: Gestor interactivo de frutas (variante)
// 🎯 Objetivo:
// Crear un programa que gestione una lista de frutas con opciones para agregar, eliminar, ver la lista completa y salir. El usuario puede interactuar con el menú cuantas veces quiera hasta decidir salir.
//
// 🧩 Instrucciones:
// Crea un arreglo vacío llamado frutas.
//
// Usa un ciclo while que muestre el siguiente menú:
// ¿Qué deseas hacer?
// 1. Agregar fruta
// 2. Eliminar fruta
// 3. Ver lista de frutas
// 4. Salir

const { ask } = require('../helpers/input');

async function main () {

    let opcion = '';
    let frutas = [];

    while (opcion !== '4') {
        opcion = await ask ('¿Qué deseas hacer? \n1. Agrgar Fruta \n2. Eliminar Fruta \n3. Ver lista de Frutas \n4. Salir\n')
        if (opcion === '1') {
            //Agregar
            let frutaNueva = await ask('¿Qué Fruta deseas Agregar?: ');
            frutas.push(frutaNueva);
            console.log(`Fruta agregada: ${frutaNueva}`);
            console.log('Frutas disponibles: ', frutas);
        } else if (opcion === '2') {
            //eliminar fruta
            if (frutas.length === 0) {
                console.log ('No hay Frutas Disponibles');
                continue;
            } else {
                let frutaEliminar = await ask('¿Qué fruta deseas eliminar?: ');
                let index = frutas.indexOf(frutaEliminar);

                if (index !== -1) {
                    frutas.splice(index,1);
                    console.log(`${frutaEliminar} ha sido eliminada `)
                } else {
                    console.log ('Fruta no Encontrada');
                }
                console.log ('Frutas Disponibles: ', frutas);
            }
        } else if (opcion === '3'){
            // Ver lista de Frutas
            if (frutas.length === 0){ //devuelve la cantidad de elementos en el array
                console.log ('No hay Frutas disponibles.')
            } else {
                console.log('Lista de frutas:');
                frutas.forEach((fruta, index) => { //forEach() es un método que recorre cada elemento del array.
                                                //Toma una función con dos parámetros: fruta (el elemento actual) y index (su posición en el array).
                    console.log(`${index + 1}. ${fruta}`);
                });
            }
        } else if (opcion ==='4'){
            //Salir
            console.log ('Gracias por usar el Programa');
        } else {
            console.log ('Opcion invalida');
        }
    }

}

main ();