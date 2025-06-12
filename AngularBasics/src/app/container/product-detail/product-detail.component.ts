import { Component, Input } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductListComponent } from '../product-list/product-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-detail',
  imports: [CommonModule],
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
