import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  tareaInput: string = '';
  tareaActual: string = '';
  tareaCompletada: boolean = false;
  mostrarTarea: boolean = false;

  textoInput: string = '';

 
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


  mostrarTexto() {
    console.log(this.textoInput);
  }

  cambiarTexto() {
    this.textoInput = "texto cambiado";
  }
}
