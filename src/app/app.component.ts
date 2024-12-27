import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TaskListComponentComponent } from './components/task-list-component/task-list-component.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Importa o módulo FontAwesome
import { faBook } from '@fortawesome/free-solid-svg-icons';  // Importa o ícone de livro

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, TaskListComponentComponent, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title:string = 'toDoList';
  blocoAdicionarTarefa: boolean = false
  faBook = faBook

  constructor(){
  }
  adicionar(){
    this.blocoAdicionarTarefa = false
  }

}
