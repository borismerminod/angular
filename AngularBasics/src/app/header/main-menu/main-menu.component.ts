import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'main-menu',
  imports: [CommonModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {
  mainMenuItems : string[] = ['Home page', 'Products', 'Sale', 'New arrival', 'Contact', 'Services']
}
