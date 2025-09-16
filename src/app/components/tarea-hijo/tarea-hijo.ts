import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tarea-hijo',
  templateUrl: './tarea-hijo.html',
  standalone: false
})
export class TareaHijo {
  @Input() tarea: string = '';
  @Output() tareaCompletada = new EventEmitter<void>();

  completarTarea() {
    this.tareaCompletada.emit();
  }
}
