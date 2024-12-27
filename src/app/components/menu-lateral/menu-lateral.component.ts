import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';  // Importa o ícone de Dashboard
import { faTableColumns } from '@fortawesome/free-solid-svg-icons';  // Importa o ícone de banco de dados
import { faDatabase } from '@fortawesome/free-solid-svg-icons';  // Importa o ícone de board
import {faGear } from '@fortawesome/free-solid-svg-icons';  // Importa o ícone de config
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons';  // Importa o ícone de task

@Component({
  selector: 'app-menu-lateral',
  imports: [FontAwesomeModule],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.scss'
})
export class MenuLateralComponent {
  faChartLine = faChartLine
  faDatabase = faDatabase
  faTableColumns = faTableColumns
  faGear = faGear
  faBarsProgress=faBarsProgress

  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
