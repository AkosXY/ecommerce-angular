import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Product } from 'src/app/interface/product.interface';
import { AuthenticationService } from 'src/app/serivces/authentication.service';
import { CartService } from 'src/app/serivces/cart.service';
import { ProductService } from 'src/app/serivces/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  productData: any
  productRecomendation: any
  productList: any

  cartItems: any[] = [];


  shippingDataForm = new FormGroup({
    addressForm: new FormControl(''),
    billingAddressForm: new FormControl(''),
    nameForm: new FormControl(''),
    phoneForm: new FormControl(''),
    emailForm: new FormControl('')
  })

  constructor(private productService: ProductService, private cartService: CartService, private authService: AuthenticationService) {
    this.getProducts()
    this.getProductRecomendation()
    this.cartItems = this.cartService.getCartItems();

  }


  ngOnInit() {
    this.cartService.cartUpdated.subscribe(() => {
      console.log(this.cartService.getCartItemsForRecomendation())
    });
  }


  getProductRecomendation() {
    this.productService.getCartRecomendation(this.cartService.getCartItemsForRecomendation()).subscribe((resp) => {
      this.productRecomendation = resp.filter((item: any) => item !== null).slice(0, 4);
      console.log(this.productRecomendation)
    })
  }

  getAuthenticated() {
    return this.authService.getAuthenticated()
  }

  getProducts() {
    this.productService.getProducts().subscribe((resp) => {
      this.productData = resp
    })
  }

  getTotal() {
    return this.cartService.getTotalPrice()
  }

  comfirmPurchase() {
    this.cartService.emptyCart()
    this.cartItems.forEach((product) => {
      this.productService.placeOrder(product).subscribe()
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


}
