import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TaskListComponentComponent } from './components/task-list-component/task-list-component.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Importa o módulo FontAwesome
import { faBook } from '@fortawesome/free-solid-svg-icons';  // Importa o ícone de livro
import { faSearch } from '@fortawesome/free-solid-svg-icons';  // Importa o ícone de livro
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons';  // Importa o ícone de task
import { faChartLine } from '@fortawesome/free-solid-svg-icons';  // Importa o ícone de Dashboard
import { faTableColumns } from '@fortawesome/free-solid-svg-icons';  // Importa o ícone de banco de dados
import { faDatabase } from '@fortawesome/free-solid-svg-icons';  // Importa o ícone de board
import { faGear } from '@fortawesome/free-solid-svg-icons';  // Importa o ícone de config

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, TaskListComponentComponent, FontAwesomeModule, AnalyticsComponent, DashboardComponent, SettingsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title:string = 'toDoList';
  blocoAdicionarTarefa: boolean = false
  faBook = faBook
  faDatabase=faDatabase
  faGear=faGear
  faTableColumns=faTableColumns
  faBarsProgress=faBarsProgress
  faChartLine=faChartLine
  faSearch = faSearch
  page:string = ""


  constructor(){
   
  }
  alterarPage(value: any) {
    this.page = value; // Atualiza o valor recebido
  }

}
