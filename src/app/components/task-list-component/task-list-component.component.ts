interface Task {
  title: string;
  description: string;
}
import { Component, OnInit } from '@angular/core';
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

export class TaskListComponentComponent implements OnInit {
  
  errorMessage: string = '';  // Adicione uma variável para armazenar a mensagem de erro
  faPen = faPen //// Ícone de caneta
  faSearch = faSearch // Ícone de pesquisa
  faPlus = faPlus // Ícone de add
  faEllipsis = faEllipsis // Ícone de 3 pontos
  faFilter = faFilter // Ícone de filtro
  faBell = faBell // Ícone de sino
  faCircleQuestion = faCircleQuestion //ícone de interrogação

  // Array com as tarefas
  tasks: any = {
    toDo: [] as Task[],
    inProgress: [] as Task[],
    done: [] as Task[],
  };

  // Função para buscar as tarefas no armazenamento local e mostrar na tela
  ngOnInit() {
    this.loadTasksFromLocalStorage();
  }
  constructor(){

  }

  // Função para adicionar um novo card
  addCard(stage:string){
    const title = prompt('Digite o título da nova tarefa:');
    const description = prompt('Digite a descrição da nova tarefa:');

    if (!title || !title.trim()){
      alert('A tarefa precisa de um título!!!');
      return; // Validação de título
    }
    if (!description || !description.trim()){
      alert('A tarefa precisa de uma descrição!!!');
      return; // Validação de descrição
    }

    // Verifica se já existe uma tarefa com o mesmo título no estágio
    const taskExists = this.tasks[stage].some((task: Task) => task.title.toLowerCase() === title.trim().toLowerCase());
    

    if (taskExists) {
      alert('Já existe uma tarefa com esse título. Tente outro título.');
      return; // Não adiciona a tarefa se o título já existir
    }
    
    //salvando os valores de título e descrição em um array para o LocalStorage
    const newTask: Task = {
      title: title.trim(),
      description: description.trim(),
    };
    
    this.tasks[stage].push(newTask);

    this.saveTasksToLocalStorage()
  }

  saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  loadTasksFromLocalStorage() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }
   // Função para excluir uma tarefa
   deleteTask(stage: string, title: string) {
    // Filtra a tarefa do estágio correto e a remove
    this.tasks[stage] = this.tasks[stage].filter((task: Task) => task.title !== title);
    this.saveTasksToLocalStorage();
  }

}
