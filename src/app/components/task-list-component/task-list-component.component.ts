import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Importa o módulo FontAwesome
import { faPen, faSearch, faPlus, faEllipsis, faFilter, faBell, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'; // Importa ícones
import { CardTarefaComponent } from '../card-tarefa/card-tarefa.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list-component',
  imports: [FontAwesomeModule, CardTarefaComponent, CommonModule ],
  templateUrl: './task-list-component.component.html',
  styleUrl: './task-list-component.component.scss'
})
export class TaskListComponentComponent {
  faPen = faPen
  faSearch = faSearch // Ícone de pesquisa
  faPlus = faPlus // Ícone de add
  faEllipsis = faEllipsis // Ícone de 3 pontos
  faFilter = faFilter // Ícone de filtro
  faBell = faBell // Ícone de sino
  faCircleQuestion = faCircleQuestion //ícone de interrogação
  popUp:boolean = true // Variável para abrir popUp

  tasks: any = {
    toDo: [] as { title: string; description: string }[],
    inProgress: [] as { title: string; description: string }[],
    done: [] as { title: string; description: string }[],
  };

  addCard(stage:string){
    const title = prompt('Digite o título da nova tarefa:');
    if (!title || !title.trim()) return; // Validação de título

    const description = prompt('Digite a descrição da nova tarefa:');

    if (!description || !description.trim()) return; // Validação de descrição

    this.tasks[stage].push({ 
      title: title.trim(), 
      description: description.trim() });
  }

  togglePopUp() {
    this.popUp = !this.popUp;
}
}
