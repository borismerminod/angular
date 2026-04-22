import { Component, Input } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductListComponent } from '../product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { SetBackground } from '../../CustomDirectives/SetBackground.directive';
import { AppHoverDirective } from '../../CustomDirectives/app-hover.directive';
import { DisableProductDirective } from '../../CustomDirectives/disable-product.directive';



@Component({
  selector: 'product-detail',
  imports: [CommonModule, SetBackground, AppHoverDirective, DisableProductDirective],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product: Product

  @Input()
  productListComp : ProductListComponent = undefined

  //Appelé quand toutes les propriété de la classe sont initialisées
  ngOnInit()
  {
    this.product = this.productListComp.selectedProduct
  }
}
