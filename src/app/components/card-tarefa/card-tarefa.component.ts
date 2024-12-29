import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Importa o módulo FontAwesome
import { faPen } from '@fortawesome/free-solid-svg-icons'; // Importa o ícone
import { faTrash } from '@fortawesome/free-solid-svg-icons';  // Importa o ícone de lixeira
@Component({
  selector: 'app-card-tarefa',
  imports: [FontAwesomeModule],
  templateUrl: './card-tarefa.component.html',
  styleUrl: './card-tarefa.component.scss'
})
export class CardTarefaComponent {
faPen = faPen;  // Ícone de lápis
faTrash = faTrash // Ícone de lixeira

@Input() title: string = '';
@Input() description: string = '';

// EventEmitter para emitir o título da tarefa a ser excluída
@Output() delete = new EventEmitter<string>();

// Função para emitir o título da tarefa para o componente pai
onDelete() {
  this.delete.emit(this.title);
}
}
