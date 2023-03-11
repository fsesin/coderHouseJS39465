// acceder al DOM
//console.log(document)

// acceder a los nodos

// 1.getElement
// const tituloDOM = document.getElementById('titulo')
// console.log(tituloDOM);

// const h2Elementos = document.getElementsByTagName('h2')
// console.log(h2Elementos)

// const h3Elementos = document.getElementsByTagName('h3')
// console.log(h3Elementos)

// const elementosClass = document.getElementsByClassName('primeraClass')
// console.log(elementosClass)

// 2. querySelector
const tituloDOM = document.querySelector('#titulo')
const inputDOM = document.querySelector('#email')
const h2Elemento = document.querySelectorAll('h2')
const elementosClass = document.querySelectorAll('.primeraClass')
// console.log(elementosClass);
// //document.quer
// //console.log(tituloDOM,inputDOM)

// // modificar nodos
// tituloDOM.innerText = 'MODIFICADO'
// const textoH4 = prompt('Ingresa un texto')
const primerDiv = document.querySelector('#primerDiv')
// primerDiv.innerHTML = `<h4 class=h4Class >${textoH4}</h4>`

// CREAR NODOS Y AGREGARLOS

const parrafo = document.createElement('p')
parrafo.innerText = 'Parrafo desde el JS'
parrafo.setAttribute('class', 'primeraClass')
parrafo.setAttribute('id', 'primeraParrafo')
//primerDiv.append(parrafo)

// ELIMINAR NODOS

//inputDOM.remove()

// recuperar informacion
//console.log(inputDOM.value)

// eventos

const primerBtn = document.querySelector('#primerBoton')
//console.log(primerBtn)

//escuchar eventos

// 1. addEventListener

function clickFunction() {
  console.log(inputDOM.value)
}

function inputFunction(evento) {
  console.log(evento.target.value)
}
function changeFunction(e) {
  console.log(e.target.value)
}

// primerBtn.addEventListener('click',clickFunction)
//inputDOM.addEventListener('input',inputFunction)
//inputDOM.addEventListener('change',changeFunction)

// 2. prefijo on
//primerBtn.onclick = clickFunction
//inputDOM.onchange = changeFunction

// eventos mouse
const divEvento = document.querySelector('#divEvento')
//divEvento.onmouseover = (e) => console.log(e)
//divEvento.onmouseout = () => console.log('mouse out');
//divEvento.onmousemove = ()=>console.log('MOUSE MOVE');
//ivEvento.onmouseup = ()=>console.log('MOUSE UP');
//divEvento.onmousedown = ()=>console.log('mouse down');

// evento teclado
//inputDOM.onkeydown = (e)=>console.log(e.key);
//inputDOM.onkeyup = (e)=>console.log(e);

const form = document.querySelector('#formulario')
form.onsubmit = (evento) => {
  evento.preventDefault()
  const hijos = Array.from(evento.target.children)
  hijos.forEach((hijo) => {
    if (hijo.type !== 'submit') {
      console.log(hijo.value)
    }
  })
  console.log(hijos)
}
