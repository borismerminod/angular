import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { CommonModule} from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  imports: [SearchComponent, CommonModule, ProductListComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  name: string = "John Doe"
  addToCart : number = 0
  className: string = "product-list"
  listOfString:string[] = ["Mark", "Steve", "Marry", "John", "Sara"]
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
