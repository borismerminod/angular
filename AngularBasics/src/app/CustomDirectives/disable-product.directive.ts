import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[disableProduct]'
})
export class DisableProductDirective {


  //En utilisant un setter, on peut faire en sorte que la directive soit réactive à tout changement de la valeur de l'attribut disableProduct
  //Le setter permet de traiter l'attribut comme une méthode de mutation
  @Input() set disableProduct(disable: boolean)
  {
    if(disable)
    {
      this.renderer.addClass(this.element.nativeElement, 'disable-out-of-stock-product')
    }
  }

  constructor(private element: ElementRef, private renderer: Renderer2) { }

}
