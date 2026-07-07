import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

/*La classe ci-dessous est une copie du fonctionnement de ngClass le but est de montrer comment écrire une directive personnalisée */
@Directive({
  selector: '[appClass]',
})
export class Class {

  constructor(private element: ElementRef, private renderer: Renderer2) {

   }

   @Input('appClass') set display(value: Object)
   {
        Object.entries(value).forEach(([key, value]) => {
            if(value)
            {
                this.renderer.addClass(this.element.nativeElement, key);
            }
            else
            {
                this.renderer.removeClass(this.element.nativeElement, key);
            }
        });
   }

}
