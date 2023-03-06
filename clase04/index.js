// const obj = { nombre: 'Farid' }
// let arrayAnimales = ['perro', 'gato', 'vaca', 'caballo', 'cerdo'] // elementos mismo tipo
// const arrayRandom = ['hola', 2, true, { nombre: 'Farid' }] // elementos dif tipos
// // posicion o indice   0     1    2           3
// // console.log(arrayAnimales);

// // // cantidad de elementos
// // console.log(arrayAnimales.length)
// // console.log(arrayRandom.length);

// // // llamar un elemento en particular
// // console.log(arrayAnimales[0]);
// // console.log(arrayAnimales[1]);
// // console.log(arrayAnimales[2]);
// // console.log(arrayAnimales[3]);
// // console.log(arrayAnimales[4]);
// // //console.log(arrayRandom[3]);

// // for(let i=0;i<arrayAnimales.length;i++){
// //     console.log(arrayAnimales[i]);
// // }

// // agregar elementos a un arreglo
// //arrayAnimales = 'hola'
// arrayAnimales.push('SERPIENTE') // agrega al final
// arrayAnimales.unshift('CUCARACHA') // agrega al inicio

// // eliminar elementos a un arreglo
// arrayAnimales.pop() // elimina el ultimo elemento
// arrayAnimales.shift() // elimina el primer elemento

// // .splice()
// // eliminar
// //arrayAnimales.splice(2,1)

// //agregar
// //['perro', 'gato', 'vaca','SERPIENTE', 'caballo', 'cerdo']
// //arrayAnimales.splice(3,0,'SERPIENTE')

// // para agregar y eliminar al mismo tiempo
// //arrayAnimales.splice(2,1,'SERPIENTE')

// const arrayAnimales2 = ['cocodrilo', 'raton', 'arana', 'carpincho', 'toro']
// const animales = arrayAnimales.concat(arrayAnimales2)

// // .slice
// const algunosAnimales = animales.slice(0, 1)
// //console.log(algunosAnimales)

// // indexOf

// const indice = animales.indexOf('vaca')
// animales.splice(indice, 1)

// // console.log(animales)
// // console.log(indice)

// // includes
// //const animalAgregar = prompt('Que animal quieres agregar')
// //console.log(animales.includes(animalAgregar))

// // if(animales.includes('vaca')){
// //     // ese animal existe
// // } else{
// //     // agregas el animal al arreglo
// // }

// //
// const amigos = [
//   {
//     nombre: 'Jorge',
//     apellido: 'Fernandez',
//     edad: 25,
//   },
//   {
//     nombre: 'Mariano',
//     apellido: 'Talavera',
//     edad: 40,
//   },
//   {
//     nombre: 'Juan',
//     apellido: 'Morales',
//     edad: 45,
//   },
//   {
//     nombre: 'Carolina',
//     apellido: 'Osorio',
//     edad: 20,
//   },
// ]

// //
// const amigoNuevo = {
//   nombre: 'Juan',
//   apellido: 'Ledesma',
// }
// amigos.push(amigoNuevo)
// console.log(amigos)

// //
// for (const e of amigos) {
//   e.esCasado = true
// }
// console.log(amigos)

// total = total + i
// total += i

function mayorQue(n) {
  return function (m) {
    return m > n
  }
}

let mayorQueCinco = mayorQue(5)
let mayorQueTres = mayorQue(3)

//console.log(mayorQueCinco(10));
//console.log(mayorQueTres(4));

function elevar(n) {
  return function (m) {
    return m ** n
  }
}

let cuadrado = elevar(2) // n=2
let cubo = elevar(3) // n=3
let aLaCuatro = elevar(4) // n=4

//console.log(cubo(5));

function elevarDirecto(m, n) {
  return m ** n
}
//console.log(elevarDirecto(5,2))
//console.log(elevarDirecto(3,2))
//console.log(elevarDirecto(4,2))

// calculadora
function sumar(a, b) {
  return a + b
}
function restar(a, b) {
  return a - b
}
function mult(a, b) {
  return a * b
}
function dividir(a, b) {
  return a / b
}

function calcular(n1, n2, fn) {
  const resultado = fn(n1, n2)
  return resultado
}

//console.log(calcular(5,10,sumar));
//
// calcular(5,10,sumar){
//     const resultado = sumar(5,10)
//     return resultado
// }
//console.log(calcular(5,10,dividir));
//console.log(calcular(5,10,restar));
//console.log(calcular(5,10,mult));

// forEach

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sumarUno = (n1) => console.log(n1 + 1)

numeros.forEach((n1) => console.log(n1 + 1))

const amigos = [
  {
    nombre: 'Carolina',
    apellido: 'Osorio',
    edad: 24,
  },
  {
    nombre: 'Jorge',
    apellido: 'Fernandez',
    edad: 25,
  },
  {
    nombre: 'Mariano',
    apellido: 'Talavera',
    edad: 40,
  },

  {
    nombre: 'Juan',
    apellido: 'Morales',
    edad: 45,
  },

  {
    nombre: 'Juan',
    apellido: 'Osorio',
    edad: 20,
  },
]

// buscar elemento

const amigoJuan = amigos.find((amigo) => amigo.nombre === 'Juan')
console.log(amigoJuan)

// filtrar
const amigosJuan = amigos.filter((amigo) => amigo.nombre === 'Juan')
console.log(amigosJuan)

// some

console.log(amigos.some((amigo) => amigo.nombre === 'Juan'))

const amigosModificado = amigos.map((amigo) => {
  return amigo.nombre.toUpperCase()
  //const obj = { nombre: amigo.nombre.toUpperCase(), apellido: amigo.apellido }
  //return obj
})
console.log(amigosModificado)

//numerico
amigos.sort((amigo1, amigo2) => amigo2.edad - amigo1.edad)
console.log(amigos)
//alfabeticamente
//amigos.sort((amigo1, amigo2) => amigo1.nombre.localeCompare(amigo2.nombre))


//console.log(amigos)
