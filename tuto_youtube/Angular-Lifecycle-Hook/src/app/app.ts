import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Demo } from './demo/demo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Demo, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  toDestroy: boolean = false;
  protected readonly title = signal('Angular-Lifecycle-Hook');

  inputVal: string = '';
  //inputVal: string[] = ['Hello', 'Hi There'];

  constructor() {
    console.log('App constructor')
  }

  onBtnClicked(inputEl: HTMLInputElement) {
    //this.inputVal.push(inputEl.value);
      this.inputVal = inputEl.value;
    }

  destroyComponent() {
    this.toDestroy = !this.toDestroy;
  }

}
