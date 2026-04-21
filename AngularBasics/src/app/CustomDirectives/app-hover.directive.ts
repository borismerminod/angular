import { Directive, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class AppHoverDirective {

  //HostBinding est utilisé pour lier une propriété d'une directive à une propriété d'un élément hôte.
  @HostBinding('style.backgroundColor') backgroundColor: string = '#28282B'
  @HostBinding('style.border') border: string = 'none'
  @HostBinding('style.color') textColor: string = 'white'

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') OnMouseEnter()
  {
    this.backgroundColor = 'white'
    this.textColor = '#28282B'
    this.border = '#28282B 3px solid'
  }

  @HostListener('mouseout') OnMouseExit()
  {
    this.backgroundColor = '#28282B'
    this.textColor = 'white'
    this.border = 'none'
  }

}
