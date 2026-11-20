import { Component } from '@angular/core';

interface Producto {
  nombre: string;
  precio: number;
  disponible: boolean;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nombreTienda: string = 'Celulares Bolivia';
  encargado: string = 'CAROL CRUZ MAMANI'; // Cambia esto por tu nombre
  numeroSucursal: number = 1;
  tiendaAbierta: boolean = false;
  categorias: string[] = ['Celulares', 'Accesorios', 'Laptops', 'Tablets'];

  producto: Producto = {
    nombre: 'iPhone 15 Pro',
    precio: 7500,
    disponible: false
  };
}