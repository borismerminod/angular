import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  //Le HostListener permet d'écouter les événements sur l'élément HTML sur lequel la directive est appliquée, 
  // ici on écoute les événements mouseenter et mouseleave pour ajouter ou supprimer une classe CSS qui va appliquer un effet de surbrillance sur le produit
  @HostListener('mouseenter') OnMouseEnter() {
    this.renderer.addClass(this.element.nativeElement, 'hightlight-product')
  }

  @HostListener('mouseleave') OnMouseOut() {
    this.renderer.removeClass(this.element.nativeElement, 'hightlight-product')
  }

}
