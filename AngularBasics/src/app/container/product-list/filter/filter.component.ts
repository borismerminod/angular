import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
  all: number = 0

   @Input()
  inStock : number = 0

   @Input()
  outOfStock : number = 0

  selectedFilterRadioButton : string = 'all'

  @Output()
  selectedFilterRadioButtonChanged : EventEmitter<string> = new EventEmitter<string>();

  onSelectedFilterRadioButtonChanged()
  {
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton)
  }
}
