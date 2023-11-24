import { Component } from '@angular/core';
import { Product } from 'src/app/interface/product.interface';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent {

  constructor() {
    console.log(this.CONST_DATA);
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


  
  CONST_DATA:Product[] = [
    this.PRODUCT, this.PRODUCT, this.PRODUCT, this.PRODUCT, this.PRODUCT, this.PRODUCT,
    this.PRODUCT, this.PRODUCT, this.PRODUCT, this.PRODUCT, this.PRODUCT, this.PRODUCT

  ]

  CONST_RECOMENDATION:Product[] = [
    this.PRODUCT, this.PRODUCT, this.PRODUCT, this.PRODUCT
  ]

}
