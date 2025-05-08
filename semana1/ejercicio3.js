// Clase 3: Lógica con Condicionales
const { ask } = require('../helpers/input');

async function main() {
  // const number = Number(prompt("Ingresa un número:"));

  // if (number % 3 === 0 && number % 5 === 0) {
  //   console.log("Múltiplo de 3 y 5");
  // } else if (number % 3 === 0) {
  //   console.log("Múltiplo de 3");
  // } else if (number % 5 === 0) {
  //   console.log("Múltiplo de 5");
  // } else {
  //   console.log("No es múltiplo de 3 ni de 5");
  // }

  const number = Number(await ask("Ingresa un número"))
  const multiplo5 = number % 5 === 0;
  const multiplo3 = number % 3 === 0;
  const multiploAmbos = multiplo5 && multiplo3;

  switch (true) {
    case multiploAmbos:
      console.log("Es múltiplo de ambos 3 y 5");
      break;
    case multiplo5:
      console.log("Es múltiplo de 5");
      break;
    case multiplo3:
      console.log("Es múltiplo de 3");
      break;
    default:
      console.log("No es múltiplo de 3 ni de 5");
  }

  // TODO : Convertir a switch
  //const multiplo5 = number % 5 === 0;
  //const multiplo3 = number % 3 === 0;
  //const multiploAmbos = multiplo5 && multiplo3;
  //switch(){
  //  case 1:
  //    break;
  //  default:
  //    break;
  //}

}

main();
