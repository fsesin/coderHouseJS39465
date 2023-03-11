// clase Producto

class Producto {
  constructor(id, nombre, precio) {
    this.id = id
    this.nombre = nombre
    this.precio = precio
  }
}
// creamos 4 productos
const iphone = new Producto(1, 'iphone', 500)
const ipad = new Producto(2, 'ipad', 200)
const tv = new Producto(3, 'tv', 1000)
const computador = new Producto(4, 'computador', 1500)

// guardar productos
const productos = [iphone, ipad, tv, computador]
//console.log(productos)

// agregar opciones de productos al select
const selectNode = document.querySelector('#listaProds')
productos.forEach((prod) => {
  const optionProd = document.createElement('option')
  optionProd.innerText = `${prod.nombre}: $${prod.precio}`
  optionProd.setAttribute('id', `${prod.id}`)
  selectNode.append(optionProd)
})

// carrito
const carrito = []

// boton anadir producto
const anadirBtnNode = document.querySelector('#anadirProd')
anadirBtnNode.onclick = () => {
  const index = selectNode.selectedIndex
  const prodSeleccionado = productos[index]
  carrito.push(prodSeleccionado)
  console.log(carrito)
}

//boton finalizar compra
const finalizarBtnNode = document.querySelector('#finalizarCompra')
finalizarBtnNode.onclick = () => {
  let totalCompra = 0
  carrito.forEach((producto) => {
    totalCompra = totalCompra + producto.precio
  })
  alert(`El total de tu compra es ${totalCompra}`)
}

// Math
const piNumber = Math.pow(5,3)
console.log((piNumber));
// Date
const fecha = new Date()
console.log(fecha.getFullYear());