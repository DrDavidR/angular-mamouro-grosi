import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  comidasEnCarrito: any[] = [];

  agregarAlCarrito(comida: any) {
    const index = this.comidasEnCarrito.findIndex(item => item.nombre === comida.nombre);
    if (index !== -1) {
      this.comidasEnCarrito[index].cantidad++;
    } else {
      this.comidasEnCarrito.push({ ...comida, cantidad: 1 });
    }
  }

  quitarDelCarrito(index: any) {
    this.comidasEnCarrito.splice(index, 1);
  }

  getComidasEnCarrito() {
    return this.comidasEnCarrito;
  }
}
