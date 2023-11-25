import { Component, Inject } from '@angular/core';
import { Product } from 'src/app/interface/product.interface';
import { ProductGridComponent } from '../../product-grid/product-grid.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CartService } from 'src/app/serivces/cart.service';

@Component({
  selector: 'app-product-detail-dialog',
  templateUrl: './product-detail-dialog.component.html',
  styleUrls: ['./product-detail-dialog.component.css']
})
export class ProductDetailDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Product, private dialogRef: MatDialogRef<ProductGridComponent>, private cartService: CartService) { }


  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  getProperty(obj: any, key: string): any {
    return obj[key as keyof Product];
  }

  addItemToCart() {
    this.cartService.addToCart(this.data)
  }

  parse(text: any) {
    return JSON.parse(text)
  }

  parseList(text: any) { //TODO
    console.log(JSON.parse(text))
    return JSON.parse(text)
  }

}
