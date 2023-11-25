import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interface/product.interface';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {

  @Input() product: Product | undefined;

  parse(url: any) {
    return JSON.parse(url)
  }

}
