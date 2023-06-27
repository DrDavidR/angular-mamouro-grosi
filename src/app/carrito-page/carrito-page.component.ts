import { Component } from '@angular/core';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-carrito-page',
  templateUrl: './carrito-page.component.html',
  styleUrls: ['./carrito-page.component.css']
})
export class CarritoPageComponent {
  // Lista de comidas en el carrito con su respectiva cantidad
  comidasEnCarrito: any[] = [];

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.comidasEnCarrito = this.carritoService.getComidasEnCarrito();
  }

  // Función para eliminar una comida del carrito
  eliminarDelCarrito(index: number) {
    this.carritoService.quitarDelCarrito(index);
  }
}
