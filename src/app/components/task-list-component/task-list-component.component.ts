import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Importa o módulo FontAwesome
import { faPen } from '@fortawesome/free-solid-svg-icons'; // Importa o ícone

import { faSearch } from '@fortawesome/free-solid-svg-icons';  // Importa o ícone de pesquisa
import { faPlus } from '@fortawesome/free-solid-svg-icons';  // Importa o ícone de add
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';  // Importa o ícone de add
import { faFilter } from '@fortawesome/free-solid-svg-icons';  // Importa o ícone de filtro
import { faBell } from '@fortawesome/free-solid-svg-icons';  // Importa o ícone de sino
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';  // Importa o ícone de interrogação
import { CardTarefaComponent } from '../card-tarefa/card-tarefa.component';

@Component({
  selector: 'app-task-list-component',
  imports: [FontAwesomeModule, CardTarefaComponent ],
  templateUrl: './task-list-component.component.html',
  styleUrl: './task-list-component.component.scss'
})
export class TaskListComponentComponent {
  faPen=faPen
  faSearch = faSearch // Ícone de pesquisa
  faPlus = faPlus // Ícone de add
  faEllipsis = faEllipsis // Ícone de 3 pontos
  faFilter = faFilter // Ícone de filtro
  faBell = faBell // Ícone de sino
  faCircleQuestion = faCircleQuestion //ícone de interrogação
}
