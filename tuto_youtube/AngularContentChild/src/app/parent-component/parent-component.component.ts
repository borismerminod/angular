import { Component, ViewChild,  ElementRef} from '@angular/core';
import { ChildComponentComponent } from './child-component/child-component.component';
import { TestComponentComponent } from '../test-component/test-component.component';

@Component({
  selector: 'parent-component',
  imports: [ChildComponentComponent, TestComponentComponent],
  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.css'
})
export class ParentComponentComponent {
  
  @ViewChild('param') paragraphEl: ElementRef

  ShowParagraphValue()
  {
    console.log(this.paragraphEl.nativeElement)
  }
}
