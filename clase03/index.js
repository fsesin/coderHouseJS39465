function sumar() {
  // bloque de codigo a ejecutar
  const numero1 = parseInt(prompt('Ingresa un numero'))
  const numero2 = parseInt(prompt('Ingresa otro numero'))
  const resultado = numero1 + numero2
  alert('El resultado de la suma es: ' + resultado)
}
//sumar()

// function sumar(n1, n2) {
//     // bloque de codigo a ejecutar
//     //alert('El resultado de la suma es: ' + resultado)
//     //   const resultado = n1 + n2
//     //   return resultado
//   }

// function sumar(n1, n2) {
//   return n1 + n2
//   //console.log('hola')
// }

//const numero1 = parseInt(prompt('Ingresa un numero'))
//const numero2 = parseInt(prompt('Ingresa otro numero'))
//const resultadoSumaPrompt = sumar(numero1, numero2) // n1= numero1 n2= numero2
//alert('resultado: ' + resultadoSumaPrompt)
//sumar() // 15
//const resultadoSuma1 = sumar(5, 2)
// const resultadoSuma2 = sumar(100,20) n1 = 100 n2 = 20
//alert('El resultado de la suma es: ' + resultadoSuma1)
// console.log(resultadoSuma2)
// resultadosuMA1 + RESULTADOsuMA2

// suma(5,2)

// EJEMPLO2

function menorACien(num) {
  if (num < 100) {
    return true
  } else {
    return false
  }
}

const resultado = menorACien(50) // num = 50
//console.log(resultado);
//console.log(menorACien(50));
//const numero = parseInt(prompt('Ingresa un numero'))
//console.log(menorACien(numero)) // num = numero
menorACien(1000) // num = 1000

// function restar(n1, n2) {
//   return n1 - n2
// }

// function esVocal(parametro) {
//   if (
//     parametro === 'a' ||
//     parametro === 'e' ||
//     parametro === 'i' ||
//     parametro === 'o' ||
//     parametro === 'u'
//   ) {
//     return true
//   } else {
//     return false
//   }
// }

//console.log(esVocal('b')) // parametro = 'b'
//console.log(esVocal('a')) // parametro = 'a'

// FUNCIONES FLECHA

// const restar = (n1,n2)=>{
//     return n1-n2
// }
const restar = (n1, n2) => n1 - n2 // retorno implicito y no necesidad de llaves

// un solo parametro no necesidad de parentesis
const esVocal = (parametro) => {
  if (
    parametro === 'a' ||
    parametro === 'e' ||
    parametro === 'i' ||
    parametro === 'o' ||
    parametro === 'u'
  ) {
    return true
  } else {
    return false
  }
}

// const sumar = function (n1, n2) {
//   return n1 + n2
// }
// esVocal('a')
// sumar(5, 9)

// let var1 = 5 // variable global => scope global

// if(var1 === 10){
// let var2 = 8
// //console.log(var2);
// }
//console.log(var2);

//OBJETOS

// animal 1
const tipo1 = 'perro'
const nombre1 = 'Firulais'
const edad1 = 4
const tieneDueno1 = true

//console.log(tipo1,nombre1,edad1,tieneDueno1)
// animal 2
const tipo2 = 'gato'
const nombre2 = 'Mishu'
const edad2 = 2
const tieneDueno2 = false

const animal1 = {
  tipo: 'perro',
  nombre: 'Firulais',
  edad: 4,
  tieneDueno: true,
}

const animal2 = {
  tipo: 'gato',
  nombre: 'Mishu',
  edad: 2,
  tieneDueno: false,
}

// llamamos propiedades de objetos
//console.log(animal1.tieneDueno)
//console.log(animal1['tieneDueno']);

// agregando o modificando alguna propiedad
animal1.vivo = true
animal1['dueno'] = 'Juan'
animal1.tipo = 'perrito'

// eliminar propiedad
delete animal1.edad
//console.log(animal1);

//console.log(`Este animal es un ${animal1.tipo} y su nombre es ${animal1.nombre}`);

//console.log('Este animal es un ' + animal1.tipo + ' y su nombre es ' + animal1.nombre);

// FUNCION CONSTRUCTORA

// function Animal(tipo,nombre,edad,tieneDueno){
//     this.tipo = tipo
//     this.nombre = nombre
//     this.edad = edad
//     this.tieneDueno = tieneDueno
// }

//alert(`${animal3.edad},${animal3.nombre}`)

class Animal {
  constructor(tipo, nombre, edad, tieneDueno) {
    this.tipo = tipo
    this.nombre = nombre
    this.edad = edad
    this.tieneDueno = tieneDueno
  }

  esMayorDeEdad() {
    if (this.edad >= 5) {
      return true
    } else {
      return false
    }
  }
}
const animal3 = new Animal('pez', 'nemo', 6, false)
const animal4 = new Animal('conejo', 'bunny', 2, true)
console.log(animal4.esMayorDeEdad())
console.log(animal3.esMayorDeEdad())
//const nombreAnimal5 = prompt('Ingresa el nombre del animal')
//const animal5 = new Animal('raton',nombreAnimal5,10,true)
//console.log(animal3);
//console.log(animal4);
//console.log(animal5.tieneDueno);

class Usuario {
  constructor(nombre, email, password) {
    this.nombre = nombre
    this.email = email
    this.password = password
  }

  tieneEmail() {
    if (this.email) {
      return true
    } else {
      return false
    }
  }

  actualizarPassword(oldPassword,newPassword) {
    if(this.password === oldPassword){
        this.password = newPassword
        return 'Password actualizada con exito'
    } else {
        return 'No estas habilidado para hacer este cambio'
    }
  }
}

const usuario1 = new Usuario('Juan', 'jhoyos@mail.com', '67890')
const usuario2 = new Usuario('Carolina', null, 'fghij')
const usuario3 = new Usuario('Jorge', 'jmendes@mail.com', '123abc')
const passwordUsuario3Old = prompt('Ingresa la contrasena actual ')
const passwordUsuario3New = prompt('Ingresa la contrasena nueva')
usuario1.actualizarPassword('67890','nueva12345')
usuario2.actualizarPassword('fghi','nuevaabcd')
const respuesta = usuario3.actualizarPassword(passwordUsuario3Old,passwordUsuario3New)
console.log(usuario1, usuario2)
alert(respuesta)
