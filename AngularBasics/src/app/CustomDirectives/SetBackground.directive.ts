import { Directive, ElementRef, OnInit, Renderer2, Input } from "@angular/core";

@Directive({
    selector: '[setBackground]',
    standalone: true
})
export class SetBackground implements OnInit {

    /*@Input('setBackground') backColor: string = '#36454F'
    @Input() textColor: string = 'white'*/

    @Input('setBackground') changeTextAndBackColor : {backColor: string, textColor: string}

    //Permet de récupérer l'élément HTML sur lequel la directive est appliquée
    //En rajoutant private ou public devant le paramètre, on crée automatiquement une propriété de classe avec ce nom et on lui affecte la valeur du paramètre
    constructor(private element : ElementRef, private renderer : Renderer2) {
        //this.element = element
    }

    ngOnInit()
    {
        //De manière générale on évite de manipuler directement le DOM en Angular, on utilise plutôt le Renderer2 qui est une abstraction pour manipuler le DOM de manière sécurisée et compatible avec les différentes plateformes (comme les applications mobiles ou les applications server-side rendering)
        this.renderer.setStyle(this.element.nativeElement, 'background-color', this.changeTextAndBackColor.backColor)
        this.renderer.setStyle(this.element.nativeElement, 'color', this.changeTextAndBackColor.textColor)
        this.renderer.setAttribute(this.element.nativeElement, 'title', 'This is example title')
        
        /*this.element.nativeElement.style.backgroundColor = '#36454F';
        this.element.nativeElement.style.color = 'white'*/
    }

}