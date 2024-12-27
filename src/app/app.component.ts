import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TaskListComponentComponent } from './components/task-list-component/task-list-component.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Importa o módulo FontAwesome
import { faBook } from '@fortawesome/free-solid-svg-icons';  // Importa o ícone de livro
import { faSearch } from '@fortawesome/free-solid-svg-icons';  // Importa o ícone de livro
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, TaskListComponentComponent, FontAwesomeModule,MenuLateralComponent, AnalyticsComponent, DashboardComponent, SettingsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title:string = 'toDoList';
  blocoAdicionarTarefa: boolean = false
  faBook = faBook
  faSearch = faSearch
  page = "Board"

  constructor(){
  }
  adicionar(){
    this.blocoAdicionarTarefa = false
  }

}
