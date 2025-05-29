import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'product-list',
  imports: [SearchComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  name: string = "John Doe"
  addToCart : number = 0
  className: string = "product-list"
  product = {
    image: 'smartphone.jpeg',
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

  onNameChange(event: any)
  {
    //this.name = event.target.value
  }

  incrementCartValue()
  {
    if(this.addToCart < this.product.inStock)
    {
      this.addToCart++
    }
  }

  decrementCartValue()
  {
    this.addToCart--
    if(this.addToCart < 0)
    {
      this.addToCart = 0
    }
  }
  

}
