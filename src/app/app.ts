import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  // Propiedades para el taller
  tareaInput: string = '';
  tareaActual: string = '';
  tareaCompletada: boolean = false;
  mostrarTarea: boolean = false;

  // Propiedades originales (mantener si las necesitas)
  textoInput: string = '';

  // Métodos para el taller
  enviarTarea() {
    if (this.tareaInput.trim()) {
      this.tareaActual = this.tareaInput;
      this.mostrarTarea = true;
      this.tareaCompletada = false;
      this.tareaInput = ''; // Limpiar input
    }
  }

  onTareaCompletada() {
    this.tareaCompletada = true;
  }

  // Métodos originales (mantener si los necesitas)
  mostrarTexto() {
    console.log(this.textoInput);
  }

  cambiarTexto() {
    this.textoInput = "texto cambiado";
  }
}
