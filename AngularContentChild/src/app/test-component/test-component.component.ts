import { Component } from '@angular/core';

@Component({
  selector: 'test-component',
  imports: [],
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.css'
})
export class TestComponentComponent {
  name: string = 'John smith'
}
