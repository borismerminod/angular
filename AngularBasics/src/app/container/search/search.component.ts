import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; //Needed for two way data binding

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText : string = 'Mens wear'
}
