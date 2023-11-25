import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/interface/product.interface';
import { ProductDetailDialogComponent } from '../product-detail-dialog/product-detail-dialog.component';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductService } from 'src/app/serivces/product.service';
import { CartService } from 'src/app/serivces/cart.service';
import { retry } from 'rxjs';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: Product | undefined;
  @Input() display: string | undefined;

  defaultLogo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2HT8xKgK--TM7RTZii1ajWH4GWmLMwGeThg&usqp=CAU"

  constructor(private dialog: MatDialog, private cartService: CartService) {
  }

  ngOnInit() {

  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  openDetailDialog(product: any) {
    console.log('Open detail dialog');
    const dialogRef = this.dialog.open(ProductDetailDialogComponent, {
      data: product
    });
    console.log(product);
  }

  handleButtonClick(event: Event, product: any) {
    event.stopPropagation();

    console.log('Button clicked');

    this.addToCart(product)

  }

  isRow() {
    return this.display?.toString() === "row"
  }

  parse(url: any) {
    return url !== "[]" ? JSON.parse(url) : this.defaultLogo;
  }

}
