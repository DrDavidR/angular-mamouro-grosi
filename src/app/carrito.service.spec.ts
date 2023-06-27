import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  comidasEnCarrito: any[] = [];

  agregarAlCarrito(comida: any) {
    // Verificar si la comida ya está en el carrito
    const index = this.comidasEnCarrito.findIndex(item => item.nombre === comida.nombre);
    if (index !== -1) {
      // Si la comida ya existe, incrementar la cantidad
      this.comidasEnCarrito[index].cantidad++;
    } else {
      // Si la comida no existe, agregarla al carrito con cantidad inicial 1
      this.comidasEnCarrito.push({ ...comida, cantidad: 1 });
    }
  }

  quitarDelCarrito(index: number) {
    this.comidasEnCarrito.splice(index, 1);
  }

  getComidasEnCarrito() {
    return this.comidasEnCarrito;
  }
}
