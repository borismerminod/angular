import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../Models/Product';
import { HighlightDirective } from '../../../CustomDirectives/highlight.directive';
import { DisableProductDirective } from '../../../CustomDirectives/disable-product.directive';

@Component({
  selector: 'app-product',
  imports: [CommonModule, HighlightDirective, DisableProductDirective],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input()
  product : Product

  @Input()
  index: number
}
