import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  product = {
    name:'iPhone X',
    price: 999,
    color: 'Red',
    discount: 8.5,
    inStock: 5
  }

  getDiscountedPrice()
  {
    return this.product.price - (this.product.price * this.product.discount / 100)
  }
  

}
