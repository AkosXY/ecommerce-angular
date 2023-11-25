import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interface/product.interface';
import { CartService } from 'src/app/serivces/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {

  @Input() product: Product | undefined;

  constructor(private cartService: CartService) {
  }

  parse(url: any) {
    return JSON.parse(url)
  }

  removeItem(product:any){
    this.cartService.removeFromCart(product);
    console.log(product)
  }

}
