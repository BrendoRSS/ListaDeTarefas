import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Importa o módulo FontAwesome
import { faPen } from '@fortawesome/free-solid-svg-icons'; // Importa o ícone
import { faTrash } from '@fortawesome/free-solid-svg-icons';  // Importa o ícone de lixeira
import { faSearch } from '@fortawesome/free-solid-svg-icons';  // Importa o ícone de lixeira

@Component({
  selector: 'app-task-list-component',
  imports: [FontAwesomeModule ],
  templateUrl: './task-list-component.component.html',
  styleUrl: './task-list-component.component.scss'
})
export class TaskListComponentComponent {
  faPen = faPen;  // Ícone de lápis
  faTrash = faTrash // Ícone de lixeira
  faSearch = faSearch // Ícone de pesquisa
}
