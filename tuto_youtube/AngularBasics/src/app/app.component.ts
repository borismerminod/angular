import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { SetBackground } from "./CustomDirectives/SetBackground.directive";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, TopHeaderComponent, ContainerComponent, SetBackground],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Basics Tutorial';
  message = 'My first angular app tutorial'
}
