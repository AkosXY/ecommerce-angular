import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/interface/product.interface';
import { ProductDetailDialogComponent } from '../product-detail-dialog/product-detail-dialog.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: Product | undefined;

  constructor(private dialog: MatDialog){}

  ngOnInit() {
    console.log('Received product data:', this.product);
  }


  openDetailDialog(product:any) {
    console.log('Open detail dialog');
    const dialogRef = this.dialog.open(ProductDetailDialogComponent, {
      data: product
    });
    console.log(product);
  }

  handleButtonClick(event: Event, product:any) {
    event.stopPropagation();
    
    console.log('Button clicked');
    console.log(product);
  }


}
