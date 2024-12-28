import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Importa o módulo FontAwesome
import { faBook } from '@fortawesome/free-solid-svg-icons';  // Importa o ícone de livro
import { faSearch } from '@fortawesome/free-solid-svg-icons';  // Importa o ícone de livro
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons';  // Importa o ícone de task
import { faChartLine } from '@fortawesome/free-solid-svg-icons';  // Importa o ícone de Dashboard
import { faTableColumns } from '@fortawesome/free-solid-svg-icons';  // Importa o ícone de banco de dados
import { faDatabase } from '@fortawesome/free-solid-svg-icons';  // Importa o ícone de board
import { faGear } from '@fortawesome/free-solid-svg-icons';  // Importa o ícone de config

@Component({
  selector: 'app-home',
  imports: [FontAwesomeModule, CommonModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  blocoAdicionarTarefa: boolean = false
  faBook = faBook
  faDatabase=faDatabase
  faGear=faGear
  faTableColumns=faTableColumns
  faBarsProgress=faBarsProgress
  faChartLine=faChartLine
  faSearch = faSearch
  page:string = ""
  
}
