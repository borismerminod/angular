import { Component , ElementRef, ViewChildren, QueryList} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularViewChildren';
  fullName: string = ''

  //Plus d'info : https://angular.fr/components/view-children
  //On ne peut pas l'utiliser dans un ngOnInit la référence est attachée quand on lance un événement qui va attacher la référence de l'élément (à l'appel de show) 
  @ViewChildren('inputElt') inputElements : QueryList<ElementRef>

  show()
  {
    let name = ''
    this.inputElements.forEach(e => {
      name += e.nativeElement.value + ' '
      console.log(e.nativeElement.value)
    })

    this.fullName = name.trim()
  }
}
