import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Product } from 'src/app/interface/product.interface';
import { ProductService } from 'src/app/serivces/product.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent {

  productData: any
  productRecomendation: any
  productList: any

  selectedPageSize: number = 10;
  currentPage: number = 1;
  pageCount: number = 1;
  searchTerm: string = "";

  constructor(private productService: ProductService) {
    this.getProductData()
    this.getProductRecomendation()
  }

  searchForm = new FormGroup({
    seachInputForm: new FormControl(''),
  })


  search() {
    this.searchTerm = this.seachInputForm?.value || ''
    this.currentPage = 1
    this.getProductData()
  }


  pages: any[] = [
    { value: 10 },
    { value: 15 },
    { value: 20 },
  ];

  pageSizeChanged() {
    this.currentPage = 1
    this.getProductData()
  }

  pageLeft() {
    if (!this.leftDisabled()) {
      this.currentPage--
      this.getProductData()
    }
  }

  leftDisabled() {
    return this.currentPage === 1
  }

  pageRight() {
    if (!this.rightDisabled()) {
      this.currentPage++
      this.getProductData()
    }
  }

  rightDisabled() {
    return this.currentPage === this.pageCount
  }

  getProductData() {
    this.productData = false
    this.productService.getProducts(this.selectedPageSize, this.currentPage, this.searchTerm).subscribe((resp) => {
      this.productData = resp
      this.pageCount = resp.pageCount
    })
  }

  getProductRecomendation() {
    this.productService.getRecomendation().subscribe((resp) => {
      this.productRecomendation = resp.filter((item: any) => item !== null).slice(0, 4);
    })
  }

  get seachInputForm() {
    return this.searchForm.get('seachInputForm');
  }


}
