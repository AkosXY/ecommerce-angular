import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  shippingDataForm = new FormGroup({
    addressForm: new FormControl(''),
    billingAddressForm: new FormControl(''),
    nameForm: new FormControl(''),
    phoneForm: new FormControl(''),
    emailForm: new FormControl('')
  })


  constructor() {}

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




}
