import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; //Needed for two way data binding

@Component({
  selector: 'app-search',
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText : string = 'Mens wear'

  @Output()
  searchTextChanged : EventEmitter<string> = new EventEmitter<string>()

  onSearchTextChanged()
  {
    this.searchTextChanged.emit(this.searchText)
  }



}
