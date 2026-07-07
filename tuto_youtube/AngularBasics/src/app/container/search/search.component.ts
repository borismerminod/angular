import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
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

  //Attention : cette directive retourne une référence vers le premier élement qui utilise la référence searchInput
  // plus de détail  notamment sur read et static : https://angular.fr/components/view-child 
  @ViewChild("searchInput")
  searchInputElt : ElementRef

  onSearchTextChanged()
  {
    
  }

  setSearchText()
  {
    this.searchText = this.searchInputElt.nativeElement.value
    this.searchTextChanged.emit(this.searchText)
  }



}
