import { Component } from '@angular/core';
import { Product } from 'src/app/interface/product.interface';
import { CartService } from 'src/app/serivces/cart.service';
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

  selectedPageSize: number = 14;
  currentPage: number = 1;
  pageCount: number = 1;

  constructor(private productService: ProductService) {
    this.getProductData()
    this.getProductRecomendation()

  }

  pages: any[] = [
    { value: 14 },
    { value: 21 },
    { value: 28 },
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
    this.productService.getProducts(this.selectedPageSize, this.currentPage).subscribe((resp) => {
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


  PRODUCT: Product = {
    "category": [
      "Electronics",
      "Camera & Photo",
      "Video Surveillance",
      "Surveillance Systems",
      "Surveillance DVR Kits"
    ],
    "description": [
      "The following camera brands and models have been tested for compatibility with GV-Software.",
      "GeoVision \tACTi \tArecont Vision \tAXIS \tBosch \tCanon",
      "CNB \tD-Link \tEtroVision \tHikVision \tHUNT \tIQEye",
      "JVC \tLG \tMOBOTIX \tPanasonic \tPelco \tSamsung",
      "Sanyo \tSony \tUDP \tVerint \tVIVOTEK \t \n \nCompatible Standard and Protocol",
      "GV-System also allows for integration with all other IP video devices compatible with ONVIF(V2.0), PSIA (V1.1) standards, or RTSP protocol.",
      "ONVIF \tPSIA \tRTSP \t  \t  \t \nNote: Specifications are subject to change without notice. Every effort has been made to ensure that the information on this Web site is accurate. No liability is assumed for incidental or consequential damages arising from the use of the information or products contained herein."
    ],
    "title": "Genuine Geovision 1 Channel 3rd Party NVR IP Software with USB Dongle Onvif PSIA",
    "also_buy": [],
    "brand": "GeoVision",
    "feature": [
      "Genuine Geovision 1 Channel NVR IP Software",
      "Support 3rd Party IP Camera",
      "USB Dongle"
    ],
    "also_view": [],
    "main_cat": "Camera & Photo",
    "date": "January 28, 2014",
    "price": "$65.00",
    "asin": "0011300000",
    "imageURL": [
      "https://images-na.ssl-images-amazon.com/images/I/411uoWa89KL._SS40_.jpg"
    ],
    "image_URL_High_Res": [
      "https://images-na.ssl-images-amazon.com/images/I/411uoWa89KL.jpg"
    ]
  }



  CONST_DATA: Product[] = [
    this.PRODUCT, this.PRODUCT, this.PRODUCT, this.PRODUCT, this.PRODUCT, this.PRODUCT,
    this.PRODUCT, this.PRODUCT, this.PRODUCT, this.PRODUCT, this.PRODUCT, this.PRODUCT

  ]

  CONST_RECOMENDATION: Product[] = [
    this.PRODUCT, this.PRODUCT, this.PRODUCT, this.PRODUCT
  ]

}
