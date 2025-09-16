import { Component } from '@angular/core';

@Component({
  selector: 'app-tarea-padre',
  templateUrl: './tarea-padre.html',
  standalone: false
})
export class TareaPadre {
  tareaInput: string = '';
  tareaEnviada: string = '';
  mostrarTarea: boolean = false;
  tareaCompletada: boolean = false;

  enviarTarea() {
    if (this.tareaInput.trim()) {
      this.tareaEnviada = this.tareaInput;
      this.mostrarTarea = true;
      this.tareaCompletada = false; 
      this.tareaInput = ''; 
    }
  }

  onTareaCompletada() {
    this.tareaCompletada = true;
  }
}
