class Producto {
    constructor(nombre, unidades, precio) {
      this.nombre = nombre;
      this.unidades = unidades;
      this.precio = precio;
      this.precioTotal = unidades * precio;
    }
  }
  
  class CarritoDeCompras {
    constructor() {
      this.productos = [];
    }
  
    agregarProducto(nombre, unidades, precio) {
      const producto = new Producto(nombre, unidades, precio);
      this.productos.push(producto);
    }
  
    calcularPrecioTotal() {
      let total = 0;
      for (const producto of this.productos) {
        total += producto.precioTotal;
      }
      return total;
    }
  }
  
  // Ejemplo
  const carrito = new CarritoDeCompras();
  carrito.agregarProducto("Papel higiénico", 4, 5);
  carrito.agregarProducto("Leche", 1, 2);
  carrito.agregarProducto("Chocolate", 2, 1.5);
  
  const precioTotal = carrito.calcularPrecioTotal();
  console.log("Precio total del carrito: $" + precioTotal);