// Práctica para casa:
// Imprimir números pares del 1 al 100
const { ask } = require('../helpers/input');

async function main() {
  let limite = Number(await ask("Hasta qué número quieres contar"));
  let i = 0;

  while (i <= limite) {
     if (i % 2 === 0) { // i % 2 === 0 verifica si el número i es divisible entre 2 sin dejar residuo, lo que indica que es un número par.
      console.log(i);
    }
    i++; // incrementa el valor de i en 1, si no se incluye esta linea el bucle se convertiria en un bucle infinito
  }
}

main();