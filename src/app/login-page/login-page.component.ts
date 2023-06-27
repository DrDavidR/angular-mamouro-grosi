import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarritoService } from '../carrito.service';

interface Comida {
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  cantidad: number;
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  comidas: Comida[] = [];

  constructor(private http: HttpClient, private carritoService: CarritoService) {}

  ngOnInit() {
    this.loadComidas();
  }

  loadComidas() {
    this.http.get<any>('assets/comida.json').subscribe(data => {
      this.comidas = data.comidas.map((comida: Comida) => ({
        ...comida,
        cantidad: 0 // Inicializar la cantidad como 0
      }));
      console.log(data.comidas); // Imprimir información en la consola
    });
  }

  agregarAlCarrito(comida: Comida) {
    comida.cantidad++;
    this.carritoService.agregarAlCarrito(comida);
  }

  quitarDelCarrito(comida: Comida) {
    if (comida.cantidad > 0) {
      comida.cantidad--;
      this.carritoService.quitarDelCarrito(comida);
    }
  }
}

