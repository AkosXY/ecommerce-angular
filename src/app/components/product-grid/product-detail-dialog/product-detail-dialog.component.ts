import { Component, Inject } from '@angular/core';
import { Product } from 'src/app/interface/product.interface';
import { ProductGridComponent } from '../product-grid.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product-detail-dialog',
  templateUrl: './product-detail-dialog.component.html',
  styleUrls: ['./product-detail-dialog.component.css']
})
export class ProductDetailDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Product, private dialogRef: MatDialogRef<ProductGridComponent>) { }


  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  getProperty(obj: any, key: string): any {
    return obj[key as keyof Product];
  }
}
