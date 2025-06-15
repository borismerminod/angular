import { Component, ElementRef, ContentChild } from '@angular/core';
import { log } from 'console';
import { TestComponentComponent } from '../../test-component/test-component.component';

@Component({
  selector: 'child-component',
  imports: [],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css'
})
export class ChildComponentComponent {
  @ContentChild('param') paragraphEl : ElementRef
  @ContentChild(TestComponentComponent) testComponent: TestComponentComponent

  StyleParagraph()
  {
    console.log(this.paragraphEl.nativeElement)
    console.log(this.testComponent)
  }
}
