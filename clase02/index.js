// comentario

/*
dfiougjr
fggtrhg
fgtrgrtg
gtrgtrg

*/

// var primeraVar = 'texto'
// let segundaVar = 5
// segundaVar = 10
// const terceraVar = 'texto1'
// terceraVar = 'texto2'

// parseInt -> de texto a numero => '15' -> 15

// const numero1 = parseInt(prompt('Ingresa un numero')) // 10 - '10'
// const numero2 = parseInt(prompt('Ingresa otro numero')) // 25 - '25'
// const resultado = numero1 + numero2
// alert('El resultado de la suma de los dos numeros es: '+resultado)

// Si - manana no llueve -> vamos a la playa
// if (manana no llueve) {vamos a la playa}
// if(condicion){
// bloque de codigo a ejecutar si la condicion se resuelve como verdadera
// }

//const numero1 = parseInt(prompt('Ingresa un numero')) // 10 - '10'
//const numero2 = parseInt(prompt('Ingresa otro numero')) // 25 - '25'
// 0 === '0'
// if(numero1 === 0){
//     alert('No podemos seguir el proceso')
// } else {
//     alert('Podemos continuar')
// }

// calculadora
//const operacion = prompt('Que operacion deseas hacer?')
// suma - resta - mult - div

// let resultado

// if(operacion === 'suma'){
//     resultado = numero1 + numero2
// } else if (operacion === 'resta'){
//     resultado = numero1 - numero2
// } else if(operacion === 'mult'){
//     resultado = numero1*numero2
// } else if(operacion === 'div'){
//     resultado = numero1/numero2
// } else {
//     resultado = 0
// }

// alert('El resultado: '+resultado)

// if(numero1 === 0 || numero2 === 0){
//     alert('Alguno de los dos numeros es igual a 0')
// }

// if(numero1 === 0 && numero2 === 0){
//     alert('Los dos numeros son iguales a 0')
// }

// if (numero1 <= 10 && numero2 <= 10) {
//   alert('Numeros menores o iguales a 10')
// } else if (numero1 > 10 && numero1 <= 20 && numero2 > 10 && numero2 <= 20) {
//   alert('Numeros entre 11 y 20')
// }

// if (numero1 < 1 || numero1 > 99) {
//   alert('Numero fuera del rango')
// } else {
//   if (numero1 % 2 === 0) {
//     alert('Numero par')
//   } else {
//     alert('Numero impar')
//   }
// }

// CICLO CONTEO - FOR
//const numero1 = parseInt(prompt('Ingresa un numero'))
//const numero2 = parseInt(prompt('Ingresa un numero'))
// for (let i = 0; i < numero; i++) {
//   // bloque de codigo que yo quiero que se ejecute
//   // entregar copa de vino
//   console.log(i)
// }

// i = i+1 === i++

// break - continue

// for (let i = 0; i < numero; i++) {
//   // bloque de codigo que yo quiero que se ejecute
//   // entregar copa de vino
//   if (i === 4) {
//     //console.log('Se acabo el ciclo')
//     break
//     //continue
//   }
//   console.log(i)
// }

// if (numero1 < numero2) {
//   for (let i = numero1; i <= numero2; i++) {
//     console.log(i)
//   }
// } else if (numero1 > numero2) {
//   for (let i = numero1; i >= numero2; i--) {
//     console.log(i)
//   }
// } else {
//     console.log('Numeros iguales');
// }

// CICLO CONDICIONAL - WHILE

// let password = prompt('Ingresa tu password')
// while (password !== '12345') {

//   password = prompt('Ingresa nuevamente tu password')
// }
// alert('Password ingresada con exito')

// let nombre = prompt('Ingresa tu nombre')
// do {
//   alert('Bienvenido ' + nombre)
//   nombre = prompt('Ingresa tu nombre')
// } while (nombre !== 'Juan')

// while(nombre!=='Juan'){
//     alert('Bienvenido '+nombre)
// nombre = prompt('Ingresa tu nombre')
// }

// calculado con switch

const numero1 = parseInt(prompt('Ingresa un numero'))
const numero2 = parseInt(prompt('Ingresa un numero'))
const operacion = prompt('Que operacion deseas hacer?')
//suma - resta - mult - div

// let resultado

// //if
// if (operacion === 'suma') {
//   resultado = numero1 + numero2
// } else if (operacion === 'resta') {
//   resultado = numero1 - numero2
// } else if (operacion === 'mult') {
//   resultado = numero1 * numero2
// } else if (operacion === 'div') {
//   resultado = numero1 / numero2
// } else {
//   resultado = 0
// }

// // switch
switch (operacion) {
  case 'suma':
    resultado = numero1 + numero2
    break
  case 'resta':
    resultado = numero1 - numero2
    break
  case 'mult':
    resultado = numero1 * numero2
    break
  case 'div':
    resultado = numero1 / numero2
    break
  default:
    resultado = 0
    break
}

// alert('El resultado: ' + resultado)


const numero = parseInt(prompt('ingresa un numero'))
alert(numero)