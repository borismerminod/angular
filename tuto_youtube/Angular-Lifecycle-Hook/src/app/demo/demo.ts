
import { CommonModule } from '@angular/common';
import { 
  Component, 
  Input,
  OnChanges, 
  SimpleChanges, 
  OnInit, 
  ViewChild, 
  ElementRef, 
  DoCheck, 
  AfterContentInit, 
  ContentChild, 
  AfterContentChecked, 
  AfterViewInit,  
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-demo',
  imports: [CommonModule],
  templateUrl: './demo.html',
  styleUrl: './demo.css',
})
export class Demo implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  title:string = 'Demo Component'

  //On change ne sera pas appelé à l'ajout d'une nouvelle valeur dans le tableau, mais seulement si on réaffecte une nouvelle référence à la variable message
  //Exemple : this.message = [...this.message, 'New Message']
  //@Input() message: string[];
  @Input() message: string;
  @ViewChild('temp') tempParam: ElementRef;
  @ContentChild('temp') paramContent: ElementRef

  constructor() {
    console.log('Demo constructor')
    console.log(this.title)
    this.message= ''
    this.tempParam = new ElementRef(null)
    this.paramContent = new ElementRef(null)
  }

  //Appelé à chaque changement d'une valeur d'input du composant
  //ngOnChanges() {
  ngOnChanges(changes: SimpleChanges) {
    console.log('Demo ngOnChanges')
    console.log(this.title)
    console.log(this.message)

    //Contient la valeur précédente et la nouvelle valeur de l'input
    console.log(changes)
  }


  //Appelé une seule fois après le premier ngOnChanges
  ngOnInit() {
    console.log('Demo ngOnInit')
    console.log(this.title)
    console.log(this.message)

    //Une erreur car les propriétés ViewChild ne sont pas encore initialisées et non rendues
    //console.log(this.tempParam.nativeElement.innerHTML)
  }

  //Appelé à chaque cycle de détection de changement, même si aucune valeur d'input n'a changé
  //Permet de créer son propre système de détection de changement
  ngDoCheck() {
    console.log('Demo ngDoCheck')
    console.log(this.title)
    console.log(this.message)
    console.log(this.paramContent)

  }

  //Appelé une seule fois après le rendu du composant et de ses propriétés ViewChild et ContentChild
  //Disponible pour les composants mais pas pour les directives
  ngAfterContentInit(){
    console.log('Demo ngAfterContentInit')
    console.log(this.paramContent.nativeElement.innerText)
  }

  //Appelé à chaque cycle de détection de changement après le rendu du composant et de ses propriétés ViewChild et ContentChild
  //La fonction fonctionne un peu comme ngDoCheck mais après le rendu du composant et de ses propriétés ViewChild et ContentChild
  //Disponible pour les composants mais pas pour les directives
  ngAfterContentChecked(){
    console.log('Demo ngAfterContentChecked', this.paramContent.nativeElement)
    console.log(this.tempParam)
  }

  //Appelé une seule fois après le rendu du composant des view template du composants et des view template des enfants du composant
  //Disponible pour les composants mais pas pour les directives
  ngAfterViewInit() {
    console.log('Demo ngAfterViewInit')
    console.log(this.tempParam)
  }

  //Appelé à chaque cycle de détection de changement après le rendu du composant des view template du composant et des view template des enfants du composant
  //La fonction est appelée même si aucune valeur d'input n'a changé, il suffit de la levée d'un évenement pour la déclencher
  //Disponible pour les composants mais pas pour les directives
  ngAfterViewChecked() {
    console.log('Demo ngAfterViewChecked')
    console.log(this.tempParam.nativeElement)
  }

  //Appelé juste avant la destruction du composant, permet de faire du nettoyage (unsubscribe, etc...)
  //Plus précisément quand le composant est retiré du DOM
  //Endroit pour faire du nettoyage (unsubscribe, etc...)
  ngOnDestroy() {
    console.log('Demo ngOnDestroy')
  }

}
