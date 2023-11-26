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
    console.log("changed")
    this.currentPage = 1
    this.getProductData()
  }

  pageLeft() {
    console.log(this.currentPage)

    if (!this.leftDisabled()) {
      this.currentPage--
      this.getProductData()
    }
  }

  leftDisabled() {
    return this.currentPage === 1
  }

  pageRight() {
    console.log(this.currentPage)
    if (!this.rightDisabled()) {
      this.currentPage++
      this.getProductData()
    }
  }

  rightDisabled() {
    return this.currentPage === this.pageCount
  }

  getProductData() {
    console.log("getter")
    this.productData = false
    this.productService.getProducts(this.selectedPageSize, this.currentPage, this.searchTerm).subscribe((resp) => {
      console.log(resp)
      this.productData = resp
      this.pageCount = resp.pageCount
    })
  }

  getProductRecomendation() {
    this.productService.getProducts(4, 10).subscribe((resp) => {
      this.productRecomendation = resp
    })
  }

  get seachInputForm() {
    return this.searchForm.get('seachInputForm');
  }


}
