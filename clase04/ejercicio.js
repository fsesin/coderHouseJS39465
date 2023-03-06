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
console.log(productos)

let productoEscogido = prompt(
  'Escoge el producto que deseas comprar: iphone-ipad-tv-computador'
)
// variable para condicion del ciclo
let seguirComprando = true
const carrito = []

while (seguirComprando === true) {
  // buscar el producto escogido
  const producto = productos.find(
    (producto) => producto.nombre === productoEscogido.toLowerCase().trim()
  )
  // guardar producto en carrito o preguntarle al usuario un producto existente
  if (producto) {
    carrito.push(producto)
  } else {
    productoEscogido = prompt(
      'Escoge un producto correcto: iphone-ipad-tv-computador'
    )
    continue
  }

  const decision = prompt('Deseas seguir comprando? si-no')
  if (decision === 'si') {
    productoEscogido = prompt(
      'Escoge el producto que deseas comprar: iphone-ipad-tv-computador'
    )
  } else {
    seguirComprando = false
  }
}

console.log(carrito);
let totalCompra = 0
// for (const producto of carrito) {
//     totalCompra = totalCompra + producto.precio
// }
carrito.forEach(producto=>{
totalCompra = totalCompra+producto.precio
})
alert('El total de tu compra es: '+totalCompra)