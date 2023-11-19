import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interface/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: Product | undefined;

  ngOnInit() {
    console.log('Received product data:', this.product);
  }


}
