import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Product } from 'src/app/interface/product.interface';
import { ProductService } from 'src/app/serivces/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  productData:any
  productList:any


  shippingDataForm = new FormGroup({
    addressForm: new FormControl(''),
    billingAddressForm: new FormControl(''),
    nameForm: new FormControl(''),
    phoneForm: new FormControl(''),
    emailForm: new FormControl('')
  })

  constructor(private productService: ProductService) {
    this.getProducts()

  }


  getProducts(){
    this.productService.getProducts().subscribe((resp) => {
      console.log(resp)
      this.productData = resp
    })
  }


  get addressForm() {
    return this.shippingDataForm.get('addressForm');
  }

  get billingAddressForm() {
    return this.shippingDataForm.get('billingAddressForm');
  }

  get nameForm() {
    return this.shippingDataForm.get('nameForm');
  }
  
  get phoneForm() {
    return this.shippingDataForm.get('phoneForm');
  }

  get emailForm() {
    return this.shippingDataForm.get('emailForm');
  }

  PRODUCT:Product = {
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
    "imageURLHighRes": [
      "https://images-na.ssl-images-amazon.com/images/I/411uoWa89KL.jpg"
    ]
  }


  
  CONST_RECOMENDATION:Product[] = [
    this.PRODUCT, this.PRODUCT, this.PRODUCT, this.PRODUCT
  ]


  CONST_CART:Product[] = [
    this.PRODUCT, this.PRODUCT
  ]
  


}
