import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/interface/product.interface';
import { ProductDetailDialogComponent } from '../product-detail-dialog/product-detail-dialog.component';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductService } from 'src/app/serivces/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: Product | undefined;
  @Input() display: string | undefined;

  constructor(private dialog: MatDialog){
  }

  ngOnInit() {

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

  isRow(){
    return this.display?.toString() === "row"
  }

  parse(url:any){
    return JSON.parse(url)
  }

}
