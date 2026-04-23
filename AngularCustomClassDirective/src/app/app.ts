import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Class } from './CustomDirectives/class';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Class],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularCustomClassDirective');
}
