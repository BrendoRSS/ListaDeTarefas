import { Component } from '@angular/core';
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
}
